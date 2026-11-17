import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import vm from 'node:vm';
import { BufferGeometry, Float32BufferAttribute, LessEqualDepth, MeshBasicMaterial, PerspectiveCamera, Texture, Vector3 } from 'three';

test('surface-point framing keeps its existing zoom on narrow screens', () => {
  const source = readFileSync(new URL('./globe.js', import.meta.url), 'utf8');
  const start = source.indexOf('  function frameDirection(');
  const end = source.indexOf('\n  function home(', start);
  const camera = new PerspectiveCamera(40, 0.5, 0.01, 2000);
  const context = vm.createContext({ camera, Vector3, anchor: {}, controls: { maxDistance: 60, target: new Vector3(), update() {} } });
  vm.runInContext(source.slice(start, end) + '\nframeDirection(new Vector3(0, 0, 1));', context);
  assert.ok(Math.abs(camera.position.length() - 3.6) < 1e-12);
});

for (const aspect of [0.5, 1, 2]) {
  test(`home fits Molniya's sampled orbit even at perigee, aspect ${aspect}`, () => {
    const source = readFileSync(new URL('./globe.js', import.meta.url), 'utf8');
    const start = source.indexOf('  function frameDirection(');
    const end = source.indexOf('\n  function setFollowing(', start);
    const perigee = 1.266, apogee = 7.061;
    const a = (perigee + apogee) / 2;
    const c = (apogee - perigee) / 2;
    const b = Math.sqrt(a * a - c * c);
    const points = Array.from({ length: 129 }, (_, i) => {
      const angle = i * Math.PI / 64;
      return new Vector3(a * Math.cos(angle) - c, b * Math.sin(angle), 0);
    });
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(points.flatMap((p) => p.toArray()), 3));
    const camera = new PerspectiveCamera(40, aspect, 0.01, 2000);
    const controls = { maxDistance: 60, target: new Vector3(), update() { camera.lookAt(this.target); camera.updateMatrixWorld(); } };
    const context = vm.createContext({
      camera, controls, Vector3, anchor: {}, selected: '7780',
      bodies: new Map([['7780', { marker: { position: points[0] }, line: { geometry } }]]),
    });
    vm.runInContext(source.slice(start, end) + '\nhome();', context);
    assert.equal(context.anchor, null);
    for (const point of points) {
      const screen = point.clone().project(camera);
      assert.ok(Math.abs(screen.x) < 1 && Math.abs(screen.y) < 1 && Math.abs(screen.z) < 1, `point stays in frustum: ${screen.toArray()}`);
    }
    geometry.dispose();
  });
}

test('image decoding retains the headers from its own GET and revokes its object URL', async () => {
  const source = readFileSync(new URL('./globe.js', import.meta.url), 'utf8');
  const start = source.indexOf('  async function loadImage(');
  const end = source.indexOf('\n  // Feathers', start);
  const revoked = [];
  const context = vm.createContext({
    fetch: async (url) => {
      assert.equal(url, '/api/v1/imagery?layer=true-color');
      return { ok: true, blob: async () => 'bytes from November 12', headers: { get: (name) => ({ 'X-Khonsu-Picture-Date': '2026-11-12', 'X-Khonsu-Fetched-At': '2026-11-14T12:00:00Z', 'X-Khonsu-Stale': 'true' })[name] } };
    },
    URL: { createObjectURL: (blob) => { assert.equal(blob, 'bytes from November 12'); return 'blob:decoded'; }, revokeObjectURL: (url) => revoked.push(url) },
    Image: class { set src(url) { assert.equal(url, 'blob:decoded'); this.onload(); } },
  });
  vm.runInContext(source.slice(start, end) + '\nresult = loadImage("/api/v1/imagery?layer=true-color");', context);
  const image = await context.result;
  assert.deepEqual(JSON.parse(JSON.stringify(image.imageryMeta)), { pictureDate: '2026-11-12', fetchedAt: '2026-11-14T12:00:00Z', stale: true });
  assert.deepEqual(revoked, ['blob:decoded']);
});

test('a reused texture returns its original metadata instead of refreshing its date', async () => {
  const source = readFileSync(new URL('./globe.js', import.meta.url), 'utf8');
  const start = source.indexOf('  function setLayers(');
  const end = source.indexOf('\n  // The rings', start);
  const meta = { pictureDate: '2026-11-12', fetchedAt: '2026-11-14T12:00:00Z', stale: false };
  const context = vm.createContext({ layerRequest: 1, imageryStack: [{ id: 'daily', url: '/image', transparent: false, status: Promise.resolve('ok'), meta }],
    startLayer() { throw new Error('reused texture must not be refetched'); }, disposeLayer() {}, restackLayers() {} });
  vm.runInContext(source.slice(start, end) + '\nresult = setLayers([{id:"daily",url:"/image",transparent:false}]);', context);
  const result = await context.result;
  assert.equal(result.daily.status, 'ok');
  assert.equal(result.daily.meta, meta);
});

test('actual imagery construction uses unlit, untone-mapped provider colours and preserves depth ordering', async () => {
  const source = readFileSync(new URL('./globe.js', import.meta.url), 'utf8');
  const start = source.indexOf('  function startLayer(');
  const end = source.indexOf('\n  // Sets the picture stack', start);
  const texture = new Texture();
  const meshes = [];
  const context = vm.createContext({
    MeshBasicMaterial, LessEqualDepth, layerRequest: 1, PATCH_RADIUS: 1.001,
    layerTexture: async () => texture,
    layerGeometry: (box) => ({ box }),
    Mesh: class { constructor(geometry, material) { this.geometry = geometry; this.material = material; this.scale = { setScalar: (value) => { this.radius = value; } }; } },
    earth: { add: (mesh) => meshes.push(mesh) }, restackLayers() {},
  });
  vm.runInContext(source.slice(start, end) + '\nresult = startLayer({id:"temp",url:"/image",transparent:true,box:{minLat:0}},1);', context);
  assert.equal(await context.result.status, 'ok');
  const { material } = meshes[0];
  assert.equal(material.isMeshBasicMaterial, true, 'light-independent material, not Phong');
  assert.equal(material.toneMapped, false);
  assert.equal(material.color.getHex(), 0xffffff, 'no colour tint');
  assert.equal(material.opacity, 1);
  assert.equal(material.map, texture);
  assert.equal(material.depthWrite, false);
  assert.equal(material.depthFunc, LessEqualDepth);
  assert.equal(meshes[0].radius, 1.001);
  material.dispose();
  texture.dispose();
});
