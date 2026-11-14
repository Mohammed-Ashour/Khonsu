import { appendSources } from './datatab.js';
import { barChart, lineChart, yearlyAverages } from './charts.js';

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

export function createLessonPlayer({ api, element, card, list, layers, showSatellite, face, onChange }) {
  let lessons = null;
  let request = null;
  // The lesson on screen: { lesson, step, answer, compareOn }.
  let current = null;

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
  const showPicture = (picture) => layers()?.show(picture.layer, picture.date, boxOf(picture.box), { plain: Boolean(picture.plain) });
  const picturesOf = (step) => (Array.isArray(step.pictures) && step.pictures.length >= 2 ? step.pictures : null);

  // Sets the app up for a step. Only runs when a step is entered, not on every repaint.
  function enter(step) {
    if (step.satellite) showSatellite(step.satellite);
    const panel = layers();
    if (panel) {
      if (typeof step.base === 'string') panel.setBase(step.base);
      if (picturesOf(step)) showPicture(step.pictures[0]);
      else if (step.picture) showPicture(step.picture);
      else if (Array.isArray(step.compare) && step.compare.length === 2) panel.show(step.compare[0]);
      else if (typeof step.view === 'string') panel.show(step.view);
    }
    if (step.camera) face(step.camera.lat, step.camera.lon, step.camera.distance || null);
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
    const points = yearlyAverages((series.points ?? []).map((point) => ({ x: point.year, y: point.level_mm })));
    const last = (series.points ?? []).at(-1);
    const through = last ? ` Data through ${Math.floor(last.year)}.` : '';
    const trend = series.trend ? ` NOAA's stated trend: ${series.trend}.` : '';
    return { markup: lineChart({ title: chart.title, xLabel: 'Year', yLabel: 'Sea level (mm)', points }), feed, note: `Yearly averages of NOAA's values, computed by Khonsu.${through}${trend}` };
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
        showPicture(picture);
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
        layers()?.show(id);
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
    const { lesson } = current;
    card.classList?.toggle?.('is-story', Boolean(lesson.story));
    const step = lesson.steps[current.step];
    const total = lesson.steps.length;
    const nodes = [
      element('p', 'eyebrow', `${lesson.story ? 'Story' : 'Lesson'} · step ${current.step + 1} of ${total}`),
      element('h2', 'lesson-title', lesson.title),
    ];
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
    const actions = element('div', 'lesson-actions');
    const back = button('Back', 'text-button', () => go(current.step - 1));
    back.disabled = current.step === 0;
    const last = current.step === total - 1;
    const next = button(last ? 'Finish' : 'Next', 'primary-button', () => (last ? stop() : go(current.step + 1)));
    actions.append(back, next, button('Close', 'text-button lesson-close', stop));
    nodes.push(actions);
    card.replaceChildren(...nodes);
    card.hidden = false;
  }

  // The camera a step uses: its own, or the last one set before it.
  function cameraFor(lesson, index) {
    for (let i = index; i >= 0; i -= 1) {
      if (lesson.steps[i]?.camera) return lesson.steps[i].camera;
    }
    return null;
  }

  function go(index) {
    if (!current) return;
    const step = Math.max(0, Math.min(current.lesson.steps.length - 1, index));
    current = { lesson: current.lesson, step, answer: null, compareOn: 0 };
    enter(current.lesson.steps[step]);
    render();
    onChange();
  }

  // Starts a lesson at a step. Steps before it are applied first, so a shared link to a
  // later step shows the same satellite and picture as stepping there would.
  async function start(id, stepIndex = 0) {
    const all = await load();
    const lesson = all.find((item) => item.id === id);
    if (!lesson || !Array.isArray(lesson.steps) || !lesson.steps.length) return false;
    const step = Math.max(0, Math.min(lesson.steps.length - 1, stepIndex));
    for (const earlier of lesson.steps.slice(0, step)) enter({ ...earlier, camera: null });
    current = { lesson, step, answer: null, compareOn: 0 };
    enter({ ...lesson.steps[step], camera: cameraFor(lesson, step) });
    render();
    onChange();
    return true;
  }

  function stop() {
    current = null;
    render();
    onChange();
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
    current: () => (current ? { id: current.lesson.id, step: current.step } : null),
    // True while the lesson has placed the camera, so the app should not reframe it.
    holdsCamera: () => Boolean(current && cameraFor(current.lesson, current.step)),
  };
}
