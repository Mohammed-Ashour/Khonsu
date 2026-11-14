import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createDataTab } from './datatab.js';

class FakeNode {
  constructor(tag) {
    this.tagName = tag;
    this.className = '';
    this.textContent = '';
    this.children = [];
    this.attributes = {};
    this.dataset = {};
    this.listeners = {};
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
const find = (node, predicate) => (predicate(node) ? node : node.children.map((child) => find(child, predicate)).find(Boolean) ?? null);
const flush = () => new Promise((resolve) => setImmediate(resolve));

const SENTINEL = {
  described: true,
  profile: {
    name: 'Sentinel-2A',
    statements: [],
    instruments: [{ name: 'MultiSpectral Instrument (MSI)', kinds: ['visible', 'shortwave_infrared'], statements: [{ text: 'Samples 13 bands.', sources: [{ label: 'Copernicus', title: 'S2', url: 'https://sentiwiki.copernicus.eu/web/s2-mission' }] }] }],
    kinds: [
      { id: 'visible', name: 'Visible light', statements: [{ text: 'Eyes see it.', sources: [] }], layers: ['true-color'] },
      { id: 'shortwave_infrared', name: 'Shortwave infrared', statements: [{ text: 'Burns show.', sources: [] }], layers: ['false-color'] },
    ],
  },
};

function setup({ answers = {}, views = [{ id: 'false-color', name: 'False colour' }], selected = { id: '40697' } } = {}) {
  const calls = [];
  const shown = [];
  let viewOn = '';
  const layersApi = {
    views: () => views,
    viewOn: () => viewOn,
    show: (id) => {
      shown.push(id);
      viewOn = id;
      return true;
    },
  };
  const panel = element('div');
  const state = { selected };
  const tab = createDataTab({
    api: {
      satelliteData: async (id) => {
        calls.push(id);
        if (answers[id] instanceof Error) throw answers[id];
        return answers[id] ?? { described: false, profile: null };
      },
    },
    element,
    panel,
    selectedEntry: () => state.selected,
    dataFailure: (error) => element('p', 'note is-error', error.message),
    layers: () => layersApi,
  });
  return { tab, panel, calls, shown, state };
}

test('a described satellite lists instruments, kinds and a globe view, and asks once', async () => {
  const { tab, panel, calls, shown } = setup({ answers: { 40697: SENTINEL } });
  await tab.render();
  const text = textOf(panel);
  assert.match(text, /What it measures/);
  assert.match(text, /MultiSpectral Instrument \(MSI\)/);
  assert.match(text, /Visible light · Shortwave infrared/);
  assert.ok(find(panel, (node) => node.tagName === 'a' && node.href === 'https://sentiwiki.copernicus.eu/web/s2-mission'));
  const button = find(panel, (node) => node.tagName === 'button');
  assert.equal(button.textContent, 'Show on the globe: False colour');
  button.click();
  assert.deepEqual(shown, ['false-color']);
  const again = find(panel, (node) => node.tagName === 'button');
  assert.equal(again.attributes['aria-pressed'], 'true');
  again.click();
  assert.deepEqual(shown, ['false-color', ''], 'pressing it again hides the view');
  await tab.render();
  assert.deepEqual(calls, ['40697'], 'the answer is kept for the session');
});

test('an undescribed satellite says so and offers every view', async () => {
  const { tab, panel } = setup({ selected: { id: '12345' } });
  await tab.render();
  assert.match(textOf(panel), /doesn't describe this satellite's instruments yet/);
  assert.ok(find(panel, (node) => node.tagName === 'button' && node.textContent === 'Show on the globe: False colour'));
});

test('no selection, failures and late answers', async () => {
  const none = setup({ selected: null });
  await none.tab.render();
  assert.match(textOf(none.panel), /Add a satellite/);

  const failed = setup({ answers: { 40697: new Error('server down') } });
  await failed.tab.render();
  assert.match(textOf(failed.panel), /server down/);

  const late = setup({ answers: { 40697: SENTINEL } });
  const pending = late.tab.render();
  late.state.selected = { id: '12345' };
  await late.tab.render();
  await pending;
  await flush();
  assert.doesNotMatch(textOf(late.panel), /MultiSpectral/, 'the older selection does not repaint');
});
