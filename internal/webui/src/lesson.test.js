import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createLessonPlayer, lessonFromUrl, withLesson } from './lesson.js';

class FakeNode {
  constructor(tag) {
    this.tagName = tag;
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

  click() {
    for (const listener of this.listeners.click ?? []) listener({});
  }
}

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

function setup({ views = true } = {}) {
  const log = [];
  const panel = {
    views: () => (views ? [{ id: 'goes-east-visible', name: 'Visible' }, { id: 'goes-east-infrared', name: 'Infrared' }] : []),
    show: (id) => log.push(['show', id]),
    setBase: (id) => log.push(['base', id]),
  };
  const card = element('section');
  const list = element('div');
  let changes = 0;
  const player = createLessonPlayer({
    api: { lessons: async () => ({ lessons: LESSONS }) },
    element,
    card,
    list,
    layers: () => panel,
    showSatellite: (id) => log.push(['satellite', id]),
    face: (lat, lon) => log.push(['face', lat, lon]),
    onChange: () => { changes += 1; },
  });
  return { player, card, list, log, changes: () => changes };
}

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
  assert.deepEqual(log, [['satellite', '60133'], ['show', 'goes-east-visible'], ['face', 5, -75]]);
  assert.equal(card.hidden, false);
  assert.match(textOf(card), /step 1 of 3/);
  assert.equal(findAll(card, (node) => node.tagName === 'a').length, 1, 'only the https source is linked');
  assert.doesNotMatch(textOf(card), /Infrared works at night/, 'the answer waits for a prediction');

  buttonNamed(card, 'Nothing').click();
  assert.match(textOf(card), /Not quite: it's "Clouds"/);
  assert.match(textOf(card), /Infrared works at night/);
  assert.equal(buttonNamed(card, 'Clouds').classList.contains('is-right'), true);

  buttonNamed(card, 'Next').click();
  assert.deepEqual(log.at(-1), ['show', 'goes-east-infrared']);
  assert.match(textOf(card), /Come back later/);
  assert.deepEqual(player.current(), { id: 'light-and-heat', step: 1 });

  buttonNamed(card, 'Next').click();
  assert.deepEqual(log.at(-1), ['show', 'goes-east-visible'], 'a compare step starts on its first view');
  buttonNamed(card, 'Infrared').click();
  assert.deepEqual(log.at(-1), ['show', 'goes-east-infrared']);
  assert.equal(buttonNamed(card, 'Infrared').attributes['aria-pressed'], 'true');

  buttonNamed(card, 'Finish').click();
  assert.equal(card.hidden, true);
  assert.equal(player.current(), null);
  assert.ok(changes() >= 4);
});

test('a shared link to a later step applies the earlier steps without moving the camera twice', async () => {
  const { player, log } = setup();
  await player.start('light-and-heat', 1);
  assert.deepEqual(log, [['satellite', '60133'], ['show', 'goes-east-visible'], ['show', 'goes-east-infrared']]);
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
