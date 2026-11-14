import { appendSources } from './datatab.js';
import { scatterChart, spectrumChart } from './charts.js';

// The Learn panel. It takes the place of the satellite list while it is open, and keeps the
// globe in view, so a chapter can put a picture on the globe or pick a satellite next to the
// text that explains it. Everything comes from Khonsu's own notes at /api/v1/learn.

export const CHAPTERS = [
  { id: 'kinds', title: 'Kinds of data' },
  { id: 'sharp', title: 'Sharp or often' },
  { id: 'stories', title: 'Stories' },
  { id: 'lessons', title: 'Lessons' },
];

// Only https links are shown, so a bad server value can't become a script URL.
export function safeItems(statements) {
  return (Array.isArray(statements) ? statements : [])
    .filter((s) => typeof s?.text === 'string' && s.text.trim())
    .map((s) => ({
      text: s.text,
      sources: (Array.isArray(s.sources) ? s.sources : [])
        .filter((src) => typeof src?.url === 'string' && /^https:\/\//.test(src.url))
        .map((src) => ({ label: String(src.label || 'Source'), title: String(src.title || src.label || 'Source'), url: src.url })),
    }));
}

// Rows for the spectrum chart: each instrument with sourced band ranges, in micrometres.
export function spectrumRows(instruments) {
  return (instruments ?? [])
    .filter((instrument) => Array.isArray(instrument.bands) && instrument.bands.length)
    .map((instrument) => ({
      label: instrument.short || instrument.id.toUpperCase(),
      bands: instrument.bands.filter((band) => band.from_um > 0 && band.to_um >= band.from_um).map((band) => ({ name: band.name, from: band.from_um, to: band.to_um })),
    }))
    .filter((row) => row.bands.length);
}

// Points for the "sharp or often" chart: pixel size against days between looks.
export function sharpPoints(instruments) {
  return (instruments ?? [])
    .filter((instrument) => instrument.resolution_m > 0 && instrument.revisit_days > 0)
    .map((instrument) => ({ label: instrument.short || instrument.id.toUpperCase(), x: instrument.resolution_m, y: instrument.revisit_days }));
}

export function createLearnHub({ api, element, panel, layers, showSatellite, startLesson, startStory, onClose }) {
  let data = null;
  let request = null;
  let chapter = 'kinds';

  function load() {
    request ??= api.learn().then((body) => {
      data = body ?? {};
      return data;
    }, (error) => {
      request = null;
      throw error;
    });
    return request;
  }

  const note = (text, className = 'note') => element('p', className, text);

  function button(text, className, onClick) {
    const node = element('button', className, text);
    node.type = 'button';
    node.addEventListener('click', onClick);
    return node;
  }

  function sourcedList(items) {
    const list = element('ul', 'why-list');
    list.append(...items.map((item) => {
      const row = element('li', '', item.text);
      appendSources(element, row, item.sources);
      return row;
    }));
    return list;
  }

  // Charts are markup built from escaped text by charts.js.
  function chart(markup) {
    const box = element('div', 'learn-chart');
    box.innerHTML = markup;
    return box;
  }

  function kindCard(kind) {
    const card = element('details', 'learn-card');
    card.append(element('summary', 'learn-card-title', kind.name));
    // Chips say at a glance whether it works at night or through cloud; the list below says why.
    const conditions = (kind.conditions ?? []).filter((condition) => condition?.label);
    if (conditions.length) {
      const chips = element('ul', 'learn-conditions');
      chips.append(...conditions.map((condition) => element('li', `learn-condition ${condition.value ? 'is-yes' : 'is-no'}`, condition.label)));
      card.append(chips);
    }
    card.append(sourcedList(safeItems([...(kind.statements ?? []), ...conditions])));
    const uses = safeItems(kind.uses);
    if (uses.length) card.append(element('h4', 'learn-subtitle', 'Used today for'), sourcedList(uses));
    if ((kind.satellites ?? []).length) {
      card.append(element('h4', 'learn-subtitle', 'Collected by'));
      const row = element('div', 'learn-chips');
      row.append(...kind.satellites.map((sat) => button(sat.name, 'learn-chip', () => showSatellite(sat.norad_id))));
      card.append(row);
    }
    const views = (kind.layers ?? []).map((id) => layers()?.views().find((view) => view.id === id)).filter(Boolean);
    const actions = element('div', 'link-row');
    actions.append(...views.map((view) => button(`Show on the globe: ${view.name}`, 'text-button data-view', () => layers()?.show(view.id))));
    actions.append(...(kind.lessons ?? []).map((lesson) => button(`Lesson: ${lesson.title}`, 'text-button data-view', () => startLesson(lesson.id))));
    if (views.length || (kind.lessons ?? []).length) card.append(actions);
    return card;
  }

  function kindsChapter() {
    const nodes = [note('Satellites measure different kinds of light and radio waves. Each kind shows something the others miss. Open one to see what it is, what it is used for, and which satellites collect it.', 'learn-intro')];
    const rows = spectrumRows(data.instruments);
    if (rows.length && Array.isArray(data.regions) && data.regions.length) {
      nodes.push(element('h3', 'why-title', 'Where each instrument looks'));
      // Light and radio waves are thousands of times apart, so each gets its own panel.
      const regions = data.regions.map((r) => ({ label: r.label, from: r.from_um, to: r.to_um }));
      for (const [title, min, max] of [['Light: visible and infrared', 0.3, 20], ['Radio: radar and microwave', 10000, 300000]]) {
        const inRange = rows.map((row) => ({ ...row, bands: row.bands.filter((band) => band.to > min && band.from < max) })).filter((row) => row.bands.length);
        if (!inRange.length) continue;
        nodes.push(element('p', 'lesson-chart-title', title));
        nodes.push(chart(spectrumChart({ title: `${title}: bands of instruments Khonsu describes`, regions: regions.filter((r) => r.to > min && r.from < max), rows: inRange, min, max })));
      }
      if (data.regions_sources) nodes.push(sourcedList(safeItems(data.regions_sources)));
    }
    nodes.push(...(data.kinds ?? []).map(kindCard));
    return nodes;
  }

  function sharpChapter() {
    const points = sharpPoints(data.instruments);
    const nodes = [note('No instrument sees everything sharply and often. A sharper view needs a narrower swath, which means more time between looks.', 'learn-intro')];
    nodes.push(sourcedList(safeItems(data.sharp_statements)));
    if (points.length) {
      nodes.push(chart(scatterChart({ title: 'Pixel size against time between looks', xLabel: 'Smallest pixel (m)', yLabel: 'Days between looks', points })));
      const specs = (data.instruments ?? []).filter((instrument) => instrument.specs);
      if (specs.length) {
        nodes.push(element('h4', 'learn-subtitle', 'Where the numbers come from'));
        nodes.push(sourcedList(safeItems(specs.map((instrument) => instrument.specs))));
      }
    } else {
      nodes.push(note('The numbers for this chart are not available.'));
    }
    return nodes;
  }

  function storiesChapter() {
    const stories = data.stories ?? [];
    if (!stories.length) return [note('No stories yet.')];
    return [note('Real events, seen by the satellites in Khonsu. Each story puts the pictures from that day on the globe.', 'learn-intro'), ...stories.map((story) => {
      const card = element('div', 'learn-story');
      card.append(element('h3', 'learn-story-title', story.title), note(story.summary));
      if (story.when || story.where) card.append(note([story.when, story.where].filter(Boolean).join(' · '), 'note learn-story-meta'));
      card.append(button('Open the story', 'text-button', () => startStory(story.id)));
      return card;
    })];
  }

  function lessonsChapter() {
    const lessons = data.lessons ?? [];
    return [note('Short tours on the globe. Each step sets up the satellite and the picture, asks you to predict, then explains.', 'learn-intro'), ...lessons.map((lesson) => {
      const card = element('div', 'learn-story');
      card.append(element('h3', 'learn-story-title', lesson.title), note(lesson.summary), button('Start', 'text-button', () => startLesson(lesson.id)));
      return card;
    })];
  }

  async function render() {
    const header = element('div', 'learn-header');
    header.append(element('h2', 'eyebrow', 'Learn'), button('Close', 'text-button', onClose));
    const tabs = element('div', 'learn-tabs');
    tabs.setAttribute('role', 'tablist');
    tabs.setAttribute('aria-label', 'Learn chapters');
    tabs.append(...CHAPTERS.map((item) => {
      const tab = button(item.title, 'learn-tab', () => {
        chapter = item.id;
        render();
      });
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', String(item.id === chapter));
      return tab;
    }));
    const body = element('div', 'learn-body');
    body.append(note('Loading…'));
    panel.replaceChildren(header, tabs, body);
    try {
      await load();
    } catch (error) {
      body.replaceChildren(note(`Could not load the lessons: ${error.message}`, 'note is-error'));
      return;
    }
    const builders = { kinds: kindsChapter, sharp: sharpChapter, stories: storiesChapter, lessons: lessonsChapter };
    body.replaceChildren(...builders[chapter]());
  }

  return {
    render,
    show(id) {
      if (CHAPTERS.some((item) => item.id === id)) chapter = id;
      return render();
    },
    chapter: () => chapter,
  };
}
