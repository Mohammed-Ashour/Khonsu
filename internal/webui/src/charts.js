// Small SVG charts for lessons: a time series, a log-log scatter and a spectrum strip. Each
// returns markup built from escaped text, so it can be placed with innerHTML under the app's
// content policy, and a plain table of the same numbers for screen readers and anyone who
// wants the figures.

const WIDTH = 360;
const HEIGHT = 200;
const PAD = { top: 14, right: 12, bottom: 34, left: 46 };

export function escapeText(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

// Round numbers for an axis from min to max: about `count` steps of 1, 2 or 5 times a power of ten.
export function niceTicks(min, max, count = 5) {
  if (!(Number.isFinite(min) && Number.isFinite(max)) || max <= min) return [min];
  const raw = (max - min) / count;
  const power = 10 ** Math.floor(Math.log10(raw));
  const step = [1, 2, 5, 10].map((m) => m * power).find((candidate) => candidate >= raw);
  const ticks = [];
  for (let value = Math.ceil(min / step) * step; value <= max + step * 1e-9; value += step) ticks.push(Number(value.toPrecision(12)));
  return ticks;
}

// Powers of ten from min to max, for log axes.
export function logTicks(min, max) {
  const ticks = [];
  for (let power = Math.floor(Math.log10(min)); power <= Math.ceil(Math.log10(max)); power += 1) {
    const value = 10 ** power;
    if (value >= min * 0.999 && value <= max * 1.001) ticks.push(value);
  }
  return ticks;
}

export function linearScale(domainMin, domainMax, rangeMin, rangeMax) {
  const span = domainMax - domainMin || 1;
  return (value) => rangeMin + ((value - domainMin) / span) * (rangeMax - rangeMin);
}

export function logScale(domainMin, domainMax, rangeMin, rangeMax) {
  const low = Math.log10(domainMin);
  const span = Math.log10(domainMax) - low || 1;
  return (value) => rangeMin + ((Math.log10(value) - low) / span) * (rangeMax - rangeMin);
}

const format = (value) => (Math.abs(value) >= 1000 ? value.toLocaleString('en-GB') : String(Number(value.toPrecision(4))));

function frame(title, body) {
  return `<svg class="chart" viewBox="0 0 ${WIDTH} ${HEIGHT}" role="img" aria-label="${escapeText(title)}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
}

function table(caption, headers, rows) {
  const head = headers.map((cell) => `<th scope="col">${escapeText(cell)}</th>`).join('');
  const body = rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeText(cell)}</td>`).join('')}</tr>`).join('');
  return `<details class="chart-table"><summary>Show the numbers</summary><table><caption>${escapeText(caption)}</caption><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></details>`;
}

function axisLabels(xLabel, yLabel) {
  return `<text class="chart-axis-label" x="${(PAD.left + WIDTH - PAD.right) / 2}" y="${HEIGHT - 4}" text-anchor="middle">${escapeText(xLabel)}</text>`
    + `<text class="chart-axis-label" x="10" y="${(PAD.top + HEIGHT - PAD.bottom) / 2}" text-anchor="middle" transform="rotate(-90 10 ${(PAD.top + HEIGHT - PAD.bottom) / 2})">${escapeText(yLabel)}</text>`;
}

// A time series. `highlight` marks points by x, such as a record year.
export function lineChart({ title, xLabel, yLabel, points, highlight = [] }) {
  const clean = points.filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y)).sort((a, b) => a.x - b.x);
  if (clean.length < 2) return '';
  const xs = clean.map((p) => p.x);
  const ys = clean.map((p) => p.y);
  const yTicks = niceTicks(Math.min(...ys), Math.max(...ys));
  const yMin = Math.min(yTicks[0], ...ys);
  const yMax = Math.max(yTicks.at(-1), ...ys);
  const x = linearScale(Math.min(...xs), Math.max(...xs), PAD.left, WIDTH - PAD.right);
  const y = linearScale(yMin, yMax, HEIGHT - PAD.bottom, PAD.top);
  const grid = yTicks.map((tick) => `<line class="chart-grid" x1="${PAD.left}" x2="${WIDTH - PAD.right}" y1="${y(tick).toFixed(1)}" y2="${y(tick).toFixed(1)}"/><text class="chart-tick" x="${PAD.left - 5}" y="${(y(tick) + 3).toFixed(1)}" text-anchor="end">${escapeText(format(tick))}</text>`).join('');
  const xTicks = niceTicks(Math.min(...xs), Math.max(...xs), 5).filter((tick) => tick >= xs[0] && tick <= xs.at(-1));
  const xAxis = xTicks.map((tick) => `<text class="chart-tick" x="${x(tick).toFixed(1)}" y="${HEIGHT - PAD.bottom + 13}" text-anchor="middle">${escapeText(tick)}</text>`).join('');
  const path = clean.map((p, i) => `${i ? 'L' : 'M'}${x(p.x).toFixed(1)},${y(p.y).toFixed(1)}`).join('');
  const marks = highlight.map((h) => clean.find((p) => p.x === h.x) && { ...h, point: clean.find((p) => p.x === h.x) }).filter(Boolean)
    .map(({ point, label }) => `<circle class="chart-mark" cx="${x(point.x).toFixed(1)}" cy="${y(point.y).toFixed(1)}" r="3.5"/><text class="chart-note" x="${x(point.x).toFixed(1)}" y="${(y(point.y) - 7).toFixed(1)}" text-anchor="middle">${escapeText(label)}</text>`).join('');
  const svg = frame(title, `${grid}${xAxis}<path class="chart-line" d="${path}"/>${marks}${axisLabels(xLabel, yLabel)}`);
  return svg + table(title, [xLabel, yLabel], clean.map((p) => [p.x, format(p.y)]));
}

// Points on log axes, such as pixel size against time between looks.
export function scatterChart({ title, xLabel, yLabel, points }) {
  const clean = points.filter((p) => p.x > 0 && p.y > 0);
  if (!clean.length) return '';
  const xs = clean.map((p) => p.x);
  const ys = clean.map((p) => p.y);
  const xMin = 10 ** Math.floor(Math.log10(Math.min(...xs)));
  const xMax = 10 ** Math.ceil(Math.log10(Math.max(...xs)));
  const yMin = 10 ** Math.floor(Math.log10(Math.min(...ys)));
  const yMax = 10 ** Math.ceil(Math.log10(Math.max(...ys)));
  const x = logScale(xMin, xMax, PAD.left, WIDTH - PAD.right);
  const y = logScale(yMin, yMax, HEIGHT - PAD.bottom, PAD.top);
  const grid = logTicks(yMin, yMax).map((tick) => `<line class="chart-grid" x1="${PAD.left}" x2="${WIDTH - PAD.right}" y1="${y(tick).toFixed(1)}" y2="${y(tick).toFixed(1)}"/><text class="chart-tick" x="${PAD.left - 5}" y="${(y(tick) + 3).toFixed(1)}" text-anchor="end">${escapeText(format(tick))}</text>`).join('')
    + logTicks(xMin, xMax).map((tick) => `<text class="chart-tick" x="${x(tick).toFixed(1)}" y="${HEIGHT - PAD.bottom + 13}" text-anchor="middle">${escapeText(format(tick))}</text>`).join('');
  // Labels that would overlap the one before are moved down a line.
  const placed = [];
  const dots = clean.map((p) => {
    const cx = x(p.x);
    const cy = y(p.y);
    let ly = cy + 3;
    while (placed.some((other) => Math.abs(other.x - cx) < 34 && Math.abs(other.y - ly) < 9)) ly += 9;
    placed.push({ x: cx, y: ly });
    return `<g class="chart-point"><circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="4"/><text class="chart-note" x="${(cx + 6).toFixed(1)}" y="${ly.toFixed(1)}">${escapeText(p.label)}</text></g>`;
  }).join('');
  const svg = frame(title, `${grid}${dots}${axisLabels(xLabel, yLabel)}`);
  return svg + table(title, ['', xLabel, yLabel], clean.map((p) => [p.label, format(p.x), format(p.y)]));
}

// A wavelength strip on a log axis: shaded regions, and rows of bands, one row per instrument.
// Wavelengths are in micrometres.
export function spectrumChart({ title, regions, rows, min = 0.3, max = 300000 }) {
  const rowHeight = 18;
  const top = 36;
  const height = top + rows.length * rowHeight + 30;
  const x = logScale(min, max, PAD.left + 40, WIDTH - PAD.right);
  const shaded = regions.map((r, i) => {
    const x1 = x(Math.max(min, r.from));
    const x2 = x(Math.min(max, r.to));
    return `<rect class="chart-region chart-region-${i % 6}" x="${x1.toFixed(1)}" y="${top - 4}" width="${Math.max(1, x2 - x1).toFixed(1)}" height="${rows.length * rowHeight + 8}"/>`
      + `<text class="chart-note" x="${((x1 + x2) / 2).toFixed(1)}" y="${top - 8 - (i % 2) * 9}" text-anchor="middle">${escapeText(r.label)}</text>`;
  }).join('');
  const bands = rows.map((row, i) => {
    const yRow = top + i * rowHeight;
    const label = `<text class="chart-tick" x="${PAD.left + 34}" y="${yRow + 11}" text-anchor="end">${escapeText(row.label)}</text>`;
    const bars = row.bands.map((band) => {
      const x1 = x(band.from);
      const x2 = x(band.to);
      return `<rect class="chart-band" x="${x1.toFixed(1)}" y="${yRow + 3}" width="${Math.max(2, x2 - x1).toFixed(1)}" height="${rowHeight - 6}"><title>${escapeText(`${row.label} ${band.name}: ${format(band.from)}–${format(band.to)} µm`)}</title></rect>`;
    }).join('');
    return label + bars;
  }).join('');
  const ticks = logTicks(min, max).map((tick) => `<text class="chart-tick" x="${x(tick).toFixed(1)}" y="${height - 14}" text-anchor="middle">${escapeText(tick >= 1000 ? `${format(tick / 10000)} cm` : `${format(tick)} µm`)}</text>`).join('');
  const svg = `<svg class="chart" viewBox="0 0 ${WIDTH} ${height}" role="img" aria-label="${escapeText(title)}" xmlns="http://www.w3.org/2000/svg">${shaded}${bands}${ticks}</svg>`;
  const tableRows = rows.flatMap((row) => row.bands.map((band) => [row.label, band.name, `${format(band.from)}–${format(band.to)} µm`]));
  return svg + table(title, ['Instrument', 'Band', 'Wavelength'], tableRows);
}

// Horizontal bars for a few labelled values, such as a percentage per city.
export function barChart({ title, unit = '', bars }) {
  const clean = bars.filter((bar) => Number.isFinite(bar.value));
  if (!clean.length) return '';
  const rowHeight = 22;
  const height = clean.length * rowHeight + 16;
  const maxValue = Math.max(...clean.map((bar) => bar.value), 0) || 1;
  const x = linearScale(0, maxValue, 90, WIDTH - 40);
  const rows = clean.map((bar, i) => {
    const y = 8 + i * rowHeight;
    return `<text class="chart-tick" x="84" y="${y + 13}" text-anchor="end">${escapeText(bar.label)}</text>`
      + `<rect class="chart-band" x="90" y="${y + 3}" width="${Math.max(1, x(bar.value) - 90).toFixed(1)}" height="${rowHeight - 8}"/>`
      + `<text class="chart-note" x="${(x(bar.value) + 4).toFixed(1)}" y="${y + 13}">${escapeText(`${format(bar.value)}${unit}`)}</text>`;
  }).join('');
  const svg = `<svg class="chart" viewBox="0 0 ${WIDTH} ${height}" role="img" aria-label="${escapeText(title)}" xmlns="http://www.w3.org/2000/svg">${rows}</svg>`;
  return svg + table(title, ['', unit ? `Value (${unit})` : 'Value'], clean.map((bar) => [bar.label, format(bar.value)]));
}

// Averages points by whole year, for long records with many values a year.
export function yearlyAverages(points) {
  const years = new Map();
  for (const point of points) {
    if (!Number.isFinite(point.x) || !Number.isFinite(point.y)) continue;
    const year = Math.floor(point.x);
    const entry = years.get(year) ?? { sum: 0, count: 0 };
    entry.sum += point.y;
    entry.count += 1;
    years.set(year, entry);
  }
  return [...years.entries()].sort((a, b) => a[0] - b[0]).map(([year, { sum, count }]) => ({ x: year, y: Number((sum / count).toFixed(1)) }));
}
