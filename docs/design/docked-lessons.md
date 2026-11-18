# Docked lessons

Issue #74, first implementation. Architecture source: `ARCHITECTURE.md`. The browser owns column visibility and the player owns navigation and focus. No backend or provider contract changes.

## Design

The globe is the working surface; the lesson is a reading column, not a card on top of it. Keep the existing observatory palette and typography:

- Background `#090d1c`, panel `#0c1124`, raised surface `#141b30`.
- Text `#eef0f6`, secondary text `#c0c6d8`, action accent `#ebd193`.
- Existing system sans for reading and controls; existing serif brand. No new fonts.
- Left-aligned text, natural wrapping, no decorative numbering. Step counts describe an actual sequence.

Desktop:

```
[Learn or lesson] |        globe        | satellite inspector
                 | credits       tools |
[                       timeline                         ]
```

Small screens:

```
[header]
[globe, credits, camera tools]
[lesson or Learn, when open]
[timeline]
[inspector]
[catalog when requested]
```

A compact navigation row comes before the text in DOM and visual order. Close, Back and Next stay reachable without tabbing through citations. No entrance animation or automatic scrolling during step navigation. Opening a lesson on a small screen scrolls the globe into view; reduced-motion users get the same immediate scroll. Native details disclosures remain the interaction for optional scientific records and scales.

## State and accessibility

- Learn temporarily replaces a lesson without resetting its answers, step, camera or playback. On small screens it uses the row directly below the globe; opening it focuses the heading and scrolls the panel into view rather than leaving it below the inspector. *Satellites* opens the catalog to manage tracks, including recovery from the eight-satellite limit. *Resume lesson* returns from either view.
- Closing Learn returns to the lesson. Closing the lesson returns to its launch context, with a visible fallback focus target when the original trigger no longer exists.
- A heading receives focus on entry and successful step changes. Questions and comparisons preserve their current focus behavior.
- A persistent status node announces only the step count, not all text and sources.
- Escape closes transient surfaces before the lesson and leaves native dialogs and location picking in control of their own dismissal.
- The shared left separator resizes whichever reading panel is visible.

## Verification

- Chromium with SwiftShader, reduced motion, and only local requests, serving the real app from `internal/orbit/testdata/explain-gp.json`.
- Tested at 1440×900, 1280×800, 1024×768, 800×800, 640×800 and 390×844, including the header with Resume visible. Asserted dock/globe separation, useful mobile globe height, no page-width overflow, heading focus, step status updates, catalog/lesson resume, Learn/Escape behavior, Layers/tool separation and native-dialog dismissal.
- Picture credit layout was checked with deterministic injected text because local-file mode deliberately disables provider imagery. This is not a live-provider availability check.
- Existing and new Node unit tests cover column transitions, pending capacity failures, Escape precedence, launch-context restoration, mobile scrolling, status updates, comparison/answer focus and label direction.
- Sol review findings were reproduced and corrected: intermediate-width header overflow, fallback focus after a launch disclosure closes, and competing Layers/sky-popover Escape handlers. Browser regressions cover the actual disclosure and both popover handlers. Sky data uses synthetic local responses, not a live provider.
- Manual screen-reader testing and a live historical-imagery sweep remain outstanding.

## Scope

Dock lessons on desktop and below the globe on small screens. Anchor Layers beside its controls rather than at an arbitrary position over the lesson. Preserve imagery attribution and the existing globe tools. Keep the no-lesson viewing-window headline for a later focused change.
