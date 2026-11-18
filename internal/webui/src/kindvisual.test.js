import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { createKindVisual, kindDiagram, kindPictureURL, VISUAL_KINDS } from './kindvisual.js';

const raw = JSON.parse(readFileSync(new URL('../../knowledge/knowledge.json', import.meta.url), 'utf8'));
const resolve = (s) => ({ ...s, sources: s.sources.map((key) => raw.sources[key]) });
const kinds = raw.kinds.map((kind) => ({ ...kind, visual: { ...kind.visual, capture: resolve(kind.visual.capture), example: resolve(kind.visual.example), observation: kind.visual.observation && resolve(kind.visual.observation) } }));
const kind = kinds.find((k) => k.id === 'visible');
const layer = { id: 'story-true-color', name: 'Terra true colour', story: true, credit: 'NASA GIBS' };

function setup(info = { liveData: true, layers: [layer] }, subject = kind) {
  const requests = [];
  function element(tag, className = '', text = '') {
    return { tag, className, textContent: text, children: [], listeners: {}, hidden: false, attributes: {},
      append(...children) { this.children.push(...children); },
      replaceChildren(...children) { this.children = children; },
      setAttribute(name, value) { this.attributes[name] = value; },
      addEventListener(name, callback) { this.listeners[name] = callback; },
      set src(value) { this.url = value; if (tag === 'img') requests.push(value); },
      get src() { return this.url; },
    };
  }
  const visual = createKindVisual({ element, kind: subject, catalog: Promise.resolve(info) });
  const walk = (node) => typeof node === 'object' && node ? [node, ...node.children.flatMap(walk)] : [];
  const find = (className) => walk(visual.node).find((node) => node.className === className);
  return { ...visual, requests, find, walk };
}

test('all twelve real kinds have output and capture diagrams with accessible sourced descriptions', () => {
  assert.deepEqual(kinds.map((kind) => kind.id), VISUAL_KINDS);
  for (const kind of kinds) {
    for (const type of ['capture', 'example']) {
      const svg = kindDiagram(kind, type);
      assert.match(svg, /viewBox="0 0 300 230"/);
      assert.match(svg, /role="img" aria-label=/);
      assert.match(svg, /<title>.*<\/title><desc>/);
      assert.match(svg, /<text/);
      assert.doesNotMatch(svg, /undefined|NaN/);
      assert.ok(kind.visual[type].sources.length);
    }
  }
  assert.equal(kindDiagram({ id: 'unknown' }, 'capture'), '');
});

test('capture diagrams distinguish reflection, emission, faint light and active pulses', () => {
  const capture = (id) => kindDiagram(kinds.find((k) => k.id === id), 'capture');
  for (const id of ['visible', 'near_infrared', 'shortwave_infrared']) assert.match(capture(id), />Sun<|>Reflected light</);
  for (const id of ['thermal_infrared', 'passive_microwave', 'night_lights']) assert.doesNotMatch(capture(id), />Sun<|>Radio pulse<|>Laser pulse</);
  assert.match(capture('passive_microwave'), />Microwaves</);
  assert.match(capture('night_lights'), />Faint light</);
  for (const id of ['radar', 'altimetry']) assert.match(capture(id), />Radio pulse<.*>Echo</);
  assert.match(capture('laser_ranging'), />Laser pulse</);
});

function captureRays(id) {
  const svg = kindDiagram(kinds.find((kind) => kind.id === id), 'capture');
  return [...svg.matchAll(/<g class="(kind-outgoing|kind-return)"><path d="M([\d.]+) ([\d.]+)L([\d.]+) ([\d.]+)"/g)].map((match) => ({
    type: match[1], start: [Number(match[2]), Number(match[3])], end: [Number(match[4]), Number(match[5])],
  }));
}

test('water-vapour infrared originates inside the atmospheric layer, not at the surface', () => {
  const rays = captureRays('water_vapour');
  assert.equal(rays.length, 1);
  assert.equal(rays[0].type, 'kind-return');
  assert.ok(rays[0].start[1] >= 110 && rays[0].start[1] <= 130, 'emission starts in the drawn moisture band');
  assert.ok(rays[0].end[1] < rays[0].start[1], 'the received radiation travels toward the instrument');
  assert.match(kindDiagram(kinds.find((kind) => kind.id === 'water_vapour'), 'capture'), />Atmospheric infrared</);
});

test('laser pulse and canopy/ground returns share the illuminated tree footprint', () => {
  const rays = captureRays('laser_ranging');
  const pulse = rays.find((ray) => ray.type === 'kind-outgoing');
  const echoes = rays.filter((ray) => ray.type === 'kind-return');
  assert.equal(echoes.length, 2);
  // The drawn tree crown is centred at x=160, spanning x=146..174 and y=119..147.
  assert.ok(pulse.end[0] >= 146 && pulse.end[0] <= 174);
  for (const echo of echoes) {
    assert.ok(echo.start[0] >= 146 && echo.start[0] <= 174, 'returns originate in the same footprint');
    assert.ok(echo.end[1] < echo.start[1]);
  }
  assert.ok(echoes[0].start[1] >= 119 && echoes[0].start[1] <= 147, 'first echo starts in the canopy');
  assert.equal(echoes[1].start[1], pulse.end[1], 'ground return starts where the pulse reaches the surface');
  const xAtCanopy = pulse.start[0] + (pulse.end[0] - pulse.start[0]) * (136 - pulse.start[1]) / (pulse.end[1] - pulse.start[1]);
  assert.ok(xAtCanopy >= 151.5 && xAtCanopy <= 168.5, 'outgoing ray actually crosses the triangular crown at y=136');
});

test('diagram text is escaped, not interpolated as SVG markup', () => {
  const dangerous = { ...kind, name: '<script>bad</script>', visual: { capture: { text: '\"><image href="javascript:bad">' } } };
  const svg = kindDiagram(dangerous, 'capture');
  assert.doesNotMatch(svg, /<script|<image/);
  assert.match(svg, /&lt;script&gt;/);
  assert.match(svg, /&quot;&gt;&lt;image/);
});

test('observation URLs are allowlisted, dated, bounded and same-origin', () => {
  assert.match(kindPictureURL(kind.visual.picture, [layer]), /^\/api\/v1\/imagery\?layer=story-true-color&date=2022-07-03&bbox=/);
  for (const picture of [
    { layer: 'https://bad/image', date: '2022-07-03' },
    { layer: layer.id, date: '2025-02-30' },
    { layer: layer.id, date: '2025-01-01&url=bad' },
    { layer: layer.id, date: '2025-01-01', box: { min_lat: 91, max_lat: 92, min_lon: 1, max_lon: 2 } },
    { layer: layer.id, date: '2025-01-01', box: { min_lat: 0, max_lat: 1, min_lon: 2, max_lon: 1 } },
  ]) assert.equal(kindPictureURL(picture, [layer]), null);
  assert.equal(kindPictureURL(kind.visual.picture, [{ ...layer, story: false }]), null);
  assert.equal(kindPictureURL(kind.visual.picture, []), null);
});

test('examples request nothing until expanded, then preserve the exact date and crop', async () => {
  const visual = setup();
  assert.deepEqual(visual.requests, []);
  await visual.load();
  assert.equal(visual.requests.length, 1);
  const query = new URL(visual.requests[0], 'http://localhost').searchParams;
  assert.equal(query.get('date'), '2022-07-03');
  assert.equal(query.get('bbox'), '35.9,-115,36.5,-113.8');
  await visual.load();
  assert.equal(visual.requests.length, 1);
  assert.equal(visual.find('kind-observation').hidden, true, 'pending bytes are not an observed image');
  assert.match(visual.find('kind-example-label').textContent, /Illustration/);
});

test('a successful image replaces only the illustration and carries its own description and credit', async () => {
  const visual = setup();
  await visual.load();
  visual.find('kind-observation').onload();
  assert.equal(visual.find('kind-drawing').hidden, true);
  assert.equal(visual.find('kind-observation').hidden, false);
  assert.match(visual.find('kind-example-label').textContent, /Example observation · 2022-07-03/);
  assert.match(visual.find('note').textContent, /Terra MODIS true colour/);
  assert.equal(visual.find('kind-image-credit').children[0].textContent, 'NASA GIBS');
  assert.equal(visual.find('note kind-load-status').textContent, '');
});

test('failed imagery retains the labelled illustration and retries only on explicit request', async () => {
  const visual = setup();
  await visual.load();
  visual.find('kind-observation').onerror();
  assert.equal(visual.find('kind-drawing').hidden, false);
  assert.equal(visual.find('kind-observation').hidden, true);
  assert.match(visual.find('kind-example-label').textContent, /Illustration/);
  const retry = visual.walk(visual.node).find((node) => node.tag === 'button');
  assert.equal(retry.hidden, false);
  await visual.load();
  assert.equal(visual.requests.length, 1);
  retry.listeners.click();
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(visual.requests.length, 2);
});

test('offline mode and illustrative-only kinds never request provider images', async () => {
  const offline = setup({ liveData: false, layers: [layer] });
  await offline.load();
  assert.deepEqual(offline.requests, []);
  for (const id of ['laser_ranging', 'imaging_spectroscopy']) {
    const visual = setup(undefined, kinds.find((kind) => kind.id === id));
    await visual.load();
    assert.deepEqual(visual.requests, []);
    assert.match(visual.find('kind-example-label').textContent, /not measured data/);
  }
});

test('quantitative observations attach the registered local provider legend on success', async () => {
  const subject = kinds.find((kind) => kind.id === 'thermal_infrared');
  const layer = { id: 'land-temperature', name: 'Land temperature', legend: { url: '/api/v1/imagery-legend?layer=land-temperature', unit: 'K', description: 'Surface temperature, not air temperature.' } };
  const visual = setup({ liveData: true, layers: [layer] }, subject);
  await visual.load();
  visual.find('kind-observation').onload();
  const legend = visual.find('imagery-legend');
  assert.equal(legend.open, true);
  assert.equal(visual.find('imagery-legend-image').src, '/api/v1/imagery-legend?layer=land-temperature');
  assert.match(visual.find('kind-example-label').textContent, /2025-01-08/);
});
