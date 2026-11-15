// A searchable group picker: a button that shows the current group and opens a short list
// with a search box. It replaces a 44-option select, which could only be searched by typing
// the first letters. The list follows the combobox pattern, so the arrow keys move through
// the matches while focus stays in the search box.

// Groups whose name contains every word typed, in any order, names that start with the
// query first.
export function filterGroups(groups, query) {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return [...groups];
  const matches = groups.filter((name) => {
    const lower = name.toLowerCase();
    return words.every((word) => lower.includes(word));
  });
  const first = query.trim().toLowerCase();
  return [...matches.filter((name) => name.toLowerCase().startsWith(first)), ...matches.filter((name) => !name.toLowerCase().startsWith(first))];
}

export function createGroupPicker({ element, button, popover, input, list, onChoose, document: doc = globalThis.document }) {
  let groups = [];
  let current = '';
  let matches = [];
  let active = 0;

  function optionId(index) {
    return `group-option-${index}`;
  }

  function renderButton() {
    button.textContent = current || (groups.length ? 'Choose a group' : 'Loading groups…');
    button.disabled = groups.length === 0;
  }

  function renderList() {
    matches = filterGroups(groups, input.value);
    active = Math.min(active, Math.max(0, matches.length - 1));
    if (!matches.length) {
      list.replaceChildren(element('li', 'note group-empty', 'No group matches.'));
      input.removeAttribute('aria-activedescendant');
      return;
    }
    list.replaceChildren(...matches.map((name, index) => {
      const option = element('li', `group-option${index === active ? ' is-active' : ''}`, name);
      option.id = optionId(index);
      option.setAttribute('role', 'option');
      option.setAttribute('aria-selected', String(name === current));
      // mousedown, not click, so the search box keeps focus until the choice is made.
      option.addEventListener('mousedown', (event) => {
        event.preventDefault();
        choose(name);
      });
      return option;
    }));
    input.setAttribute('aria-activedescendant', optionId(active));
    list.children[active]?.scrollIntoView?.({ block: 'nearest' });
  }

  function isOpen() {
    return !popover.hidden;
  }

  function open() {
    if (!groups.length) return;
    popover.hidden = false;
    button.setAttribute('aria-expanded', 'true');
    input.value = '';
    active = Math.max(0, groups.indexOf(current));
    renderList();
    input.focus();
  }

  function close(returnFocus = true) {
    if (!isOpen()) return;
    popover.hidden = true;
    button.setAttribute('aria-expanded', 'false');
    if (returnFocus) button.focus();
  }

  function choose(name) {
    close();
    if (name === current) return;
    current = name;
    renderButton();
    onChoose(name);
  }

  button.addEventListener('click', () => (isOpen() ? close() : open()));
  input.addEventListener('input', () => {
    active = 0;
    renderList();
  });
  input.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!matches.length) return;
      active = (active + (event.key === 'ArrowDown' ? 1 : matches.length - 1)) % matches.length;
      renderList();
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (matches[active]) choose(matches[active]);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      close();
    }
  });
  // A click anywhere else closes the list without choosing.
  doc?.addEventListener?.('mousedown', (event) => {
    if (isOpen() && !popover.contains(event.target) && !button.contains(event.target)) close(false);
  });

  renderButton();
  return {
    setGroups(names) {
      groups = [...names];
      renderButton();
    },
    setCurrent(name) {
      current = name;
      renderButton();
    },
    current: () => current,
    open,
    close,
  };
}
