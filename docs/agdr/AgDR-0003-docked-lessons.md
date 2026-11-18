---
id: AgDR-0003
timestamp: 2026-11-17T20:15:00Z
agent: codex
model: openai-codex/gpt-6.1-sol
trigger: user-prompt
status: executed
---

# Dock lessons beside the globe

> In the context of issue #74, facing lesson cards that obscure the globe and its controls, I decided to use the existing left column for lessons and stack them below the globe on small screens, accepting that the catalog yields its column during a lesson.

## Context
- Learn already replaces the catalog in the left column, with a keyboard-resizable width.
- Lessons and stories share one player, sourced content and scene state.
- The inspector must remain available because orbit lessons point at its readouts.
- The current floating card obscures labels, imagery credits and camera tools.

## Options considered
| Option | Pros | Cons |
|---|---|---|
| Shrink the floating card | Small CSS change | Still covers satellites and attribution |
| Dock lessons in the existing column | Removes overlap; reuses resizing and Learn layout | Catalog and lesson cannot be visible together |
| Collapse both panels into a presentation mode | Largest globe | Adds a second layout mode and hides lesson readouts |

## Decision
Choose the docked column because it removes overlap without adding a new layout mode or dependency. Catalog, Learn and lesson share one desktop column. Opening Learn preserves the lesson; closing Learn returns to it. Stopping a lesson restores its launch context where possible. On small screens the lesson is a normal row immediately below the globe, not a sheet covering it.

Keep focus handling in the player and column visibility in the browser host. Focus the heading on entry and successful step changes; keep comparison and answer focus stable. Only a small persistent status node announces step changes. Escape dismisses transient controls first and closes the lesson only when no dialog or other transient interaction owns the key.

## Consequences
- Existing content, API, scene resolution and resizer storage stay unchanged.
- Lessons scroll within the desktop column; mobile content uses page scrolling.
- The headline redesign and optional presentation mode remain separate follow-ups.

## Artifacts
- https://github.com/Mohammed-Ashour/Khonsu/issues/74
- docs/design/docked-lessons.md
