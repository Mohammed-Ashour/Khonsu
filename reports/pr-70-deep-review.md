# PR #70 deep review

## Findings

### PR70-001: [P2 / medium, request changes] A saved image prevents the new daily fallback from running

Location at assigned head: `internal/sources/gibs/gibs.go:106–107,123–126`. Confidence: confirmed by a failing reproduction at both assigned head and combined HEAD.

A user already has an expired land-temperature picture. Yesterday is blank, but the day before is available.

```text
Expected: blank Nov 13 -> try Nov 12 -> show available Nov 12 image
Actual:   blank Nov 13 -> feed.Fetch returns Nov 11 saved bytes, nil error
                       -> loop stops; Nov 12 is never requested
```

The problem: every candidate date uses `Key: layer.ID`. On validation failure, `feed.Client.Fetch` returns the existing saved image with `Stale=true` and a nil error. The new loop tests only `errors.Is(err, feed.ErrNoData)`, so a warm cache defeats the feature. The new tests use fresh cache directories and miss this normal repeated-use path.

Impact: available, newer imagery is silently skipped in favour of an arbitrarily old cache. This is not merely the intended three-day fallback limit.

Issue code:
```go
return c.feed.Fetch(ctx, feed.Request{Source: ID, Key: layer.ID, Ext: ext, URL: c.base + "?" + query.Encode(), TTL: ttl, MaxBytes: maxImageBytes, Timeout: time.Minute, Validate: validateImage(layer)})
// ...
if image, meta, err = request(); !errors.Is(err, feed.ErrNoData) {
    break
}
```

What's needed: distinguish candidate dates in cache identity, and do not let a stale saved response count as a successful candidate before trying the other dates. Preserve a last-good image for genuine provider outages. Minimal algorithm, **pseudocode** because the existing feed interface does not return the suppressed validation error:
```text
remember last-good image with its actual picture date
for each candidate date:
    fetch using layer ID + candidate date as cache key
    if exact-date image succeeds: return it with that date
    if candidate is empty: continue
    if provider really failed: stop trying the provider
return remembered image with stale warning, or the error
```

Verification: scratch test `TestReviewFallbackWithExistingSavedImage` seeds an expired Nov 11 picture, makes Nov 13 blank and Nov 12 valid. Both snapshots request only `[2026-11-13]`, return the old marker byte, `stale=true`, `err=<nil>`, and fail the assertion that Nov 12 was requested. Evidence: `feed/client.go:124–166`; logs in `/tmp/pr70-repro.log` and `/tmp/pr70-current-repro.log`.

Persistence: unchanged mechanism remains in combined HEAD at `gibs.go:146–167`.

### PR70-002: [P2 / medium, request changes] Successful fallback discards the actual picture date

Location at assigned head: `internal/sources/gibs/gibs.go:123–129`. Supporting consumers: `pkg/server/data.go:183–203`, `internal/webui/src/layers.js:86–100`. Confidence: high, complete static path.

With an empty cache, Nov 13 can be blank and Nov 12 valid. The fallback succeeds, but the selected date exists only in a local WMS query. The returned metadata says when Khonsu downloaded bytes, not when the picture was acquired.

```text
TIME=2026-11-12 -> image + FetchedAt=2026-11-14
                          -> "updated just now"
                          -> no picture date anywhere in the response/UI
```

The problem: the new earlier-day behaviour changes image age without exporting or retaining that age. A shared cache file also cannot reconstruct which candidate produced its bytes. This differs from PR70-001: fixing cache keys alone still leaves the displayed picture date unknown.

Impact: daily images from different days can look equally current. The "Yesterday's Earth" preset and true-colour description can be factually wrong. The issue matters for storm evolution, burns and daily temperature comparisons. A generic note that fallback exists does not identify the date of the image actually shown.

Issue code:
```go
query.Set("TIME", now.AddDate(0, 0, -back).Format("2006-01-02"))
// ...
return image, meta, err
```

What's needed: retain an explicit observation/image date alongside cached bytes and carry it through imagery response headers and the on-globe credit, separately from retrieval freshness. **Pseudocode** for the required contract, not an existing API:
```text
return image, { fetched_at: retrieval time, picture_date: successful candidate date, stale: ... }
credit = layer name + "picture from " + picture_date + retrieval freshness
```
Do not set the date from the attempted URL when the returned bytes came from a stale cache.

Verification: add cold-cache two-day fallback, warm-cache reread, and UTC-midnight tests asserting the actual picture date survives to the credit. The assigned Go test checks requested dates and image size only. The HTTP handler exposes only fetched-at/stale headers.

Persistence: combined HEAD adds dates for explicitly dated stories, but automatic daily fallback still returns only `feed.Meta`; `layers.js:118–120` still uses fetched-at for undated daily views.

### PR70-003: [P2 / medium, request changes] New temperature maps have no value scale or units

Location at assigned head: `internal/sources/gibs/gibs.go:153–154`, `internal/sources/goes/goes.go:33–34`, `internal/webui/src/layers.js:267–278`. Confidence: confirmed omission in code and the committed screenshot.

Choose land surface temperature, sea surface temperature or GOES band 13. The UI offers coloured pictures and a provider credit, but no colour-to-value key, unit or no-data explanation.

The problem: the layer schema carries a title, topic and description, but no scientific legend. The frontend's fieldset `legend` is a group heading, not a raster colour scale. GIBS supplies different scales for these actual layers, verified in capabilities and fetched legend PNGs:

- MODIS land surface temperature: roughly 200–350 **K**, with clipped end bins.
- MUR sea surface temperature: roughly 0–32 **°C**, with different colours and clipped ends.
- ABI band 13: infrared **brightness temperature**, roughly -92 to +57 **°C**, not land or sea surface temperature.

Impact: a reader cannot interpret a colour as a temperature or know that the maps use different units. Black gaps can be confused with low values, and a screen-reader user receives no quantitative equivalent. This defeats the new educational purpose rather than being a styling preference.

Issue excerpt, showing the missing value contract:
```go
LandTemperature = NewLayer("land-temperature", "Land surface temperature (daily)", Info, "Daytime land temperature from Terra's MODIS. Clouds leave gaps, because the heat of the ground can't be seen through them.", "MODIS_Terra_Land_Surface_Temp_Day", false, true).About("thermal_infrared")
```

What's needed: add allowlisted legend metadata and an accessible, active-layer legend with units, endpoints, clipped/no-data meanings, and the distinction between surface temperature and brightness temperature. Reuse GIBS's exact colour scales; do not invent a generic red-hot/blue-cold key. **Pseudocode**, since legend fields do not exist yet:
```text
active scientific layer -> matching GIBS legend + text units/range + no-data note
```

Verification: assert the three thermal layers expose their correct, different units and legend descriptions; check the legend is visible when a view is selected from Data with Layers closed. Fetched primary legends are listed below.

Persistence: still absent from the corresponding combined-HEAD layer definitions and layer rendering.

### PR70-004: [P2 / medium, request changes] Globe lighting changes the scientific colour scale

Changed entry points at assigned head: `internal/sources/gibs/gibs.go:151–154` and `internal/sources/goes/goes.go:33–34`. Relied-on renderer: `internal/webui/src/globe.js:90–94,197–200`. Confidence: high from renderer/material code; no browser/GPU pixel test performed.

A reader displays the new LST/SST or band-13 raster, then moves the timeline. The raster is unchanged, but Earth's lighting changes.

The problem: these new value-coded images use the existing `MeshPhongMaterial`, coloured ambient light, directional sunlight and nonzero specular highlights. A texture colour is therefore modulated by surface normal/light/time rather than displayed as the provider encoded it. The pre-existing renderer was used for decorative Earth/cloud images; this PR newly relies on it for quantitative colour maps and nighttime-light interpretation.

Impact: equal data values can have different rendered colours on different sides of the globe, and the same pixel can change appearance without a new measurement. Adding a correct legend alone would not fix the mismatch.

Issue code:
```javascript
new MeshPhongMaterial({ map: texture, transparent: layer.transparent, depthWrite: !layer.transparent, specular: 0x111111, shininess: 6 }),
```

What's needed: use an unlit, colour-preserving material for imagery, at least for scientific views. The underlying physical globe can remain lit. A minimal existing-API replacement for imagery material is:
```javascript
new MeshBasicMaterial({ map: texture, transparent: layer.transparent, depthWrite: !layer.transparent, toneMapped: false }),
```
`MeshBasicMaterial` is already imported. Preserve the combined HEAD's separate depth-order fixes if applying there.

Verification: use a fixed known-colour raster at two timeline positions and under different light directions; its displayed palette should stay invariant. No such renderer test exists in this delta.

Persistence: combined HEAD still constructs imagery with `MeshPhongMaterial` at `globe.js:217`. Later z-fighting fixes do not address lighting.

### PR70-005: [P2 / medium, request changes] Global-coverage claims omit necessary source qualifications

Location at assigned head: `internal/knowledge/knowledge.json:90,289–295`. Confidence: high, verified against the full cited passages.

The SMAP description says it measures surface-soil water "everywhere on Earth, every 2–3 days". All three Sentinel-2 profiles say that "Together" they revisit the equator every five days.

The problem: the cited SMAP description explicitly limits liquid-soil-moisture measurement to land that is not water-covered or frozen and says it cannot measure ice. SentiWiki says five days is the nominal **two-satellite** configuration and that Sentinel-2A's extension campaign further enhances revisit. The PR lists A, B and C together but removes that operating-configuration qualification.

Impact: readers infer measurements over frozen/water-covered ground, or treat a nominal pair's revisit as the actual cadence of every listed Sentinel-2 configuration. A revisit interval is also not a promise of a cloud-free optical image.

Issue/fix, smallest local wording corrections:
```diff
- SMAP measures the amount of water in the surface soil everywhere on Earth, every 2–3 days.
+ SMAP measures liquid water in the surface soil of unfrozen land not covered by water, with global observations every 2–3 days.
- Together, the Sentinel-2 satellites revisit the equator every 5 days.
+ Sentinel-2's nominal two-satellite constellation revisits the equator every 5 days; Sentinel-2A's extension campaign can improve that revisit.
```
Retain the existing source references and apply the Sentinel sentence consistently to all three records. Wording about the extension must remain date-qualified as operations change.

Verification: review both complete source passages, not only their opening summaries. Add content checks for these qualifications. The structural JSON tests cannot detect this error.

Persistence: both unqualified statements remain in current `knowledge.json`, including SMAP at line 685 and Sentinel-2 at lines 1733/1748/1763.

### PR70-006: [P3 / low, nonblocking correction] SMAP radar failure is dated incorrectly

Location at assigned head: `internal/knowledge/knowledge.json:201`. Confidence: confirmed against JPL's contemporaneous dated notice.

The instrument card says the radar stopped "in early 2015". It actually halted transmissions on **7 July 2015**. The cited mission-description page itself contains the imprecise "early 2015" wording, so checking that the sentence appears on an agency page is not sufficient.

JPL's mission anomaly notice states, "On July 7, at about 2:16 p.m. PDT, SMAP’s radar halted its transmissions", and its Aug. 5 update identifies the low-voltage power supply for the high-power amplifier. The same notice gives the January 31 launch date.

Impact: a sourced but wrong mission chronology appears in Data and text reports.

Smallest fix:
```diff
- The radar stopped in early 2015 when its power supply failed
+ The radar stopped transmitting on 7 July 2015 after a power-supply failure
```
Add the dated anomaly notice as the reference for that sentence. This is a small content correction, not a reason by itself to hold the software merge.

Verification source: <https://smap.jpl.nasa.gov/news/1244/smap-team-investigating-radar-instrument-anomaly/>. Retrieved successfully via fetch; see retrieval limitations below. The later JPL end-of-operations article returned HTTP 403 and was not used as passage evidence.

Persistence: identical wording remains at current `knowledge.json:1293`.

## Decision

**Request changes.** PR70-001 through PR70-005 are required fixes to daily imagery behaviour, scientific map interpretation and source qualifications. PR70-006 is a nonblocking factual correction. No P0/P1, demonstrated secret exposure, destructive mutation or numerical orbit regression was found in the inspected delta.

## Inspected scope and snapshot

Review date: 2026-11-14 UTC. Repository: `Mohammed-Ashour/Khonsu`, PR <https://github.com/Mohammed-Ashour/Khonsu/pull/70>.

- Assigned base: `341cc2627156eddc534a37d9b10516ba0aa17155`.
- Assigned head: `5f7d32b6f749f2975a908f4136411f6f41234983`.
- `gh pr view 70 --repo Mohammed-Ashour/Khonsu --json baseRefOid,headRefOid` returned exactly those values, on initial and final checks. **No PR base/head drift.**
- GitHub base branch is `fix/review-trust`; head branch is `feat/data-lessons`.
- Stack confirmed through gh: #69 head equals #70 base; #71 base equals #70 head. #71 head is `816a0f8b01ecc24aa20bf36985e30c07f942883c`.
- Local combined HEAD is `e07a9b7b361a29a625d93409122e8b09993470a1`, a descendant of the assigned head and later than #71. I inspected affected paths there for persistence, not as a replacement review scope.
- Exact diff: 36 files, 2,221 additions / 306 deletions plus binary changes. All changed human-written source, test and doc lines were inspected with historical git diff/show and archived snapshot files. Large unchanged context was followed where needed.
- Generated `dist/app.js` was not manually reviewed as minified vendor output. It was regenerated and compared byte-for-byte; HTML/CSS also matched. Added `assets/web-data.jpg` was viewed. Deleted Identity/Scenes screenshots were recorded as binary deletions, not science evidence.
- The assigned PR does **not** implement a lesson player, event stories, SVG charts or historical-event imagery. Those appear later in the combined checkout. The lesson information introduced here consists of instrument/kind knowledge, proposed lesson descriptions and six globe views. Later-only story dates/charts belong to the other review scopes; no claim is made to have re-reviewed all of them.

No branches were checked out. No subagents were started, GitHub comments posted, or tracked project files modified. Tests/builds requiring writes ran in `/tmp/khonsu-pr70-review`, a `git archive` export, not a checkout. The additional regression test exists only in scratch exports. This report is the only repository file written by this reviewer.

## Architecture assessment

Architecture source: `ARCHITECTURE.md` at the assigned snapshot, plus `README.md`, `docs/web-app.md`, `docs/design/satellite-data-lessons.md`, `docs/what-satellites-measure.md`, and `internal/webui/README.md`. No additional in-repository AGENTS.md was found. Applicable review/deep-review/rubric, architecture-context, unslop, show-me and UI audit instructions were read.

CodeGraph was used first to navigate knowledge, Data, dossier, layers and globe, and to trace ForSatellite/report consumers. Its current-file results were checked against the exact historical source before attributing findings.

```text
embedded knowledge.json -> knowledge.Load/ForSatellite
                         -> satelliteData -> measuresView -> Data tab
                         -> output.measuresFor -> CLI/TUI text reports

layer allowlist -> server imagery -> GIBS -> shared feed/cache
                               -> image bytes + retrieval metadata
Data/Layers selection -> globe texture/material -> credit
```

The package boundary is sensible: hand-curated facts are network-free, server/CLI reuse the same records, and orbit calculations are untouched. Legacy report JSON/CSV remain unchanged because Measures is tagged `json:"-"`. The new HTTP endpoint validates/canonicalizes IDs, handles unknown satellites explicitly and works without live data. DOM text nodes and https-only source links avoid introducing HTML/script interpolation at the new content boundary. Shared feed serialization and context limits remain in place; no new unbounded concurrency or per-provider gate race was identified, including under the selected race tests.

The missing boundary is the **scientific raster contract**: the shared image adapter exposes bytes and retrieval freshness, but not picture time, variable/units, colour scale, valid coverage or display treatment. Local additions to the existing Layer/metadata interface are enough; no framework or provider rewrite is needed. See PR70-002–004.

Documentation drift, nonblocking: ARCHITECTURE.md still lacks the new knowledge package and output/server dependency on it. The design doc also mixes accepted decisions, planned phases and a stale "facts still to source" section. Keep plan text separate from the implemented guarantees. **ARCHITECTURE.md changes made by this review: none.**

## Verification

### Assigned snapshot, before adding the scratch reproduction

| Command/check | Observed result |
|---|---|
| `git diff --check <base> <head>` | Pass. |
| `go test ./...` in scratch export | Pass across the repository. Log: `/tmp/pr70-go-test.log`. |
| `go vet ./...` in scratch export | Pass. |
| `go test -race ./internal/sources/feed ./internal/sources/gibs ./internal/knowledge ./pkg/server` | Pass, all four packages. Log: `/tmp/pr70-race.log`. |
| `npm ci --ignore-scripts` in scratch webui | Pass; npm reported 0 vulnerabilities. This is not a full dependency security audit. |
| `npm test` | **116/116 pass**, not the PR body's older 111 count. Log: `/tmp/pr70-node-test.log`. |
| Copy committed dist, `npm run build`, `diff -rq dist /tmp/pr70-original-dist` | Pass, no differences in app.js, index.html or styles.css. License banner/notices match the generated snapshot. No package/lockfile change in the assigned delta. |
| UI scanner, scratch src, `--json` | Exit 0; one medium mechanical tell, score 2. No style-only finding retained. |

### Combined HEAD and targeted failure

- Current combined HEAD: `go test ./internal/knowledge ./internal/output ./internal/sources/feed ./internal/sources/gibs ./pkg/server` passed, cached results. `node --test src/*.test.js` passed **133/133**. These are not a full combined-HEAD suite/build certification.
- The additional scratch test `go test ./internal/sources/gibs -run TestReviewFallbackWithExistingSavedImage -v` **fails on both snapshots**, as expected for PR70-001. It is not part of the committed suite.
- Its precise setup is an expired saved image dated Nov 11, current time Nov 14 12:00 UTC, a blank Nov 13 provider image and a valid Nov 12 provider image. Output on both: `days requested=[2026-11-13]; image marker=2; fetched_at=2026-11-11 12:00:00 +0000 UTC; stale=true; err=<nil>`.

### Direct provider checks

All six new WMS names exist in fetched GIBS 1.3.0 capabilities. Exact worldwide requests used the implementation's EPSG:4326 axis order `-90,-180,90,180`, 2048×1024 output, PNG/transparent for GOES and JPEG for daily views. Daily date was 2026-11-13.

| Layer | HTTP / body bytes | Assessment |
|---|---|---|
| GOES East visible | 200 / 8,221 | Blank/transparent at the provider's default instant on this check. Correctly falls below the app's 100,000-byte threshold. No claim this view worked live during review. |
| GOES East band 13 | 200 / 1,357,401 | Nonblank PNG. |
| VIIRS NOAA-20 M11/I2/I1 | 200 / 593,722 | Nonblank JPEG. |
| VIIRS NOAA-20 DNB | 200 / 391,329 | Nonblank JPEG; strong per-orbit striping, consistent with the qualitative display product. |
| Terra MODIS LST day | 200 / 318,201 | Nonblank JPEG; black no-data/cloud gaps and swath gaps visible. |
| GHRSST MUR SST | 200 / 213,108 | Nonblank JPEG; analysis field, not single-instrument raw imagery. |

These are direct HTTP/data-image checks, **not browser or live application verification**. Request URLs and bytes are retained in `/tmp/pr70-sources/image-retrieval.json`. Capabilities and legend PNGs are in the same scratch directory.

## Test gaps

- Warm-cache empty-day fallback, candidate-date cache separation and preservation of the last-good image after all candidates fail.
- Actual picture date through cache reread, UTC midnight and HTTP/frontend credit.
- Correct variable/unit/legend/no-data mapping for each thermal view; palette invariance under lighting/time.
- Integration of main.js tab/section visibility, provider request timing and focus. Existing fake-DOM tests check modules, not native details-toggle coalescing or browser focus removal.
- Data view buttons label the selected view "Showing" before the async globe result and do not preserve their own focus when repainting. No browser test was performed to grade the resulting focus/error UX; this is a follow-up risk, not an additional primary finding.
- Content tests validate references, https, structure and doc coverage. They do not establish passage support, operational status, scientific qualifications or chronology. Manual source review remains necessary.

## Source audit

### Method and legitimacy

I inventoried **all 35 distinct external cited URLs introduced in the changed human-written content**: 31 knowledge-source definitions plus GIBS docs, SATCAT search, Wikidata and CEOS in the design/docs. The table below maps all **73 JSON statements**, including repeated per-satellite statements, back to their cited URLs. Context-only URLs on unchanged README lines, test placeholders such as `https://map`, `https://nasa.gov/y`, `https://usgs.gov/x`, and XML namespace identifiers are not factual citations.

NASA/Earthdata/JPL, NOAA NESDIS, JMA, USGS and Copernicus SentiWiki are legitimate primary agency/mission sources for these topics. GEDI's University of Maryland site is the mission-science team's source. Wikidata is editable secondary structured data and is suitable only as a candidate-discovery source, not sole evidence for science. CEOS's database is a legitimate mission/instrument catalogue; its home page explicitly labels data CC BY 4.0. Domain legitimacy was not treated as proof of each sentence.

Retrieval on 2026-11-14:
- Python urllib initially failed certificate validation for all URLs because this environment's Python trust store was not configured. No TLS verification was disabled. Retrying with system curl succeeded for 28/31 knowledge pages.
- Curl got HTTP 403 for USGS and HTTP 404 for the SMAP and SWOT paths. `fetch_content` then retrieved full readable documents for all three, response ID `mwgu3ya4h6jytk`. Thus all 31 knowledge sources were read, but three could not be confirmed through direct-origin HTTP in this environment. Fetch may use a different retrieval path/cache; the different statuses are retained rather than claiming all origins returned 200.
- The four additional cited URLs returned 200 through curl. Source bodies and statuses are retained under `/tmp/pr70-sources/`.
- Passage support is assessed from the retrieved documents, not search snippets. Search was only discovery for supplementary checks. Live pages can change; their contents were not reconstructed as of the PR's original commit time.

### Every knowledge citation and its claims

Owner prefixes identify `kind`, `instrument` and satellite NORAD ID in the assigned knowledge.json. A source can support several sentences and a sentence can cite several sources. Quotes in the last column are the inspected supporting or qualifying passages.

| Source URL | Associated introduced statements / claims | Support verdict and passage evidence | Retrieval |
|---|---|---|---|
| [Electromagnetic Spectrum](https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/electromagnetic-spectrum) | **kind visible:** Visible light is the small part of the spectrum our eyes can see, so visible images show Earth much as we would see it.<br><br>**kind thermal_infrared:** Warm surfaces give off infrared radiation: energy absorbed by the ocean, for example, is re-emitted as infrared.<br><br>**kind passive_microwave:** Microwave energy can pass through clouds, which many weather instruments make use of. | **Supported.** "This small portion of energy is all that the human eye is able to detect"; absorbed ocean energy "gets re-emitted as infrared radiation"; microwave wavelengths "can pass through clouds". These support the three associated sentences. | curl 200; full text read |
| [Active Instruments](https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/remote-sensing/active-instruments) | **kind radar:** Radar is an active instrument: it sends out pulses of energy and measures what is reflected back.<br><br>**kind altimetry:** Altimeters are active instruments: they send pulses down to the surface and use the reflections to measure its height.<br><br>**kind laser_ranging:** Laser altimeters are active instruments: they send out pulses of light and measure what is reflected back. | **Supported.** "Radars and altimeters work by determining the time a transmitted pulse (microwaves or light) takes to reflect ... and return"; lidar transmits a light pulse and measures reflected light. Supports radar, altimetry and laser-ranging definitions. | curl 200; full text read |
| [Passive Instruments](https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/remote-sensing/passive-instruments) | **kind thermal_infrared:** Most passive sensors cannot see through dense cloud, which is why maps of land temperature have gaps. | **Supported.** "Most passive sensors cannot penetrate dense cloud cover"; the same paragraph names land/sea temperature. This supports cloud gaps for optical/thermal surface retrievals, not all passive microwave sensors. | curl 200; full text read |
| [Remote Sensing Resolution](https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/remote-sensing-resolution) | **kind imaging_spectroscopy:** Spectral resolution is an instrument's ability to tell finer wavelengths apart, with more and narrower bands. | **Supported.** "Spectral resolution is the ability of an instrument to discern finer wavelengths ... more and narrower bands." | curl 200; full text read |
| [What is Synthetic Aperture Radar?](https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/sar) | **kind radar:** Synthetic aperture radar makes high-resolution images night or day, regardless of the weather.<br><br>**kind radar:** How far radar reaches into a forest depends on its wavelength: a C-band signal only gets into the top layers of the canopy. | **Supported at tutorial level.** "high resolution imagery ... night or day, regardless of weather conditions"; "a C-band signal penetrates only into the top layers of the canopy". The claim is tutorial shorthand, not a guarantee against all atmospheric effects. | curl 200; full text read |
| [How to Interpret a False-Color Satellite Image](https://science.nasa.gov/earth/earth-observatory/how-to-interpret-a-false-color-satellite-image) | **kind near_infrared:** Plants reflect near-infrared light very strongly, so images that use it make vegetated land stand out.<br><br>**kind shortwave_infrared:** Newly burned land reflects strongly in shortwave infrared, which makes it valuable for mapping fire damage.<br><br>**kind shortwave_infrared:** In a common shortwave infrared, near infrared and green combination, water looks black, plants bright green, newly burned land red, and snow and ice bright blue. | **Supported generic claims; incomplete linkage to the displayed composite.** "Newly burned land reflects strongly in SWIR bands"; plants reflect NIR strongly. The article explicitly discusses SWIR / NIR / GREEN. The actual layer uses SWIR / NIR / RED. Its interpretation is broadly correct, but cite the exact Worldview layer metadata as well; see supplementary sources. | curl 200; full text read |
| [Advanced Baseline Imager (ABI)](https://www.nesdis.noaa.gov/our-satellites/currently-flying/goes-east-west/advanced-baseline-imager-abi) | **kind visible:** Weather satellites use visible channels to track clouds, fog, haze, dust, snow cover and volcanic ash.<br><br>**kind shortwave_infrared:** A shortwave infrared band at 3.9 µm is sensitive to the hottest part of a fire, so GOES often detects fires before they are spotted on the ground.<br><br>**kind thermal_infrared:** NOAA likens its infrared channels to night-vision goggles, because they see by day and by night.<br><br>**kind thermal_infrared:** Forecasters use cloud-top temperatures as predictors of rainfall intensity and flash flooding.<br><br>**instrument abi:** ABI detects visible and infrared light in 16 spectral bands.<br><br>**instrument abi:** It can capture a full-disk image every 10 minutes, the US mainland every five minutes, and smaller areas every 30 to 60 seconds. | **Supported.** The page explicitly gives 16 bands; visible cloud/fog/haze/dust/snow/ash applications; the night-vision analogy; cloud-top temperature/rainfall/flash-flood use; full disk 10 min, CONUS 5 min, mesoscale 30–60 s; and the 3.9 µm fire-detection explanation. The site itself calls 3.9 µm shortwave; terminology varies across sources. | curl 200; full text read |
| [ABI Scan Mode Information and Channel Summary](https://www.nesdis.noaa.gov/our-satellites/currently-flying/goes-east-west/abi-scan-mode-information-and-channel-summary) | **kind water_vapour:** GOES has three infrared bands, at 6.2, 6.9 and 7.3 µm, that track water vapour in the upper, middle and lower atmosphere.<br><br>**instrument abi:** Band 2 sees red visible light at 0.64 µm, and band 13, the clean longwave window, sees infrared at 10.3 µm. | **Supported.** Channel table: band 2 = 0.64 µm, visible red; band 13 = 10.3 µm, clean longwave window; bands 8/9/10 = 6.2/6.9/7.3 µm, upper/mid/lower-level water vapour. These are central wavelengths, not bandwidths. | curl 200; full text read |
| [Geostationary Satellites](https://www.nesdis.noaa.gov/our-satellites/currently-flying/geostationary-satellites) | **satellite 60133:** GOES-19 operates as NOAA's GOES East satellite.<br><br>**satellite 51850:** GOES-18 is NOAA's operational GOES West satellite.<br><br>**satellite 41866:** GOES-16 now serves as an on-orbit backup. | **Supported as retrieved 2026-11-14.** "GOES-U (now GOES-19) ... operates as ... GOES East"; GOES-18 is operational West; GOES-16 and -17 are on-orbit backups. Roles are time-sensitive and need periodic review. | curl 200; full text read |
| [Advanced Himawari Imager (AHI)](https://www.data.jma.go.jp/mscweb/en/himawari89/space_segment/spsg_ahi.html) | **instrument ahi:** AHI has 16 bands and scans the full disk every 10 minutes. | **Supported.** AHI page gives 16 bands and a full-disk observation every 10-minute timeline, except housekeeping. This establishes the instrument on Himawari-8/9. | curl 200; full text read |
| [Meteorological Satellites](https://www.jma.go.jp/jma/jma-eng/satellite/) | **satellite 41836:** Himawari-9 took over the main operational role on 13 December 2022, about 35,800 km above the equator near 140.7°E.<br><br>**satellite 40267:** Himawari-8 has been Himawari-9's backup since 13 December 2022. | **Supported.** "taking over the main operational role on 13 December 2022 with Himawari-8 as back-up"; table gives 35,800 km and approximately 140.7°E. | curl 200; full text read |
| [VIIRS](https://www.earthdata.nasa.gov/data/instruments/viirs) | **instrument viirs:** VIIRS measures 22 spectral bands from 0.402 to 12.49 µm, with pixels of 375 m and 750 m.<br><br>**instrument viirs:** It flies on Suomi NPP, NOAA-20 and NOAA-21.<br><br>**satellite 43013:** NOAA-20 is part of NOAA's Joint Polar Satellite System.<br><br>**satellite 54234:** NOAA-21 is part of NOAA's Joint Polar Satellite System.<br><br>**satellite 37849:** Suomi NPP is no longer delivering new data. Its VIIRS record runs from 28 October 2011 to 2 November 2026. | **Supported as retrieved 2026-11-14.** Explicit notice: "Suomi NPP is no longer delivering new data"; platform table ends its temporal extent on Nov. 2, 2026. Specifications give 22 bands, 0.402–12.49 µm and 375/750 m; platforms list NPP, NOAA-20/JPSS-1 and NOAA-21/JPSS-2. Do not substitute current expectations for this retrieved notice. | curl 200; full text read |
| [VIIRS Spectral Bands](https://www.earthdata.nasa.gov/data/instruments/viirs/spectral-bands) | **instrument viirs:** Its false-colour view combines shortwave infrared (band M11, 2.23–2.28 µm), near infrared (I2, 0.85–0.88 µm) and red light (I1, 0.6–0.68 µm). | **Supported wavelengths; not by itself a composite specification.** Table gives M11 2.23–2.28 µm, I2 0.85–0.88 µm and I1 0.6–0.68 µm. The assignment of those bands to the displayed RGB channels needs the exact Worldview metadata. | curl 200; full text read |
| [Black Marble](https://blackmarble.gsfc.nasa.gov/) | **kind night_lights:** The VIIRS Day/Night Band is a single wide band, sensitive to visible and near-infrared light, that records Earth's lights at night.<br><br>**kind night_lights:** Its signal includes city lights, lightning, fishing fleet lights, gas flares, lava flows and even auroras.<br><br>**kind night_lights:** Moonlight reflected off ice, snow and other bright surfaces shows up too. | **Supported DNB physics; product distinction needed.** "DNB is a panchromatic band sensitive to visible and near-infrared wavelengths"; it enumerates city lights, lightning, fleet lights, flares, lava and auroras, and reflected moonlight. This supports the sentences. The page describes corrected Black Marble products too; the shipped layer is NOT that calibrated product. Worldview says its DNB layer is per-orbit histogram-equalized and qualitative. | curl 200; full text read |
| [MODIS](https://www.earthdata.nasa.gov/data/instruments/modis) | **instrument modis:** MODIS sees every point on Earth every 1 to 2 days, in 36 spectral bands from 0.4 to 14.4 µm. | **Supported.** "global coverage every 1 to 2 days"; specifications give 36 bands and 0.4–14.4 µm. These are sensor/revisit properties, not the resolution of the 2048-pixel globe image. | curl 200; full text read |
| [Aqua: MODIS](https://science.nasa.gov/mission/aqua/modis) | **satellite 25994:** The first MODIS was launched on Terra in December 1999.<br><br>**satellite 27424:** The second MODIS was launched on Aqua in May 2002. | **Supported.** "first MODIS ... Terra ... December 1999"; "second ... Aqua ... May 2002". | curl 200; full text read |
| [Terra](https://terra.nasa.gov/) | **satellite 25994:** Since 2020, Terra has been drifting to an earlier equator crossing time, with no manoeuvres planned to hold it. | **Supported.** "Since 2020, Terra has been drifting to an earlier equator crossing time"; "no maneuvers planned to sustain Terra’s altitude and crossing time". | curl 200; full text read |
| [MODIS/Terra Land Surface Temperature/Emissivity Daily (MOD11A1)](https://www.earthdata.nasa.gov/data/catalog/lpcloud-mod11a1-061) | **instrument modis:** Its daily land surface temperature product has pixels 1 km across. | **Supported nominal resolution; not the exact imagery product.** MOD11A1 description gives daily per-pixel LST at 1 km and clear-sky criteria. Variable table gives Kelvin and 0.02 scale factor. The actual GIBS layer metadata references MOD11_L2, not MOD11A1. Both are 1 km, but add that exact product citation rather than implying the displayed image is A1. | curl 200; full text read |
| [GHRSST Level 4 MUR Global Foundation Sea Surface Temperature Analysis (v4.1)](https://www.earthdata.nasa.gov/data/catalog/pocloud-mur-jpl-l4-glob-v4.1-4.1) | No JSON statement references this ID. Associated layer/docs claim: GHRSST MUR is a daily sea-temperature analysis blending multiple satellite instruments and buoy data. | **Supported layer description; source unused by JSON statements.** No statement references source ID mur. It supports gibs.SeaTemperature and the docs table. Description explicitly calls this a Level-4 analysis using nighttime skin/subskin observations from AMSR-E, AMSR2, MODIS, WindSat and AVHRR, plus in-situ observations; platform/instrument tables include BUOYS / DRIFTING BUOYS. It is a multisensor foundation-temperature analysis, not a thermal image from the selected satellite. | curl 200; full text read |
| [Sentinel-1 Mission](https://sentiwiki.copernicus.eu/web/s1-mission) | **instrument c_sar:** It works at 5.405 GHz, a wavelength of about 5.55 cm, and images Earth day and night, regardless of the weather.<br><br>**instrument c_sar:** Its images are used to identify sea ice, detect oil spills and measure ground movement from earthquakes, volcanoes and landslides. | **Supported instrument claims; operating status not established for 1A.** Mission page gives 5.405 GHz / approximately 5.55 cm, all-weather day/night SAR, and sea ice/oil-spill/ground-deformation uses. It also says 1A end of operations was planned for June 2026. Listing its installed instrument is not evidence it still acquires data; no new claim of current operation is justified by this page. | curl 200; full text read |
| [Sentinel-2 Mission](https://sentiwiki.copernicus.eu/web/s2-mission) | **instrument msi:** MSI samples 13 spectral bands, from visible and near infrared to shortwave infrared: four at 10 m, six at 20 m and three at 60 m.<br><br>**instrument msi:** Its images serve land management, agriculture, forestry, disaster control and humanitarian relief.<br><br>**satellite 40697:** Together, the Sentinel-2 satellites revisit the equator every 5 days.<br><br>**satellite 42063:** Together, the Sentinel-2 satellites revisit the equator every 5 days.<br><br>**satellite 60989:** Together, the Sentinel-2 satellites revisit the equator every 5 days. | **Supported instrument specifications; cadence needs qualification.** Mission specification gives 13 bands, 4 at 10 m / 6 at 20 m / 3 at 60 m, and the listed applications. It gives 5 days for the nominal TWO-satellite constellation and explicitly says revisit is further enhanced by the Sentinel-2A extension campaign. The three identical satellite sentences omit that distinction. See PR70-005. | curl 200; full text read |
| [Sentinel-3 Mission](https://sentiwiki.copernicus.eu/web/s3-mission) | **kind altimetry:** Satellite altimeters measure sea surface height over the oceans and coasts.<br><br>**instrument olci:** OLCI measures the colour of the ocean and land in 21 bands, with 300 m pixels.<br><br>**instrument slstr:** SLSTR measures global sea surface temperature to better than 0.3 K.<br><br>**instrument slstr:** Sentinel-3 also makes fire monitoring products, such as fire radiated power and burned area.<br><br>**instrument sral:** SRAL is a dual-frequency Ku- and C-band radar altimeter that measures sea surface height for oceans and coasts.<br><br>**satellite 41335:** Sentinel-3 measures sea surface height, sea and land surface temperature, and the colour of the ocean and land.<br><br>**satellite 43437:** Sentinel-3 measures sea surface height, sea and land surface temperature, and the colour of the ocean and land. | **Supported.** Mission objectives give sea/land colour, SST/LST and sea-surface height. Payload section gives OLCI 21 bands / 300 m; SLSTR designed for SST accuracy better than 0.3 K; dual Ku/C SRAL for surface topography. Secondary geophysical products explicitly include fire radiated power and burned area. 0.3 K is an accuracy statement, not a temperature. | curl 200; full text read |
| [Sentinel-5P Mission](https://sentiwiki.copernicus.eu/web/s5p-mission) | **kind atmospheric_composition:** Sentinel-5P measures the atmosphere for air quality, ozone and UV radiation, and climate monitoring and forecasting.<br><br>**instrument tropomi:** TROPOMI looks across a swath about 2,600 km wide.<br><br>**instrument tropomi:** Its products include nitrogen dioxide and methane. | **Supported.** Mission objective explicitly names air quality, ozone/UV and climate monitoring; payload table gives 2,600 km swath; product-development text names methane and nitrogen dioxide. No new numerical spatial-resolution claim is made here. | curl 200; full text read |
| [What are the band designations for the Landsat satellites?](https://www.usgs.gov/faqs/what-are-band-designations-landsat-satellites) | **instrument tirs:** TIRS measures two thermal infrared bands, 10.6–11.19 µm and 11.50–12.51 µm, with 100 m pixels.<br><br>**satellite 39084:** Landsat 8 and Landsat 9 each carry two sensors, OLI and TIRS.<br><br>**satellite 49260:** Landsat 8 and Landsat 9 each carry two sensors, OLI and TIRS. | **Supported after fetch-tool recovery.** Landsat 8/9 table gives bands 10/11 = 10.6–11.19 / 11.50–12.51 µm, native 100 m, resampled to 30 m. The introductory paragraph uses OLI/TIRS collectively for both satellites. Prefer OLI-2/TIRS-2 when precision about Landsat 9 hardware matters; the collective wording is also used by the cited primary page. | curl 403; fetch full text recovered |
| [Landsat 9](https://science.nasa.gov/mission/landsat-9) | **instrument oli:** OLI captures Earth's surface in visible, near infrared and shortwave infrared light. | **Supported.** "OLI captures observations ... visible, near infrared, and shortwave-infrared light"; same page also confirms the TIRS wavelengths and native/resampled resolution. | curl 200; full text read |
| [SMAP Mission Description](https://smap.jpl.nasa.gov/mission/description/) | **kind passive_microwave:** SMAP measures the amount of water in the surface soil everywhere on Earth, every 2–3 days.<br><br>**instrument smap_radiometer:** SMAP launched with a radar and a radiometer. The radar stopped in early 2015 when its power supply failed, and the radiometer carries on. | **Partial; missing qualifications and a source-level chronology error.** Fetched mission description says every 2–3 days but qualifies it as land not covered by water and not frozen, measuring liquid soil water, not ice. Its phrase "ceasing operation in early 2015" is contradicted by JPL’s dated anomaly notice, July 7, 2015. See PR70-005/006. | curl 404; fetch full text recovered |
| [SWOT Mission Overview](https://swot.jpl.nasa.gov/mission/overview/) | **instrument swot_interferometer:** SWOT is making the first global survey of Earth's surface water and measuring how water bodies change over time.<br><br>**instrument swot_interferometer:** Its 120 km wide swath gives overlapping measurements over most of the globe, revisiting on average every 11 days. | **Supported after fetch-tool recovery.** "first global survey of Earth’s surface water"; operations paragraph gives 21-day repeat orbit, 120-km-wide swath and average revisit 11 days. The PR correctly says average revisit, not a universal 11-day repeat. This does not mean continuous global coverage or no nadir gap. | curl 404; fetch full text recovered |
| [International Space Station](https://www.nasa.gov/international-space-station/) | **satellite 25544:** The ISS is an orbiting laboratory. 2 November 2025 marked 25 years of continuous human presence aboard it. | **Supported.** "November 2, 2025 ... 25 years of continuous human presence"; ISS is described as an orbital laboratory. No confusion with its 1998 launch date was found. | curl 200; full text read |
| [ECOSTRESS](https://ecostress.jpl.nasa.gov/) | **instrument ecostress:** ECOSTRESS makes high-resolution images of the temperature of Earth's surface, to learn how much water plants use and when they become stressed.<br><br>**satellite 25544:** Earth-observing instruments mounted on the station include ECOSTRESS, GEDI and EMIT. | **Supported.** Page describes surface-temperature imagery for plant water use/stress, including individual agricultural fields, and explicitly says ECOSTRESS launched to the ISS in 2018. | curl 200; full text read |
| [GEDI](https://gedi.umd.edu/) | **kind laser_ranging:** GEDI uses laser ranging to measure Earth's forests and topography in high resolution.<br><br>**instrument gedi:** GEDI measures Earth's forests and topography with high-resolution laser ranging from the ISS.<br><br>**satellite 25544:** Earth-observing instruments mounted on the station include ECOSTRESS, GEDI and EMIT. | **Supported.** "high resolution laser ranging of Earth’s forests and topography located in the International Space Station"; instrument paragraph says it observes tropical and temperate forests. This supports the platform/instrument association, not polar coverage. | curl 200; full text read |
| [EMIT](https://earth.jpl.nasa.gov/emit/) | **kind imaging_spectroscopy:** EMIT uses this to map the minerals on Earth's surface in the regions that produce dust.<br><br>**instrument emit:** EMIT is an imaging spectrometer that maps the composition of minerals on Earth's surface where dust comes from.<br><br>**satellite 25544:** Earth-observing instruments mounted on the station include ECOSTRESS, GEDI and EMIT. | **Supported.** "Installed on the International Space Station"; imaging spectroscopy to measure mineral composition of arid-land dust-source regions, with extended operations through at least 2026. | curl 200; full text read |


### Additional cited URLs introduced in docs/design

| URL | Associated claim | Support / sufficiency | Retrieval |
|---|---|---|---|
| <https://nasa-gibs.github.io/gibs-api-docs/> | All globe views come from NASA GIBS; GIBS supplies imagery and access APIs. | Supported service provenance. The landing page alone does not prove a particular layer's variable, palette, dates or band mix; capabilities and exact layer metadata were checked separately. | curl 200, full text read. |
| <https://celestrak.org/satcat/search.php> | How to find/check a satellite's NORAD ID. PR body says all curated IDs were checked with SATCAT. | Search form is legitimate but not proof of a particular mapping. I additionally downloaded the primary SATCAT CSV once and matched **all 24 IDs** to object names, with no mismatches. SATCAT operational flags are not authoritative evidence of a particular instrument's current science availability. | curl 200; CSV 200. |
| <https://www.wikidata.org/wiki/Q20354353> | Design proposes editable structured satellite-to-instrument and NORAD associations, CC0; example Sentinel-2A. | Retrieved item is Sentinel-2A, with “carries scientific instrument” MSI and SCN 40697. HTML has P1202/P377 property identifiers. CC0 is Wikidata's structured-data license, not a guarantee that each referenced external document has that license. Secondary discovery source only; not used to validate science. | curl 200. |
| <https://database.eohandbook.com/> | Design proposes CEOS MIM as an instrument-waveband curation source, licensed CC BY 4.0. | Home page offers mission/instrument tables and explicitly says “Data licence: CC BY 4.0”. It does not itself expose an instrument's wavebands, so that prospective detail remains unverified at this cited landing page. Not a runtime dependency. | curl 200. |

SATCAT mapping cross-check covered:
`25544 ISS`, `25994 Terra`, `27424 Aqua`, `43013 NOAA-20`, `54234 NOAA-21`, `37849 Suomi NPP`, `60133 GOES-19`, `51850 GOES-18`, `41866 GOES-16`, `41836 Himawari-9`, `40267 Himawari-8`, `39634 Sentinel-1A`, `62261 Sentinel-1C`, `66315 Sentinel-1D`, `40697 Sentinel-2A`, `42063 Sentinel-2B`, `60989 Sentinel-2C`, `41335 Sentinel-3A`, `43437 Sentinel-3B`, `42969 Sentinel-5P`, `39084 Landsat 8`, `49260 Landsat 9`, `40376 SMAP`, `54754 SWOT`.

The associated platform/instrument pairings are supported by the corresponding mission pages. This is a curated subset of payloads, not an exhaustive inventory: for example, OLCI/SLSTR/AHI also have bands outside the selected kind groupings, and Terra has instruments besides MODIS. No platform was inferred solely from an arbitrary catalog name.

### Supplementary primary documents and missing necessary citations

These were retrieved to validate the implementation beyond its existing citations. They should be cited or represented in the app where they define the displayed product.

| Exact document | Evidence / reason to add | Retrieval |
|---|---|---|
| [GIBS WMS capabilities](https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0) | All six new layer names, EPSG:4326 bounds, temporal dimensions and correct LegendURL links. Confirms availability definitions, not that every requested time has a complete picture. Default times differed across layers. | curl 200, XML parsed. |
| [SATCAT CSV](https://celestrak.org/pub/satcat.csv) | Actual records for all 24 NORAD/name mappings; one download rather than 24 individual lookups. | curl 200, CSV parsed. |
| [Worldview NOAA-20 M11/I2/I1 metadata](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/viirs/noaa20/VIIRS_NOAA20_CorrectedReflectance_BandsM11-I2-I1.md) | Explicitly “Red = M11, Green = I2, Blue = I1”; vegetation green; burns deep/bright red; ice/snow sky blue or turquoise; sediment water dark blue. This confirms the implemented colour description but is the missing direct citation for that exact composite. Also warns of polar checkered patterns from overlapping/day-night observations. | curl 200, full text read. |
| [Worldview NOAA-20 DNB metadata](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/viirs/noaa20/VIIRS_NOAA20_DayNightBand.md) | Explicitly a grayscale nightly composite, about 14 orbits, histogram-equalized per orbit. “Qualitative product intended ... strictly for image display”; pixel values across dates “should not be directly compared”. This is **not calibrated Black Marble** despite shared DNB physics. Add this qualification before lessons compare night brightness across dates. | curl 200, full text read. |
| [Worldview Terra MODIS day LST metadata](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/modis/terra/MODIS_Terra_Land_Surface_Temp_Day.md) | Explicitly land-surface temperature in Kelvin; 1 km sensor/imagery resolution; daily. References MOD11_L2 DOI, whereas the PR cites MOD11A1. | curl 200, full text read. |
| [GIBS MODIS LST legend](https://gibs.earthdata.nasa.gov/legends/MODIS_Land_Surface_Temp_H.png) | Actual palette, Kelvin, endpoint bins below 200 / at least 350 K. | curl 200; image viewed. |
| [GIBS MUR SST legend](https://gibs.earthdata.nasa.gov/legends/GHRSST_Sea_Surface_Temperature_H.png) | Actual palette, °C, clipped bins below 0 / at least 32 °C. | curl 200; image viewed. |
| [GIBS ABI band-13 legend](https://gibs.earthdata.nasa.gov/legends/Clean_Longwave_Infrared_Window_Band_H.png) | Infrared brightness temperature in °C, not ground temperature; nontrivial enhanced colour/grayscale scale with endpoints near -92 and +57 °C. | curl 200; image viewed. |
| [GIBS DNB legend](https://gibs.earthdata.nasa.gov/legends/VIIRS_SNPP_DayNightBand_ENCC_H.png) | Provider's grayscale display range; title says Radiance but does not supply a physical unit. Do not invent physical radiance units or interpret its display scaling as an inter-date measurement. It is the legend linked by capabilities even for NOAA-20. | curl 200; image viewed. |
| [JPL SMAP anomaly notice](https://smap.jpl.nasa.gov/news/1244/smap-team-investigating-radar-instrument-anomaly/) | Dated July 7 radar halt and Aug. 5, 2015 update identifying the low-voltage power supply. Resolves source-description chronology error. | fetch succeeded, response `mwgu7osjce2vi8`, URL index 2. |

Worldview metadata was read from main; the contemporaneously queried main commit was `1323548582f04ebf3e36eb2efe182ff03a03c4d2`. For durable authoring citations, pin a revision or use the equivalent maintained Worldview product description.

Other retrieval failures, not hidden or treated as evidence:
- <https://www.jpl.nasa.gov/news/nasa-soil-moisture-radar-ends-operations-mission-science-continues/> returned HTTP 403 via curl and fetch. Its search result helped locate the chronology, but the finding relies on the retrieved dated SMAP notice instead.
- NASA GIS item <https://gis.earthdata.nasa.gov/portal/home/item.html?id=459c7b8e5dc646ebb5cfbfdaea1fa559> was JavaScript-rendered; its REST item returned “Item does not exist or is inaccessible.” No passage conclusion relies on it.
- An initial guessed Worldview raw metadata path returned 404. GitHub's actual file tree was then queried, and the correct primary paths above returned 200.

### Remaining source-sufficiency caveats

1. The false-colour facts are generally correct, but the generic Earth Observatory composite uses green as the third input, whereas the shipped view uses red. Cite the exact layer description, not just the generic colour tutorial and spectral-band table.
2. Night lights include natural light and reflected moonlight. The JSON does acknowledge those, which is correct. The selected DNB layer additionally needs its qualitative/per-orbit-normalization warning; it cannot support later claims of measured inter-date changes in electricity or light output.
3. MUR is explicitly an analysis blending multiple satellite and in-situ sources. Do not attribute its entire field to the selected satellite or interpret the lack of cloud gaps as thermal infrared seeing through cloud. The current layer description does say “analysis” and mentions buoys, so this is a qualification to preserve rather than a separate finding.
4. “1 km”, “375 m”, “750 m”, “10 m” and “100 m” describe sensor/products in the cited passages. A 2048×1024 global texture has about 0.176° pixels, roughly 19.6 km north/south, with longitude spacing varying by latitude. Zooming the globe does not expose the original 10 m or 1 km data. No spatial-resolution transformation is performed here.
5. Proposed design lessons are not verified implementations. In particular, “whole planet once a day” needs illumination/polar-coverage qualifications, the planned fixed example-day fallback is not implemented, and a layer name in capabilities does not establish what a particular past date shows.
6. Historical event dates are not introduced as executable lesson pictures in #70. The design's Nov 13 examples were checked with Nov 13 requests for the daily layers; the committed screenshot has only retrieval-age credit, not an acquisition timestamp, so its precise acquisition date cannot be independently established from the asset.
7. The mission pages support installed instruments, not every platform's current operations. Sentinel-1A's retirement is described as planned, and SATCAT still labels it operational in the retrieved CSV. I did not turn that inconsistent status evidence into an assertion of current retirement. Suomi NPP's explicit no-new-data notice is clearer and supports the shipped qualification.

## Graph, map and image assessment

No new SVG line/bar graph or numerical chart renderer is in the assigned delta. The short ASCII journey diagram in the design document is a product flow, not a geographic/scientific plot. The important visuals here are the six scientific map rasters and the committed globe screenshot.

Static geographic checks:
- WMS 1.3.0 `EPSG:4326` uses latitude-first bounds here. `-90,-180,90,180` is correct for the whole Earth; 2048×1024 is a consistent 2:1 equirectangular image.
- The globe's surface/texture coordinate conventions are consistent with west/east longitude and north-at-top imagery. Direct fetched LST/SST images show geographically plausible land/ocean masks, not a detected axis swap or mirror.
- The globe is spherical, not an ellipsoidal GIS measurement tool; this is already documented. Graticules and coast outlines provide context, but there is no distance scale or labelled latitude/longitude grid. That limits precise geographic reading rather than proving misregistration.
- The screenshot shows the Americas under GOES East with plausible coast/imagery alignment. It does not establish renderer accuracy at all zooms, projection edges, screen sizes or times.

Readability/accessibility caveats:
- Scientific legends/units are missing, and the existing lit material changes palettes, as reported above.
- LST has black cloud/no-data gaps. The description mentions cloud gaps but does not explain provider coverage/swath gaps and quality filtering. A no-data legend should distinguish missing pixels from low temperatures.
- DNB has visible swath seams and is not an urban-light-only map; bright cloud/moonlit features are expected. No comparison of its brightness across dates is valid without a different quantitative product.
- The actual false-colour metadata supports the qualitative plant/burn/snow colours, but colour alone is not a unique land-cover classification. Bare soils can be pink; sediments can make water blue. Retain these limits in lessons rather than teaching every red pixel as a burn.
- Source links have descriptive aria labels, safe target/rel attributes and text labels. Native details and keyboard resizers are appropriate basic controls, but their real focus/toggle behaviour was not browser-tested. The old canvas aria-label says adjacent text provides equivalent information; the new map values do not currently have that equivalent.
- The app's later z-fighting fixes were noticed in combined HEAD, but I did not reproduce the old visual artifact and do not count it as a new #70 finding.

**No browser, tab, application screenshot capture, application-server launch, interactive globe session or live visual layout verification was performed.** Tests used their normal local httptest fixtures. I viewed the committed JPEG and directly retrieved raster/legend images only. No claim is made about mobile overflow, measured contrast or screen-reader behaviour beyond what the inspected markup/code establishes.

## Merge path

Fix the candidate-date cache behaviour and actual-date metadata first. Add correct legends/units and colour-preserving imagery rendering. Correct the coverage/cadence qualifications; the small chronology fix can go with them. Rebuild committed dist, rerun the checks above, add the missing regression cases, and verify the active-layer legend/date/failure/focus experience in one real browser before declaring the scientific views ready.
