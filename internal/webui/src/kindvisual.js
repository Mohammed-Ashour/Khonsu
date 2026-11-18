import { appendSources } from './datatab.js';
import { imageryLegend } from './imagerylegend.js';

// Scientific prose and picture choices come from knowledge; these are explanatory
// drawings, never generated measurements. No provider request happens until load().
export const VISUAL_KINDS = ['visible', 'near_infrared', 'shortwave_infrared', 'thermal_infrared', 'water_vapour', 'night_lights', 'passive_microwave', 'radar', 'altimetry', 'atmospheric_composition', 'laser_ranging', 'imaging_spectroscopy'];
const esc = (text) => String(text ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const text = (x, y, value, className = '') => `<text x="${x}" y="${y}" class="${className}">${esc(value)}</text>`;

function arrow(x1, y1, x2, y2, className = '') {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const points = [[x2, y2], [x2 - 8 * Math.cos(angle - .45), y2 - 8 * Math.sin(angle - .45)], [x2 - 8 * Math.cos(angle + .45), y2 - 8 * Math.sin(angle + .45)]];
  return `<g class="${className}"><path d="M${x1} ${y1}L${x2} ${y2}" class="kind-ray"/><polygon points="${points.map((point) => point.join(',')).join(' ')}"/></g>`;
}
const satellite = (x, y) => `<g transform="translate(${x} ${y})" class="kind-satellite"><path d="M-30 -8h18v16h-18zM12 -8h18v16H12z"/><rect x="-10" y="-12" width="20" height="24" rx="3"/><path d="M-5 14L0 20l5-6" class="kind-ray"/></g>`;
const ground = '<path d="M12 169Q65 153 110 170T195 169T288 170V190H12Z" class="kind-ground"/>';
const tree = '<path d="M96 168v-33m-14 12 14-28 14 28Z" class="kind-tree"/>';

function capture(id) {
  const active = ['radar', 'altimetry', 'laser_ranging'].includes(id);
  if (active) {
    const radar = id === 'radar';
    const sx = radar ? 245 : 160;
    if (id === 'laser_ranging') {
      // Both returns originate within the same illuminated canopy/ground footprint.
      return '<path d="M12 170H288V190H12Z" class="kind-ground"/>'
        + `<g transform="translate(64 0)">${tree}</g>` + satellite(sx, 38)
        + arrow(154, 63, 154, 170, 'kind-outgoing')
        + arrow(160, 136, 166, 63, 'kind-return')
        + arrow(162, 170, 172, 63, 'kind-return')
        + text(18, 101, 'Laser pulse') + text(195, 130, 'Echoes')
        + text(16, 212, 'Return time gives distance');
    }
    return ground + satellite(sx, 38)
      + arrow(sx - 12, 63, radar ? 100 : 145, 160, 'kind-outgoing')
      + arrow(radar ? 116 : 177, 159, sx + 12, 63, 'kind-return')
      + text(18, 101, 'Radio pulse') + text(195, 130, 'Echo')
      + text(16, 212, id === 'radar' ? 'Send a pulse, measure the return' : 'Return time gives distance');
  }
  const reflected = ['visible', 'near_infrared', 'shortwave_infrared', 'atmospheric_composition', 'imaging_spectroscopy'].includes(id);
  let scene = ground + tree + satellite(245, 38);
  if (reflected) {
    scene += '<circle cx="36" cy="35" r="15" class="kind-sun"/>' + text(16, 69, 'Sun') + arrow(52, 52, 120, 154, 'kind-outgoing');
    scene += arrow(140, 154, 234, 65, 'kind-return') + text(185, 148, 'Reflected light');
  } else if (id === 'night_lights') {
    scene += '<path d="M117 168v-23h20v23m8 0v-35h22v35" class="kind-city"/>' + arrow(155, 130, 234, 65, 'kind-return') + text(185, 148, 'Faint light');
  } else if (id === 'water_vapour') {
    // GOES water-vapour channels receive emission from atmospheric moisture layers.
    scene += arrow(172, 124, 232, 65, 'kind-return') + text(124, 148, 'Atmospheric infrared');
  } else {
    scene += arrow(128, 157, 232, 65, 'kind-return') + text(185, 148, id === 'passive_microwave' ? 'Microwaves' : 'Infrared');
  }
  if (['water_vapour', 'atmospheric_composition', 'passive_microwave'].includes(id)) {
    scene += '<path d="M15 115Q65 92 112 114T210 113T286 110" class="kind-atmosphere"/>';
    scene += text(16, 92, id === 'water_vapour' ? 'Water vapour' : id === 'atmospheric_composition' ? 'Atmosphere' : 'Cloud');
  }
  if (id === 'imaging_spectroscopy' || id === 'atmospheric_composition') {
    scene += '<path d="M258 55l22 12m-22-12 22 20m-22-20 22 28" class="kind-spectrum-rays"/>';
  }
  const label = id === 'imaging_spectroscopy' ? 'Separate wavelengths for each pixel' : reflected ? 'Receive reflected sunlight' : id === 'night_lights' ? 'Receive low-light signals' : 'Receive naturally emitted energy';
  return scene + text(16, 212, label);
}

function output(id) {
  if (id === 'laser_ranging') {
    const points = Array.from({ length: 25 }, (_, i) => {
      const x = 30 + i * 10;
      const canopy = 70 + Math.sin(i * .8) * 18;
      return `<circle cx="${x}" cy="${canopy}" r="2.5" class="kind-sample"/><circle cx="${x}" cy="${155 + Math.sin(i * .25) * 5}" r="2" class="kind-ground-return"/>`;
    }).join('');
    return `<path d="M23 30V177H284" class="kind-axis"/>${points}${text(28, 27, 'Canopy returns')}${text(135, 143, 'Ground returns')}${text(98, 204, 'Along the track')}`;
  }
  if (id === 'imaging_spectroscopy') {
    return '<path d="M32 26V176H285" class="kind-axis"/><path d="M35 115Q65 40 96 80T146 113T195 65T240 125L277 70" class="kind-spectrum-a"/><path d="M35 140Q65 115 96 135T146 70T195 120T240 100L277 135" class="kind-spectrum-b"/>'
      + text(40, 24, 'Signal') + text(90, 204, 'Wavelength') + text(177, 30, 'Pixel A') + text(177, 51, 'Pixel B');
  }
  if (id === 'night_lights') {
    return '<path d="M24 155Q43 80 115 98T268 58" class="kind-coast"/>'
      + Array.from({ length: 30 }, (_, i) => `<circle cx="${40 + (i * 47) % 225}" cy="${45 + (i * 31) % 110}" r="${i % 4 === 0 ? 3 : 1.5}" class="kind-night-dot"/>`).join('')
      + text(30, 204, 'A low-light image, not a heat map');
  }
  const palettes = {
    visible: ['#527f63', '#95a276', '#9fb7c1', '#e9edf1'],
    near_infrared: ['#276c55', '#6cbc63', '#c3bd89', '#415b89'],
    shortwave_infrared: ['#a95453', '#6cbc63', '#73bac5', '#415b89'],
    thermal_infrared: ['#5477ae', '#66afa4', '#d3ba67', '#d27d59'],
    water_vapour: ['#4b67a0', '#799ac1', '#77b8ad', '#c3cf9d'],
    passive_microwave: ['#34506b', '#8eb6c7', '#c8dde4', '#eef4f5'],
    radar: ['#a7adb4', '#f1f0e8', '#4589cb', '#679c70'],
    altimetry: ['#5477ae', '#8eb6c7', '#e3c9bc', '#b96c66'],
    atmospheric_composition: ['#535990', '#5a93a3', '#a5bf92', '#d3ba67'],
  };
  const colors = palettes[id];
  const cells = Array.from({ length: 96 }, (_, i) => {
    const row = Math.floor(i / 12), col = i % 12;
    const value = (Math.floor(col / 3) + Math.floor(row / 2)) % colors.length;
    const missing = ['thermal_infrared', 'atmospheric_composition'].includes(id) && (row + col) % 11 === 0;
    return `<rect x="${24 + col * 21}" y="${24 + row * 18}" width="20" height="17" fill="${missing ? 'none' : colors[value]}"/>`;
  }).join('');
  const labels = {
    visible: 'Land, water and cloud', near_infrared: 'Near infrared displayed as green', shortwave_infrared: 'Shortwave infrared displayed as red',
    thermal_infrared: 'Cooler and warmer surfaces', water_vapour: 'Lower and higher water content', passive_microwave: 'Sea-ice concentration cells',
    radar: 'Processed water classes', altimetry: 'Below and above a reference', atmospheric_composition: 'A retrieved gas-column map',
  };
  return cells + text(16, 204, labels[id]);
}

export function kindDiagram(kind, which) {
  if (!VISUAL_KINDS.includes(kind?.id) || !['capture', 'example'].includes(which)) return '';
  const statement = kind.visual?.[which];
  const description = typeof statement?.text === 'string' ? statement.text : kind.name;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 230" class="kind-graphic" role="img" aria-label="${esc(description)}"><title>${esc(kind.name)}: ${which === 'capture' ? 'how it is captured' : 'illustrative output'}</title><desc>${esc(description)}</desc>${which === 'capture' ? capture(kind.id) : output(kind.id)}</svg>`;
}

// Picture URLs are local and require a registered layer. Never accept a provider URL
// or arbitrary path from the knowledge response.
export function kindPictureURL(picture, layers) {
  const layer = (layers ?? []).find((item) => item.id === picture?.layer);
  if (!layer || !/^[a-z0-9-]+$/.test(layer.id) || !/^\d{4}-\d{2}-\d{2}$/.test(picture.date ?? '')) return null;
  const date = new Date(`${picture.date}T00:00:00Z`);
  if (!Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== picture.date) return null;
  const params = new URLSearchParams({ layer: layer.id, date: picture.date });
  if (picture.box) {
    const { min_lat, min_lon, max_lat, max_lon } = picture.box;
    if (!layer.story || ![min_lat, min_lon, max_lat, max_lon].every(Number.isFinite) || min_lat < -90 || max_lat > 90 || min_lon < -180 || max_lon > 180 || min_lat >= max_lat || min_lon >= max_lon) return null;
    params.set('bbox', [min_lat, min_lon, max_lat, max_lon].join(','));
  }
  return `/api/v1/imagery?${params}`;
}

export function createKindVisual({ element, kind, catalog = Promise.resolve(null) }) {
  if (!VISUAL_KINDS.includes(kind?.id) || typeof kind.visual?.capture?.text !== 'string' || typeof kind.visual?.example?.text !== 'string') return null;
  const visual = kind.visual;
  const node = element('div', 'kind-visual');
  const example = element('figure', 'kind-figure');
  const badge = element('p', 'kind-example-label', 'Illustration · not measured data');
  const drawing = element('div', 'kind-drawing');
  drawing.innerHTML = kindDiagram(kind, 'example');
  const image = element('img', 'kind-observation');
  image.hidden = true;
  image.decoding = 'async';
  const caption = element('figcaption', 'note');
  const credit = element('div', 'kind-image-credit');
  const status = element('p', 'note kind-load-status');
  const retry = element('button', 'text-button', 'Try observation again');
  retry.type = 'button';
  retry.hidden = true;
  const explain = (target, statement) => {
    target.textContent = String(statement?.text || '');
    appendSources(element, target, (statement?.sources ?? []).filter((source) => /^https:\/\//.test(source?.url ?? '')));
  };
  explain(caption, visual.example);
  example.append(badge, drawing, image, caption, credit, status, retry);
  const captureFigure = element('figure', 'kind-figure kind-capture');
  const diagram = element('div', 'kind-drawing');
  diagram.innerHTML = kindDiagram(kind, 'capture');
  const captureCaption = element('figcaption', 'note');
  explain(captureCaption, visual.capture);
  captureFigure.append(element('p', 'kind-example-label', 'Schematic · not to scale'), diagram, captureCaption);
  node.append(element('h4', 'kind-visual-title', 'What the data looks like'), example, element('h4', 'kind-visual-title', 'How it is captured'), captureFigure);
  let started = false;
  async function load(force = false) {
    if (started && !force) return;
    started = true;
    if (!visual.picture) return;
    retry.hidden = true;
    const info = await Promise.resolve(catalog).catch(() => null);
    if (!info?.liveData) {
      status.textContent = info ? 'Observation images are off in local-file mode. The illustration and capture diagram still work.' : 'The imagery catalog is unavailable. The illustration and capture diagram still work.';
      return;
    }
    const url = kindPictureURL(visual.picture, info.layers);
    const layer = info.layers?.find((item) => item.id === visual.picture.layer);
    if (!url || !visual.observation) {
      status.textContent = 'No registered observation image is available for this example.';
      return;
    }
    status.textContent = `Loading a dated observation from ${layer.credit || 'NASA GIBS'}…`;
    image.alt = visual.observation.text;
    image.onload = () => {
      drawing.hidden = true;
      image.hidden = false;
      badge.textContent = `Example observation · ${visual.picture.date}`;
      explain(caption, visual.observation);
      const credits = [element('p', 'note', layer.credit || 'NASA GIBS')];
      const legend = imageryLegend(element, layer);
      if (legend) { legend.open = true; credits.push(legend); }
      credit.replaceChildren(...credits);
      status.textContent = '';
    };
    image.onerror = () => {
      status.textContent = 'The dated observation could not be loaded. The drawing above is an illustration, not substitute measurements.';
      retry.hidden = false;
    };
    image.src = url;
  }
  retry.addEventListener('click', () => load(true));
  return { node, load };
}
