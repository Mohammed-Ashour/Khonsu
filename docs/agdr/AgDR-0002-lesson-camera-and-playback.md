---
id: AgDR-0002
timestamp: 2026-11-17T19:36:25Z
agent: codex
model: openai-codex/gpt-6.1-sol
trigger: user-prompt
status: executed
---

# Lesson camera and playback ownership

> In the context of PR #73, facing stale camera framing and playback that survives lesson exit, I decided to honor destination framing, fit the sampled orbit, and restore pre-lesson playback settings when leaving a playing scene, accepting that orbit framing can zoom farther out on narrow screens.

## Context
- The lesson player already resolves inherited satellite, camera and tab settings for direct entry and Back.
- Satellite selection currently consults the previous lesson's camera ownership.
- Molniya playback can leave the sampled orbit outside the camera frustum when framing uses only the current marker radius.
- Lesson playback changes the user's live, playing and speed settings.

## Options considered
| Option | Pros | Cons |
|---|---|---|
| Add a fixed Molniya camera and stop playback on close | Small content patch | Does not adapt to screen aspect or preserve prior playback settings |
| Fit existing sampled tracks and scope playback to resolved scenes | Reuses renderer data; covers Back, shared links and lesson switches | Needs playback snapshot and camera geometry regression tests |

## Decision
Choose sampled-orbit framing and resolved playback because both reuse existing ownership and avoid new scene fields or providers. Explicit lesson framing bypasses the previous scene's camera guard. The renderer fits the sampled track within both camera axes, subject to its existing maximum zoom. Playback inherits from preceding steps, releases on exit or a scene with no playback, and restores the previous live, playing and speed settings. User camera overrides and normal Earth occlusion remain possible.

## Consequences
- No schema or dependency changes.
- Framing a high elliptical orbit may show a smaller Earth, especially on narrow screens.
- Curated lesson claims remain separate from computed orbit estimates.

## Artifacts
- https://github.com/Mohammed-Ashour/Khonsu/pull/73
