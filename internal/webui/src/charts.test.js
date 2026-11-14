import assert from 'node:assert/strict';
import { test } from 'node:test';
import { escapeText, lineChart, linearScale, logScale, logTicks, niceTicks, scatterChart, spectrumChart } from './charts.js';

test('ticks and scales', () => {
  assert.deepEqual(niceTicks(0, 10), [0, 2, 4, 6, 8, 10]);
  assert.deepEqual(niceTicks(3.4, 7.9, 4), [4, 6]);
  assert.deepEqual(niceTicks(1979, 2025), [1980, 1990, 2000, 2010, 2020]);
  assert.deepEqual(logTicks(0.3, 3000), [1, 10, 100, 1000]);
  assert.equal(linearScale(0, 10, 0, 100)(5), 50);
  assert.equal(logScale(1, 100, 0, 100)(10), 50);
});

test('text is escaped everywhere', () => {
  assert.equal(escapeText('<a href="x">&</a>'), '&lt;a href=&quot;x&quot;&gt;&amp;&lt;/a&gt;');
  const svg = lineChart({ title: '<script>', xLabel: 'Year', yLabel: 'Extent', points: [{ x: 1, y: 2 }, { x: 2, y: 3 }], highlight: [{ x: 2, label: '<b>' }] });
  assert.doesNotMatch(svg, /<script>|<b>/);
  assert.match(svg, /&lt;script&gt;/);
});

test('a line chart draws the series, marks highlights and lists the numbers', () => {
  const points = [{ x: 2010, y: 4.9 }, { x: 2012, y: 3.57 }, { x: 2011, y: 4.6 }];
  const svg = lineChart({ title: 'September extent', xLabel: 'Year', yLabel: 'Million km²', points, highlight: [{ x: 2012, label: 'Lowest' }] });
  assert.match(svg, /<path class="chart-line" d="M[\d.]+,[\d.]+L[\d.]+,[\d.]+L/);
  assert.match(svg, /class="chart-mark"/);
  assert.match(svg, /Lowest/);
  assert.match(svg, /<td>2012<\/td><td>3\.57<\/td>/);
  assert.equal(lineChart({ title: 't', xLabel: 'x', yLabel: 'y', points: [{ x: 1, y: NaN }] }), '');
});

test('a scatter uses log axes and labels each point', () => {
  const svg = scatterChart({ title: 'Sharp or often', xLabel: 'Pixel (m)', yLabel: 'Days between looks', points: [{ label: 'MSI', x: 10, y: 5 }, { label: 'ABI', x: 500, y: 0.007 }] });
  assert.match(svg, /MSI/);
  assert.match(svg, /ABI/);
  assert.match(svg, /<td>ABI<\/td><td>500<\/td><td>0\.007<\/td>/);
});

test('a spectrum chart draws regions and band rows', () => {
  const svg = spectrumChart({
    title: 'Bands',
    regions: [{ label: 'Visible', from: 0.4, to: 0.7 }],
    rows: [{ label: 'ABI', bands: [{ name: 'Band 2', from: 0.59, to: 0.69 }] }],
  });
  assert.match(svg, /chart-region-0/);
  assert.match(svg, /ABI Band 2: 0\.59–0\.69 µm/);
  assert.match(svg, /<td>ABI<\/td><td>Band 2<\/td>/);
});
