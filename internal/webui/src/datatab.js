import { measuresView } from './logic.js';

// The Data tab: what the selected satellite measures, from Khonsu's curated notes, and
// buttons that put a matching view of that data on the globe. The notes come from this
// Khonsu server, so opening the tab sends nothing to any provider.
const NO_SELECTION = 'Add a satellite to see what it measures.';
const LOADING = 'Loading…';
const NOT_DESCRIBED = "Khonsu doesn't describe this satellite's instruments yet. Each description is written by hand, with a source for every sentence, so only some satellites have one.";
const NO_VIEWS = 'Views on the globe need live data and WebGL.';

// Adds a link for each source to a row, in the style of the Orbit tab's explanation.
export function appendSources(element, row, sources) {
  for (const source of sources) {
    const link = element('a', 'why-source', source.label);
    link.href = source.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.title = source.title;
    link.setAttribute('aria-label', `Source: ${source.title} (${source.label}, opens in a new tab)`);
    row.append(' ', link);
  }
}

export function createDataTab({ api, element, panel, selectedEntry, dataFailure, layers, startLesson = null }) {
  // The answer for each satellite is kept for the session; it never changes while Khonsu runs.
  const cache = new Map();
  // Kind sections the user opened stay open when the tab repaints.
  const openKinds = new Set();
  let token = 0;

  const note = (text) => element('p', 'note', text);

  function sourcedList(items) {
    const list = element('ul', 'why-list');
    list.append(...items.map((item) => {
      const row = element('li', '', item.text);
      appendSources(element, row, item.sources);
      return row;
    }));
    return list;
  }

  // kindId is the open section the button sits in, if any; it stays open after the repaint.
  function viewButton(view, kindId = null) {
    const on = layers()?.viewOn() === view.id;
    const button = element('button', 'text-button data-view', on ? `Showing ${view.name} · Hide` : `Show on the globe: ${view.name}`);
    button.type = 'button';
    button.dataset.focus = `view:${view.id}`;
    button.setAttribute('aria-pressed', String(on));
    button.addEventListener('click', () => {
      if (kindId) openKinds.add(kindId);
      if (layers()?.show(on ? '' : view.id)) render();
    });
    return button;
  }

  function described(view) {
    const nodes = [element('h3', 'why-title', 'What it measures')];
    const chips = element('ul', 'why-chips data-chips');
    chips.setAttribute('aria-label', 'Kinds of data');
    chips.append(...view.chips.map((name) => element('li', 'why-chip', name)));
    nodes.push(chips);
    if (view.items.length) nodes.push(sourcedList(view.items));
    for (const instrument of view.instruments) {
      nodes.push(element('h4', 'data-instrument', instrument.name));
      if (instrument.kinds.length) nodes.push(note(instrument.kinds.join(' · ')));
      if (instrument.items.length) nodes.push(sourcedList(instrument.items));
    }
    nodes.push(element('h3', 'why-title data-kinds-title', 'About these kinds of data'));
    const anyViews = layers()?.views().length > 0;
    for (const kind of view.kinds) {
      const box = element('details', 'data-kind');
      box.open = openKinds.has(kind.id);
      box.addEventListener('toggle', () => {
        if (box.open) openKinds.add(kind.id);
        else openKinds.delete(kind.id);
      });
      box.append(element('summary', '', kind.name), sourcedList(kind.items));
      if (kind.views.length || (startLesson && kind.lessons.length)) {
        const row = element('div', 'link-row');
        row.append(...kind.views.map((view) => viewButton(view, kind.id)));
        if (startLesson) {
          row.append(...kind.lessons.map((lesson) => {
            const button = element('button', 'text-button data-view data-lesson', `Lesson: ${lesson.title}`);
            button.type = 'button';
            button.addEventListener('click', () => startLesson(lesson.id));
            return button;
          }));
        }
        box.append(row);
      }
      nodes.push(box);
    }
    if (!anyViews) nodes.push(note(NO_VIEWS));
    return nodes;
  }

  function undescribed() {
    const nodes = [note(NOT_DESCRIBED)];
    const views = layers()?.views() ?? [];
    if (views.length) {
      nodes.push(element('h3', 'why-title', 'What satellites measure'));
      const row = element('div', 'link-row');
      row.append(...views.map((view) => viewButton(view)));
      nodes.push(row);
    }
    return nodes;
  }

  function paint(entry, answer) {
    if (answer.error) {
      panel.replaceChildren(dataFailure(answer.error));
      return;
    }
    const view = measuresView(answer.response, layers()?.views() ?? []);
    panel.replaceChildren(...(view ? described(view) : undescribed()));
  }

  // Shows the selected satellite. A late answer for an older selection is dropped.
  async function render() {
    const current = ++token;
    const entry = selectedEntry();
    if (!entry) {
      panel.replaceChildren(note(NO_SELECTION));
      return;
    }
    if (cache.has(entry.id)) {
      paint(entry, cache.get(entry.id));
      return;
    }
    panel.replaceChildren(note(LOADING));
    let answer;
    try {
      answer = { response: await api.satelliteData(entry.id) };
      cache.set(entry.id, answer);
    } catch (error) {
      if (error?.name === 'AbortError') return;
      answer = { error };
    }
    if (current === token && selectedEntry()?.id === entry.id) paint(entry, answer);
  }

  return { render };
}
