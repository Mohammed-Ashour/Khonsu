import { appendSources } from './datatab.js';

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

  // Sets the app up for a step. Only runs when a step is entered, not on every repaint.
  function enter(step) {
    if (step.satellite) showSatellite(step.satellite);
    const panel = layers();
    if (panel) {
      if (typeof step.base === 'string') panel.setBase(step.base);
      if (Array.isArray(step.compare) && step.compare.length === 2) panel.show(step.compare[0]);
      else if (typeof step.view === 'string') panel.show(step.view);
    }
    if (step.camera) face(step.camera.lat, step.camera.lon);
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

  function render() {
    if (!current) {
      card.hidden = true;
      card.replaceChildren();
      return;
    }
    const { lesson } = current;
    const step = lesson.steps[current.step];
    const total = lesson.steps.length;
    const nodes = [
      element('p', 'eyebrow', `Lesson · step ${current.step + 1} of ${total}`),
      element('h2', 'lesson-title', lesson.title),
    ];
    const text = (step.text ?? []).map(safe).filter((item) => item.text);
    if (text.length) nodes.push(statementList(text));
    if (Array.isArray(step.compare) && step.compare.length === 2) nodes.push(compareRow(step));
    if (step.hint) nodes.push(element('p', 'note lesson-hint', step.hint));
    if (step.question) nodes.push(questionBlock(step.question));
    if (!layers()?.views().length && (step.view || step.compare || step.base)) {
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
    enter(lesson.steps[step]);
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
  };
}
