import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { annualSeries, barChart, escapeText, lineChart, linearScale, logScale, logTicks, niceTicks, scatterChart, spectrumChart, yearlyAverages } from './charts.js';
import { sharpPoints } from './learn.js';

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

test('a scatter uses log axes and keys each point', () => {
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

test('the local instrument scatter keeps keyed callouts separate at the 360-unit viewBox', () => {
  const knowledge = JSON.parse(readFileSync(new URL('../../knowledge/knowledge.json', import.meta.url), 'utf8'));
  const points = sharpPoints(knowledge.instruments);
  const markup = scatterChart({ title: 'Instrument comparison', xLabel: 'Finest resolution (m)', yLabel: 'Days between looks', points });
  const svg = markup.split('</svg>')[0];
  assert.match(svg, /viewBox="0 0 360 200"/);
  const groups = [...svg.matchAll(/<g class="chart-point">(.*?)<\/g>/g)].map(([, group]) => {
    const [, cx, cy] = group.match(/<circle cx="([\d.]+)" cy="([\d.]+)"/);
    const [, x, y, number] = group.match(/<text class="chart-note" x="([\d.]+)" y="([\d.]+)" text-anchor="middle">(\d+)<\/text>/);
    return { cx: Number(cx), cy: Number(cy), x: Number(x), y: Number(y), number: Number(number) };
  });
  assert.equal(groups.length, new Set(points.map((point) => `${point.x},${point.y}`)).size);
  assert.equal([...svg.matchAll(/class="chart-leader"/g)].length, groups.length);
  for (const [i, group] of groups.entries()) {
    assert.equal(group.number, i + 1);
    assert.ok(group.cx >= 50 && group.cx <= 312 && group.cy >= 14 && group.cy <= 166);
    // The 8.5-unit labels have their own column, away from every mark.
    assert.ok(group.x - 6 > 312 && group.x + 6 < 360);
    assert.ok(group.y - 8.5 >= 14 && group.y + 2 < 166);
    assert.match(svg, new RegExp(`x1="${group.cx.toFixed(1)}" y1="${group.cy.toFixed(1)}" x2="335" y2="${(group.y - 3).toFixed(1)}"`));
    for (const other of groups.slice(i + 1)) {
      assert.ok(Math.abs(other.y - group.y) >= 10, 'number labels must not overlap');
      assert.ok(Math.hypot(other.cx - group.cx, other.cy - group.cy) > 5, 'distinct local marks must not overlap');
    }
  }
  assert.match(svg, /<title>\d+: ABI, AHI<\/title>/);
  assert.match(markup, /<li>ABI, AHI<\/li>/);
  assert.equal([...svg.matchAll(/<circle /g)].length, points.length - 1, 'ABI and AHI share one mark');
  for (const point of points) assert.ok(markup.includes(`<td>${escapeText(point.label)}</td>`));
  // Conservative monospace width estimate, not a browser font/layout certification.
  for (const [, rawX, anchor, label] of svg.matchAll(/<text class="chart-tick" x="([\d.]+)" y="[\d.]+" text-anchor="(start|end|middle)">(.*?)<\/text>/g)) {
    const width = label.length * 6;
    const x = Number(rawX);
    const left = anchor === 'start' ? x : anchor === 'end' ? x - width : x - width / 2;
    assert.ok(left >= 0 && left + width <= 360, `${label} must stay within the viewBox`);
  }
});

test('scatter groups identical coordinates, escapes keys, and excludes invalid log values', () => {
  const markup = scatterChart({ title: '<scatter>', xLabel: 'x', yLabel: 'y', points: [
    { label: '<ABI>', x: 500, y: 0.00694 }, { label: 'AHI&', x: 500, y: 0.00694 },
    { label: 'invalid', x: Infinity, y: 1 }, { label: 'invalid', x: 0, y: 1 }, { label: 'invalid', x: 1, y: NaN }, null,
  ] });
  assert.equal([...markup.matchAll(/<circle /g)].length, 1);
  assert.match(markup, /<li>&lt;ABI&gt;, AHI&amp;<\/li>/);
  assert.match(markup, /<td>1<\/td><td>&lt;ABI&gt;<\/td><td>500<\/td><td>0\.00694<\/td>/);
  assert.doesNotMatch(markup, /<ABI>|invalid|NaN|Infinity/);
  assert.equal(scatterChart({ title: '', points: [{ x: -1, y: 1 }] }), '');
});

test('spectra distinguish centre markers from ranges in the picture and table', () => {
  const markup = spectrumChart({ title: '<Radio>', min: 10000, max: 300000, regions: [], rows: [
    { label: 'C-SAR', bands: [{ name: '5.405 GHz centre', from: 55470, to: 55470 }] },
    { label: '<SMAP>', bands: [{ name: '1.41 GHz & centre', from: 212600, to: 212600 }] },
    { label: 'range', bands: [{ name: 'Measured', from: 100000, to: 110000 }] },
  ] });
  assert.equal([...markup.matchAll(/class="chart-centre"/g)].length, 2);
  assert.equal([...markup.matchAll(/<rect class="chart-band"/g)].length, 1);
  assert.match(markup, /Centre: 55,470 µm/);
  assert.match(markup, /Centre: 212,600 µm/);
  assert.match(markup, /100,000–110,000 µm \(range\)/);
  assert.match(markup, /Lines mark centre wavelengths, not bandwidths/);
  assert.match(markup, /<td>&lt;SMAP&gt;<\/td><td>1\.41 GHz &amp; centre<\/td><td>Centre:/);
  assert.doesNotMatch(markup, /<SMAP>|<Radio>/);
});

test('spectra clip crossing ranges, keep original table endpoints and exclude outside or invalid bands', () => {
  const markup = spectrumChart({ title: 'Panel', min: 1, max: 10,
    regions: [{ label: 'clipped region', from: 0.1, to: 100 }, { label: 'outside region', from: 20, to: 30 }],
    rows: [{ label: 'Instrument', bands: [
      { name: 'crossing', from: 0.5, to: 20 }, { name: 'low centre', from: 1, to: 1 }, { name: 'high centre', from: 10, to: 10 },
      { name: 'outside', from: 11, to: 20 }, { name: 'invalid', from: 0, to: 5 }, { name: 'invalid', from: 3, to: Infinity },
      { name: 'invalid', from: 4, to: 2 }, { name: 'invalid', from: NaN, to: 5 },
    ] }],
  });
  assert.match(markup, /<rect class="chart-band" x="86\.0" y="39" width="262\.0"/);
  assert.match(markup, /<td>crossing<\/td><td>0\.5–20 µm \(range\)<\/td>/);
  assert.match(markup, /class="chart-centre" x1="86\.0" x2="86\.0"/);
  assert.match(markup, /class="chart-centre" x1="348\.0" x2="348\.0"/);
  assert.match(markup, /x="348\.0" y="70" text-anchor="end">10 µm/);
  assert.doesNotMatch(markup, /outside|invalid|NaN|Infinity/);
  assert.equal(spectrumChart({ title: '', regions: [], rows: [{ bands: [{ from: 100, to: 200 }] }], min: 1, max: 10 }), '');
  for (const [min, max] of [[0, 10], [10, 1], [1, Infinity], [NaN, 10]]) {
    assert.equal(spectrumChart({ title: '', regions: [], rows: [], min, max }), '');
  }
});

test('percentage bars use a true zero baseline and preserve approximate source context', () => {
  const markup = barChart({ title: '<Reductions>', unit: '%', bars: [
    { label: 'No change', value: 0 }, { label: '<Madrid>', value: 45 }, { label: 'Paris', value: 54 },
  ] });
  const widths = [...markup.matchAll(/<rect class="chart-band" x="90" y="[\d.]+" width="([\d.]+)"/g)].map((match) => Number(match[1]));
  assert.deepEqual(widths, [0, 191.7, 230]);
  assert.match(markup, /<line class="chart-grid" x1="90" x2="90"/);
  assert.match(markup, /≈45%/);
  assert.match(markup, /comparison period and uncertainty/);
  assert.match(markup, /<td>&lt;Madrid&gt;<\/td><td>≈45<\/td>/);
  assert.doesNotMatch(markup, /<Madrid>|<Reductions>/);
  assert.doesNotMatch(barChart({ title: '', bars: [{ label: 'Exact', value: 0 }] }), /≈/);
  assert.equal(barChart({ title: '', bars: [] }), '');
  for (const value of [-1, NaN, Infinity, -Infinity, '45', undefined]) {
    assert.throws(() => barChart({ title: '', bars: [{ label: 'Valid', value: 1 }, { label: 'Bad', value }] }), RangeError);
  }
});

test('annualSeries retains partial first/last years and the actual fractional endpoint', () => {
  const points = [
    { x: 2025.16, y: 12, satellite: 'Sentinel-6' }, { x: 1992.98, y: 2 },
    { x: 2024.98, y: 10 }, { x: 2025.02, y: 8 }, { x: 1992.95, y: 0 }, { x: 2024.02, y: 4 },
  ];
  const original = structuredClone(points);
  assert.deepEqual(annualSeries(points), {
    points: [{ x: 1992, y: 1 }, { x: 2024, y: 7 }, { x: 2025, y: 10 }], partialYears: [1992, 2025], through: 2025.16,
  });
  assert.deepEqual(yearlyAverages(points), annualSeries(points).points);
  assert.deepEqual(points, original, 'aggregation must not sort or change source observations');
});

test('annualSeries sorts years, ignores invalid observations/metadata and checks every year boundary', () => {
  const points = [
    { x: 2024.99, y: 2 }, { x: 2023.5, y: 5 }, { x: 2024.01, y: 1.1, metadata: { stale: true } },
    { x: 2022.99, y: 4 }, { x: 2022.01, y: 2 },
    { x: NaN, y: 0 }, { x: Infinity, y: 0 }, { x: 2026, y: Infinity }, { x: 2027, y: NaN },
    { x: '2028', y: 1 }, { x: 2029, y: '2' }, null, {},
  ];
  assert.deepEqual(annualSeries(points), {
    points: [{ x: 2022, y: 3 }, { x: 2023, y: 5 }, { x: 2024, y: 1.6 }], partialYears: [2023], through: 2024.99,
  });
  for (const input of [[], null, undefined, [null, { x: NaN, y: 2 }]]) {
    assert.deepEqual(annualSeries(input), { points: [], partialYears: [], through: null });
  }
});

test('annual completeness allows roughly ten-day sampling but flags missing boundary months', () => {
  for (const [year, days] of [[2023, 365], [2024, 366]]) {
    const sampled = Array.from({ length: 36 }, (_, i) => ({ x: year + (8 + i * 10) / days, y: i }));
    assert.deepEqual(annualSeries(sampled).partialYears, []);
    assert.deepEqual(annualSeries(sampled.filter((point) => point.x > year + 40 / days)).partialYears, [year]);
    assert.deepEqual(annualSeries(sampled.filter((point) => point.x < year + 320 / days)).partialYears, [year]);
  }
});
