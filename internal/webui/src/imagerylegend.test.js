import assert from 'node:assert/strict';
import { test } from 'node:test';
import { imageryLegend } from './imagerylegend.js';

const element = (tagName, className, textContent) => ({ tagName, className, textContent, children: [], append(...nodes) { this.children.push(...nodes); } });

test('an active quantitative layer exposes its provider key, units and equivalent description', () => {
  const layer = { name: 'Land surface temperature', legend: { url: '/api/v1/imagery-legend?layer=land-temperature', unit: 'K', description: 'Below 200 K to 350 K and above. Missing pixels are not cold ground.', source_url: 'https://gibs.earthdata.nasa.gov/legends/MODIS_Land_Surface_Temp_H.png' } };
  const result = imageryLegend(element, layer);
  assert.equal(result.tagName, 'details');
  assert.equal(result.children[0].textContent, 'Land surface temperature scale (K)');
  assert.equal(result.children[1].src, layer.legend.url);
  assert.equal(result.children[1].alt, layer.legend.description);
  assert.equal(result.children[2].textContent, layer.legend.description);
  assert.equal(result.children[3].rel, 'noopener noreferrer');
});

test('legend images can only use allowlisted local routes', () => {
  assert.equal(imageryLegend(element, {}), null);
  for (const url of ['https://external.test/image.png', 'javascript:alert(1)', '/api/v1/imagery-legend?layer=../secret']) {
    assert.equal(imageryLegend(element, { legend: { url } }), null);
  }
});
