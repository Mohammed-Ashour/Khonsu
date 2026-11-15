---
id: AgDR-0001
timestamp: 2026-11-14T20:22:32Z
agent: codex
model: openai-codex/gpt-6.1-sol
trigger: user-prompt
status: executed
---

# Reproducible scenes and honest data comparisons

> In the context of fixing the three reviewed PRs and the local Learn stories, facing scene state that depends on navigation history and claims that exceed the displayed data, I decided to resolve each scene from its preceding steps and keep product limitations beside each comparison to make shared links reproducible and explanations accurate, accepting that some pictures illustrate a published result rather than reproduce its analysis.

## Context

- `internal/knowledge/knowledge.json` already contains seven event stories and three lessons. The server exposes all ten through `/api/v1/lessons` and separates stories in `/api/v1/learn`.
- The lesson player currently applies only a destination step's changes. Back navigation can retain a later camera or satellite. Saved cloud and aurora preferences can contaminate a comparison.
- The satellite limit is eight. Lessons must report selection failure without replacing an unrelated tracked satellite or advancing to a mismatched explanation.
- ENCC night imagery cannot establish changes in electric lighting across nights. A river-width requirement is not spatial resolution, and generic radio-band categories are not instrument passbands.

## Options considered

| Option | Pros | Cons |
|---|---|---|
| Keep imperative scene changes and patch camera navigation only | Smallest immediate edit | Leaves satellite, picture and saved-overlay history dependent |
| Resolve the scene from the initial state and preceding steps | Same scene for forward, Back and direct entry; fits current content | Needs explicit scene-field inheritance and transition tests |
| Replace the player and introduce an analysis/imagery processing service | Could reproduce corrected scientific analyses | Unnecessary new infrastructure, dependencies and operational scope |

## Decision

Choose resolved scenes because the existing data already describes the necessary steps. Keep content, API, player and provider ownership unchanged. Use a synchronous satellite-selection success result; reject an unavailable transition visibly and retain the current scene. Begin lessons with clean image overlays. Never silently evict user tracks.

For scientific comparisons, use exact product citations and identify illustrations that differ from published analyses. Do not claim that ENCC demonstrates outages. Keep that story about NASA's corrected analysis and explicitly limit any ENCC illustration. Use sourced centre-frequency markers when actual instrument bandwidth is unavailable. Exclude metrics that cannot be compared honestly. Mark incomplete annual data rather than implying full-year averages.

Daily images use date-specific cache keys. Their picture date comes from that immutable key and travels separately from retrieval time. Try all three recent candidate days before accepting saved data; on a provider outage, retain a validated dated copy from the previous 30 days. Legacy undated files cannot establish their picture date and are not used as dated evidence. This accepts bounded retention instead of introducing a new multi-file cache metadata format.

Image credits use headers from the same GET response as the texture bytes. A separate HEAD request can refresh a mutable daily URL and mislabel a retained older texture, so renderer results carry their own metadata. Same-origin fetched blobs are decoded through short-lived object URLs; the image CSP permits blob URLs, and each is revoked after decoding.

Scientific rasters use an unlit material. Provider legend PNGs are shipped locally with source attribution and allowlisted metadata, rather than browser requests to a third party or an invented colour ramp. Their accessible descriptions distinguish variable, units, clipped bins and missing coverage.

Keep the existing Learn layout, colours and typography. Simplify wording, not the scientific qualifications. Add coverage that opens every local story through the existing hub/API/player instead of adding a second story registry.

## Consequences

- Browser and source-data claims remain separate. Passing unit tests does not certify source freshness or map coverage.
- No new library or remote processing service is required.
- The API and embedded bundle remain compatible; updated source files require rebuilding the committed web distribution.
- A future corrected outage comparison can replace the illustrative ENCC view without changing the player architecture.

## Artifacts

- `reports/pr-69-deep-review.md`
- `reports/pr-71-deep-review.md`
- `reports/current-head-lessons-charts-review.md`
- `reports/review-fixes-summary.md`
