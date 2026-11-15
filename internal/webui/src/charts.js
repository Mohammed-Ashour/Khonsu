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

// Endpoint text stays inside the plot rather than straddling the viewBox edge.
const tickAnchor = (position, left, right) => (position - left < 24 ? 'start' : right - position < 24 ? 'end' : 'middle');

function axisLabels(xLabel, yLabel, right = WIDTH - PAD.right) {
  return `<text class="chart-axis-label" x="${(PAD.left + right) / 2}" y="${HEIGHT - 4}" text-anchor="middle">${escapeText(xLabel)}</text>`
    + `<text class="chart-axis-label" x="6" y="${(PAD.top + HEIGHT - PAD.bottom) / 2}" text-anchor="middle" transform="rotate(-90 6 ${(PAD.top + HEIGHT - PAD.bottom) / 2})">${escapeText(yLabel)}</text>`;
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
  const xAxis = xTicks.map((tick) => `<text class="chart-tick" x="${x(tick).toFixed(1)}" y="${HEIGHT - PAD.bottom + 13}" text-anchor="${tickAnchor(x(tick), PAD.left, WIDTH - PAD.right)}">${escapeText(tick)}</text>`).join('');
  const path = clean.map((p, i) => `${i ? 'L' : 'M'}${x(p.x).toFixed(1)},${y(p.y).toFixed(1)}`).join('');
  const marks = highlight.map((h) => clean.find((p) => p.x === h.x) && { ...h, point: clean.find((p) => p.x === h.x) }).filter(Boolean)
    .map(({ point, label }) => `<circle class="chart-mark" cx="${x(point.x).toFixed(1)}" cy="${y(point.y).toFixed(1)}" r="3.5"/><text class="chart-note" x="${x(point.x).toFixed(1)}" y="${(y(point.y) - 7).toFixed(1)}" text-anchor="${tickAnchor(x(point.x), PAD.left, WIDTH - PAD.right)}">${escapeText(label)}</text>`).join('');
  const svg = frame(title, `${grid}${xAxis}<path class="chart-line" d="${path}"/>${marks}${axisLabels(xLabel, yLabel)}`);
  return svg + table(title, [xLabel, yLabel], clean.map((p) => [p.x, format(p.y)]));
}

// Points stay at their true coordinates. Numbered callouts occupy a separate column,
// so nearby instruments need no displaced names or collision-placement algorithm.
export function scatterChart({ title, xLabel, yLabel, points }) {
  const clean = points.filter((p) => Number.isFinite(p?.x) && Number.isFinite(p?.y) && p.x > 0 && p.y > 0);
  if (!clean.length) return '';
  const xs = clean.map((p) => p.x);
  const ys = clean.map((p) => p.y);
  const xMin = 10 ** Math.floor(Math.log10(Math.min(...xs)));
  const xMax = Math.max(xMin * 10, 10 ** Math.ceil(Math.log10(Math.max(...xs))));
  const yMin = 10 ** Math.floor(Math.log10(Math.min(...ys)));
  const yMax = Math.max(yMin * 10, 10 ** Math.ceil(Math.log10(Math.max(...ys))));
  const right = WIDTH - 48;
  const x = logScale(xMin, xMax, PAD.left + 4, right);
  const y = logScale(yMin, yMax, HEIGHT - PAD.bottom, PAD.top);
  const grid = logTicks(yMin, yMax).map((tick) => `<line class="chart-grid" x1="${PAD.left}" x2="${right}" y1="${y(tick).toFixed(1)}" y2="${y(tick).toFixed(1)}"/><text class="chart-tick" x="${PAD.left - 5}" y="${(y(tick) + 3).toFixed(1)}" text-anchor="end">${escapeText(format(tick))}</text>`).join('')
    + logTicks(xMin, xMax).map((tick) => `<text class="chart-tick" x="${x(tick).toFixed(1)}" y="${HEIGHT - PAD.bottom + 13}" text-anchor="${tickAnchor(x(tick), PAD.left + 4, right)}">${escapeText(tick >= 1000 ? `${format(tick / 1000)}k` : format(tick))}</text>`).join('');
  const byCoordinate = new Map();
  for (const point of clean) {
    const key = `${point.x},${point.y}`;
    if (!byCoordinate.has(key)) byCoordinate.set(key, []);
    byCoordinate.get(key).push(point);
  }
  const groups = [...byCoordinate.values()].sort((a, b) => b[0].y - a[0].y || a[0].x - b[0].x);
  const callouts = groups.map((group, i) => {
    const point = group[0];
    const labelY = PAD.top + 6 + i * (HEIGHT - PAD.bottom - PAD.top - 12) / Math.max(1, groups.length - 1);
    return { group, number: i + 1, cx: x(point.x).toFixed(1), cy: y(point.y).toFixed(1), labelY: labelY.toFixed(1) };
  });
  const leaders = callouts.map(({ cx, cy, labelY }) => `<line class="chart-leader" x1="${cx}" y1="${cy}" x2="${WIDTH - 25}" y2="${labelY}" stroke="var(--muted)" stroke-width="0.5"/>`).join('');
  const dots = callouts.map(({ group, number, cx, cy, labelY }) => `<g class="chart-point"><title>${escapeText(`${number}: ${group.map((p) => p.label).join(', ')}`)}</title><circle cx="${cx}" cy="${cy}" r="2.5"/><text class="chart-note" x="${WIDTH - 20}" y="${Number(labelY) + 3}" text-anchor="middle">${number}</text></g>`).join('');
  const svg = frame(title, `${grid}${leaders}${dots}${axisLabels(`${xLabel} (log)`, `${yLabel} (log)`, right)}`);
  const key = `<p class="note">Numbers link dots to the key. Instruments at identical coordinates share a number. Each axis tick is ten times the previous one; k means thousand.</p><ol class="note">${groups.map((group) => `<li>${group.map((p) => escapeText(p.label)).join(', ')}</li>`).join('')}</ol>`;
  return svg + key + table(title, ['Key', 'Instrument', xLabel, yLabel], callouts.flatMap(({ group, number }) => group.map((p) => [number, p.label, format(p.x), format(p.y)])));
}

// Wavelengths are in micrometres. Equal endpoints identify a centre, not a bandwidth.
export function spectrumChart({ title, regions, rows, min = 0.3, max = 300000 }) {
  if (!(Number.isFinite(min) && Number.isFinite(max) && min > 0 && max > min)) return '';
  const inDomain = (band) => Number.isFinite(band?.from) && Number.isFinite(band?.to)
    && band.from > 0 && band.to >= band.from && band.to >= min && band.from <= max;
  const clean = rows.map((row) => ({ ...row, bands: row.bands.filter(inDomain) })).filter((row) => row.bands.length);
  if (!clean.length) return '';
  const rowHeight = 18;
  const top = 36;
  const height = top + clean.length * rowHeight + 30;
  const left = PAD.left + 40;
  const right = WIDTH - PAD.right;
  const x = logScale(min, max, left, right);
  const shaded = regions.filter((r) => inDomain(r) && r.to > min && r.from < max).map((r, i) => {
    const x1 = x(Math.max(min, r.from));
    const x2 = x(Math.min(max, r.to));
    return `<rect class="chart-region chart-region-${i % 6}" x="${x1.toFixed(1)}" y="${top - 4}" width="${(x2 - x1).toFixed(1)}" height="${clean.length * rowHeight + 8}"/>`
      + `<text class="chart-note" x="${((x1 + x2) / 2).toFixed(1)}" y="${top - 8 - (i % 2) * 9}" text-anchor="middle">${escapeText(r.label)}</text>`;
  }).join('');
  const wavelength = (band) => band.from === band.to ? `Centre: ${format(band.from)} µm` : `${format(band.from)}–${format(band.to)} µm (range)`;
  const bands = clean.map((row, i) => {
    const yRow = top + i * rowHeight;
    const label = `<text class="chart-tick" x="${PAD.left + 34}" y="${yRow + 11}" text-anchor="end">${escapeText(row.label)}</text>`;
    const marks = row.bands.map((band) => {
      const x1 = x(Math.max(min, band.from));
      const x2 = x(Math.min(max, band.to));
      const description = `<title>${escapeText(`${row.label} ${band.name}: ${wavelength(band)}`)}</title>`;
      if (band.from === band.to) return `<line class="chart-centre" x1="${x1.toFixed(1)}" x2="${x1.toFixed(1)}" y1="${yRow + 2}" y2="${yRow + rowHeight - 2}" stroke="var(--accent)" stroke-width="2">${description}</line>`;
      return `<rect class="chart-band" x="${x1.toFixed(1)}" y="${yRow + 3}" width="${(x2 - x1).toFixed(1)}" height="${rowHeight - 6}">${description}</rect>`;
    }).join('');
    return label + marks;
  }).join('');
  const ticks = logTicks(min, max).map((tick) => `<text class="chart-tick" x="${x(tick).toFixed(1)}" y="${height - 14}" text-anchor="${tickAnchor(x(tick), left, right)}">${escapeText(tick >= 1000 ? `${format(tick / 10000)} cm` : `${format(tick)} µm`)}</text>`).join('');
  const svg = `<svg class="chart" viewBox="0 0 ${WIDTH} ${height}" role="img" aria-label="${escapeText(title)}" xmlns="http://www.w3.org/2000/svg">${shaded}${bands}${ticks}</svg>`;
  const key = '<p class="note">Lines mark centre wavelengths, not bandwidths. Bars show reported wavelength ranges. Ranges stop at the panel edges; the table keeps their full endpoints.</p>';
  const tableRows = clean.flatMap((row) => row.bands.map((band) => [row.label, band.name, wavelength(band)]));
  return svg + key + table(title, ['Instrument', 'Band', 'Wavelength'], tableRows);
}

// Horizontal bars for a few labelled values, such as a percentage per city.
export function barChart({ title, unit = '', bars, approximate = unit === '%' }) {
  if (bars.some((bar) => !Number.isFinite(bar?.value) || bar.value < 0)) throw new RangeError('Bar values must be finite and nonnegative');
  const clean = bars;
  if (!clean.length) return '';
  const rowHeight = 22;
  const height = clean.length * rowHeight + 16;
  const maxValue = Math.max(...clean.map((bar) => bar.value), 0) || 1;
  const x = linearScale(0, maxValue, 90, WIDTH - 40);
  const rows = clean.map((bar, i) => {
    const y = 8 + i * rowHeight;
    return `<text class="chart-tick" x="84" y="${y + 13}" text-anchor="end">${escapeText(bar.label)}</text>`
      + `<rect class="chart-band" x="90" y="${y + 3}" width="${(x(bar.value) - 90).toFixed(1)}" height="${rowHeight - 8}"/>`
      + `<text class="chart-note" x="${(x(bar.value) + 4).toFixed(1)}" y="${y + 13}">${escapeText(`${approximate ? '≈' : ''}${format(bar.value)}${unit}`)}</text>`;
  }).join('');
  const svg = `<svg class="chart" viewBox="0 0 ${WIDTH} ${height}" role="img" aria-label="${escapeText(title)}" xmlns="http://www.w3.org/2000/svg"><line class="chart-grid" x1="90" x2="90" y1="0" y2="${height}"/>${rows}</svg>`;
  const context = approximate ? '<p class="note">≈ means approximately. See the accompanying source for the comparison period and uncertainty.</p>' : '';
  return svg + context + table(title, ['', unit ? `Value (${unit})` : 'Value'], clean.map((bar) => [bar.label, `${approximate ? '≈' : ''}${format(bar.value)}`]));
}

// Decimal-year observations become calendar-year means. Keep the actual last x,
// not its year, so callers can label the observation date. For NOAA's roughly
// ten-day sampling, a year is likely partial if its first/last observation is
// more than 31 days from the year boundary. Apply this to every year's coverage.
// This conservative boundary check does not certify completeness or detect gaps
// inside a year. Callers must label partialYears, including the first/last bins.
export function annualSeries(points) {
  const years = new Map();
  let through = null;
  for (const point of points ?? []) {
    if (!Number.isFinite(point?.x) || !Number.isFinite(point?.y)) continue;
    const year = Math.floor(point.x);
    const entry = years.get(year) ?? { sum: 0, count: 0, first: point.x, last: point.x };
    entry.sum += point.y;
    entry.count += 1;
    entry.first = Math.min(entry.first, point.x);
    entry.last = Math.max(entry.last, point.x);
    through = through === null ? point.x : Math.max(through, point.x);
    years.set(year, entry);
  }
  const ordered = [...years.entries()].sort((a, b) => a[0] - b[0]);
  const partialYears = ordered.filter(([year, { first, last }]) => {
    const days = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 366 : 365;
    return first - year > 31 / days || year + 1 - last > 31 / days;
  }).map(([year]) => year);
  return {
    points: ordered.map(([year, { sum, count }]) => ({ x: year, y: Number((sum / count).toFixed(1)) })),
    partialYears,
    through,
  };
}

// Compatibility helper for consumers that only need the means.
export function yearlyAverages(points) {
  return annualSeries(points).points;
}
