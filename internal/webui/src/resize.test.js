import assert from 'node:assert/strict';
import { test } from 'node:test';
import { clampWidth, createResizers, keyWidth, readWidths } from './resize.js';

const memory = (initial = {}) => {
  const data = new Map(Object.entries(initial));
  return { data, getItem: (key) => data.get(key) ?? null, setItem: (key, value) => data.set(key, value) };
};

class FakeHandle {
  constructor() {
    this.attributes = {};
    this.listeners = {};
    this.classList = { add() {}, remove() {} };
  }

  setAttribute(name, value) {
    this.attributes[name] = String(value);
  }

  addEventListener(type, listener) {
    (this.listeners[type] ??= []).push(listener);
  }

  removeEventListener(type, listener) {
    this.listeners[type] = (this.listeners[type] ?? []).filter((item) => item !== listener);
  }

  fire(type, event = {}) {
    for (const listener of [...(this.listeners[type] ?? [])]) listener({ preventDefault() {}, ...event });
  }
}

const fakeRoot = () => {
  const props = {};
  return { props, style: { setProperty: (name, value) => { props[name] = value; } } };
};

test('clampWidth keeps each panel within its limits and leaves the globe room', () => {
  assert.equal(clampWidth('catalog', 100, 1600, 320), 200);
  assert.equal(clampWidth('catalog', 900, 1600, 320), 480);
  assert.equal(clampWidth('inspector', 500, 1600, 268), 500);
  assert.equal(clampWidth('inspector', 640, 1100, 268), 472, '1100 - 268 - 360');
  assert.equal(clampWidth('inspector', 640, 700, 268), 280, 'never below the minimum');
});

test('readWidths falls back to the defaults for missing or bad values', () => {
  assert.deepEqual(readWidths(memory()), { catalog: 268, inspector: 320 });
  assert.deepEqual(readWidths(memory({ 'khonsu.panels': '{"catalog":300,"inspector":"wide"}' })), { catalog: 300, inspector: 320 });
  assert.deepEqual(readWidths(memory({ 'khonsu.panels': 'not json' })), { catalog: 268, inspector: 320 });
});

test('keyWidth grows each panel away from the globe', () => {
  assert.equal(keyWidth('catalog', 'ArrowRight', false, 268), 284);
  assert.equal(keyWidth('catalog', 'ArrowLeft', true, 268), 204);
  assert.equal(keyWidth('inspector', 'ArrowLeft', false, 320), 336);
  assert.equal(keyWidth('inspector', 'End', false, 320), 640);
  assert.equal(keyWidth('inspector', 'Home', false, 320), 280);
  assert.equal(keyWidth('inspector', 'Enter', false, 320), null);
});

test('dragging, keys and double-click set, save and reset the widths', () => {
  const storage = memory();
  const root = fakeRoot();
  const handles = { catalog: new FakeHandle(), inspector: new FakeHandle() };
  const resizers = createResizers({ root, handles, storage, windowWidth: () => 1600 });
  assert.equal(root.props['--catalog-width'], '268px');
  assert.equal(handles.inspector.attributes.role, 'separator');

  handles.inspector.fire('pointerdown', { button: 0, pointerId: 1 });
  handles.inspector.fire('pointermove', { clientX: 1100 });
  assert.equal(root.props['--inspector-width'], '500px');
  assert.equal(storage.data.has('khonsu.panels'), false, 'saved only when the drag ends');
  handles.inspector.fire('pointerup');
  assert.deepEqual(JSON.parse(storage.data.get('khonsu.panels')), { catalog: 268, inspector: 500 });
  handles.inspector.fire('pointermove', { clientX: 200 });
  assert.equal(resizers.widths().inspector, 500, 'moves after the drag are ignored');

  handles.catalog.fire('keydown', { key: 'ArrowRight', shiftKey: true });
  assert.equal(resizers.widths().catalog, 332);
  assert.equal(handles.catalog.attributes['aria-valuenow'], '332');
  handles.catalog.fire('dblclick');
  assert.equal(resizers.widths().catalog, 268);
});

test('fit narrows saved widths for a smaller window without saving', () => {
  const storage = memory({ 'khonsu.panels': '{"catalog":480,"inspector":640}' });
  let width = 1600;
  const root = fakeRoot();
  const resizers = createResizers({ root, handles: { catalog: new FakeHandle(), inspector: new FakeHandle() }, storage, windowWidth: () => width });
  width = 1100;
  resizers.fit();
  const { catalog, inspector } = resizers.widths();
  assert.ok(catalog + inspector + 360 <= 1100, `${catalog} + ${inspector}`);
  assert.equal(storage.data.get('khonsu.panels'), '{"catalog":480,"inspector":640}');
});
