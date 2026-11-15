# Review fixes and story integration

Implemented on `feat/learn-hub`, on top of `e07a9b7`. No commits, pushes or GitHub comments were made. Existing local work and research notes were preserved.

## Fixed

| Review | Changes |
|---|---|
| PR69-001, PR69-003 | Complete offline, version-bound MIT notice for go-localereader; immutable provenance and code-applicability explanation; corrected version/pseudo-version license links; deterministic regenerated notice. The required `.txt` input is explicitly exempted from `.gitignore`. |
| PR69-002 | Every retained pass warning appears in both positive and negative headlines. Short-screen CSS no longer hides uncertainty text. |
| PR70-001, PR70-002 | Date-specific daily cache keys; three candidate days checked before saved fallback; validated dated outage fallback within 30 days; product date separate from retrieval time through cache/API/credits. Undated legacy images are not used as dated evidence. |
| PR70-003 | Six exact bundled NASA GIBS legends for LST, SST, ABI brightness temperature, NO2, ice concentration and OPERA water classes. Accessible descriptions explain units, bounds, masking and missing coverage. Keys are reachable from the on-globe credits while Layers is closed. |
| PR70-004 | Unlit imagery materials preserve provider palette colours independently of sunlight and tone mapping. Existing depth-order rules are retained. |
| PR70-005, PR70-006 | Qualified SMAP coverage and Sentinel-2 constellation cadence; corrected SMAP radar chronology with a dated primary source. |
| PR71-01 | Catalog generations guard success, failure and loading/status across uncached groups, global search and cache hits. |
| PR71-02, PR71-03 | Destination scenes resolve satellite, camera, base and visual choice from preceding steps. Back and direct entry no longer inherit a later scene. Lessons clear unrelated saved clouds/aurora. |
| PR71-04 | Selection has a boolean success contract. Capacity refusal keeps the previous scene and step, provides an in-card retry/close path and never evicts unrelated tracks. |
| PR71-05, PR71-06, PR71-07 | Correct M11/I2/I1 RGB recipe and exact metadata; ice/cloud qualification; sensible vegetation question; no false polar-night rule or unchecked factual hints; no guaranteed relative image-date claims. |
| HEAD-01 | Puerto Rico ENCC views are explicitly qualitative, not outage measurements. Both image steps warn that brightness is not comparable across nights. Questions ask published findings, not deductions from ENCC. README animation captions carry the same qualification. |
| HEAD-02, HEAD-03 | Resolution chart no longer treats minimum river width as pixel size. Radar resolution/mode/fleet assumptions are explicit. Radio spectra use sourced instrument centre-frequency markers instead of entire generic C/L categories. |
| HEAD-04 | Grouped identical scatter coordinates, numbered keys and leader lines; compact tick labels and larger chart fonts. Centre markers and ranges are distinguished. |
| HEAD-05 | Annual sea-level aggregation retains fractional last-observation time and marks partial years. Axis says anomaly, and text distinguishes the NOAA processing from NASA's published analyses. |

A final integration check also fixed a metadata mismatch beyond the original reports: the texture now retains headers from its own image GET. A separate later HEAD can no longer relabel old retained pixels with a newer product date. Same-origin response blobs use short-lived object URLs, revoked after decoding; the image CSP permits those blob URLs.

## Stories and wording

All three lessons and seven existing local stories were rewritten in plain language. Scientific claims keep nearby primary citations. Directions stay separate from factual statements. Published averages, daily illustrations, concentration, extent, surface temperature and brightness temperature are distinguished.

All seven stories are reachable through Learn and related kind actions, with tests for the correct story callback, API inventory and registered dated picture layers:

- Puerto Rico after Maria
- Los Angeles fires
- Hurricane Helene radar water maps
- Nitrogen dioxide during the 2020 lockdowns
- Lake Mead
- Rising seas
- Arctic sea ice

No second story registry or duplicate stories were added. The source document now lists all 99 source records. Previously inaccessible JPL sea-level references were replaced with accessible NASA Science copies; the parent retrieved both copies and checked the numerical passages.

## Verification

- `go test ./...`: passed.
- `go vet ./...`: passed.
- `go test -race ./internal/knowledge ./internal/sources/feed ./internal/sources/gibs ./pkg/server`: passed.
- `npm test` in `internal/webui`: **196 passed**, zero failures or skips.
- Two successive `npm run build` runs: identical SHA-256 hashes for every distribution file. Updated committed distribution is present.
- Notice regeneration: byte-identical to `THIRD_PARTY_NOTICES.md`.
- `git diff --check`: passed.
- UI mechanical scanner: zero findings. Not treated as a layout or factual guarantee.
- Actual chart functions/data/styles rendered in headless Chrome at a 360-unit chart width. Inspected scatter, both spectrum panels, percentage bars and NOAA annual means. Temporary evidence: `/tmp/khonsu-final-chart-check.html` and `/tmp/khonsu-final-chart-check.png`. No application server was started for this check.
- Provider legend PNGs were inspected, retain exact provider bytes and include retrieval provenance in `internal/sources/gibs/legends/README.md`.

The architecture document now records the knowledge/player/provider boundaries, picture-date contract, source limitations, local legend route and palette treatment. AgDR-0001 records the implementation choices. The old design proposal is explicitly marked historical.

## Remaining limits

No full running-app WebGL session, mobile interaction, assistive-technology session or historical-raster availability sweep was performed. The renderer's material/decode/metadata behavior is unit-tested, not GPU pixel-certified. Chart annual completeness checks observation boundaries, not internal gaps. The source inventory and offline content regressions do not automatically revalidate every remote citation as it changes. ENCC remains illustrative; reproducing NASA's corrected outage analysis would require a different product and quality-screening workflow.
