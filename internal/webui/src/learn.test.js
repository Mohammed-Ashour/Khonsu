import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { CHAPTERS, createLearnHub, safeItems, sharpPoints, spectrumRows } from './learn.js';

test('safeItems keeps text and https sources only', () => {
  assert.deepEqual(safeItems([{ text: 'A.', sources: [{ label: 'NASA', url: 'https://nasa.gov' }, { url: 'javascript:x' }] }, { text: ' ' }, null]), [
    { text: 'A.', sources: [{ label: 'NASA', title: 'NASA', url: 'https://nasa.gov' }] },
  ]);
  assert.deepEqual(safeItems(undefined), []);
});

test('spectrum rows and sharp points come from sourced instrument numbers', () => {
  const instruments = [
    { id: 'msi', short: 'MSI', bands: [{ name: 'B4', from_um: 0.65, to_um: 0.68 }, { name: 'bad', from_um: 0, to_um: 1 }], resolution_m: 10, revisit_days: 5 },
    { id: 'abi', bands: [], resolution_m: 500, revisit_days: 0.0069 },
    { id: 'none' },
  ];
  assert.deepEqual(spectrumRows(instruments), [{ label: 'MSI', bands: [{ name: 'B4', from: 0.65, to: 0.68 }] }]);
  assert.deepEqual(sharpPoints(instruments), [{ label: 'MSI', x: 10, y: 5 }, { label: 'ABI', x: 500, y: 0.0069 }]);
});

class FakeNode {
  constructor(tagName, className = '', textContent = '') {
    this.tagName = tagName;
    this.className = className;
    this.textContent = textContent;
    this.children = [];
    this.attributes = {};
    this.listeners = {};
    this.innerHTML = '';
  }

  append(...nodes) { this.children.push(...nodes); }
  replaceChildren(...nodes) { this.children = [...nodes]; }
  setAttribute(name, value) { this.attributes[name] = String(value); }
  addEventListener(type, listener) { (this.listeners[type] ??= []).push(listener); }
  async click() { await Promise.all((this.listeners.click ?? []).map((listener) => listener({ target: this }))); }
}

const element = (tag, className, text) => new FakeNode(tag, className, text);
const textOf = (node) => typeof node === 'string' ? node : [node.textContent, ...node.children.map(textOf)].filter(Boolean).join('\n');
const findAll = (node, predicate) => typeof node === 'string' ? [] : [...(predicate(node) ? [node] : []), ...node.children.flatMap((child) => findAll(child, predicate))];
const buttonNamed = (node, name) => {
  const matches = findAll(node, (child) => child.tagName === 'button' && child.textContent === name);
  assert.equal(matches.length, 1, `expected one ${name} button`);
  return matches[0];
};
const withClass = (node, className) => findAll(node, (child) => child.className.split(' ').includes(className));

// Shape local content like /api/v1/learn: expand sources, split stories and attach
// each kind's lesson links. The production hub still reads only the API response.
function localLearnResponse() {
  const raw = JSON.parse(readFileSync(new URL('../../knowledge/knowledge.json', import.meta.url), 'utf8'));
  const statements = (items = []) => items.map((item) => ({ ...item, sources: (item.sources ?? []).map((id) => raw.sources[id]) }));
  return {
    ...raw,
    lessons: raw.lessons.filter((lesson) => !lesson.story),
    stories: raw.lessons.filter((lesson) => lesson.story),
    kinds: raw.kinds.map((kind) => ({
      ...kind,
      statements: statements(kind.statements), uses: statements(kind.uses), conditions: statements(kind.conditions),
      lessons: raw.lessons.filter((lesson) => lesson.kinds.includes(kind.id)).map(({ id, title }) => ({ id, title })),
      satellites: raw.satellites.filter((satellite) => satellite.instruments.some((id) => raw.instruments.find((instrument) => instrument.id === id).kinds.includes(kind.id)))
        .map(({ norad_id, name }) => ({ norad_id, name })),
    })),
    instruments: raw.instruments.map((instrument) => ({ ...instrument, specs: instrument.specs && statements([instrument.specs])[0] })),
    sharp_statements: statements(raw.sharp_statements), regions_sources: statements(raw.regions_sources),
  };
}

function setup({ response = localLearnResponse(), learn = async () => response } = {}) {
  const panel = element('section');
  const log = [];
  let requests = 0;
  // View definitions are data, not a second story registry.
  const views = [...new Set((response.kinds ?? []).flatMap((kind) => kind.layers ?? []))].map((id) => ({ id, name: id }));
  const hub = createLearnHub({
    api: { learn: () => { requests += 1; return learn(); } }, element, panel,
    layers: () => ({ views: () => views, show: (id) => log.push(['view', id]) }),
    showSatellite: (id) => log.push(['satellite', id]),
    startLesson: (id) => log.push(['lesson', id]), startStory: (id) => log.push(['story', id]),
    onClose: () => log.push(['close']),
  });
  return { hub, panel, log, response, requests: () => requests };
}

function deferred() {
  let resolve;
  let reject;
  const promise = new Promise((yes, no) => { resolve = yes; reject = no; });
  return { promise, resolve, reject };
}

test('the real hub lists and opens all seven local stories through startStory(id)', async () => {
  const { hub, panel, response, log } = setup();
  assert.deepEqual(response.stories.map((story) => story.id), [
    'puerto-rico-goes-dark', 'los-angeles-fires', 'helene-flood-radar', 'cleaner-air-2020',
    'lake-mead-shrinks', 'rising-seas', 'arctic-sea-ice-minimum',
  ]);
  await hub.render();
  await buttonNamed(panel, 'Stories').click();
  assert.equal(hub.chapter(), 'stories');
  const cards = withClass(panel, 'learn-story');
  assert.equal(cards.length, 7);
  for (const [index, story] of response.stories.entries()) {
    const card = cards[index];
    assert.ok(textOf(card).includes(story.title));
    assert.ok(textOf(card).includes(story.summary));
    for (const value of [story.when, story.where].filter(Boolean)) assert.ok(textOf(card).includes(value));
    await buttonNamed(card, 'Open the story').click();
  }
  assert.deepEqual(log, response.stories.map((story) => ['story', story.id]));
  assert.match(textOf(panel), /charts or published findings/);
  assert.doesNotMatch(textOf(withClass(panel, 'learn-intro')[0]), /pictures from that day/);
});

test('all four chapters render with working tabs, introductions and separate lesson/story routes', async () => {
  const { hub, panel, response, requests, log } = setup();
  await hub.render();
  assert.deepEqual(CHAPTERS.map(({ id }) => id), ['kinds', 'sharp', 'stories', 'lessons']);
  assert.equal(withClass(panel, 'learn-card').length, response.kinds.length);
  for (const chapter of CHAPTERS) {
    await buttonNamed(panel, chapter.title).click();
    const tabs = findAll(panel, (node) => node.attributes.role === 'tab');
    assert.equal(tabs.length, 4);
    assert.deepEqual(tabs.filter((tab) => tab.attributes['aria-selected'] === 'true').map((tab) => tab.textContent), [chapter.title]);
    assert.equal(hub.chapter(), chapter.id);
    assert.equal(withClass(panel, 'learn-intro').length, 1);
    assert.ok(textOf(withClass(panel, 'learn-intro')[0]).length > 20);
    assert.doesNotMatch(textOf(panel), /Loading|Could not load/);
    if (chapter.id === 'sharp') {
      assert.match(textOf(panel), /finest spatial resolution/);
      assert.match(textOf(panel), /band and operating mode/);
      assert.match(textOf(panel), /non-square/);
      assert.match(textOf(panel), /repeat cycles, revisit times and coverage intervals/);
      assert.match(textOf(panel), /two-satellite fleet/);
      assert.doesNotMatch(textOf(panel), /smallest pixel/);
      assert.match(withClass(panel, 'learn-chart')[0].innerHTML, /Finest resolution \(m\)/);
      for (const instrument of response.instruments.filter((instrument) => instrument.specs)) {
        assert.ok(textOf(panel).includes(instrument.specs.text));
      }
    }
    if (chapter.id === 'lessons') {
      const cards = withClass(panel, 'learn-story');
      assert.equal(cards.length, response.lessons.length);
      for (const [i, lesson] of response.lessons.entries()) {
        assert.ok(textOf(cards[i]).includes(lesson.title));
        await buttonNamed(cards[i], 'Start').click();
      }
    }
  }
  assert.deepEqual(log, response.lessons.map((lesson) => ['lesson', lesson.id]));
  assert.equal(requests(), 1, 'successful local content is shared across chapters');
  await hub.show('not-a-chapter');
  assert.equal(hub.chapter(), 'lessons');
  await buttonNamed(panel, 'Close').click();
  assert.deepEqual(log.at(-1), ['close']);
});

test('kind cards route every related local story to startStory and lessons to startLesson', async () => {
  const { hub, panel, response, log } = setup();
  await hub.show('kinds');
  const cards = withClass(panel, 'learn-card');
  const storyIDs = new Set(response.stories.map((story) => story.id));
  const expected = [];
  for (const [i, kind] of response.kinds.entries()) {
    for (const related of kind.lessons) {
      const route = storyIDs.has(related.id) ? 'story' : 'lesson';
      await buttonNamed(cards[i], `${route === 'story' ? 'Story' : 'Lesson'}: ${related.title}`).click();
      expected.push([route, related.id]);
    }
  }
  assert.deepEqual(log, expected);
  assert.deepEqual(new Set(log.filter(([route]) => route === 'story').map(([, id]) => id)), storyIDs);
  const kind = response.kinds.find((kind) => kind.layers.length && kind.satellites.length);
  const card = cards[response.kinds.indexOf(kind)];
  const satellite = kind.satellites[0];
  await buttonNamed(card, satellite.name).click();
  assert.deepEqual(log.at(-1), ['satellite', satellite.norad_id]);
  await buttonNamed(card, `Show on the globe: ${kind.layers[0]}`).click();
  assert.deepEqual(log.at(-1), ['view', kind.layers[0]]);
});

test('hub failures offer a retry for the selected chapter and do not cache errors', async () => {
  const response = localLearnResponse();
  let attempts = 0;
  const { hub, panel, requests } = setup({ response, learn: async () => {
    attempts += 1;
    if (attempts === 1) throw new Error('Try later');
    return response;
  } });
  await hub.show('stories');
  assert.match(textOf(panel), /Could not load Learn: Try later/);
  assert.equal(withClass(panel, 'learn-story').length, 0);
  await buttonNamed(panel, 'Try again').click();
  assert.equal(hub.chapter(), 'stories');
  assert.equal(withClass(panel, 'learn-story').length, 7);
  assert.doesNotMatch(textOf(panel), /Try later|Try again/);
  assert.equal(requests(), 2);
  await hub.show('lessons');
  assert.equal(requests(), 2);
});

test('a pending load shared by rapid navigation renders only the latest chapter', async () => {
  const pending = deferred();
  const { hub, panel, response, requests } = setup({ learn: () => pending.promise });
  const first = hub.show('stories');
  const oldBody = withClass(panel, 'learn-body')[0];
  const second = buttonNamed(panel, 'Sharp or often').click();
  const middleBody = withClass(panel, 'learn-body')[0];
  const third = buttonNamed(panel, 'Lessons').click();
  assert.equal(requests(), 1);
  pending.resolve(response);
  await Promise.all([first, second, third]);
  assert.equal(hub.chapter(), 'lessons');
  assert.equal(withClass(panel, 'learn-story').length, response.lessons.length);
  assert.match(textOf(oldBody), /Loading/);
  assert.match(textOf(middleBody), /Loading/);
  assert.equal(withClass(oldBody, 'learn-story').length, 0, 'superseded renders must not build detached content');
  assert.equal(withClass(middleBody, 'learn-chart').length, 0);
  assert.equal(findAll(panel, (node) => node.attributes['aria-selected'] === 'true')[0].textContent, 'Lessons');
});

test('a late failure belongs only to the latest navigation and retry follows the current tab', async () => {
  const pending = deferred();
  const response = localLearnResponse();
  let attempts = 0;
  const { hub, panel, requests } = setup({ response, learn: () => ++attempts === 1 ? pending.promise : Promise.resolve(response) });
  const first = hub.show('stories');
  const oldBody = withClass(panel, 'learn-body')[0];
  const latest = hub.show('sharp');
  pending.reject(new Error('Unavailable'));
  await Promise.all([first, latest]);
  assert.equal(hub.chapter(), 'sharp');
  assert.match(textOf(panel), /Unavailable/);
  assert.doesNotMatch(textOf(oldBody), /Unavailable|Try again/);
  // Changing tabs after failure retries the request without stale error markup.
  await buttonNamed(panel, 'Stories').click();
  assert.equal(withClass(panel, 'learn-story').length, response.stories.length);
  assert.doesNotMatch(textOf(panel), /Unavailable/);
  assert.equal(requests(), 2);
});

test('closing during a load invalidates the pending render without discarding cached data', async () => {
  const pending = deferred();
  const { hub, panel, response, log, requests } = setup({ learn: () => pending.promise });
  const loading = hub.show('stories');
  const body = withClass(panel, 'learn-body')[0];
  await buttonNamed(panel, 'Close').click();
  pending.resolve(response);
  await loading;
  assert.deepEqual(log, [['close']]);
  assert.match(textOf(body), /Loading/);
  await hub.show('stories');
  assert.equal(withClass(panel, 'learn-story').length, 7);
  assert.equal(requests(), 1);
});

test('empty chapters are usable without WebGL or instrument numbers', async () => {
  const { hub, panel } = setup({ response: {} });
  for (const chapter of CHAPTERS) {
    await hub.show(chapter.id);
    assert.equal(findAll(panel, (node) => node.attributes.role === 'tab').length, 4);
    assert.doesNotMatch(textOf(panel), /Could not load/);
  }
  await hub.show('stories');
  assert.match(textOf(panel), /No stories yet/);
  await hub.show('sharp');
  assert.match(textOf(panel), /numbers for this chart are not available/);
});

test('spectrum helpers retain centres, reject nonfinite numbers and keep panel endpoints', async () => {
  const instruments = [{ id: 'radio', bands: [
    { name: 'Low centre', from_um: 10000, to_um: 10000 }, { name: 'High centre', from_um: 300000, to_um: 300000 },
    { name: 'Invalid', from_um: 1, to_um: Infinity }, { name: 'Invalid', from_um: NaN, to_um: 2 },
  ], resolution_m: Infinity, revisit_days: 1 }];
  assert.deepEqual(spectrumRows(instruments), [{ label: 'RADIO', bands: [
    { name: 'Low centre', from: 10000, to: 10000 }, { name: 'High centre', from: 300000, to: 300000 },
  ] }]);
  assert.deepEqual(sharpPoints([...instruments, { id: 'invalid', resolution_m: 1, revisit_days: Infinity }]), []);
  const { hub, panel } = setup({ response: { instruments, regions: [{ label: 'Radio', from_um: 10000, to_um: 300000 }] } });
  await hub.render();
  const charts = withClass(panel, 'learn-chart');
  assert.equal(charts.length, 1);
  assert.match(charts[0].innerHTML, /Low centre/);
  assert.match(charts[0].innerHTML, /High centre/);
  assert.equal([...charts[0].innerHTML.matchAll(/class="chart-centre"/g)].length, 2);
});
