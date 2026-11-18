import { appendSources } from './datatab.js';
import { annualSeries, barChart, lineChart } from './charts.js';

// Guided lessons: short steps that set the satellite, the globe picture and the camera,
// then explain what is on screen with a source for every sentence. A question asks for a
// prediction before the answer is shown. The lessons come from this Khonsu server.

// Reads ?lesson=id&step=n. Steps in the URL count from 1; the player counts from 0.
export function lessonFromUrl(search) {
  const params = new URLSearchParams(search);
  const id = params.get('lesson');
  if (!id || !/^[a-z0-9-]{1,64}$/.test(id)) return null;
  const step = Number.parseInt(params.get('step') ?? '1', 10);
  return { id, step: Number.isFinite(step) && step >= 1 ? step - 1 : 0 };
}

// Adds the lesson to a URL made by buildUrlState, or to the bare path.
export function withLesson(url, lesson) {
  if (!lesson) return url;
  const join = url.includes('?') ? '&' : '?';
  return `${url}${join}lesson=${encodeURIComponent(lesson.id)}&step=${lesson.step + 1}`;
}

// Only https links are shown, so a bad server value can't become a script URL.
function safe(statement) {
  return {
    text: String(statement?.text ?? ''),
    sources: (Array.isArray(statement?.sources) ? statement.sources : [])
      .filter((src) => typeof src?.url === 'string' && /^https:\/\//.test(src.url))
      .map((src) => ({ label: String(src.label || 'Source'), title: String(src.title || src.label || 'Source'), url: src.url })),
  };
}

// Lessons that explain an orbit explanation's class or patterns, in lesson order.
export function lessonsForOrbit(lessons, explanation) {
  if (!explanation) return [];
  const topics = new Set([explanation.regime, ...(explanation.patterns ?? [])].filter(Boolean));
  return (lessons ?? []).filter((lesson) => (lesson.orbits ?? []).some((topic) => topics.has(topic)));
}

export function createLessonPlayer({ api, element, card, list, layers, showSatellite, face, openTab = () => {}, play = () => {}, status, fallbackFocus = () => null, browseSatellites, onChange }) {
  let lessons = null;
  let request = null;
  // The lesson on screen: { lesson, step, answer, compareOn }.
  let current = null;
  let returnTrigger = null;
  let heading = null;

  function load() {
    request ??= api.lessons().then((body) => {
      lessons = Array.isArray(body?.lessons) ? body.lessons : [];
      return lessons;
    }, (error) => {
      request = null;
      throw error;
    });
    return request;
  }

  const viewName = (id) => layers()?.views().find((view) => view.id === id)?.name ?? id;

  const boxOf = (box) => (box ? { minLat: box.min_lat, minLon: box.min_lon, maxLat: box.max_lat, maxLon: box.max_lon } : null);
  const showPicture = (picture, base) => layers()?.show(picture.layer, picture.date, boxOf(picture.box), { plain: Boolean(picture.plain), base });
  const picturesOf = (step) => (Array.isArray(step.pictures) && step.pictures.length >= 2 ? step.pictures : null);

  // Resolve only the destination scene. A new visual choice replaces the whole previous choice.
  function sceneFor(lesson, index) {
    const scene = { base: '', view: '' };
    for (const step of lesson.steps.slice(0, index + 1)) {
      if (step.satellite) scene.satellite = step.satellite;
      if (step.camera) scene.camera = step.camera;
      if (step.tab) scene.tab = step.tab;
      if (step.play) scene.play = step.play;
      if (typeof step.base === 'string') scene.base = step.base;
      if (picturesOf(step) || step.picture || step.compare?.length === 2 || typeof step.view === 'string') {
        delete scene.pictures;
        delete scene.picture;
        delete scene.compare;
        delete scene.view;
        if (picturesOf(step)) scene.pictures = step.pictures;
        else if (step.picture) scene.picture = step.picture;
        else if (step.compare?.length === 2) scene.compare = step.compare;
        else scene.view = step.view;
      }
    }
    return scene;
  }

  function enter(scene, beginning = false) {
    // Selection is synchronous. A capacity refusal must leave the rest of the scene untouched.
    // With no camera of its own, the scene lets the app frame the satellite.
    if (scene.satellite && showSatellite(scene.satellite, { frame: !scene.camera }) === false) return false;
    const panel = layers();
    if (beginning) panel?.beginLesson();
    if (panel) {
      if (picturesOf(scene)) showPicture(scene.pictures[0], scene.base);
      else if (scene.picture) showPicture(scene.picture, scene.base);
      else panel.show(scene.compare?.[0] ?? scene.view, '', null, { base: scene.base });
    }
    if (scene.camera) face(scene.camera.lat, scene.camera.lon, scene.camera.distance || null);
    if (scene.tab) openTab(scene.tab);
    return true;
  }

  // Records are fetched when a chart is first shown, and kept for the session.
  const records = new Map();
  function record(chart) {
    const key = chart.dataset === 'sea-ice' ? `sea-ice:${chart.hemisphere}:${chart.month}` : chart.dataset;
    if (!records.has(key)) {
      const pending = chart.dataset === 'sea-ice' ? api.seaIce(chart.hemisphere, chart.month) : api.seaLevel();
      records.set(key, pending.catch((error) => {
        records.delete(key);
        throw error;
      }));
    }
    return records.get(key);
  }

  // The chart's markup, or a message. Bars carry their numbers; records come from the provider.
  async function chartMarkup(chart) {
    if (chart.dataset === 'bars') return { markup: barChart({ title: chart.title, unit: chart.unit, bars: chart.bars.map((bar) => ({ label: bar.label, value: bar.value })) }) };
    const feed = await record(chart);
    if (chart.dataset === 'sea-ice') {
      const points = (feed.data ?? []).map((row) => ({ x: row.year, y: row.extent_million_km2 }));
      const highlight = (chart.highlight ?? []).map((year) => ({ x: year, label: String(year) }));
      return { markup: lineChart({ title: chart.title, xLabel: 'Year', yLabel: `Extent (${chart.unit})`, points, highlight }), feed, note: 'Computed by Khonsu from NSIDC\'s monthly values.' };
    }
    const series = feed.data ?? {};
    const { points, partialYears, through } = annualSeries((series.points ?? []).map((point) => ({ x: point.year, y: point.level_mm })));
    const year = through === null ? null : Math.floor(through);
    const date = year === null ? null : new Date(Date.UTC(year, 0, 1) + Math.round((through - year) * (Date.UTC(year + 1, 0, 1) - Date.UTC(year, 0, 1))));
    const observed = date ? ` Latest observation: ${date.toISOString().slice(0, 10)} UTC, converted from NOAA's decimal year.` : '';
    const trend = series.trend ? ` NOAA's stated trend: ${series.trend}.` : '';
    const notes = Array.isArray(series.notes) ? series.notes.join(' ') : (series.notes ?? '');
    const highlight = partialYears.map((year) => ({ x: year, label: `${year} partial` }));
    const partial = partialYears.length ? ` Partial years: ${partialYears.join(', ')}. These means cover only the available observations.` : '';
    return { markup: lineChart({ title: chart.title, xLabel: 'Year', yLabel: 'Sea-level anomaly (mm)', points, highlight }), feed, note: `Annual means of NOAA's sea-level anomalies, computed by Khonsu.${partial}${observed} The seasonal cycle is removed. No glacial-isostatic adjustment is applied.${trend} ${notes}`.trim() };
  }

  function chartBlock(chart, token) {
    const box = element('div', 'lesson-chart');
    box.append(element('p', 'note', 'Loading the record…'));
    chartMarkup(chart).then(({ markup, feed, note }) => {
      if (token !== renders) return;
      const drawing = element('div', 'learn-chart');
      drawing.innerHTML = markup;
      const parts = [element('p', 'lesson-chart-title', chart.title), drawing];
      if (note) parts.push(element('p', 'note', note));
      if (feed?.source?.credit) parts.push(element('p', 'note lesson-credit', feed.source.credit));
      if (chart.source) parts.push(statementList([safe(chart.source)]));
      box.replaceChildren(...parts);
    }, (error) => {
      if (token !== renders) return;
      box.replaceChildren(element('p', 'note is-error', `Could not load this record: ${error.message}`));
    });
    return box;
  }

  function statementList(items) {
    const listNode = element('ul', 'why-list');
    listNode.append(...items.map((item) => {
      const row = element('li', '', item.text);
      appendSources(element, row, item.sources);
      return row;
    }));
    return listNode;
  }

  function button(text, className, onClick) {
    const node = element('button', className, text);
    node.type = 'button';
    node.dataset.lessonFocus = text;
    node.addEventListener('click', onClick);
    return node;
  }

  function pictureRow(step) {
    const row = element('div', 'lesson-compare');
    row.setAttribute('role', 'group');
    row.setAttribute('aria-label', 'Compare pictures');
    row.append(...step.pictures.map((picture, index) => {
      const node = button(picture.label || picture.date, 'text-button', () => {
        current.compareOn = index;
        showPicture(picture, step.base);
        render();
      });
      node.setAttribute('aria-pressed', String(current.compareOn === index));
      return node;
    }));
    return row;
  }

  function compareRow(step) {
    const row = element('div', 'lesson-compare');
    row.setAttribute('role', 'group');
    row.setAttribute('aria-label', 'Compare two views');
    row.append(...step.compare.map((id, index) => {
      const node = button(viewName(id), 'text-button', () => {
        current.compareOn = index;
        layers()?.show(id, '', null, { base: step.base });
        render();
      });
      node.setAttribute('aria-pressed', String(current.compareOn === index));
      return node;
    }));
    return row;
  }

  function questionBlock(question) {
    const box = element('div', 'lesson-question');
    box.append(element('p', 'lesson-prompt', question.prompt));
    const choices = element('div', 'lesson-choices');
    choices.append(...question.choices.map((choice, index) => {
      const node = button(choice, 'text-button lesson-choice', () => {
        current.answer = index;
        render();
      });
      node.setAttribute('aria-pressed', String(current.answer === index));
      if (current.answer !== null) {
        node.disabled = true;
        if (index === question.answer) node.classList.add('is-right');
      }
      return node;
    }));
    box.append(choices);
    if (current.answer !== null) {
      const verdict = current.answer === question.answer ? 'Yes.' : `Not quite: it's "${question.choices[question.answer]}".`;
      const feedback = element('div', 'lesson-feedback');
      feedback.setAttribute('role', 'status');
      feedback.append(element('p', 'lesson-verdict', verdict), statementList([safe(question.explain)]));
      box.append(feedback);
    }
    return box;
  }

  // Bumped on every repaint, so a chart that loads late is not drawn into an old card.
  let renders = 0;

  function render() {
    renders += 1;
    if (!current) {
      card.hidden = true;
      card.replaceChildren();
      return;
    }
    const focused = card.ownerDocument?.activeElement;
    const focusKey = card.contains?.(focused) ? focused?.dataset?.lessonFocus : null;
    const scrollTop = card.querySelector?.('.lesson-body')?.scrollTop ?? 0;
    const { lesson } = current;
    card.classList?.toggle?.('is-story', Boolean(lesson.story));
    const step = { ...lesson.steps[current.step], ...sceneFor(lesson, current.step) };
    const total = lesson.steps.length;
    const nodes = [];
    heading = element('h2', 'lesson-title', lesson.title);
    heading.id = 'lesson-title';
    heading.tabIndex = -1;
    if (current.error) {
      const error = element('p', 'note is-error', current.error);
      error.setAttribute('role', 'alert');
      nodes.push(error, button('Retry scene', 'text-button', () => go(current.pendingStep, current.pendingLesson)));
    }
    if (current.applied) {
      const text = (step.text ?? []).map(safe).filter((item) => item.text);
      if (text.length) nodes.push(statementList(text));
      if (picturesOf(step)) nodes.push(pictureRow(step));
      else if (Array.isArray(step.compare) && step.compare.length === 2) nodes.push(compareRow(step));
      if (step.chart) nodes.push(chartBlock(step.chart, renders));
      if (step.hint) nodes.push(element('p', 'note lesson-hint', step.hint));
      if (step.question) nodes.push(questionBlock(step.question));
      if (!layers()?.views().length && (step.view || step.compare || step.base || step.picture || step.pictures)) {
        nodes.push(element('p', 'note', 'The pictures in this lesson need live data and WebGL, so the globe stays as it is.'));
      }
    }
    const actions = element('div', 'lesson-actions');
    const back = button('Back', 'text-button', () => go(current.step - 1));
    back.disabled = !current.applied || current.step === 0;
    const last = current.step === total - 1;
    const next = button(last ? 'Finish' : 'Next', 'primary-button', () => (last ? stop() : go(current.step + 1)));
    next.disabled = !current.applied;
    actions.append(button('Close', 'text-button lesson-close', stop), back, next);
    const header = element('header', 'lesson-header');
    const progress = element('div', 'lesson-progress');
    progress.append(element('p', '', current.applied ? `${lesson.story ? 'Story' : 'Lesson'}, step ${current.step + 1} of ${total}` : 'Scene not applied'));
    if (browseSatellites) progress.append(button('Satellites', 'text-button', browseSatellites));
    header.append(actions, progress, heading);
    const body = element('div', 'lesson-body');
    body.append(...nodes);
    card.replaceChildren(header, body);
    body.scrollTop = scrollTop;
    card.hidden = false;
    if (focusKey) {
      const controls = [...(card.querySelectorAll?.('button') ?? [])];
      const replacement = controls.find((node) => node.dataset.lessonFocus === focusKey && !node.disabled);
      (replacement ?? controls.find((node) => node.textContent === 'Retry scene') ?? next).focus?.();
    }
  }

  function go(index, lesson = current?.lesson, beginning = false) {
    if (!lesson) return false;
    const step = Math.max(0, Math.min(lesson.steps.length - 1, index));
    const scene = sceneFor(lesson, step);
    const applied = enter(scene, beginning || !current?.applied || current.lesson !== lesson);
    if (applied) play(scene.play ?? null);
    if (applied) {
      current = { lesson, step, answer: null, compareOn: 0, applied: true };
    } else {
      // Keep an existing lesson and scene, even when starting a different lesson fails.
      current ??= { lesson, step, answer: null, compareOn: 0, applied: false };
      current.error = `This scene needs another satellite, but all tracking slots are full. Remove a satellite from Tracked, then retry, or close the lesson. ${current.applied ? 'Your current scene has not changed.' : 'No lesson scene has been applied.'}`;
      current.pendingStep = step;
      current.pendingLesson = lesson;
    }
    render();
    onChange();
    if (applied && status) {
      const announcement = `Step ${step + 1} of ${lesson.steps.length}. ${lesson.title}`;
      if (status.textContent !== announcement) status.textContent = announcement;
    }
    // Reveal the column before focusing; a hidden panel cannot receive focus.
    heading?.focus?.({ preventScroll: true });
    const body = card.querySelector?.('.lesson-body');
    if (body) body.scrollTop = 0;
    return applied;
  }

  // Shared links apply the resolved destination once, without fetching earlier images or tracks.
  async function start(id, stepIndex = 0) {
    const trigger = card.ownerDocument?.activeElement;
    const all = await load();
    const lesson = all.find((item) => item.id === id);
    if (!lesson || !Array.isArray(lesson.steps) || !lesson.steps.length) return false;
    if (!card.contains?.(trigger)) returnTrigger = trigger;
    return go(stepIndex, lesson, true);
  }

  function stop() {
    play(null);
    current = null;
    render();
    if (status) status.textContent = '';
    onChange();
    const fallback = fallbackFocus();
    const target = returnTrigger?.isConnected && returnTrigger !== card.ownerDocument?.body && !returnTrigger.closest?.('[hidden]') ? returnTrigger : fallback;
    target?.focus?.();
    // Connected controls in collapsed disclosures or inert regions may refuse focus.
    if (card.ownerDocument?.activeElement !== target) fallback?.focus?.();
    returnTrigger = null;
  }

  // Fills the lesson list with a start button for each lesson.
  async function renderList(onStart) {
    list.replaceChildren(element('p', 'note', 'Loading…'));
    let all;
    try {
      all = await load();
    } catch (error) {
      list.replaceChildren(element('p', 'note is-error', `Could not load the lessons: ${error.message}`));
      return;
    }
    list.replaceChildren(...all.map((lesson) => {
      const item = element('div', 'lesson-item');
      item.append(element('h3', 'lesson-item-title', lesson.title), element('p', 'note', lesson.summary));
      item.append(button('Start', 'text-button', () => {
        onStart?.();
        start(lesson.id);
      }));
      return item;
    }));
  }

  return {
    start,
    stop,
    renderList,
    // Lessons about this orbit explanation's class or patterns; none if they cannot load.
    forOrbit: (explanation) => load().then((all) => lessonsForOrbit(all, explanation), () => []),
    current: () => (current?.applied ? { id: current.lesson.id, step: current.step } : null),
    // True while the lesson has placed the camera, so the app should not reframe it.
    holdsCamera: () => Boolean(current?.applied && sceneFor(current.lesson, current.step).camera),
  };
}
