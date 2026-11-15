import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createGroupPicker, filterGroups } from './grouppicker.js';

const GROUPS = ['Space Stations', 'Weather', 'NOAA', 'GOES', 'Earth Resources', 'Starlink', 'Amateur Radio'];

test('filterGroups matches every word in any order, prefix matches first', () => {
  assert.deepEqual(filterGroups(GROUPS, ''), GROUPS);
  assert.deepEqual(filterGroups(GROUPS, 'stat'), ['Space Stations']);
  assert.deepEqual(filterGroups(GROUPS, 'sta'), ['Starlink', 'Space Stations']);
  assert.deepEqual(filterGroups(GROUPS, 'resources earth'), ['Earth Resources']);
  assert.deepEqual(filterGroups(GROUPS, 'zzz'), []);
});

class Node {
  constructor(tag) {
    this.tagName = tag;
    this.className = '';
    this.textContent = '';
    this.children = [];
    this.attributes = {};
    this.listeners = {};
    this.hidden = false;
    this.disabled = false;
    this.value = '';
    this.id = '';
  }

  append(...nodes) { this.children.push(...nodes); }

  replaceChildren(...nodes) { this.children = [...nodes]; }

  setAttribute(name, value) { this.attributes[name] = String(value); }

  removeAttribute(name) { delete this.attributes[name]; }

  addEventListener(type, listener) { (this.listeners[type] ??= []).push(listener); }

  fire(type, event = {}) { for (const listener of this.listeners[type] ?? []) listener({ preventDefault() {}, target: this, ...event }); }

  focus() { this.focused = true; }

  contains(node) { return node === this || this.children.some((child) => child.contains?.(node)); }
}

const element = (tag, className, text) => {
  const node = new Node(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

function setup() {
  const parts = { button: new Node('button'), popover: new Node('div'), input: new Node('input'), list: new Node('ul') };
  parts.popover.hidden = true;
  const doc = new Node('document');
  const chosen = [];
  const picker = createGroupPicker({ element, ...parts, onChoose: (name) => chosen.push(name), document: doc });
  return { picker, chosen, doc, ...parts };
}

test('the picker waits for groups, then searches and chooses with the keyboard', () => {
  const { picker, chosen, button, popover, input, list } = setup();
  assert.equal(button.textContent, 'Loading groups…');
  assert.equal(button.disabled, true);
  picker.setGroups(GROUPS);
  picker.setCurrent('Space Stations');
  assert.equal(button.textContent, 'Space Stations');

  button.fire('click');
  assert.equal(popover.hidden, false);
  assert.equal(input.focused, true);
  assert.equal(list.children.length, GROUPS.length);
  assert.equal(list.children[0].attributes['aria-selected'], 'true');

  input.value = 'wea';
  input.fire('input');
  assert.deepEqual(list.children.map((option) => option.textContent), ['Weather']);
  input.fire('keydown', { key: 'Enter' });
  assert.deepEqual(chosen, ['Weather']);
  assert.equal(popover.hidden, true);
  assert.equal(button.textContent, 'Weather');
  assert.equal(button.focused, true);
});

test('arrow keys wrap, Escape closes without choosing, and an outside click closes', () => {
  const { picker, chosen, button, popover, input, list, doc } = setup();
  picker.setGroups(GROUPS);
  picker.setCurrent('Space Stations');
  button.fire('click');
  input.fire('keydown', { key: 'ArrowUp' });
  assert.equal(input.attributes['aria-activedescendant'], `group-option-${GROUPS.length - 1}`);
  input.fire('keydown', { key: 'Escape' });
  assert.equal(popover.hidden, true);
  assert.deepEqual(chosen, []);

  button.fire('click');
  input.value = 'nothing like this';
  input.fire('input');
  assert.match(list.children[0].textContent, /No group matches/);
  input.fire('keydown', { key: 'Enter' });
  assert.deepEqual(chosen, []);
  doc.fire('mousedown', { target: new Node('main') });
  assert.equal(popover.hidden, true);

  button.fire('click');
  list.children[0].fire('mousedown');
  assert.deepEqual(chosen, [], 'choosing the current group changes nothing');
});
