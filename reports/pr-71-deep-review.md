# PR #71 deep review

## Findings

All line references in the findings are to assigned head `816a0f8b01ecc24aa20bf36985e30c07f942883c`, not the later local HEAD. There are seven primary findings. All are medium severity and merit changes before merge; none demonstrates a critical security exposure, data loss, or service outage. Findings 1–4 were reproduced without a browser. Findings 5–7 concern the scientific and temporal claims that this PR introduces.

### PR71-01 · Medium · A cached group selection does not supersede an outstanding request

**Location:** `internal/webui/src/main.js:267–284`. **Confidence:** high. **Status at combined HEAD:** persists.

Choose uncached group B, then return to previously loaded group A before B finishes.

```text
choose B -> start request B
choose A -> return cached A, without starting/invalidating a request
B resolves -> overwrite A's satellite list
picker still says A
```

**The problem:** The new early cache return bypasses the API client's replacement cancellation. `api.satellites()` and `api.search()` share the `satellites` request key, but neither is called on the cache hit. The old response can still write `state.items`, the status message, and loading state. An outstanding global search has the same problem and can overwrite the selected group's list after `isSearchResult` has become false.

**Impact:** Users see satellites from a different group than the picker identifies and can add the wrong object. This is introduced by the cache shortcut, not a complaint about caching itself.

Issue excerpt:

```js
  if (groupCache.has(name)) {
    state.items = groupCache.get(name);
    state.catalogLoading = false;
    setCatalogStatus('');
    renderCatalog();
    return;
  }
```

**What's needed:** Give every catalog action, including cache hits, a generation. Guard success, failure, status and final loading updates in both `loadGroup` and `searchAllGroups`. Cache an obsolete response if desired, but do not display it. Minimal implementation outline, pseudocode using the existing state/functions:

```js
// Shared by loadGroup and searchAllGroups.
let catalogRequest = 0;
// At the beginning of either action, BEFORE the cache branch:
const request = ++catalogRequest;
// After an await, and before changing displayed state in success or catch:
if (request !== catalogRequest) return;
```

**Verification:** The scratch reproduction evaluated the actual `loadGroup` function with deferred B and cached A. After choosing B then A, the final list was `[{norad_id:'2', name:'B satellite'}]`. It produced the same result at combined HEAD. Add this test and the equivalent outstanding-search-to-cached-group case, including late failure.

### PR71-02 · Medium · Back navigation leaves the camera at a later step's location

**Location:** `internal/webui/src/lesson.js:156–174`; relevant content `internal/knowledge/knowledge.json:1223–1245`. **Confidence:** high. **Status at combined HEAD:** Back still fails; direct-link camera restoration has since been fixed.

In "Colours you can't see", reach Antarctica at step 3, then press Back to the vegetation explanation in step 2.

```text
step 1: camera Africa
step 2: inherits Africa
step 3: camera Antarctica
Back:   enter step 2, which has no camera -> remains at Antarctica
```

**The problem:** `go()` applies only the destination step's delta. A step with no camera inherits whichever camera was most recently displayed, including a later step's camera. At the assigned snapshot, `start()` also strips the cameras from all earlier steps, so a direct link to vegetation step 2 or Light/heat step 2/3 never applies the inherited camera at all. The existing shared-link unit test explicitly expects no `face` call and therefore encodes that defect.

Issue excerpts:

```js
    enter(current.lesson.steps[step]);
```

```js
    for (const earlier of lesson.steps.slice(0, step)) enter({ ...earlier, camera: null });
```

**Impact:** The lesson describes Africa while showing Antarctica. A shared link at the assigned snapshot also fails to reproduce the expected view.

**What's needed:** Resolve the last camera at or before the destination step on every entry, not just initial start. A small helper is sufficient:

```js
  function cameraFor(lesson, index) {
    for (let i = index; i >= 0; i -= 1) {
      if (lesson.steps[i].camera) return lesson.steps[i].camera;
    }
    return null;
  }
```

In `go`, replace the issue line with:

```js
    enter({ ...current.lesson.steps[step], camera: cameraFor(current.lesson, step) });
```

Use the same resolution in `start`. Combined HEAD already has this helper and uses it in `start`, but not in `go`.

**Verification:** At the assigned snapshot, direct start at vegetation step 2 logged no camera calls. Starting at step 3 and pressing Back logged only `face(-72,30)`, while `current().step` became 1. At combined HEAD the direct link logged `face(5,20,null)`, but Back still left only the Antarctica camera call. Test forward/backward equivalence and direct entry for every step that omits a camera.

### PR71-03 · Medium · The true-colour lesson inherits unrelated cloud and aurora overlays

**Location:** `internal/webui/src/lesson.js:55–59`, `internal/webui/src/layers.js:391–396`, `internal/knowledge/knowledge.json:1192–1201`. **Confidence:** high. **Status at combined HEAD:** persists.

Use "Clouds now", optionally enable the aurora estimate, then start "Colours you can't see".

```text
saved clouds + setBase('true-color') + show('')
    -> true-colour base WITH saved near-live cloud layers
    -> lesson says this is yesterday's VIIRS true-colour picture
```

**The problem:** `setBase` only changes `state.base`. Clearing the view with `show('')` restores `state.overlays`, and neither operation disables aurora. The lesson does not own a complete initial scene. NOAA GOES/Himawari images can therefore cover the NOAA-20 scene the text asks the reader to inspect. A shared lesson link is also dependent on browser-local layer preferences that the URL does not carry.

Issue excerpt:

```js
    state.base = id;
    commit();
```

**Impact:** The supposed true-colour baseline can contain different instruments, observation times and an estimated overlay. Switching to the false-colour step removes the cloud imagery, so differences are not necessarily caused by the band combination.

**What's needed:** Initialize a clean lesson scene. In the assigned snapshot `setBase` is called by the lesson player, not the regular base-radio controls, so the smallest local correction for this baseline is to clear the unrelated overlays there:

```js
    state.base = id;
    state.overlays = [];
    state.aurora = false;
    state.tried = null;
    commit();
```

If retaining a strictly base-only contract for `setBase`, put equivalent reset behavior in a lesson-entry operation instead. Do not silently alter the regular panel's stacking behavior. Give the other lessons explicit initial-overlay policy as well.

**Verification:** With the actual layers module and restored `{base:'true-color', overlays:['cloud'], aurora:true}`, running the lesson's `setBase('true-color'); show('')` sequence sent `['true-color','cloud']` to the globe and left `aurora:true`. Reproduced at both snapshots. Test a dirty saved layer state, not just an empty mocked panel.

### PR71-04 · Medium · Lessons advance even when the requested satellite cannot be selected

**Location:** `internal/webui/src/main.js:1102–1105`, `internal/webui/src/lesson.js:53–54`; capacity guard at `main.js:166–183`. **Confidence:** high. **Status at combined HEAD:** persists.

With seven unrelated tracked satellites, start the orbit lesson. GOES fills the eighth slot. At the Terra step, `addSatellite('25994')` refuses the ninth object, but the player still changes to Terra's temperature map and continues.

```text
seven tracks -> add GOES -> eight tracks
next step   -> reject Terra -> selected satellite stays GOES
lesson/map  -> describe Terra anyway
```

**The problem:** The new `showSatellite` callback has no success contract. The existing capacity guard reports a catalog warning and returns, while `enter()` assumes selection succeeded.

Issue excerpt:

```js
function showSatellite(id) {
  addSatellite(id, undefined, { frame: false });
}
```

**Impact:** The map and explanation refer to Terra while the inspector, orbit and selected marker still identify GOES. Starting a lesson with all eight slots occupied can fail from its first step. The warning is outside the lesson card and does not stop the incorrect scene.

**What's needed:** Check capacity before advancing and offer a recoverable instruction in the lesson, or reserve the necessary lesson satellites with user consent. Do not evict unrelated tracks silently. Minimal control-flow outline, pseudocode; `addSatellite`, `showSatellite`, `enter`, `go` and `start` must agree on the result:

```text
addSatellite: return true when already tracked or added; false on capacity failure
showSatellite: return addSatellite result
enter: if requested selection failed, do not apply the rest of the scene
start/go: retain the prior step and show the capacity message in the lesson
```

**Verification:** The actual `addSatellite` function with seven existing entries accepted GOES, rejected Terra and kept selected ID `60133`, with the eight-satellite warning. Reproduced at both snapshots. Test eight occupied slots, seven slots before the two-satellite lesson, and a requested satellite already tracked at capacity.

### PR71-05 · Medium · The ice answer explains a different band combination from the one on screen

**Location:** `internal/knowledge/knowledge.json:1227–1229,1247–1257`. **Confidence:** high. **Status at combined HEAD:** persists.

The lesson shows `VIIRS_NOAA20_CorrectedReflectance_BandsM11-I2-I1`, then explains the answer using "shortwave infrared, near infrared and green".

```text
actual image RGB = M11 / I2 / I1 = SWIR / NIR / RED
answer says                         SWIR / NIR / GREEN
```

**The problem:** The Earth Observatory article is legitimate, but its "Shortwave infrared, near infrared, and green" passage describes a different visible-band assignment. It cannot establish the exact composite that the lesson claims to explain. This is precisely the unresolved source gap noted in the design document's "Facts still to source" section. NASA's own Worldview metadata for the actual VIIRS layer supplies the missing primary evidence.

Issue excerpt:

```json
       "text": "In a shortwave infrared, near infrared and green combination, snow and ice look bright blue, water black, and newly burned land red.",
       "sources": [
        "eo-false-color"
       ]
```

**Impact:** A lesson about assigning invisible bands to display colours teaches the wrong visible input. The broad blue/green/red appearances are largely correct for the actual layer, but the explanation and citation are not. The screenshot also reproduces the incorrect sentence.

**What's needed:** Cite the actual layer description and name its red input. For example:

```json
       "text": "This view assigns M11 shortwave infrared to red, I2 near infrared to green, and I1 visible red to blue. Thick snow and ice appear sky blue or turquoise; ice clouds can have a similar colour.",
       "sources": [
        "worldview-viirs-m11-i2-i1"
       ]
```

Add that source key using the primary URL in supplemental source S1 below. Use it for the vegetation interpretation too. The existing wavelengths are correct according to the VIIRS spectral-band table. The unqualified quiz prediction that vegetation must be "Brighter" than bare desert is not established by the cited passage; ask about green display colour in this specific composite instead, or qualify brightness by band/material.

**Verification:** Retrieved Earth Observatory's full article and the actual Worldview metadata. The latter begins `False Color: Red = M11, Green = I2, Blue = I1`, explicitly describes vivid sky blue thick snow/ice, bright green vegetation, pinkish bare soil, and red burns. Verify the corrected answer against that passage, not a domain-only source check. Refresh `assets/web-lesson.jpg` if retaining it as a content example.

### PR71-06 · Medium · Unsourced hints bypass the fact-checking rule and include an incorrect polar-night claim

**Location:** `internal/knowledge/knowledge.json:1157,1269`; bypass in `internal/knowledge/knowledge_test.go:21–48` and `internal/webui/src/lesson.js:140`. **Confidence:** high. **Status at combined HEAD:** persists.

The Antarctic step tells the reader that "Between April and September, Antarctica is in polar night and shows black." This is not true for the whole continent or throughout those months at the configured latitude, 72° S.

**The problem:** Hints are documented as directions only, but they contain unchecked scientific assertions. None of the lesson's sources supports this continent-wide April-to-September statement. The other factual hint, "If the whole disk is in daylight ... the two views look alike", also does not follow from the sources: visible reflectance and thermal brightness temperature differ in daylight too.

Issue excerpt:

```json
     "hint": "Between April and September, Antarctica is in polar night and shows black. Turn the globe to Greenland instead."
```

**Impact:** The learner is taught an incorrect geographic/seasonal rule and told to abandon a region that can have many hours of daylight. The promised "every fact has a source" check cannot catch it because hints never enter `eachStatement`.

**What's needed:** Keep hints as directions and move any seasonal explanation into sourced text with latitude/date qualifications. Smallest content fix:

```diff
-     "hint": "Between April and September, Antarctica is in polar night and shows black. Turn the globe to Greenland instead."
+     "hint": "If the ice is dark, rotate the globe toward Greenland and compare the two regions."
```

Replace the daylight/alike hint with a direction to compare the bands at different times, not an assertion that their contents match.

**Verification:** Using the equations in NOAA's *General Solar Position Calculations*, the approximate daylight duration at 72° S is **10.61 hours on 2026-04-01** and **10.98 hours on 2026-09-15**, not continuous night. These are scratch calculations using the published declination and 90.833° sunrise equations, not observed imagery. NOAA PDF retrieval succeeded. An attempted British Antarctic Survey corroborating page returned HTTP 202 with no usable article; its search snippet was not treated as verified evidence. Add an editorial source check covering hints, prompts and summaries, not only `text` and `explain` fields.

### PR71-07 · Medium · Lesson text assigns dates and freshness that the image pipeline cannot guarantee

**Location:** `internal/knowledge/knowledge.json:1172–1175,1201–1204`. **Confidence:** high for the contract mismatch. **Status at combined HEAD:** persists.

When yesterday's VIIRS image is absent, the existing provider deliberately tries two and three days ago. The new card still says "This is yesterday's true-colour view". A cached/stale image is also possible. Instrument scan cadence is used to justify "the views you see are close to live", although it does not establish the acquisition time of the displayed image.

```text
instrument cadence != GIBS latency != server retrieval time != observation date
```

**The problem:** `gibs.Image` has `dailyFallbackDays = 3`, and the image route exposes only `X-Khonsu-Fetched-At` and `X-Khonsu-Stale`. `freshnessOf()` displays retrieval age, not acquisition date. The Earthdata instrument page cannot support a runtime statement about this image's date. NASA's GOES layer metadata states approximately 40 minutes of latency before GIBS availability; the server additionally caches live imagery for 30 minutes. The globe keeps an unchanged image texture rather than refreshing it on the timeline's Live ticks.

Issue excerpt:

```json
       "text": "NOAA-20 carries VIIRS, which measures 22 spectral bands from 0.402 to 12.49 µm. This is yesterday's true-colour view of the whole Earth from VIIRS.",
```

**Impact:** Learners can compare different observation days while being told they are comparing yesterday or near-live data. A newly fetched old image can look fresh in the credit line. This is a newly introduced content promise that relies on older provider behavior, not a claim that PR #71 introduced the fallback implementation.

**What's needed:** At minimum remove the guaranteed relative date and distinguish acquisition cadence from the displayed image's freshness. A small static wording correction is possible without redesigning the provider:

```json
       "text": "NOAA-20 carries VIIRS, which measures 22 spectral bands from 0.402 to 12.49 µm. This is a daily true-colour mosaic from VIIRS; a recent earlier day may be shown if the newest image is unavailable.",
       "sources": ["earthdata-viirs-bands", "worldview-viirs-true-color"]
```

The final clause describes Khonsu's own fallback and should also be identified as application behavior. If continuing to name a date, return and display the actual requested/acquired date, including the saved-copy case, and use a consistent observation date for comparisons. Say ABI *can acquire* a disk every 10 minutes without promising that the displayed texture is that recent.

**Verification:** Read the assigned GIBS client, server imagery adapter, layer freshness code and globe texture reuse. Existing fallback tests pass. No live imagery was fetched to prove that a fallback happened during this review, so this is a confirmed reachable mismatch, not a claim about today's actual image age.

## Decision

**Request changes.** Fix the catalog race and incomplete lesson scene transitions, and correct the scientific/temporal statements before merging the assigned snapshot. The later combined HEAD fixes direct-link camera inheritance, but Back navigation and the other six findings remain. There is no demonstrated critical safety/security blocker. Passing tests and a matching bundle do not cover these interactions or substantiate the lesson claims.

## Inspected scope and snapshot verification

- Repository: `Mohammed-Ashour/Khonsu`, PR <https://github.com/Mohammed-Ashour/Khonsu/pull/71>.
- Assigned base: `5f7d32b6f749f2975a908f4136411f6f41234983`.
- Assigned head: `816a0f8b01ecc24aa20bf36985e30c07f942883c`.
- `gh pr view 71 --repo Mohammed-Ashour/Khonsu --json headRefOid,baseRefOid,url` was run at the beginning and again at the end of evidence gathering. Both GitHub SHAs matched the assignment. **No GitHub head/base drift.**
- Stack verified with `gh`: #69 head `341cc2627156eddc534a37d9b10516ba0aa17155`; #70 base is that SHA, and #70 head is the assigned #71 base. #69 base is `0dd203f8dd8142cec6d8d9db14a3a72251d3552c`.
- Current local combined HEAD: `e07a9b7b361a29a625d93409122e8b09993470a1`, a descendant of the assigned head with four additional Learn-hub/story/chart commits. This is **local forward drift**, not PR metadata drift. No checkout was performed.
- Exact snapshot material came from `git diff`/`git show` and `git archive` into `/tmp/pr71-review-snapshot`. A separate archive of combined HEAD was used for its web tests. No historical file was inferred from current CodeGraph line numbers.
- Inspected all changed human-written source, test and documentation lines. For `knowledge.json`, a parsed structural comparison proved that existing `kinds`, `instruments`, and `satellites` are semantically unchanged despite the large reformat. The semantic additions are the three lessons and two source records, `esa-orbits` and `celestrak-geo`. All lesson fields, questions, hints, and source associations were reviewed.
- Generated `dist/app.js` was not reviewed line by line as minified vendor code. Instead its entire rebuild was compared byte-for-byte. `dist/index.html` and `dist/styles.css` match their source copies. The new JPEG was opened and inspected as a static image.
- Read `ARCHITECTURE.md`, `docs/design/satellite-data-lessons.md`, `docs/web-app.md`, `docs/what-satellites-measure.md`, relevant README sections and the web build README. `ARCHITECTURE.md` is unchanged between assigned head and combined HEAD. Loaded review, deep-review, scientific/geospatial, core-principles, show-me, unslop and UI-review guidance. No repository `AGENTS.md` was found in the inspected repository instructions search.
- Traced lesson entry through the Data tab, API client, Go lesson parser/handler, layer selection, imagery provider and globe; catalog changes through picker, caching, keyed API cancellation and list rendering. CodeGraph was used first for structural navigation, then exact historical source was read.
- This is educational content/UI, not a science-model maturity-stage PR. No Stage 0–5 claim is made.

## Architecture assessment

```text
embedded knowledge.json -> knowledge.Load/parse -> /api/v1/lessons
    -> lesson.js -> satellite selection / layers.js / globe.face

picker -> main.loadGroup or searchAllGroups -> keyed API requests
       -> catalog state -> rendered list
```

The ownership split is reasonable: Go validates curated data and serves a provider-free endpoint; the browser owns lesson progress; layers and globe own imagery selection/rendering. No new library, runtime privilege, persistence format migration or numerical orbit algorithm is introduced. Existing public Go APIs remain intact; `Kind.lessons` and the lesson endpoint are additive.

The problems are at coordination boundaries, not a reason to rewrite the modules. The player assumes that a sequence of imperative deltas is a reproducible scene, assumes satellite selection succeeded, and mixes lesson state with saved layer preferences. The new catalog cache bypasses the request replacement boundary. Small entry-state and request-generation fixes are sufficient.

The provider-free lesson endpoint is available with `--file`, and its handler test confirms that. Text is assigned with `textContent`, links are filtered to HTTPS and use `noopener noreferrer`, and lesson URLs restrict IDs. The new endpoint returns embedded data rather than fetching a URL supplied by the reader. No new injection or SSRF path was found in the inspected change. This does not certify unrelated providers or the full application as secure.

## Source audit

### Inventory and method

All **13 unique URLs cited by the three introduced lessons** were retrieved in full through `fetch_content`. Only ESA and CelesTrak are newly added source records; the other 11 are existing sources newly reused by these lessons. No existing source URL was semantically edited. The changed documentation adds no new scientific reference URL; the new README JPEG and PR-body image link are illustrations, not research sources. Fixture-only URLs such as `https://x`, the test ABI URL, and the pre-existing Sentinel-2 test reference were not treated as lesson evidence.

Retrieval took place on **2026-11-14 UTC**. A successful retrieval below means the actual article was read, not that every attached sentence is supported. All listed agency pages are legitimate primary institutional documentation or first-party educational material. CelesTrak is a named orbital specialist's technical article, appropriate for geostationary theory, but not the operational authority for GOES status. The NOAA page supplies that status.

Claim locations use `L` = Light or heat, `C` = Colours you can't see, `O` = Orbit decides the data; the number is the step. The table includes every source-to-claim association, with qualifications rather than blanket domain-based approval.

| Source URL | Associated introduced claims | Passage-level evidence and support verdict | Retrieval status |
|---|---|---|---|
| <https://www.nesdis.noaa.gov/our-satellites/currently-flying/geostationary-satellites> | L1: GOES-19 is GOES East. | **Supported.** GOES-R mission section says GOES-U, now GOES-19, "operates as NOAA's GOES East satellite" and identifies GOES-18 as West. Appropriate current operational attribution. | Full article retrieved. |
| <https://www.nesdis.noaa.gov/our-satellites/currently-flying/goes-east-west/advanced-baseline-imager-abi> | L1: ABI visible/IR, 16 bands; answer: day/night analogy. L3: cloud-top temperature, rainfall/flash flooding; full disk every 10 min and purported displayed freshness. O1: GOES disk cadence/fixed-side coverage. | **Supported for instrument facts.** Opening paragraph states visible/IR and 16 bands, daytime reflected-sunlight channels and the night-vision analogy. Following paragraph gives 10-min full disk. Thunderstorm/hurricane section calls cloud-top temperatures predictors of rainfall intensity/flash flooding. **Not sufficient for app image age** and does not alone prove the geometric far-side claim; CelesTrak/ESA supply geometry. The analogy is quoted accurately, though emitted thermal radiation is the physical explanation. | Full article retrieved. |
| <https://www.nesdis.noaa.gov/our-satellites/currently-flying/goes-east-west/abi-scan-mode-information-and-channel-summary> | L1: band 2, red, 0.64 µm. L2: band 13, clean longwave window, 10.3 µm. | **Supported.** Raw HTML channel table has `2 / 0.64 / Visible / Red / 0.5` and `13 / 10.3 / Infrared / "Clean" longwave window / 2`. Last values are native km resolution, not the app's output pixels. Historical scan-mode text mentions GOES-16/17; it must not be used as present GOES-19 operational-status evidence. | Readable fetch omitted tables; raw fetch succeeded and table rows were inspected. A separate Python urllib attempt failed local certificate verification; no TLS bypass was used. |
| <https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/electromagnetic-spectrum> | L1: visible spectrum and eyesight. L2: emitted IR rather than reflected visible light. | **Supported for general physics.** Visible light is the portion detectable by the human eye; absorbed energy is re-emitted at longer wavelengths, with ocean IR as an example. **Insufficient for "much how ... would look to us" if interpreted as natural colour**: a single red band is monochrome, not an RGB photograph. No wavelength-unit error found. | Full article retrieved. |
| <https://www.earthdata.nasa.gov/data/instruments/viirs> | C1: NOAA-20 carries VIIRS, 22 bands, 0.402–12.49 µm; yesterday's whole-Earth true colour. | **Partial.** Opening paragraph explicitly lists Suomi NPP, NOAA-20 and NOAA-21. Retrieved article does **not** state the exact 22-band wavelength endpoints. Those are supported by the spectral-bands page below, which should be attached to this sentence. **Does not establish the displayed product, date or complete illuminated coverage.** Add actual layer metadata and use actual date/qualified daily-mosaic wording. | Full article retrieved; searched for `22`, `0.402` and NOAA-20, then checked the text. |
| <https://www.earthdata.nasa.gov/data/instruments/viirs/spectral-bands> | C2: M11 2.23–2.28, I2 0.85–0.88, I1 0.6–0.68 µm. Also supplies C1's currently uncited band count/range. | **Supported for numerical ranges.** Page says 22 bands and lists I1, I2, M11 at the stated ranges; M1 begins 0.402 and M16 ends 12.49 µm. It lists I bands at 375 m and M bands at 750 m. The table's category labels include apparent taxonomy problems, so use its numeric ranges rather than copying every classification. It does not by itself establish the rendered RGB assignment. | Full article and band table retrieved. |
| <https://science.nasa.gov/earth/earth-observatory/how-to-interpret-a-false-color-satellite-image> | C1 answer: strong vegetation NIR response and "Brighter" than desert. C2: green vegetation in Congo/Sahel relative to Sahara. C3 text: SWIR and burn scars. C3 prompt/answer: ice, blue ice/black water/red burns with a stated green input. | **Supported for strong vegetation NIR reflectance, SWIR burn response and general false-colour principles.** NIR passage says plants reflect strongly; SWIR passage says newly burned land reflects strongly. Composite passage assigns SWIR to red, NIR to green, **visible green** to blue. Thus **not direct support for this M11-I2-I1 product's exact band recipe**, named current regions or an unconditional brighter-than-desert comparison. It also qualifies muddy water as blue and ice clouds as blue, so "water black" and blue=ground ice need qualifications. See PR71-05 and primary layer S1. | Full article retrieved, including the relevant composite sections. |
| <https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits> | O1: equatorial geostationary rotation/fixed region. O2: low polar orbit, Earth's rotation and differing strips. | **Supported as an introductory explanation.** Polar section describes roughly pole-to-pole orbits, typically 200–1000 km, useful for global coverage as Earth rotates beneath them. Geostationary section describes remaining above a fixed position over the equator. Terra is a near-polar orbit; "roughly" avoids claiming a literal crossing of both poles. | Full article retrieved. Newly introduced source record. |
| <https://celestrak.org/columns/v04n07/> | O1: geostationary theory/fixed side. | **Supported.** Theory section says period equals Earth's rotation in inertial space, a sidereal day of 23h56m04s, with zero inclination and eccentricity required for a fixed point. Later paragraph states a single GEO satellite sees 42% of Earth's surface. Lesson wording is qualitative and does not incorrectly substitute a 24-hour solar day. | Full article retrieved. Newly introduced source record. |
| <https://www.earthdata.nasa.gov/data/instruments/modis> | O1 question/answer: Terra MODIS, every place every 1–2 days, 36 bands. | **Supported for nominal global coverage/cadence and channel count.** Opening sentence states 36 spectral channels and global coverage every 1–2 days. It also identifies Terra/Aqua processing. This is not a promise of a valid cloud-free land-temperature value everywhere every day. Keep that distinction explicit. | Full article retrieved. |
| <https://www.earthdata.nasa.gov/data/catalog/lpcloud-mod11a1-061> | O2: daily Terra land-temperature map built from MODIS strips. | **Supported with product qualification.** Description gives daily 1-km per-pixel land-surface temperature, derived from `MOD11_L2` swaths, and averaging of qualifying clear-sky observations. Variables specify Kelvin and 0.02 native scale factor. The displayed GIBS layer's own metadata cites `MOD11_L2`; this L3 catalog is related primary documentation, not proof of every GIBS rendering detail. Temperature is land surface, not 2-m air temperature. | Full description and variables retrieved. |
| <https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/remote-sensing/passive-instruments> | O2: clouds leave gaps because most passive sensors cannot penetrate dense cloud. | **Supported with its stated "most" qualification.** Opening paragraph explicitly says most passive sensors cannot penetrate dense cloud cover. Do not generalize to passive microwave or all weather/sensors. | Full article retrieved. |
| <https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/remote-sensing-resolution> | O3: sharper spatial resolution/narrower swath/longer revisit tradeoff. | **Supported as the source's introductory tradeoff example.** Temporal resolution section contrasts MODIS 1–2 days and OLI 16 days, then explicitly says high spatial resolution needs a narrower swath and more time between observations. Treat as an instrument-design tradeoff, not a universal impossibility independent of constellation size, pointing and orbit. | Full article retrieved. |

### Missing primary links and supplemental checks

These primary documents were retrieved independently to settle gaps; they are **not** falsely counted as citations already present in PR #71. Worldview metadata was retrieved from NASA's repository. Its `main` SHA observed during review was `1323548582f04ebf3e36eb2efe182ff03a03c4d2`; a maintained public documentation URL is appropriate in the product, while review evidence can be pinned.

| ID / primary URL | Passage inspected / relevance | Retrieval |
|---|---|---|
| S1 <https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/viirs/noaa20/VIIRS_NOAA20_CorrectedReflectance_BandsM11-I2-I1.md> | Exact RGB recipe, vivid sky blue/turquoise snow/ice, similarly coloured ice clouds, green vegetation, pinkish bare soil, red burns, sensor 375/750 m vs browse imagery 250 m, daily temporal resolution, polar mosaic/checkerboard caveats. **Necessary missing direct citation for the false-colour interpretation.** | Direct HTTPS GET succeeded. An initial guessed old metadata path returned 404; the actual path was discovered via NASA's GitHub tree, then retrieved. |
| S2 <https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/viirs/noaa20/VIIRS_NOAA20_CorrectedReflectance_TrueColor.md> | True colour RGB = I1/M4/M3; NOAA-20 attribution; daily product; polar overlap and mixed day/night observations. **Missing product-specific support for C1.** | Direct HTTPS GET succeeded. |
| S3 <https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/goes/GOES-East_ABI_Band13_Clean_Infrared.md> | GOES-19 at 75.2° W, band 13 at 10.3 µm, day/night clouds, 2-km sensor/browse resolution, 10-min intervals and approximately 40-min GIBS latency. Clarifies instrument cadence versus displayed age. | Direct HTTPS GET succeeded. |
| S4 <https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/modis/terra/MODIS_Terra_Land_Surface_Temp_Day.md> | Day land-surface temperature is **Kelvin**, daily, 1-km sensor and imagery resolution; references `MOD11_L2`. Needed for legend/units and exact displayed-product attribution. | Direct HTTPS GET succeeded. |
| S5 <https://gml.noaa.gov/grad/solcalc/solareqns.PDF> | Two-page NOAA solar declination and sunrise/sunset equations, including zenith 90.833°. Used for the explicit April/September counterexamples in PR71-06. | PDF retrieved and extracted; both pages read. |
| Attempted corroboration <https://www.bas.ac.uk/polar-operations/sites-and-facilities/facility/halley/clean-air-sector-laboratory-caslab/> | Could have supplied location-specific polar-night examples, but no article body was obtained. Not used as passage evidence. | Readable extraction failed; direct HTTP returned 202 with no usable article. |

### Claims and qualifications not covered merely by having an HTTPS link

- Lesson titles/summaries, question prompts/choices and hints are not covered by `eachStatement`. The hints include factual claims despite the explicit documentation rule to the contrary.
- The exact VIIRS band count/range is corroborated, but the source currently attached to C1 is insufficient. Add the spectral-bands citation, not just another generic NASA link.
- "Yesterday", "whole Earth" and "close to live" need observation-time and coverage qualifications. A daily daytime mosaic can contain polar-night gaps and different overpass times. Scan cadence is not product latency or app refresh cadence.
- "Plants reflect strongly in NIR" does not establish that every forest/grassland pixel is brighter than every bare-desert pixel, especially in a three-band display with per-band stretches. Ask about the documented display colour instead.
- The daylight hint does not establish that visible and IR pictures should look alike. Visible light measures reflected solar radiance; band 13 is used for thermal/cloud-top brightness temperature.
- No historical event image, fixed historical imagery date, numerical chart series, radar scene or quantitative geospatial transformation is introduced in this assigned delta. The later local HEAD adds such stories and charts; they must not be attributed to this PR snapshot. This source inventory does not claim a full review of those later stories' citations.
- The source-list documentation has not added the two new ESA/CelesTrak links even though README says the page lists every source. This is a small documentation follow-up, not a primary merge blocker.

## Map, graph and image assessment

### What was actually inspected

- Opened `assets/web-lesson.jpg` from the assigned snapshot. It shows a globe centred toward Antarctica, cyan/turquoise ice/cloud regions, a white coastline, an orbit path, the lesson card and the incorrect green-band sentence. Labels are legible in that static 852×784 image. This is **not** evidence that the running app, touch layout, current imagery or WebGL render behaves correctly.
- Read all of assigned `globe.js` and `layers.js`, the lesson markup/styles and the provider's world-image request. WMS 1.3.0 uses EPSG:4326 with latitude/longitude BBOX `-90,-180,90,180`, requested at 2048×1024. The sphere's longitude direction and UV layout are consistent with that equirectangular image; the new camera takes latitude then longitude. No swapped coordinate/unit defect was found there.
- Read the material/stack change: identical sphere geometry, `LessEqualDepth`, `depthWrite:false`, and explicit draw order. This avoids the old radius-separated facets in principle. No live GPU/depth/sorting verification was performed, so this is not a visual certification of the z-fighting fix.
- The assigned delta contains no new SVG numerical graphs. Current combined HEAD's `charts.js` was structurally inspected as context: linear time-series axes, log/log scatter axes, logarithmic micrometre spectrum, zero-based nonnegative bars, escaped labels and expandable numeric tables. Its charts are later additions, not PR #71 findings. Current chart/player tests were included in the 133-test combined-HEAD run; source-series correctness for those later stories is outside this delta.

### Nonblocking readability and accessibility follow-ups

1. **Temperature/IR legends are missing.** The new orbit lesson puts a temperature map on screen without a colour ramp, range or Kelvin label. The underlying provider's units are not present in the lesson or credit, and grayscale/colour is not a numeric readout. Add a provider-backed legend and explicitly distinguish surface temperature from air temperature, and brightness temperature from a photograph. This is not made a primary blocker because the current step asks readers to notice swaths/gaps, not read a numerical temperature.
2. **Browse resolution is not instrument resolution.** The full-world 2048-pixel texture is about 19.6 km per equatorial pixel, so native ABI 0.5/2 km, VIIRS 375/750 m and MODIS 1 km details cannot be resolved from it. Do not infer native sharpness from this globe. Geographic labels/ticks and a scale are absent; coastlines and an unlabeled graticule are the orientation cues.
3. **Blue is not uniquely ground ice.** NASA's actual layer description says ice clouds can also be turquoise and muddy water dark blue. The screenshot contains extensive clouds. Include that qualification when asking the learner to identify Antarctic ice.
4. **Keyboard focus needs a real-DOM check.** Answer selection, comparison and navigation all rebuild the entire card using `replaceChildren`; the focused control is removed and no focus restoration appears in the player. The fake nodes do not model actual focus, scroll, screen-reader announcements or layout. Group picker tests cover arrows/Enter/Escape but not focus leaving the popup, assistive-tech activation or touch behavior. No browser was launched to settle those cases.
5. **Mobile composition is unverified.** CSS limits the bottom card to 52% of the viewport and provides scrolling, but it also overlaps the region used by camera controls/credit. Long text, 200% zoom and narrow/short screens need inspection. The static desktop-like JPEG does not establish the phone behavior claimed in the PR body.
6. **Colour dependence remains.** The ice quiz requires visual colour discrimination, and the globe's generic ARIA label describes satellite readouts rather than equivalent imagery interpretation. Textual band-to-colour explanations help, but a proper image description/legend would improve nonvisual access. Do not claim the globe's satellite position readouts reproduce the imagery information.

## Verification

All build/test writes were confined to scratch archives outside the repository. No branch checkout, project code change, server, browser, GitHub comment or subagent was used.

| Command/check | Observed result |
|---|---|
| `gh pr view 71 --repo Mohammed-Ashour/Khonsu --json headRefOid,baseRefOid,url` | Passed twice; no PR SHA drift. |
| `gh pr view 69 ...` and `gh pr view 70 ...` | Stack bases/heads matched #69 → #70 → assigned #71. |
| `git diff --stat/--numstat 5f7d32b 816a0f8` and exact diff/show reads | 26 changed files, 2670 insertions and 518 deletions; generated bundle and JSON reformat account for much of the size. |
| `go test ./...` in assigned archive | Passed all reported packages. Full output saved during review at `/tmp/pr71-go-tests.log`. |
| `go vet ./...` in assigned archive | Passed, exit 0. |
| `go test -race ./internal/knowledge ./pkg/server` in assigned archive | Both packages passed. No race detector report. |
| `npm test` in assigned archive's `internal/webui` | **125/125 passed**, no skips/failures. |
| `npm ci --ignore-scripts`, `npm run build`, SHA-256 comparison of all `dist/*` before/after | Installation/build succeeded; **all generated artifacts byte-identical**, including app JS, HTML and CSS. No repository bundle was rebuilt. |
| `node /tmp/pr71-repros.mjs` | Passed assertions demonstrating missing direct camera, stale Back camera, cached-group race, inherited overlays and capacity refusal. Uses actual snapshot modules/functions with fake DOM/deferred requests, not a browser. |
| `node /tmp/pr71-repros.mjs /Users/mohamedashour/workspace/tlego` | Confirms direct camera fix at current HEAD and persistence of Back, race, overlays and capacity defects. Read-only module/function evaluation. |
| `npm test` in combined-HEAD archive | **133/133 passed**, no skips/failures. |
| UI scanner, high-severity mode, assigned source directory | 25 files scanned; 0 mechanical findings. Not treated as layout/accessibility proof. |
| Source retrieval and passage inspection | All 13 lesson citations retrieved. Supplemental successes/failures documented above. Search answers alone were not used as proof. |
| NOAA solar-equation scratch calculation | At 72° S, approximately 10.61 h daylight on April 1 and 10.98 h on September 15, 2026. |

### Test gaps that matter

- Request ordering across a cache hit and an outstanding uncached group/global search, including failures and the loading/status flags.
- Backward navigation and direct links for inherited camera state; the old test currently asserts the broken direct-link behavior.
- Starting a lesson over non-default saved cloud/aurora/view selections and comparing the resulting entire scene, not merely checking that `show()` was called.
- Capacity failure and recovery while selecting lesson satellites, including the two-satellite lesson with seven pre-existing tracks.
- Content/source review for the actual band recipe, quiz assumptions, prompts, hints, summaries, actual observation dates and product latency.
- Real-DOM keyboard/focus/scroll behavior, failure-message visibility, narrow screens and WebGL stacking. Existing fake-node tests and byte-identical builds do not exercise these.

## Residual risk and merge caveats

No live imagery or running UI was inspected. The audit verifies source passages, code paths, bundle consistency and deterministic reproductions, not current service availability, visual contrast measurements, GPU behavior, actual observation dates or assistive-technology behavior. Existing provider fallback/caching defects outside the new promises were not expanded into an unrelated audit. Later stories and charts in local HEAD require their own claim-by-claim source review.

Repository worktree contents were left unchanged apart from this owned report. Pre-existing untracked `.claude/`, `.codegraph/`, `.mcp.json`, `reports/` and `research_notes/` were not removed or modified as part of the review.
