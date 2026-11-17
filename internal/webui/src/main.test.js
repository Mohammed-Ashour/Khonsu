import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import vm from 'node:vm';
import { createLessonPlayer } from './lesson.js';

// main.js boots the browser on import. Evaluate its exact functions without booting it.
const source = readFileSync(new URL('./main.js', import.meta.url), 'utf8');
function actualFunctions(names, globals, declarations = '') {
  const context = vm.createContext(globals);
  const functions = names.map((name) => {
    const match = source.match(new RegExp(`^(?:async )?function ${name}\\([^]*?^}`, 'm'));
    assert.ok(match, `production function ${name} exists`);
    return match[0];
  });
  vm.runInContext(`${declarations}\n${functions.join('\n')}`, context);
  return context;
}
const deferred = () => {
  let resolve, reject;
  const promise = new Promise((yes, no) => { resolve = yes; reject = no; });
  return { promise, resolve, reject };
};

for (const action of ['group', 'search']) {
  for (const outcome of ['success', 'failure']) {
    test(`a cached group supersedes a late ${action} ${outcome}`, async () => {
      const pending = deferred();
      const cached = [{ norad_id: '1', name: 'A satellite' }];
      const state = { items: [], catalogLoading: false };
      const status = { textContent: '', className: '' };
      let renders = 0;
      const app = actualFunctions(['setCatalogStatus', 'loadGroup', 'searchAllGroups'], {
        state, groupCache: new Map([['A', cached]]),
        api: { satellites: () => pending.promise, search: () => pending.promise },
        byId: () => status, renderCatalog: () => { renders += 1; },
        providerMessage: (message) => message, isAbort: (error) => error.name === 'AbortError',
      }, source.match(/^let catalogRequest = .*$/m)[0]);
      const old = action === 'group' ? app.loadGroup('B') : app.searchAllGroups('B');
      await app.loadGroup('A');
      const renderCount = renders;
      if (outcome === 'success') pending.resolve(action === 'group' ? [{ norad_id: '2' }] : { satellites: [{ norad_id: '2' }], groups_covered: 1, groups_total: 2 });
      else pending.reject(new Error('late failure'));
      await old;
      assert.equal(state.items, cached);
      assert.equal(state.isSearchResult, false);
      assert.equal(state.catalogLoading, false);
      assert.equal(status.textContent, '');
      assert.equal(status.className, 'note ');
      assert.equal(renders, renderCount, 'obsolete completion must not repaint');
    });
  }
}

for (const older of ['group', 'search']) {
  for (const newer of ['group', 'search']) {
    for (const outcome of ['success', 'failure', 'abort']) {
      test(`an obsolete ${older} ${outcome} cannot change a newer ${newer}'s list, loading or status`, async () => {
        const old = deferred();
        const fresh = deferred();
        const state = { items: [] };
        const status = {};
        let calls = 0;
        const request = () => (++calls === 1 ? old.promise : fresh.promise);
        const app = actualFunctions(['setCatalogStatus', 'loadGroup', 'searchAllGroups'], {
          state, groupCache: new Map(), api: { satellites: request, search: request },
          byId: () => status, renderCatalog() {}, providerMessage: (s) => s, isAbort: (error) => error.name === 'AbortError',
        }, source.match(/^let catalogRequest = .*$/m)[0]);
        const run = (action, query) => action === 'group' ? app.loadGroup(query) : app.searchAllGroups(query);
        const first = run(older, 'B');
        const second = run(newer, 'C');
        const before = { ...status };
        if (outcome === 'success') old.resolve(older === 'group' ? [{ norad_id: '2' }] : { satellites: [{ norad_id: '2' }], groups_covered: 1, groups_total: 2 });
        else old.reject(Object.assign(new Error('obsolete'), { name: outcome === 'abort' ? 'AbortError' : 'Error' }));
        await first;
        assert.equal(state.catalogLoading, true);
        assert.equal(state.items.length, 0);
        assert.deepEqual(status, before);
        fresh.resolve(newer === 'group' ? [{ norad_id: '3' }] : { satellites: [{ norad_id: '3' }], groups_covered: 2, groups_total: 2 });
        await second;
        assert.equal(state.catalogLoading, false);
        assert.equal(state.items[0].norad_id, '3');
        assert.equal(state.isSearchResult, newer === 'search');
        assert.equal(status.textContent, newer === 'group' ? '' : '1 matches across all groups.');
      });
    }
  }
}

test('actual addSatellite and showSatellite report capacity without evicting tracks', () => {
  const tracked = new Map(Array.from({ length: 7 }, (_, i) => [String(i + 1), {}]));
  const selected = [];
  const loaded = [];
  const messages = [];
  const app = actualFunctions(['addSatellite', 'showSatellite'], {
    state: { tracked }, MAX_TRACKED: 8, canonicalId: String, nextColor: () => 'red',
    select: (id) => selected.push(id), loadTrack: (entry) => loaded.push(entry.id),
    setCatalogStatus: (...args) => messages.push(args),
  });
  assert.equal(app.showSatellite('60133'), true);
  assert.equal(tracked.size, 8);
  assert.equal(app.showSatellite('25994'), false);
  assert.equal(tracked.size, 8);
  assert.deepEqual(selected, ['60133']);
  assert.deepEqual(loaded, ['60133']);
  assert.match(messages[0][0], /Remove one/);
  assert.equal(app.showSatellite('1'), true, 'an existing track is usable at capacity');
  assert.equal(selected.at(-1), '1');
  for (let i = 1; i <= 7; i += 1) assert.ok(tracked.has(String(i)));
});

test('lesson framing honors the destination even for a selected track or a previous camera owner', async () => {
  const state = { tracked: new Map([['25544', { track: {} }], ['60133', { track: {} }]]), selected: '25544' };
  const homes = [];
  const app = actualFunctions(['addSatellite', 'showSatellite', 'select'], {
    state, canonicalId: String, globe: { select() {}, home: (id) => homes.push(id) },
    syncUrl() {}, renderTracked() {}, renderCatalog() {}, renderInspector() {}, renderStatus() {},
    refreshPlan() {}, refreshReport() {}, applySelection() {},
    lessonPlayer: null,
  });
  const player = createLessonPlayer({
    api: { lessons: async () => ({ lessons: [
      { id: 'iss', title: 'ISS', steps: [{ satellite: '25544' }] },
      { id: 'goes', title: 'GOES', steps: [{ satellite: '60133' }, { camera: { lat: 0, lon: -75, distance: 12 } }] },
    ] }) },
    element: lessonNode, card: lessonNode('section'), list: lessonNode('div'), layers: () => null,
    showSatellite: app.showSatellite, face() {}, onChange() {},
  });
  app.lessonPlayer = player;
  await player.start('iss');
  assert.equal(homes.at(-1), '25544', 'already-selected ISS still frames');
  await player.start('goes', 1);
  homes.length = 0;
  await player.start('iss');
  assert.deepEqual(homes, ['25544'], 'the previous camera cannot suppress destination framing');
  await player.start('goes', 1);
  homes.length = 0;
  await player.start('goes', 0);
  assert.deepEqual(homes, ['60133'], 'Back to a camera-less step frames an already selected track');
});

test('a lesson frames an already-tracked pending satellite when its data arrives', async () => {
  const pending = deferred();
  const entry = { id: '25544', track: null, framePending: false };
  const state = { tracked: new Map([['25544', entry]]), selected: '25544', window: { start: 0 } };
  const homes = [];
  const app = actualFunctions(['addSatellite', 'showSatellite', 'loadTrack'], {
    state, canonicalId: String, api: { track: () => pending.promise }, clearTimeout,
    select: (id) => { state.selected = id; },
    globe: { setTrack() {}, select() {}, home: (id) => homes.push(id) },
    lessonPlayer: { holdsCamera: () => false },
    renderTracked() {}, renderCatalog() {}, renderInspector() {}, renderStatus() {},
  });
  const loading = app.loadTrack(entry);
  assert.equal(app.showSatellite('25544', { frame: true }), true);
  assert.equal(entry.framePending, true);
  assert.deepEqual(homes, []);
  pending.resolve({ data: { name: 'ISS' } });
  await loading;
  assert.deepEqual(homes, ['25544']);
  assert.equal(entry.framePending, false);
});

test('the lesson tab adapter refreshes only when the tab changes', () => {
  const adapter = source.match(/openTab: (\(name\) => \{[^\n]+\}),/)[1];
  const state = { tab: 'orbit' };
  const calls = [];
  const context = vm.createContext({ state, showTab: (name) => { calls.push(name); state.tab = name; } });
  vm.runInContext(`openTab = ${adapter}`, context);
  context.openTab('orbit');
  context.openTab('data');
  context.openTab('data');
  assert.deepEqual(calls, ['data']);
});

for (const previous of [{ live: true, playing: false, speed: '1' }, { live: false, playing: true, speed: '60' }, { live: false, playing: false, speed: '10' }]) {
  test(`lesson playback restores prior timeline settings ${JSON.stringify(previous)}`, () => {
    const state = { ...previous, time: 10, window: { start: 0, end: 100 } };
    const speed = { value: previous.speed, options: [1, 10, 60, 600].map((value) => ({ value: String(value) })) };
    const app = actualFunctions(['playTimeline'], {
      state, byId: () => speed,
      setLive(value) { state.live = value; if (value) state.playing = false; },
      setPlaying(value) { state.playing = value; },
    }, source.match(/^let lessonTimeline = .*$/m)[0]);
    app.playTimeline(600);
    app.playTimeline(10); // Another playing step must not overwrite the user's snapshot.
    assert.equal(state.playing, true);
    assert.equal(state.live, false);
    app.playTimeline(null);
    assert.equal(state.live, previous.live);
    assert.equal(state.playing, previous.playing);
    assert.equal(speed.value, previous.speed);
    app.playTimeline(null);
    assert.equal(speed.value, previous.speed, 'release is idempotent');
  });
}

function lessonNode(tagName, className = '', textContent = '') {
  return {
    tagName, className, textContent, children: [], dataset: {}, attributes: {}, listeners: {},
    append(...nodes) { this.children.push(...nodes); },
    replaceChildren(...nodes) { this.children = nodes; },
    setAttribute(name, value) { this.attributes[name] = value; },
    addEventListener(name, callback) { this.listeners[name] = callback; },
    click() { if (!this.disabled) this.listeners.click?.(); },
  };
}
const allNodes = (node) => [node, ...node.children.flatMap(allNodes)];
const lessonButton = (card, name) => allNodes(card).find((node) => node.tagName === 'button' && node.textContent === name);

for (const count of [7, 8]) {
  test(`the actual satellite selection/player chain handles ${count} occupied slots and recovers without eviction`, async () => {
    const state = { tracked: new Map(Array.from({ length: count }, (_, i) => [String(i + 1), {}])) };
    const scene = [];
    const app = actualFunctions(['addSatellite', 'showSatellite'], {
      state, MAX_TRACKED: 8, canonicalId: String, nextColor: () => 'red',
      select: (id) => { state.selected = id; }, loadTrack() {}, setCatalogStatus() {},
    });
    const card = lessonNode('section');
    const player = createLessonPlayer({
      api: { lessons: async () => ({ lessons: [{ id: 'orbits', title: 'Orbits', steps: [
        { satellite: '60133', view: 'cloud', camera: { lat: 5, lon: -75 } },
        { satellite: '25994', view: 'heat', camera: { lat: 0, lon: 10 } },
      ] }] }) },
      element: lessonNode, card, list: lessonNode('div'), showSatellite: app.showSatellite,
      layers: () => ({ views: () => ['cloud', 'heat'], beginLesson: () => scene.push('begin'), show: (id) => scene.push(id) }),
      face: (...args) => scene.push(args), onChange() {},
    });
    assert.equal(await player.start('orbits'), count === 7);
    if (count === 7) {
      assert.equal(state.selected, '60133');
      const before = structuredClone(scene);
      lessonButton(card, 'Next').click();
      assert.equal(player.current().step, 0);
      assert.deepEqual(scene, before);
    } else {
      assert.equal(player.current(), null);
      assert.deepEqual(scene, []);
    }
    assert.equal(state.tracked.size, 8);
    for (let i = 1; i <= count; i += 1) assert.ok(state.tracked.has(String(i)), 'existing tracks are retained');
    assert.ok(allNodes(card).some((node) => node.attributes.role === 'alert'));
    state.tracked.delete('1'); // The user's explicit removal frees one slot.
    lessonButton(card, 'Retry scene').click();
    assert.equal(player.current().step, count === 7 ? 1 : 0);
    assert.equal(state.selected, count === 7 ? '25994' : '60133');
    assert.equal(state.tracked.size, 8);
  });
}

test('the actual player can select an already tracked satellite at capacity', async () => {
  const state = { tracked: new Map(Array.from({ length: 8 }, (_, i) => [String(i + 1), {}])) };
  const app = actualFunctions(['addSatellite', 'showSatellite'], {
    state, MAX_TRACKED: 8, canonicalId: String,
    select: (id) => { state.selected = id; },
    setCatalogStatus() { assert.fail('a tracked satellite must not be refused'); },
  });
  const player = createLessonPlayer({
    api: { lessons: async () => ({ lessons: [{ id: 'existing', title: 'Existing', steps: [{ satellite: '1' }] }] }) },
    element: lessonNode, card: lessonNode('section'), list: lessonNode('div'), layers: () => null,
    showSatellite: app.showSatellite, face() {}, onChange() {},
  });
  assert.equal(await player.start('existing'), true);
  assert.equal(state.selected, '1');
  assert.equal(state.tracked.size, 8);
});

for (const visible of [true, false]) {
  for (const warnings of [
    [{ message: 'Showing saved elements.' }, { message: 'The elements are 22 days from this time.' }],
    [{ message: 'The elements are 22 days from this time.' }],
  ]) {
    test(`actual headline retains every uncertainty warning for ${visible ? 'positive' : 'negative'} answers (${warnings.length})`, () => {
      const headline = { children: [], replaceChildren() { this.children = []; }, append(...nodes) { this.children.push(...nodes); } };
      const app = actualFunctions(['renderHeadline'], {
        byId: () => headline,
        selectedEntry: () => ({ name: 'ISS', track: {} }),
        state: { observer: {}, plan: { warnings, tonight: { dark_start: '2026-11-14T20:00:00Z' } } },
        nextVisible: () => visible ? { start: { at: '2026-11-15T20:00:00Z', azimuth_deg: 1 }, peak: { elevation_deg: 40, azimuth_deg: 2 } } : null,
        element: (tag, className, textContent) => ({ tag, className, textContent }),
        dayAndClock: () => 'Tomorrow at 20:00 UTC', formatCountdown: () => '1 day', compassPoint: () => 'N',
        SIGHTING_CAVEAT: 'Weather and brightness are not included.', PLAN_HOURS: 48,
      });
      app.renderHeadline();
      const safety = headline.children.filter((node) => node.className.includes('plan-warning')).map((node) => node.textContent).join(' ');
      for (const warning of warnings) assert.ok(safety.includes(warning.message));
      assert.match(safety, /Weather and brightness/);
    });
  }
}

test('short-screen CSS hides optional details, not headline safety text', () => {
  const css = readFileSync(new URL('./styles.css', import.meta.url), 'utf8');
  assert.match(css, /\.headline-sub:not\(\.plan-warning\)\s*\{\s*display: none;/);
  assert.doesNotMatch(css, /\.headline-sub\s*\{[^}]*display:\s*none/);
});
