// Drag handles that resize the catalog and inspector columns. Widths live in CSS custom
// properties on the app, are kept within limits that leave the globe room, and are saved
// in this browser. Each handle is a focusable separator, so the arrow keys work too.

const STORAGE_KEY = 'khonsu.panels';
export const PANELS = {
  catalog: { variable: '--catalog-width', initial: 268, min: 200, max: 480, label: 'Resize the satellite list' },
  inspector: { variable: '--inspector-width', initial: 320, min: 280, max: 640, label: 'Resize the satellite details' },
};
// The globe keeps at least this much width between the two columns.
const MIN_VIEW = 360;
const STEP = 16;
const BIG_STEP = 64;

// The width a panel may take, given the window width and the other panel's width.
export function clampWidth(name, width, windowWidth, otherWidth) {
  const { min, max } = PANELS[name];
  const room = Math.max(min, windowWidth - otherWidth - MIN_VIEW);
  return Math.round(Math.min(Math.max(width, min), max, room));
}

// Reads saved widths, dropping anything that isn't a finite number.
export function readWidths(storage) {
  let saved = null;
  try {
    saved = JSON.parse(storage.getItem(STORAGE_KEY));
  } catch {
    saved = null;
  }
  const widths = {};
  for (const name of Object.keys(PANELS)) {
    const value = saved?.[name];
    widths[name] = Number.isFinite(value) ? value : PANELS[name].initial;
  }
  return widths;
}

// The width a key press asks for, or null for keys the handle ignores. The catalog grows to
// the right and the inspector to the left, so the arrow pointing away from the globe shrinks it.
export function keyWidth(name, key, shift, width) {
  const step = shift ? BIG_STEP : STEP;
  const grow = name === 'catalog' ? 'ArrowRight' : 'ArrowLeft';
  const shrink = name === 'catalog' ? 'ArrowLeft' : 'ArrowRight';
  if (key === grow) return width + step;
  if (key === shrink) return width - step;
  if (key === 'Home') return PANELS[name].min;
  if (key === 'End') return PANELS[name].max;
  return null;
}

export function createResizers({ root, handles, storage, windowWidth = () => window.innerWidth }) {
  const widths = readWidths(storage);
  const other = (name) => (name === 'catalog' ? 'inspector' : 'catalog');

  function apply(name, width, save = true) {
    widths[name] = clampWidth(name, width, windowWidth(), widths[other(name)]);
    root.style.setProperty(PANELS[name].variable, `${widths[name]}px`);
    const handle = handles[name];
    handle.setAttribute('aria-valuenow', String(widths[name]));
    if (save) {
      try {
        storage.setItem(STORAGE_KEY, JSON.stringify(widths));
      } catch {
        // A blocked or full store only means the width is not remembered.
      }
    }
  }

  for (const [name, handle] of Object.entries(handles)) {
    const panel = PANELS[name];
    handle.setAttribute('role', 'separator');
    handle.setAttribute('aria-orientation', 'vertical');
    handle.setAttribute('aria-label', panel.label);
    handle.setAttribute('aria-valuemin', String(panel.min));
    handle.setAttribute('aria-valuemax', String(panel.max));
    handle.tabIndex = 0;
    handle.title = 'Drag to resize. Double-click to reset.';

    handle.addEventListener('pointerdown', (event) => {
      if (event.button !== 0) return;
      event.preventDefault();
      handle.setPointerCapture?.(event.pointerId);
      handle.classList.add('is-dragging');
      const move = (moved) => {
        const width = name === 'catalog' ? moved.clientX : windowWidth() - moved.clientX;
        apply(name, width, false);
      };
      const stop = () => {
        handle.classList.remove('is-dragging');
        handle.removeEventListener('pointermove', move);
        handle.removeEventListener('pointerup', stop);
        handle.removeEventListener('pointercancel', stop);
        apply(name, widths[name]);
      };
      handle.addEventListener('pointermove', move);
      handle.addEventListener('pointerup', stop);
      handle.addEventListener('pointercancel', stop);
    });
    handle.addEventListener('keydown', (event) => {
      const width = keyWidth(name, event.key, event.shiftKey, widths[name]);
      if (width === null) return;
      event.preventDefault();
      apply(name, width);
    });
    handle.addEventListener('dblclick', () => apply(name, panel.initial));
  }

  // A smaller window can leave saved widths too wide, so they are clamped again, unsaved.
  const fit = () => {
    for (const name of Object.keys(handles)) apply(name, widths[name], false);
  };
  fit();
  return { fit, widths: () => ({ ...widths }) };
}
