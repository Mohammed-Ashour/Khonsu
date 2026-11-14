import assert from 'node:assert/strict';
import { test } from 'node:test';
import { safeItems, sharpPoints, spectrumRows } from './learn.js';

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
