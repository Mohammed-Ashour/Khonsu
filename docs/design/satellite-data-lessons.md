# Design: what satellites measure, and lessons that show it

Status: accepted 14 November 2026. Decisions: merge into four tabs, curated knowledge, live imagery with an earlier-day fallback, review fixes first (PR #69). Phase 2 (knowledge, Data tab, globe views) is PR #70. Phase 3 (lesson player, Learn, lessons 1, 2 and 5) is on `feat/lessons`.

## Why

The identity review (`reports/khonsu-identity-review.html`) recommends one primary journey: choose a satellite, understand its orbit, then estimate a viewing window. It also gives a feature filter: *does it help someone understand this satellite?*

This proposal adds the missing middle of "understand this satellite": **what it measures and what that data is used for**. Its lessons use the satellite's own data on the globe, with a source for every fact. Orbit explanations already follow the same pattern: sentences, a basis, and sources. This applies that pattern to instruments and data.

The journey becomes:

```
Choose a satellite → Why is its orbit like that? → What does it measure? → When can I see it?
                                               ↘ Lesson: see that data on the globe
```

## What is already in place

- **Globe layers.** The globe already drapes NASA GIBS images through an allowlist (`internal/sources/gibs`, `goes`, `himawari`) and caches them locally. A lesson layer is one more `gibs.NewLayer(...)` line.
- **Statements with sources.** The orbit explanations (`internal/orbit/explain.go`) and their schema (`docs/schema-v1.json`, `orbit_explanation`) already model sentences that carry a basis and sources.
- **Dossier.** The dossier (`internal/webui/src/dossier.js`) already has per-satellite tabs, and Earth Search scene locations for Sentinel-2 and Landsat.

## GIBS layers checked (14 Nov 2026)

These layer names were checked against the GIBS WMS capabilities, and world images were fetched for 13 Nov 2026.

| Data kind | GIBS layer | Satellite / instrument | Result |
|---|---|---|---|
| Visible | `GOES-East_ABI_Band2_Red_Visible_1km` | GOES-East ABI | Good. The night side is dark, which is the lesson. |
| Thermal infrared | `GOES-East_ABI_Band13_Clean_Infrared` (also West, Himawari) | GOES ABI, Himawari AHI | Good, day and night. |
| Water vapour / air mass | `GOES-East_ABI_Air_Mass`, `Himawari_AHI_Air_Mass` | ABI, AHI | Good. |
| Fire temperature | `GOES-East_ABI_FireTemp` | ABI | Not fetched yet. |
| True colour | `VIIRS_NOAA20_CorrectedReflectance_TrueColor` (already used) | NOAA-20 VIIRS | Good. |
| False colour (SWIR/NIR) | `VIIRS_NOAA20_CorrectedReflectance_BandsM11-I2-I1`, `MODIS_Terra_CorrectedReflectance_Bands721` | NOAA-20 VIIRS, Terra MODIS | Good. |
| Night lights | `VIIRS_NOAA20_DayNightBand` | NOAA-20 VIIRS | Good, but strong swath striping. `VIIRS_Black_Marble` came back blank for that date and needs its own date. |
| Land surface temperature | `MODIS_Terra_Land_Surface_Temp_Day`, `VIIRS_NOAA20_Land_Surface_Temp_Day` | Terra MODIS, NOAA-20 VIIRS | Good. Gaps where it was cloudy. |
| Sea surface temperature | `GHRSST_L4_MUR_Sea_Surface_Temperature` | Multi-sensor | Good, with no gaps. |
| Vegetation | `VIIRS_NOAA20_L3_NDVI_16Day` | NOAA-20 VIIRS | Blank for a daily date; it needs the 16-day period's date. |
| Soil moisture (microwave) | `SMAP_L3_Passive_Day_Soil_Moisture` | SMAP radiometer | Blank for 13 Nov; it needs a lag date. |
| Air quality | `TROPOMI_L2_Nitrogen_Dioxide_Tropospheric_Column` | Sentinel-5P TROPOMI | Noisy for a single day. Use an average or leave it out. |
| Radar (SAR) | `OPERA_L2_Radiometric_Terrain_Corrected_SAR_Sentinel-1`, `OPERA_L3_Dynamic_Surface_Water_Extent-Sentinel-1` | Sentinel-1 | Regional granules, not whole-Earth. Needs a bounding box. |

Suomi NPP stopped delivering new data on 2 Nov 2026 ([NASA Earthdata VIIRS](https://www.earthdata.nasa.gov/data/instruments/viirs)). All VIIRS layers should therefore use NOAA-20 or NOAA-21, as the true-colour layer already does.

## Product shape (light redesign)

### 1. Inspector: six tabs become four

| Today | Proposed | Contents |
|---|---|---|
| Now, Identity, Radio | **Overview** | Position readouts, then who runs it and why. Radio becomes a collapsed "Radio" section. |
| Orbit | **Orbit** | Unchanged: *Why is it up there?* |
| Sees | **Data** (new) | What it measures: instruments → data kinds, each with one sentence and sources. Then "See it on the globe" (a lesson or layer), then *Scene locations* (today's Sees, renamed as the review asks). |
| Passes | **Sky** | Viewing windows, using the review's wording: "potential viewing window", plus uncertainty notices. |

The **Data** tab appears for every satellite, which gives three cases:

- **Earth observers:** they get instruments, data kinds and lessons.
- **Other satellites** (navigation, communications, crewed, science): they get one honest "kind" sentence, such as "GPS satellites broadcast timing signals; they don't take pictures", with a source.
- **Unknown satellites:** they get "Not described yet". Nothing is guessed from the name.

### 2. Lessons: a guided overlay, not a new app

A lesson is a short list of steps. Each step sets globe state and shows a card. That state can be:

- the satellite selection;
- the layers;
- a camera target;
- an optional comparison: an A/B toggle or a swipe between two layers.

Each card has 2–4 sentences with sources and one **predict-first** question. For example: "At night, which image still shows the clouds?" The answer is revealed when you step forward. This is the review's "predict, then compare" route.

Lessons are reached in three ways:

- from the Data tab ("See it on the globe");
- from a **Learn** button in the top bar;
- from a shareable URL (`#lesson=thermal-infrared&step=2`). Like today's shared links, this never includes the user's location.

### 3. Starter lessons

Each lesson ties a real satellite to its data:

1. **Seeing light vs sensing heat:** GOES-East ABI visible vs clean infrared. Visible needs sunlight, while infrared shows clouds day and night. The night-vision comparison comes from [NOAA NESDIS ABI](https://www.nesdis.noaa.gov/our-satellites/currently-flying/goes-east-west/advanced-baseline-imager-abi).
2. **Colours you can't see:** NOAA-20 true colour vs the M11-I2-I1 false colour. It covers why vegetation, burn scars and snow change colour ([NASA Earth Observatory, false colour](https://science.nasa.gov/earth/earth-observatory/how-to-interpret-a-false-color-satellite-image)).
3. **Earth at night:** the NOAA-20 Day/Night Band shows city lights, ships, gas flares and aurora ([NASA Black Marble](https://blackmarble.gsfc.nasa.gov/)).
4. **Taking Earth's temperature:** land surface temperature from Terra MODIS, and the sea surface temperature map. It also explains why clouds leave gaps in the land map.
5. **Orbit decides the data:** this is the consolidation lesson. It compares GOES-East, a full disk every 10 minutes from one fixed spot ([NESDIS](https://www.nesdis.noaa.gov/our-satellites/currently-flying/goes-east-west/advanced-baseline-imager-abi)), with NOAA-20, which sees the whole planet once a day from a sun-synchronous orbit. It reuses the orbit explanation, and links *why it's up there* to *what it can see*.
6. **Radar sees through clouds** (later): Sentinel-1 C-band SAR works "day and night, regardless of weather" ([Copernicus SentiWiki S1](https://sentiwiki.copernicus.eu/web/s1-mission); [NASA Earthdata SAR](https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/sar)). It needs a regional layer, so it comes after the others.

### 4. Shared knowledge, all interfaces

- **New package:** `internal/knowledge` holds embedded, curated JSON with three record types:
  - **kinds:** visible, near-IR, shortwave-IR, thermal-IR, water vapour, night lights, passive microwave, SAR, altimetry, atmospheric composition, navigation, communications;
  - **instruments:** ABI, AHI, VIIRS, MODIS, MSI, OLI/TIRS, C-SAR, TROPOMI, the SMAP radiometer, Poseidon-4 and others, each with its bands mapped to kinds;
  - **satellites:** NORAD ID → instruments.
- **Statements:** every statement uses the existing `{text, basis, sources}` shape, and tests require an https source.
- **Coverage:** start curated, with about 40 satellites, all the layer providers first. [Wikidata](https://www.wikidata.org/wiki/Q20354353) (CC0) links satellites to instrument types (P1202) and NORAD IDs (P377), so it can propose missing satellites. [CEOS MIM](https://database.eohandbook.com/) (CC BY 4.0) has instrument wavebands as prose, which is a good reference when curating. Neither is fetched at runtime in the first version.
- **API and CLI:**
  - `/api/v1/satellite-data?norad_id=` and `/api/v1/lessons`;
  - `khonsu report` gains a "What It Measures" section, as it did for "Why It's Up There";
  - the TUI shows the same text.
- **Layers:** each lesson layer is added to the GIBS allowlist with its own date rule:
  - yesterday for daily layers;
  - the latest period for 16-day layers;
  - a lag for SMAP;
  - a fixed, documented "example day" when the live image is blank. GIBS can return blank-but-valid images for a missing date, which `validateImage` already rejects.

## Phases

1. **Trust and vocabulary (from the review, small):**
   - rename Sees to *Scene locations*;
   - use "viewing window" wording;
   - keep pass warnings next to the passes.
   These steps come first because the Data tab builds on them.
2. **Knowledge and the Data tab:**
   - the `internal/knowledge` package, its schema and tests;
   - the Data tab;
   - the report section.
3. **Comparison and the first three lessons:** the A/B and swipe comparison in `globe.js`, then lessons 1, 2 and 5.
4. **Learn hub and the rest:**
   - lessons 3, 4 and 6;
   - shareable lesson URLs;
   - a browser smoke test of one lesson in `--file` mode (finding 10 in the review).

## Facts still to source before they are shipped

- **ABI band numbers and wavelengths** (Band 2 at 0.64 µm, Band 13 at 10.3 µm): the page with the details moved, and the [NESDIS channel summary](https://www.nesdis.noaa.gov/our-satellites/currently-flying/goes-east-west/abi-scan-mode-information-and-channel-summary) is unread.
- **Exact colours in the M11-I2-I1 and 7-2-1 composites:** the Earth Observatory article covers a different band mix, so these need a Worldview or Earthdata layer description.
- **MUR SST description:** the PO.DAAC page moved to Earthdata.
- **The MODIS LST "skin temperature from thermal infrared" wording:** check it against the MOD11 user guide.
- **SMAP using L-band:** it is in the SMAP handbook, not the mission page.
- **Current GOES-East and GOES-West satellites and their NORAD IDs.**
- **Sentinel-1 constellation status:** the planned end date for 1A was June 2026.

Facts already checked against the source page:

- **Sentinel-1:** day/night all-weather SAR at 5.405 GHz.
- **Sentinel-2:** 13 bands from VNIR to SWIR, with four at 10 m.
- **Landsat 8/9:** TIRS bands 10 and 11.
- **TROPOMI:** daily coverage over a 2,600 km swath.
- **VIIRS platforms and DNB sources.**
- **ABI:** 16 bands, a full disk every 10 minutes, and fire detection at 3.9 µm.
- **SMAP:** soil moisture every 2–3 days.
- **Earthdata:** the definitions of passive and active sensors, and of the four resolutions.

## Decisions for review

1. **Tabs:** combine six tabs into four (recommended), or add Data as a seventh tab.
2. **Coverage:** curated knowledge only (recommended for the first version), or Wikidata lookups at runtime for wider coverage.
3. **Imagery date:** live "yesterday" images with a fixed fallback day (recommended), or a fixed example day only, which is easier to reproduce and test.
4. **Order:** do phase 1 (the review's trust fixes) first (recommended), or go straight to the Data tab.
