import { imageryLegend } from './imagerylegend.js';

// The Layers panel: one base picture, any number of near-live cloud layers and an aurora estimate,
// or one "what satellites measure" view, which replaces the clouds while it is on. Choices are
// saved in storage and sent to the globe; the credit line names what is showing.

const STORAGE_KEY = 'khonsu.layers';
const TRUE_COLOR = 'true-color';
// Drawn under see-through story pictures of one area: Suomi NPP from 2012, whose wide swath
// leaves no gaps at the equator, and Terra before that.
const STORY_UNDER = 'story-true-color';
const STORY_UNDER_NPP = 'story-true-color-npp';
const NPP_FROM = '2012-02-01';
const LOADING = 'Loading…';
const GLOBE_OFF = 'The globe is unavailable, so layers are turned off.';
const LIVE_OFF = 'Live data is off while serving a local file, so pictures and the aurora are unavailable.';
const LIST_FAILED = 'Could not load the list of pictures.';
const WARNING = 'Could not load this picture.';
const AURORA_NOTE = "A rough boundary from NOAA's Kp index, not a forecast.";
const AURORA_CREDIT = 'Aurora estimated from NOAA SWPC Kp';

export function createLayers({ element, panel, credit, catalog, storage, globe, fetchHead = (url) => fetch(url, { method: 'HEAD' }), dataAge, now = Date.now }) {
  // The saved choices. `live` is NOAA's Kp; `tried` is a slider value kept in memory only.
  // `viewDate` is a past day for a dated view, set only by lessons and stories, never saved.
  const state = { base: '', overlays: [], view: '', viewDate: '', viewBox: null, viewPlain: false, aurora: false, live: null, tried: null };
  const freshness = new Map();
  const warnings = new Map();
  const baseInputs = new Map();
  const overlayInputs = new Map();
  const viewInputs = new Map();
  const ui = {};
  let layers = [];
  let byId = new Map();
  let active = false;
  // Bumped on every setLayers call, so a result for an older stack is dropped.
  let calls = 0;

  const boxText = (box) => [box.minLat, box.minLon, box.maxLat, box.maxLon].join(',');
  const imageryUrl = (id, date = '', box = null) => '/api/v1/imagery?layer=' + encodeURIComponent(id) + (date ? '&date=' + encodeURIComponent(date) : '') + (box ? '&bbox=' + encodeURIComponent(boxText(box)) : '');
  // Layers with a topic are the "what satellites measure" views, kept out of the everyday groups.
  // Story layers appear only in lessons and stories, for a chosen date.
  const everyday = () => layers.filter((layer) => !layer.topic && !layer.story);
  const views = () => layers.filter((layer) => layer.topic && !layer.story);
  const cloudIds = () => everyday().filter((layer) => layer.transparent === true).map((layer) => layer.id);
  const isBaseId = (id) => byId.has(id) && !byId.get(id).topic && byId.get(id).transparent !== true;
  const isViewId = (id) => byId.has(id) && Boolean(byId.get(id).topic || byId.get(id).story);
  const trueColor = () => (isBaseId(TRUE_COLOR) ? TRUE_COLOR : '');
  const auroraKp = () => state.tried ?? state.live;

  // Stack order: the base picture first, then overlays in catalog order. A view replaces the
  // overlays, and an opaque view covers the base, so only what it shows is requested.
  function stackLayers() {
    const view = state.view ? byId.get(state.view) : null;
    let ids = [...(state.base ? [state.base] : []), ...state.overlays];
    // A picture of one area leaves the rest of the globe as it is, so the base stays under it.
    if (view) ids = view.transparent === true || state.viewBox ? [...(state.base ? [state.base] : []), view.id] : [view.id];
    // A see-through story picture of one area gets a true-colour picture of the same day and
    // area beneath it, so it is not shown over today's blurry whole-Earth picture.
    const under = state.viewDate >= NPP_FROM ? STORY_UNDER_NPP : STORY_UNDER;
    if (view && view.story && view.transparent === true && state.viewBox && !state.viewPlain && byId.has(under)) ids.splice(ids.indexOf(view.id), 0, under);
    return ids
      .filter((id) => byId.has(id))
      .map((id) => {
        const isView = id === state.view || ((id === STORY_UNDER || id === STORY_UNDER_NPP) && Boolean(state.viewBox));
        const box = isView ? state.viewBox : null;
        return { id, url: imageryUrl(id, isView ? state.viewDate : '', box), transparent: byId.get(id).transparent === true, ...(box ? { box } : {}) };
      });
  }

  function persist() {
    try {
      // A dated or story view belongs to a lesson, so the panel reopens without it.
      const view = state.viewDate ? '' : state.view;
      storage.setItem(STORAGE_KEY, JSON.stringify({ base: state.base, overlays: state.overlays, view, aurora: state.aurora }));
    } catch {
      // A blocked or full store must not stop the layers from working.
    }
  }

  function restore() {
    let saved = null;
    try {
      saved = JSON.parse(storage.getItem(STORAGE_KEY));
    } catch {
      saved = null;
    }
    if (!saved || typeof saved !== 'object') return;
    state.base = typeof saved.base === 'string' && (saved.base === '' || isBaseId(saved.base)) ? saved.base : '';
    const wanted = new Set(Array.isArray(saved.overlays) ? saved.overlays : []);
    state.overlays = cloudIds().filter((id) => wanted.has(id));
    state.view = typeof saved.view === 'string' && isViewId(saved.view) && !byId.get(saved.view).story ? saved.view : '';
    state.aurora = saved.aurora === true;
  }

  function setOverlay(id, on) {
    const chosen = new Set(state.overlays);
    if (on) chosen.add(id);
    else chosen.delete(id);
    state.overlays = cloudIds().filter((cloud) => chosen.has(cloud));
  }

  function showCredit(lines) {
    credit.replaceChildren(...lines.map((line) => element('span', 'credit-line', line)));
    credit.hidden = lines.length === 0;
  }

  function renderCredit(shown) {
    const lines = shown.map((layer) => {
      const meta = freshness.get(layer.url);
      const date = meta?.pictureDate || new URLSearchParams(layer.url.split('?')[1]).get('date');
      return [layer.name, date ? `picture from ${date}` : '', layer.credit,
        meta?.fetchedAt ? `retrieved ${dataAge(meta.fetchedAt, now())}` : '', meta?.stale ? 'saved copy' : ''].filter(Boolean).join(' · ');
    });
    if (state.aurora) lines.push(AURORA_CREDIT);
    showCredit(lines);
    for (const layer of shown) {
      const legend = imageryLegend(element, layer);
      if (legend) credit.append(legend);
    }
  }

  // A HEAD request only reads headers; any failure just leaves the freshness out.
  async function freshnessOf(layer) {
    try {
      // The date and regional crop are part of the displayed image's identity.
      const response = await fetchHead(layer.url);
      if (response.ok === false) return null;
      const headers = response.headers;
      const fetchedAt = headers.get('X-Khonsu-Fetched-At');
      const pictureDate = headers.get('X-Khonsu-Picture-Date');
      return {
        pictureDate: /^\d{4}-\d{2}-\d{2}$/.test(pictureDate ?? '') ? pictureDate : '',
        fetchedAt: fetchedAt && !Number.isNaN(Date.parse(fetchedAt)) ? fetchedAt : '',
        stale: headers.get('X-Khonsu-Stale') === 'true',
      };
    } catch {
      return null;
    }
  }

  function setWarning(id, failed) {
    const node = warnings.get(id);
    if (!node) return;
    node.hidden = !failed;
    node.textContent = failed ? WARNING : '';
  }

  function settle(token, stack, results) {
    if (token !== calls) return;
    const loaded = (layer) => results[layer.id] === 'ok' || results[layer.id]?.status === 'ok';
    for (const layer of stack) {
      setWarning(layer.id, !loaded(layer));
      if (loaded(layer) && results[layer.id]?.meta) freshness.set(layer.url, results[layer.id].meta);
    }
    const shown = stack.filter(loaded).map((layer) => ({ ...byId.get(layer.id), ...layer }));
    renderCredit(shown);
    // Legacy adapters may only return a status. Real textures carry their GET headers,
    // so a later HEAD cannot assign a newer date to older retained pixels.
    Promise.all(shown.filter((layer) => !results[layer.id]?.meta).map(async (layer) => {
      const meta = await freshnessOf(layer);
      if (token === calls) freshness.set(layer.url, meta);
    })).then(() => {
      if (token === calls) renderCredit(shown);
    });
  }

  // Sends the whole stack to the globe. Every change goes through here, including an empty stack.
  function apply() {
    const stack = stackLayers();
    const token = ++calls;
    const ids = new Set(stack.map((layer) => layer.id));
    for (const id of warnings.keys()) {
      if (!ids.has(id)) setWarning(id, false);
    }
    freshness.clear();
    showCredit([LOADING]);
    globe.setAurora(state.aurora ? auroraKp() : null);
    let request;
    try {
      request = Promise.resolve(globe.setLayers(stack));
    } catch (error) {
      request = Promise.reject(error);
    }
    request.then(
      (results) => settle(token, stack, results ?? {}),
      () => settle(token, stack, {}),
    );
  }

  function commit() {
    persist();
    sync();
    apply();
  }

  function auroraNote() {
    if (state.tried !== null) return `Kp ${state.tried.toFixed(1)}, trying a value`;
    if (state.live !== null) return `Kp ${state.live.toFixed(1)}, now`;
    return 'Kp is not available yet';
  }

  // Makes the controls show the state. Only runs once the panel is rendered.
  function sync() {
    if (!active) return;
    for (const [id, input] of baseInputs) input.checked = id === state.base;
    for (const [id, input] of overlayInputs) input.checked = state.overlays.includes(id);
    for (const [id, input] of viewInputs) input.checked = id === state.view;
    ui.aurora.checked = state.aurora;
    ui.controls.hidden = !state.aurora;
    ui.slider.value = String(auroraKp() ?? 0);
    ui.kpNote.textContent = auroraNote();
    ui.back.hidden = state.tried === null;
  }

  function choiceRow({ type, name, value, title, note = null, warn = false }) {
    const input = element('input', null, null);
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.value = value;
    const label = element('label', 'layer-row', null);
    label.append(input, element('span', null, title));
    if (note) label.append(element('span', 'note', note));
    let warning = null;
    if (warn) {
      warning = element('span', 'note is-warning', null);
      warning.hidden = true;
      label.append(warning);
    }
    return { label, input, warning };
  }

  const PRESETS = [
    ['Clouds now', () => {
      state.base = trueColor();
      state.overlays = cloudIds();
      state.view = '';
      state.viewDate = '';
      state.viewBox = null;
    }],
    ['Recent daily Earth', () => {
      state.base = trueColor();
      state.overlays = [];
      state.view = '';
      state.viewDate = '';
      state.viewBox = null;
    }],
    ['Plain', () => {
      state.base = '';
      state.overlays = [];
      state.view = '';
      state.viewDate = '';
      state.viewBox = null;
      state.aurora = false;
      state.tried = null;
    }],
  ];

  function render() {
    baseInputs.clear();
    overlayInputs.clear();
    viewInputs.clear();
    warnings.clear();

    const baseGroup = element('fieldset', 'layer-group', null);
    baseGroup.append(element('legend', null, 'Base picture'));
    const plain = choiceRow({ type: 'radio', name: 'layer-base', value: '', title: 'Plain globe' });
    plain.input.addEventListener('change', () => {
      if (!plain.input.checked) return;
      state.base = '';
      commit();
    });
    baseInputs.set('', plain.input);
    baseGroup.append(plain.label);
    for (const layer of everyday().filter((item) => item.transparent !== true)) {
      const row = choiceRow({ type: 'radio', name: 'layer-base', value: layer.id, title: layer.name, note: layer.description, warn: true });
      row.input.addEventListener('change', () => {
        if (!row.input.checked) return;
        state.base = layer.id;
        commit();
      });
      baseInputs.set(layer.id, row.input);
      warnings.set(layer.id, row.warning);
      baseGroup.append(row.label);
    }

    const cloudGroup = element('fieldset', 'layer-group', null);
    cloudGroup.append(element('legend', null, 'Near-live clouds'));
    for (const layer of everyday().filter((item) => item.transparent === true)) {
      const row = choiceRow({ type: 'checkbox', name: 'layer-overlay', value: layer.id, title: layer.name, note: layer.description, warn: true });
      row.input.addEventListener('change', () => {
        setOverlay(layer.id, row.input.checked);
        commit();
      });
      overlayInputs.set(layer.id, row.input);
      warnings.set(layer.id, row.warning);
      cloudGroup.append(row.label);
    }

    const viewGroup = element('fieldset', 'layer-group', null);
    viewGroup.append(element('legend', null, 'What satellites measure'));
    const noView = choiceRow({ type: 'radio', name: 'layer-view', value: '', title: 'None' });
    noView.input.addEventListener('change', () => {
      if (!noView.input.checked) return;
      state.view = '';
      state.viewDate = '';
      state.viewBox = null;
      commit();
    });
    viewInputs.set('', noView.input);
    viewGroup.append(noView.label);
    for (const layer of views()) {
      const row = choiceRow({ type: 'radio', name: 'layer-view', value: layer.id, title: layer.name, note: layer.description, warn: true });
      row.input.addEventListener('change', () => {
        if (!row.input.checked) return;
        state.view = layer.id;
        state.viewDate = '';
        state.viewBox = null;
        commit();
      });
      viewInputs.set(layer.id, row.input);
      warnings.set(layer.id, row.warning);
      viewGroup.append(row.label);
    }

    const overlayGroup = element('fieldset', 'layer-group', null);
    overlayGroup.append(element('legend', null, 'Overlays'));
    const aurora = choiceRow({ type: 'checkbox', name: 'layer-aurora', value: 'aurora', title: 'Aurora, estimated from Kp' });
    aurora.input.addEventListener('change', () => {
      state.aurora = aurora.input.checked;
      if (!state.aurora) state.tried = null;
      commit();
    });
    overlayGroup.append(aurora.label, element('p', 'note', AURORA_NOTE));

    const slider = element('input', null, null);
    slider.setAttribute('type', 'range');
    slider.setAttribute('min', '0');
    slider.setAttribute('max', '9');
    slider.setAttribute('step', '0.33');
    slider.setAttribute('aria-label', 'Try a Kp value');
    const kpNote = element('p', 'note', null);
    const back = element('button', null, 'Back to now');
    back.setAttribute('type', 'button');
    back.hidden = true;
    const controls = element('div', 'aurora-controls', null);
    controls.append(slider, kpNote, back);
    controls.hidden = true;
    overlayGroup.append(controls);

    // Moving the slider only changes the aurora; it is not saved.
    slider.addEventListener('input', () => {
      const value = Number(slider.value);
      if (!Number.isFinite(value)) return;
      state.tried = value;
      sync();
      globe.setAurora(auroraKp());
    });
    back.addEventListener('click', () => {
      state.tried = null;
      sync();
      globe.setAurora(auroraKp());
    });

    const presets = element('div', 'layer-presets', null);
    presets.append(...PRESETS.map(([title, change]) => {
      const button = element('button', null, title);
      button.setAttribute('type', 'button');
      button.addEventListener('click', () => {
        change();
        commit();
      });
      return button;
    }));

    ui.aurora = aurora.input;
    ui.slider = slider;
    ui.kpNote = kpNote;
    ui.back = back;
    ui.controls = controls;

    const groups = [baseGroup, cloudGroup];
    if (views().length) groups.push(viewGroup);
    panel.replaceChildren(element('h2', 'eyebrow', 'Layers'), ...groups, overlayGroup, presets);
  }

  async function start() {
    if (!globe) {
      panel.replaceChildren(element('p', 'note', GLOBE_OFF));
      credit.hidden = true;
      return;
    }
    let data = null;
    try {
      data = await catalog;
    } catch {
      data = null;
    }
    const heading = element('h2', 'eyebrow', 'Layers');
    if (!data) {
      panel.replaceChildren(heading, element('p', 'note', LIST_FAILED));
      credit.hidden = true;
      return;
    }
    if (!data.liveData) {
      panel.replaceChildren(heading, element('p', 'note', LIVE_OFF));
      credit.hidden = true;
      return;
    }
    layers = Array.isArray(data.layers) ? data.layers : [];
    byId = new Map(layers.map((layer) => [layer.id, layer]));
    restore();
    render();
    active = true;
    sync();
    if (state.base || state.overlays.length || state.view || state.aurora) apply();
    else showCredit([]);
  }

  // The live Kp from NOAA. A tried value is kept, so new readings do not override it.
  function setKp(kp) {
    state.live = Number.isFinite(kp) ? kp : null;
    if (!active) return;
    if (state.aurora && state.tried === null) globe.setAurora(state.live);
    sync();
  }

  function selection() {
    return { base: state.base, overlays: [...state.overlays], view: state.view, aurora: state.aurora };
  }

  // Shows one "what satellites measure" view, or none for ''. The Data tab and lessons call this.
  // A transparent view goes over true colour when there is no base yet, so it has a backdrop.
  // Shows one view, or none for ''. Lessons and stories may give a past date, and an area
  // { minLat, minLon, maxLat, maxLon } for a sharp picture of one region.
  function show(id, date = '', box = null, { plain = false, base } = {}) {
    if (!active || (id !== '' && !isViewId(id))) return false;
    if (id && byId.get(id).story && !date) return false;
    if (typeof base === 'string' && (base === '' || isBaseId(base))) state.base = base;
    state.view = id;
    state.viewDate = id ? date : '';
    state.viewBox = id && box ? box : null;
    state.viewPlain = Boolean(plain);
    if (base === undefined && id && (byId.get(id).transparent === true || box) && !state.base) state.base = trueColor();
    commit();
    return true;
  }

  // Sets the base picture, or '' for the plain globe. Lessons use it for true colour.
  function setBase(id) {
    if (!active || (id !== '' && !isBaseId(id))) return false;
    state.base = id;
    commit();
    return true;
  }

  // Lessons start without saved imagery or estimates. Ordinary panel choices keep their stacking rules.
  function beginLesson() {
    if (!active) return false;
    Object.assign(state, { base: '', overlays: [], view: '', viewDate: '', viewBox: null, viewPlain: false, aurora: false, tried: null });
    commit();
    return true;
  }

  return { start, setKp, selection, show, setBase, beginLesson, views: () => views().map((layer) => ({ ...layer })), viewOn: () => state.view };
}
