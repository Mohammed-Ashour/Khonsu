---
id: AgDR-0004
timestamp: 2026-11-18T05:20:00Z
agent: codex
model: openai-codex/gpt-6.1-sol
trigger: user-prompt
status: executed
---

# Data examples and capture diagrams

> In the context of teaching twelve kinds of satellite data, facing text-only descriptions and globe links that do not explain the measurement, I decided to pair each kind with an output example and a capture diagram, accepting that laser profiles and spectra initially use explicitly illustrative rather than retrieved observations.

## Context
- `internal/knowledge` owns sourced scientific content; Learn renders it from `/api/v1/learn`.
- The existing imagery endpoint serves allowlisted, dated GIBS pictures and local provider scales. Browser requests stay same-origin.
- The application does not bundle or redistribute provider observations. Local-file mode must make no provider requests.
- Ten kinds can use existing GIBS products or the MODIS water-vapour product. No existing provider supplies a laser return profile or EMIT spectrum.

## Options considered
| Option | Pros | Cons |
|---|---|---|
| Bundle representative observation thumbnails | Fast and predictable | Conflicts with the runtime-data policy and adds provenance/licensing maintenance |
| Fetch dated examples through existing GIBS, with labelled offline illustrations | Reuses cache, CSP and credits; useful offline | Provider availability can vary; illustrations must never be passed off as observations |
| Add scientific-data readers for GEDI and EMIT now | Measured profiles and spectra | New processing, quality flags and provider contracts exceed this focused feature |

## Decision
Choose existing GIBS imagery plus local explanatory SVGs because it preserves current provider and knowledge boundaries. The knowledge schema adds sourced capture text, illustrative-output text, and an optional dated picture with its own sourced interpretation. Validate all picture definitions and cross-check their layer registrations in tests. The browser renders diagrams with no new dependencies.

Start observation loading only when a kind is expanded. Show the illustration while loading, offline, or on failure, always labelled as an illustration. Only replace it with an observation after the image loads successfully. An observation retains its exact date, instrument/product distinction, citation and provider scale where applicable. Missing/transparent data are not evidence of absence. Laser and spectral examples carry no invented measurement values or material identifications.

## Consequences
- Existing kind IDs, lesson scenes and APIs remain compatible; the new visual field is additive.
- No provider image is committed to the repository. Provider scales remain bundled, as before.
- MODIS column water vapour is distinguished from GOES altitude-sensitive infrared channels. OPERA classes are derived radar products, not raw backscatter. Night-light contrast is not a temporal outage measurement.
- Real quality-screened GEDI/EMIT observations can replace illustrations in a later provider-focused change.

## Artifacts
- `internal/knowledge/knowledge.json`
- `internal/webui/src/kindvisual.js`
- `docs/design/data-kind-visuals.md`
