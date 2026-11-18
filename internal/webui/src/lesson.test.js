import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createLessonPlayer, lessonFromUrl, lessonsForOrbit, withLesson } from './lesson.js';

class FakeNode {
  constructor(tag) {
    this.tagName = tag;
    this.ownerDocument = document;
    this.className = '';
    this.textContent = '';
    this.children = [];
    this.attributes = {};
    this.dataset = {};
    this.listeners = {};
    this.hidden = false;
    this.disabled = false;
    const classes = new Set();
    this.classList = { add: (name) => classes.add(name), contains: (name) => classes.has(name) };
  }

  append(...nodes) {
    this.children.push(...nodes.filter((node) => typeof node !== 'string'));
  }

  replaceChildren(...nodes) {
    this.children = [...nodes];
  }

  setAttribute(name, value) {
    this.attributes[name] = String(value);
  }

  addEventListener(type, listener) {
    (this.listeners[type] ??= []).push(listener);
  }

  contains(node) {
    return this === node || this.children.some((child) => child.contains(node));
  }

  querySelectorAll(selector) {
    return findAll(this, (node) => node.tagName === selector);
  }

  focus() {
    this.ownerDocument.activeElement = this;
  }

  click() {
    if (this.disabled) return;
    this.focus();
    for (const listener of this.listeners.click ?? []) listener({});
  }
}

const document = { activeElement: null };
const element = (tag, className, text) => {
  const node = new FakeNode(tag);
  if (className) node.className = className;
  if (text !== undefined && text !== null) node.textContent = text;
  return node;
};
const textOf = (node) => [node.textContent, ...node.children.map(textOf)].filter(Boolean).join('\n');
const findAll = (node, predicate) => [...(predicate(node) ? [node] : []), ...node.children.flatMap((child) => findAll(child, predicate))];
const buttonNamed = (root, text) => findAll(root, (node) => node.tagName === 'button' && node.textContent === text)[0];
const source = { label: 'NOAA', title: 'ABI', url: 'https://www.nesdis.noaa.gov/abi' };

const LESSONS = [{
  id: 'light-and-heat',
  title: 'Light or heat?',
  summary: 'Compare.',
  steps: [
    { satellite: '60133', view: 'goes-east-visible', camera: { lat: 5, lon: -75 }, text: [{ text: 'Band 2 is visible.', sources: [source, { label: 'Bad', url: 'javascript:alert(1)' }] }],
      question: { prompt: 'What will infrared show at night?', choices: ['Nothing', 'Clouds'], answer: 1, explain: { text: 'Infrared works at night.', sources: [source] } } },
    { view: 'goes-east-infrared', text: [{ text: 'Band 13 senses heat.', sources: [source] }], hint: 'Come back later.' },
    { compare: ['goes-east-visible', 'goes-east-infrared'], text: [{ text: 'Compare them.', sources: [source] }] },
  ],
}];

function setup({ views = true, lessons = LESSONS, select = () => true, seaLevel, play = () => {}, status = element('p'), fallbackFocus = () => null, browseSatellites } = {}) {
  const log = [];
  const scene = {};
  const panel = {
    views: () => (views ? [{ id: 'goes-east-visible', name: 'Visible' }, { id: 'goes-east-infrared', name: 'Infrared' }] : []),
    beginLesson: () => { log.push(['begin']); scene.base = ''; scene.visual = null; },
    show: (id, date = '', box = null, options = {}) => {
      log.push(['show', id]);
      scene.base = options.base;
      scene.visual = { id, date, box, plain: Boolean(options.plain) };
    },
  };
  const card = element('section');
  const list = element('div');
  let changes = 0;
  const player = createLessonPlayer({
    api: { lessons: async () => ({ lessons }), seaLevel },
    element,
    card,
    list,
    layers: () => panel,
    showSatellite: (id, options) => {
      log.push(['satellite', id]);
      if (!select(id, options)) return false;
      scene.satellite = id;
      return true;
    },
    face: (lat, lon, distance) => { log.push(['face', lat, lon, distance]); scene.camera = [lat, lon, distance]; },
    openTab: (name) => log.push(['tab', name]),
    play: (speed) => { if (speed != null) log.push(['play', speed]); play(speed); },
    status, fallbackFocus, browseSatellites,
    onChange: () => { changes += 1; },
  });
  return { player, card, list, log, scene, status, changes: () => changes };
}

test('the dock puts Close, Back and Next before citations and focuses its heading on start', async () => {
  const { player, card } = setup();
  await player.start('light-and-heat');
  assert.equal(document.activeElement.id, 'lesson-title');
  assert.equal(document.activeElement.tabIndex, -1);
  assert.deepEqual(findAll(card, (node) => node.tagName === 'button').slice(0, 3).map((node) => node.textContent), ['Close', 'Back', 'Next']);
  assert.equal(card.children[0].className, 'lesson-header');
  assert.equal(card.children[1].className, 'lesson-body');
});

test('only step transitions update the live status, not answers or comparisons', async () => {
  const announcements = [];
  let text = '';
  const status = { get textContent() { return text; }, set textContent(value) { text = value; announcements.push(value); } };
  const { player, card } = setup({ status });
  await player.start('light-and-heat');
  assert.deepEqual(announcements, ['Step 1 of 3. Light or heat?']);
  buttonNamed(card, 'Clouds').click();
  assert.equal(announcements.length, 1);
  buttonNamed(card, 'Next').click();
  buttonNamed(card, 'Next').click();
  buttonNamed(card, 'Infrared').click();
  assert.equal(announcements.length, 3);
  assert.match(announcements.at(-1), /Step 3 of 3/);
  player.stop();
  assert.equal(announcements.at(-1), '');
});

test('closing returns focus to a visible trigger or the host fallback', async () => {
  const trigger = element('button');
  trigger.isConnected = true;
  trigger.closest = () => null;
  const fallback = element('button');
  const { player } = setup({ fallbackFocus: () => fallback });
  trigger.focus();
  await player.start('light-and-heat');
  player.stop();
  assert.equal(document.activeElement, trigger);
  trigger.focus();
  await player.start('light-and-heat');
  trigger.closest = () => ({ hidden: true });
  player.stop();
  assert.equal(document.activeElement, fallback);
  trigger.focus();
  await player.start('light-and-heat');
  trigger.isConnected = false;
  player.stop();
  assert.equal(document.activeElement, fallback);
});

test('closing falls back when a connected disclosure trigger refuses focus', async () => {
  const trigger = element('button');
  trigger.isConnected = true;
  trigger.closest = () => null;
  const fallback = element('button');
  const { player } = setup({ fallbackFocus: () => fallback });
  trigger.focus();
  await player.start('light-and-heat');
  // A trigger inside a now-closed <details> remains connected but focus() does nothing.
  trigger.focus = () => {};
  player.stop();
  assert.equal(document.activeElement, fallback);
});

test('the satellite browser action leaves the player state intact', async () => {
  let browsed = 0;
  const { player, card } = setup({ browseSatellites: () => { browsed += 1; } });
  await player.start('light-and-heat');
  buttonNamed(card, 'Clouds').click();
  const before = player.current();
  buttonNamed(card, 'Satellites').click();
  assert.equal(browsed, 1);
  assert.deepEqual(player.current(), before);
  assert.match(textOf(card), /Yes\./);
});

test('lessonFromUrl and withLesson round-trip the lesson and step', () => {
  assert.deepEqual(lessonFromUrl('?sats=1&lesson=light-and-heat&step=3'), { id: 'light-and-heat', step: 2 });
  assert.deepEqual(lessonFromUrl('?lesson=light-and-heat&step=zero'), { id: 'light-and-heat', step: 0 });
  assert.equal(lessonFromUrl('?lesson=<script>'), null);
  assert.equal(lessonFromUrl('?sats=1'), null);
  assert.equal(withLesson('?sats=1', { id: 'a', step: 1 }), '?sats=1&lesson=a&step=2');
  assert.equal(withLesson('/', { id: 'a', step: 0 }), '/?lesson=a&step=1');
  assert.equal(withLesson('?sats=1', null), '?sats=1');
});

test('a lesson sets up each step, asks before answering and steps through', async () => {
  const { player, card, log, changes } = setup();
  assert.equal(await player.start('light-and-heat'), true);
  assert.deepEqual(log, [['satellite', '60133'], ['begin'], ['show', 'goes-east-visible'], ['face', 5, -75, null]]);
  assert.equal(card.hidden, false);
  assert.match(textOf(card), /step 1 of 3/);
  assert.equal(findAll(card, (node) => node.tagName === 'a').length, 1, 'only the https source is linked');
  assert.doesNotMatch(textOf(card), /Infrared works at night/, 'the answer waits for a prediction');

  buttonNamed(card, 'Nothing').click();
  assert.match(textOf(card), /Not quite: it's "Clouds"/);
  assert.match(textOf(card), /Infrared works at night/);
  assert.equal(buttonNamed(card, 'Clouds').classList.contains('is-right'), true);

  buttonNamed(card, 'Next').click();
  assert.deepEqual(log.slice(-2), [['show', 'goes-east-infrared'], ['face', 5, -75, null]]);
  assert.match(textOf(card), /Come back later/);
  assert.deepEqual(player.current(), { id: 'light-and-heat', step: 1 });

  buttonNamed(card, 'Next').click();
  assert.deepEqual(log.slice(-2), [['show', 'goes-east-visible'], ['face', 5, -75, null]], 'a compare step starts on its first view and restores its camera');
  buttonNamed(card, 'Infrared').click();
  assert.deepEqual(log.at(-1), ['show', 'goes-east-infrared']);
  assert.equal(buttonNamed(card, 'Infrared').attributes['aria-pressed'], 'true');

  buttonNamed(card, 'Finish').click();
  assert.equal(card.hidden, true);
  assert.equal(player.current(), null);
  assert.ok(changes() >= 4);
});

test('a shared link applies only the destination scene and its inherited camera once', async () => {
  const { player, log } = setup();
  await player.start('light-and-heat', 1);
  assert.deepEqual(log, [['satellite', '60133'], ['begin'], ['show', 'goes-east-infrared'], ['face', 5, -75, null]]);
  assert.equal(await player.start('nope'), false);
});

test('without views the lesson says the pictures are unavailable', async () => {
  const { player, card } = setup({ views: false });
  await player.start('light-and-heat');
  assert.match(textOf(card), /need live data and WebGL/);
});

test('the list offers each lesson', async () => {
  const { player, list, card } = setup();
  let closed = 0;
  await player.renderList(() => { closed += 1; });
  assert.match(textOf(list), /Light or heat\?/);
  buttonNamed(list, 'Start').click();
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(closed, 1);
  assert.equal(card.hidden, false);
});

const SCENES = [{
  id: 'scenes', title: 'Scene changes', steps: [
    { satellite: '1', base: 'true-color', view: 'a', camera: { lat: 5, lon: 20, distance: 3 } },
    { compare: ['a', 'b'] },
    { satellite: '2', base: '', picture: { layer: 'event', date: '2017-09-20', plain: true }, camera: { lat: -72, lon: 30 } },
    { pictures: [{ layer: 'event', date: '2017-09-21', label: 'Before' }, { layer: 'event', date: '2017-09-22', label: 'After' }] },
    { text: [{ text: 'The comparison stays available.' }] },
    { view: 'b', base: 'true-color', camera: { lat: 30, lon: 40 } },
  ],
}];

test('forward, Back and direct entry resolve the same satellite, base, camera and exclusive image', async () => {
  const forward = setup({ lessons: SCENES });
  await forward.player.start('scenes');
  const expected = [];
  for (let i = 0; i < SCENES[0].steps.length; i += 1) {
    if (i) buttonNamed(forward.card, 'Next').click();
    expected.push(structuredClone(forward.scene));
    const direct = setup({ lessons: SCENES });
    await direct.player.start('scenes', i);
    assert.deepEqual(direct.scene, expected[i], `direct step ${i + 1}`);
    assert.deepEqual(direct.log.filter(([action]) => action === 'satellite'), [['satellite', i < 2 ? '1' : '2']], 'no intermediate satellites are replayed');
    assert.equal(direct.log.filter(([action]) => action === 'show').length, 1, 'no intermediate pictures are fetched');
  }
  for (let i = expected.length - 2; i >= 0; i -= 1) {
    buttonNamed(forward.card, 'Back').click();
    assert.deepEqual(forward.scene, expected[i], `Back to step ${i + 1}`);
  }
  assert.deepEqual(expected[1].camera, [5, 20, 3]);
  assert.deepEqual(expected[2].camera, [-72, 30, null]);
  assert.equal(expected[2].visual.id, 'event');
  assert.equal(expected[2].visual.plain, true);
  assert.equal(expected[3].visual.date, '2017-09-21');
  assert.equal(expected[4].visual.date, '2017-09-21');
  assert.equal(expected[5].visual.id, 'b');
  assert.equal(expected[5].visual.date, '');
});

test('an inherited comparison remains interactive and keeps its resolved base', async () => {
  const { player, card, scene } = setup({ lessons: SCENES });
  await player.start('scenes', 4);
  buttonNamed(card, 'After').click();
  assert.equal(scene.visual.date, '2017-09-22');
  assert.equal(scene.base, '');
  assert.equal(buttonNamed(card, 'After').attributes['aria-pressed'], 'true');
  buttonNamed(card, 'Next').click();
  assert.equal(buttonNamed(card, 'After'), undefined, 'a view replaces inherited picture choices');
});

test('capacity rejection retains the step, scene and comparison until retry succeeds', async () => {
  let full = true;
  const { player, card, scene, log } = setup({ lessons: SCENES, select: (id) => id === '1' || !full });
  await player.start('scenes', 1);
  buttonNamed(card, 'b').click();
  const before = structuredClone(scene);
  const calls = log.length;
  buttonNamed(card, 'Next').click();
  assert.deepEqual(player.current(), { id: 'scenes', step: 1 });
  assert.deepEqual(scene, before);
  assert.deepEqual(log.slice(calls), [['satellite', '2']], 'no image, camera or layer reset on refusal');
  assert.match(textOf(card), /Remove a satellite from Tracked/);
  assert.equal(buttonNamed(card, 'b').attributes['aria-pressed'], 'true');
  assert.ok(findAll(card, (node) => node.attributes.role === 'alert').length);
  full = false;
  buttonNamed(card, 'Retry scene').click();
  assert.deepEqual(player.current(), { id: 'scenes', step: 2 });
  assert.equal(scene.satellite, '2');
  assert.equal(scene.visual.id, 'event');
  assert.doesNotMatch(textOf(card), /tracking slots are full/);
});

test('starting at capacity exposes a recoverable error without applying any scene', async () => {
  let full = true;
  const { player, card, log } = setup({ lessons: SCENES, select: () => !full });
  assert.equal(await player.start('scenes', 2), false);
  assert.equal(player.current(), null);
  assert.equal(player.holdsCamera(), false);
  assert.deepEqual(log, [['satellite', '2']]);
  assert.match(textOf(card), /No lesson scene has been applied/);
  assert.equal(buttonNamed(card, 'Next').disabled, true);
  assert.equal(buttonNamed(card, 'Back').disabled, true);
  full = false;
  buttonNamed(card, 'Retry scene').click();
  assert.deepEqual(player.current(), { id: 'scenes', step: 2 });
  assert.equal(log.filter(([action]) => action === 'begin').length, 1);
  assert.equal(player.holdsCamera(), true);
});

test('a failed start of another lesson retains the previous lesson and retries the requested one', async () => {
  let full = true;
  const lessons = [...LESSONS, ...SCENES];
  const { player, card, scene } = setup({ lessons, select: (id) => id === '60133' || !full });
  await player.start('light-and-heat', 1);
  const before = structuredClone(scene);
  assert.equal(await player.start('scenes', 2), false);
  assert.deepEqual(player.current(), { id: 'light-and-heat', step: 1 });
  assert.deepEqual(scene, before);
  full = false;
  buttonNamed(card, 'Retry scene').click();
  assert.deepEqual(player.current(), { id: 'scenes', step: 2 });
});

test('question and comparison rerenders keep keyboard focus inside the card', async () => {
  const { player, card } = setup();
  await player.start('light-and-heat');
  buttonNamed(card, 'Nothing').click();
  assert.equal(document.activeElement, buttonNamed(card, 'Next'), 'answered choices become disabled, so focus moves to Next');
  buttonNamed(card, 'Next').click();
  assert.equal(document.activeElement.id, 'lesson-title', 'successful navigation focuses the step heading');
  buttonNamed(card, 'Next').click();
  buttonNamed(card, 'Infrared').click();
  assert.equal(document.activeElement, buttonNamed(card, 'Infrared'));
  assert.ok(card.contains(document.activeElement));
});

test('sea-level charts label partial years, actual observation date, anomaly and scientific qualifications', async () => {
  const lessons = [{ id: 'sea', title: 'Sea level', steps: [{ chart: { dataset: 'sea-level', title: 'Sea-level record' } }] }];
  const feed = { data: {
    // Unsorted input checks that the date uses the latest valid observation, not the last row.
    points: [{ year: 2025.1, level_mm: 90 }, { year: 1992.95, level_mm: -10 }, { year: 2024.01, level_mm: 80 }, { year: 2024.99, level_mm: 85 }],
    trend: '3.11 mm/year',
  }, source: { credit: 'NOAA LSA' } };
  const { player, card } = setup({ lessons, seaLevel: async () => feed });
  await player.start('sea');
  await new Promise((resolve) => setImmediate(resolve));
  const text = textOf(card);
  assert.match(text, /Partial years: 1992, 2025/);
  assert.match(text, /Latest observation: 2025-02-06 UTC/);
  assert.match(text, /seasonal cycle is removed/);
  assert.match(text, /No glacial-isostatic adjustment is applied/);
  assert.match(text, /3.11 mm\/year/);
  assert.match(text, /NOAA LSA/);
  const markup = findAll(card, (node) => node.className === 'learn-chart')[0].innerHTML;
  assert.match(markup, /Sea-level anomaly/);
  assert.match(markup, /1992 partial/);
  assert.match(markup, /2025 partial/);
  assert.doesNotMatch(markup, /2024 partial/);
});

const ORBIT_LESSONS = [
  { id: 'data', title: 'Data', summary: 'S', kinds: ['visible'], steps: [{ text: [{ text: 'x.', sources: [source] }] }] },
  { id: 'still', title: 'Staying still', summary: 'S', orbits: ['GEO'], steps: [
    { satellite: '60133', camera: { lat: 0, lon: -75, distance: 12 }, play: 600, text: [{ text: 'It hangs over one longitude.', sources: [source] }] },
    { tab: 'orbit', text: [{ text: 'Read its period.', sources: [source] }] },
    { text: [{ text: 'The end.', sources: [source] }] },
  ] },
  { id: 'molniya', title: 'Stretched', summary: 'S', orbits: ['molniya', 'Elliptical'], steps: [{ text: [{ text: 'x.', sources: [source] }] }] },
];

test('lessons request framing only when the destination has no inherited camera', async () => {
  const calls = [];
  const { player } = setup({ lessons: [{ id: 'framing', title: 'Framing', steps: [
    { satellite: '25544' }, { camera: { lat: 0, lon: 0 } }, { text: [] },
  ] }], select: (id, options) => { calls.push({ id, ...options }); return true; } });
  await player.start('framing');
  await player.start('framing', 1);
  await player.start('framing', 2);
  await player.start('framing', 0);
  assert.deepEqual(calls.map(({ frame }) => frame), [true, false, false, true]);
});

test('resolved playback releases on Back, nonplaying lesson switches and close', async () => {
  const calls = [];
  const lessons = [{ id: 'moving', title: 'Moving', steps: [{ satellite: '25544' }, { play: 600 }, { text: [] }] },
    { id: 'quiet', title: 'Quiet', steps: [{ satellite: '25544' }] }];
  const { player } = setup({ lessons, play: (speed) => calls.push(speed) });
  await player.start('moving', 2);
  await player.start('moving', 0);
  await player.start('moving', 1);
  await player.start('quiet');
  await player.start('moving', 1);
  player.stop();
  assert.deepEqual(calls, [600, null, 600, null, 600, null]);
});

test('lessonsForOrbit matches the orbit class or any named pattern', () => {
  assert.deepEqual(lessonsForOrbit(ORBIT_LESSONS, { regime: 'GEO', patterns: [] }).map((l) => l.id), ['still']);
  assert.deepEqual(lessonsForOrbit(ORBIT_LESSONS, { regime: 'Elliptical', patterns: ['molniya'] }).map((l) => l.id), ['molniya']);
  assert.deepEqual(lessonsForOrbit(ORBIT_LESSONS, { regime: 'LEO', patterns: ['sun_synchronous'] }), []);
  assert.deepEqual(lessonsForOrbit(ORBIT_LESSONS, null), []);
});

test('an orbit lesson plays the timeline on its step and keeps the tab it opened', async () => {
  const { player, log } = setup({ lessons: ORBIT_LESSONS });
  assert.equal(await player.start('still'), true);
  assert.deepEqual(log.filter(([kind]) => kind === 'play' || kind === 'tab'), [['play', 600]]);
  assert.deepEqual(log.find(([kind]) => kind === 'face'), ['face', 0, -75, 12]);
  log.length = 0;
  await player.start('still', 1);
  assert.deepEqual(log.filter(([kind]) => kind === 'play' || kind === 'tab'), [['tab', 'orbit'], ['play', 600]], 'direct entry restores inherited playback');
  log.length = 0;
  await player.start('still', 2);
  assert.deepEqual(log.filter(([kind]) => kind === 'tab'), [['tab', 'orbit']], 'a link to a later step restores the tab');
  assert.deepEqual((await player.forOrbit({ regime: 'GEO', patterns: [] })).map((l) => l.id), ['still']);
});
