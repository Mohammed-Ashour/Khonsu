# Current-HEAD lessons and charts supplement

## Findings

These findings concern local HEAD `e07a9b7b361a29a625d93409122e8b09993470a1`, **not** the published #69, #70 or #71 snapshots. Local HEAD adds seven event stories, numerical charts and providers after PR #71. This supplement prevents those additions from being mistaken for reviewed PR content.

### HEAD-01 · High · The Puerto Rico outage comparison uses a product explicitly unsuitable for temporal light-change detection

Locations: `internal/sources/gibs/gibs.go:261`; `internal/knowledge/knowledge.json:2165–2228`.

The story compares July 24 with September 27 using `VIIRS_SNPP_DayNightBand_ENCC` and asks the learner to predict disappearing electric lights. NASA's exact layer documentation states that ENCC scans are individually normalized, that individual pixel values **are not comparable over time**, and that accurate detection of short-term artificial-light reductions requires Black Marble products with lunar/environmental corrections and QA. Natural illumination, cloud and viewing conditions can change the apparent brightness.

The cited Earth Observatory Maria article reinforces the distinction: its own comparison combines September 27–28, corrects moonlight/atmospheric effects, and warns that uncorrected imagery can mislead. The application's single-night ENCC comparison does not reproduce that analysis.

Fix: use suitable corrected Black Marble data with cloud/quality screening, or show NASA's actual processed comparison with attribution. If retaining ENCC as a qualitative illustration, explicitly explain that it cannot establish the amount/location of power loss and change the question accordingly. Add the exact product citation. Confirmed from application configuration and retrieved primary documentation. Blocks claiming that the displayed comparison demonstrates outages.

Primary evidence: <https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/viirs/snpp/VIIRS_SNPP_DayNightBand_ENCC.md> and <https://science.nasa.gov/earth/earth-observatory/pinpointing-where-lights-went-out-in-puerto-rico-91044>.

### HEAD-02 · Medium · The pixel-size scatter mixes different physical quantities

Locations: `internal/knowledge/knowledge.json:1237–1252,1405–1413`; `internal/webui/src/learn.js:38–42,133–142`.

The chart calls x "Smallest pixel (m)". Sentinel-1 C-SAR is plotted at 20 m, while the accompanying specification gives 5 m × 20 m resolution. SWOT is plotted at 100 m, but its cited specification is the minimum river width the mission can observe, not a pixel size. The chart therefore compares unlike numbers and contradicts its own smallest-pixel definition. Several y values also combine different constellation sizes and coverage definitions; the explanatory text must expose those assumptions rather than calling every point simply an instrument.

Fix: choose one explicit comparable resolution metric and band/product/mode, label constellation size, and distinguish repeat cycle from actual revisit. Remove SWOT from a pixel-size chart unless a sourced pixel/product-resolution measure is supplied. Do not substitute the 100 m river-width requirement. For C-SAR, distinguish spatial resolution from product pixel spacing; merely changing 20 to 5 without specifying the intended measure is insufficient.

Primary evidence: <https://www.earthdata.nasa.gov/data/platforms/space-based-platforms/swot> says rivers wider than 100 m and gives a 20.86455-day exact repeat cycle. <https://sentiwiki.copernicus.eu/web/s1-mission> documents C-SAR frequency/modes. The application's own 5-by-20 m specification demonstrates its internal inconsistency. Confirmed scientific labeling defect; merits correction before publishing this chart.

### HEAD-03 · Medium · Radio spectrum bars draw frequency-band categories as instrument passbands

Locations: `internal/knowledge/knowledge.json:1237–1243,1299–1305`; `internal/webui/src/learn.js:27–35,114–129`; `internal/webui/src/charts.js:125–138`.

"Where each instrument looks" renders C-SAR across all 4–8 GHz and SMAP across all 1–2 GHz. Those are generic C/L frequency-band category bounds, not these instruments' operating passbands. Copernicus gives Sentinel-1's centre frequency as 5.405 GHz with programmable bandwidth up to 100 MHz; NASA JPL specifies SMAP radiometer frequency 1.41 GHz. Drawing the full category as a sensor bar greatly exaggerates bandwidth and misleads readers about instrument spectral coverage.

Fix: render the actual centre wavelength with an explicitly sourced bandwidth, or use a labelled centre-frequency marker when bandwidth is unavailable. Keep broad C/L categories separate from instrument measurements. The source table also currently calls these category ranges "Wavelength" for an instrument band, so correcting only the picture is insufficient.

Primary evidence: <https://sentiwiki.copernicus.eu/web/s1-mission>, instrument-parameters table, and <https://smap.jpl.nasa.gov/observatory/specifications/>, Radiometer section. Confirmed from actual rendered ranges and source passages.

### HEAD-04 · Medium · Scatter labels overlap marks and become detached from their own points

Locations: `internal/webui/src/charts.js:98–106`; actual data from `learn.js:38–42`.

An offline render of the actual instrument dataset shows the C-SAR dot obscuring part of the MSI label. The C-SAR label is displaced downward into the vicinity of the one-day gridline, although its dot is at six days. OLCI and SLSTR labels are displaced from their dots without leader lines. The collision algorithm compares anchor positions using a fixed 34-pixel horizontal threshold instead of text bounds, and it avoids previous labels but not other dots. At the right edge, the 100,000 x-axis tick extends past the 360-unit SVG viewBox.

Fix: test actual label bounding boxes against both labels and marks; add leader lines or a numbered key for displaced labels, and reserve room for endpoint ticks. A simpler numbered scatter plus keyed table would be adequate. Test at the actual 360-unit viewBox and narrow panel width, not only that labels exist in markup. Confirmed in a Cairo SVG rasterization of actual app data. This is not a browser/font/layout certification.

### HEAD-05 · Medium · Incomplete years are plotted as unqualified annual sea-level averages

Locations: `internal/webui/src/charts.js:159–170`; `internal/webui/src/lesson.js:94–99`.

`yearlyAverages` averages whatever points are present in each calendar year. The live NOAA file retrieved during this review ends in early 2025 with six observations across satellite columns, while 2024 has 74. The app plots both as equivalent yearly averages, reporting only "Data through 2025" and discarding the fractional final observation date. It also plots two late-1992 observations as a full-looking annual point. This can make a partial-year change look like a whole-year trend.

Fix: label boundary years as partial and show the actual last observation date, or omit incomplete annual bins. Preserve coverage/count information when aggregating. Do not present a partial-bin mean as a complete annual mean. The data's header also identifies an anomaly with annual signals removed and no glacial-isostatic adjustment; keep those qualifiers available beside the chart.

Evidence: successfully retrieved <https://www.star.nesdis.noaa.gov/socd/lsa/SeaLevelRise/slr/slr_sla_gbl_free_ref_90.csv>. The observed header states `3.11 mm/year (no glacial isostatic adjustment correction)`. This is not evidence that the source is currently up to date; the older endpoint's latest available data are explicitly a limitation.

## Graph assessment

The linear/logarithmic coordinate transforms, micrometre-to-centimetre conversion, and nonnegative percentage-bar baseline are coherent for the currently supplied data. ESA's city reductions match the bars: Madrid/Milan/Rome approximately 45%, Paris 54%. Keep the word "approximately" and ESA's stated 15% weather-related uncertainty next to this comparison; the exact-looking bar numbers alone should not imply greater precision.

The application correctly separates light and radio spectra into two panels. An initial scratch render using the chart helper's default full spectrum did not reproduce that composition and was not used to criticize the actual UI. The final offline inspection used the app's actual light range 0.3–20 µm, radio range 10,000–300,000 µm, filters and data. Those spectrum labels are readable in the offline render. Chart text is escaped; data tables provide a useful nonvisual route to the numbers.

Further limitations: raster map legends are absent for quantitative NO2/temperature/ice concentration and categorical OPERA water classes. The actual OPERA layer has Not Water, Open Water, Inundated Vegetation, HAND masked and Layover/Shadow masked classes. The sea-ice layer displays **concentration**, whereas the separate monthly graph displays **extent**, computed using a threshold. Show appropriate legend/units and explain that distinction. A dark/blank region must not silently mean either no observation or no phenomenon. No running WebGL, mobile, keyboard or screen-reader session was inspected.

## Additional story source audit

There are 16 unique scientific source URLs attached to the seven local-HEAD stories. The table covers all 16. It supplements, rather than replaces, the PR reviewers' audits. A legitimate institutional publisher does not automatically substantiate the selected product, day or inference.

| Source | Checked claim and verdict |
|---|---|
| [NOAA NHC Maria report](https://www.nhc.noaa.gov/data/tcr/AL152017_Maria.pdf) | Retrieved PDF and read extracted pages 2, 7–8. Supports Yabucoa landfall at about 1015 UTC September 20, 80% of utility poles/all transmission lines down, essentially all 3.4 million residents without power, and about 65% restoration by end of January 2018. |
| [NASA Maria imagery article](https://science.nasa.gov/earth/earth-observatory/pinpointing-where-lights-went-out-in-puerto-rico-91044) | Retrieved. Supports DNB wavelengths, September 27–28 composite and outages around hospitals/transport. Does not validate app's uncorrected single-night ENCC comparison. Explicitly warns about moonlight/cloud confounding. HEAD-01. |
| [NOAA Los Angeles fires](https://www.nesdis.noaa.gov/news/noaa-satellites-monitor-raging-wildfires-california) | Retrieved. Supports January 7 chronology, >200 acres in an hour, 375 m VIIRS role, one-minute GOES West observations, and January 21 areas 23,713/14,021 acres. Product metadata is still needed to substantiate specific displayed detection pixels. |
| [NOAA ABI](https://www.nesdis.noaa.gov/our-satellites/currently-flying/goes-east-west/advanced-baseline-imager-abi) | Retrieved in PR #71 audit; parent inspected saved article as supplemental context. Supports 3.9 µm fire-sensitive channel and early fire detection. Wavelength naming should remain consistent with the app's MWIR spectrum classification. |
| [NASA false-colour article](https://science.nasa.gov/earth/earth-observatory/how-to-interpret-a-false-color-satellite-image) | Retrieved in PR #71 audit; parent inspected saved article. Supports general SWIR burn interpretation, not every rendered product's exact RGB recipe. PR71-05 remains important. |
| [NASA OPERA Helene](https://www.earthdata.nasa.gov/learn/data-in-action/opera-mapping-flood-waters-face-storm) | Retrieved. Supports the quoted September 14/26 before/after comparison and radar/cloud explanation. Its prose is not sufficient verification of individual GIBS scene acquisition times, actual coverage or rendering. Citation itself says September 26 landfall; exact chronology should be checked against NHC before stating a UTC date. |
| [NASA China NO2](https://science.nasa.gov/earth/earth-observatory/airborne-nitrogen-dioxide-plummets-over-china-146362) | Retrieved. Supports TROPOMI January 1–20 / February 10–25 averages, OMI comparison and preliminary 10–30% decrease against 2005–2019. App identifies its different single-day OMI picture, so it does not falsely claim that the image reproduces the averaged TROPOMI analysis. Avoid treating two daily maps as causal proof. |
| [ESA Europe NO2](https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-5P/Air_pollution_remains_low_as_Europeans_stay_at_home) | Retrieved. Supports March 13–April 13 2020 against March–April 2019, approx. 45% in Madrid/Milan/Rome and 54% Paris. Explains monthly averaging and 15% uncertainty due to weather variability. Bars reproduce those reported values. |
| [NASA Lake Mead](https://science.nasa.gov/earth/earth-observatory/lake-mead-keeps-dropping-150111) | Retrieved. Supports July 6 2000/July 3 2022 Landsat dates, July 18 2022 level 1041.30 ft/317.4 m, 27% full, and mineralized shoreline. App explicitly distinguishes the MODIS overview from NASA's Landsat comparison. Exact app image availability remains unverified. |
| [NASA JPL 30-year sea-level article](https://www.jpl.nasa.gov/news/nasa-uses-30-year-satellite-record-to-track-and-project-rising-seas/) | Retrieval returned HTTP 403. Legitimate publisher, but the 9.1 cm-through-2022 sentence was **not independently passage-verified by parent**. Do not count as verified merely because of the domain. |
| [NASA JPL PIA26189](https://www.jpl.nasa.gov/images/pia26189-satellite-record-of-sea-level-rise-from-1993-to-2024/) | Readable retrieval returned HTTP 403. The 0.59/0.43 cm per year and two-thirds thermal-expansion claims remain **unverified by parent**. Another exact authoritative accessible source or accessible full article is needed before claiming complete factual verification. |
| [NOAA LSA](https://www.star.nesdis.noaa.gov/socd/lsa/SeaLevelRise/) | Retrieved page and exact CSV via curl. Page supports reference-series TOPEX/Poseidon/Jason/Sentinel-6 lineage, ten-day global estimates and 3–4 mm uncertainty. Header supports anomaly/annual-signal/GIA qualifications. Tested counts expose partial-year problem, HEAD-05. |
| [NASA SVS 2025 ice](https://svs.gsfc.nasa.gov/5583) | Retrieved. Supports passive microwave continuity since 1979, likely September 10 minimum 4.60 million km², AMSR2 mission attribution. SVS animation uses 10 km products and a three-day running minimum; app's 12 km daily concentration layer is not the identical visualization. |
| [NASA SVS 1979–2012 ice](https://svs.gsfc.nasa.gov/11081/) | Retrieved. Describes summer-minimum ice area shrinking by half across this interval. Distinguish the yearly minimum illustration from the app's monthly September average graph. |
| [NASA 2025 minimum article](https://science.nasa.gov/earth/earth-observatory/arctic-sea-ice-ties-for-10th-lowest-on-record-154807/) | Retrieved. Supports 4.60 million km², tie with 2008 for tenth lowest, 2012 record low and 15% threshold definition of extent. App labels the September 1 picture distinctly from September 10 minimum, which is necessary. |
| [NSIDC Sea Ice Index V4](https://nsidc.org/data/g02135/versions/4) | Retrieved catalog and exact north September V4 CSV. Verified **extent**, not area: 1979 7.05, 2012 3.57, 2025 4.75 million km² monthly means. Do not replace the 2025 monthly mean with 4.60, the daily minimum. Current parser selects the correct extent column. |

### Additional primary product/specification evidence

These retrieved documents are necessary additions where a generic mission/news citation does not establish the actual chart or map:

- [ENCC metadata](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/viirs/snpp/VIIRS_SNPP_DayNightBand_ENCC.md). Temporal noncomparability, processing and alternatives. HEAD-01.
- [OPERA DSWx-S1 metadata](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/multi-mission/opera/OPERA_L3_Dynamic_Surface_Water_Extent-Sentinel-1.md). 30 m, five classes, nominal 6–12 day mapping and masking. A dated picture is a classified water map, not automatically an event-water difference map.
- [AMSR2 12 km concentration metadata](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/amsr2/AMSRU2_Sea_Ice_Concentration_12km.md). Percent concentration per 12 km cell, daily composite; distinction from extent.
- [Copernicus Sentinel-1 mission](https://sentiwiki.copernicus.eu/web/s1-mission). 5.405 GHz centre and up-to-100 MHz programmable bandwidth, not full generic C-band coverage.
- [NASA JPL SMAP specifications](https://smap.jpl.nasa.gov/observatory/specifications/). 1.41 GHz radiometer; 38 × 49 km footprint.
- [NASA Earthdata SWOT](https://www.earthdata.nasa.gov/data/platforms/space-based-platforms/swot) and [CNES AVISO SWOT](https://www.aviso.altimetry.fr/en/missions/current-missions/swot). River-width capability and repeat-cycle context; neither justifies naming minimum river width a pixel size.

## Architecture and verification

The chart functions' escaped-markup/pure-data boundary is sensible and no dependency rewrite is needed. Correcting the metric schema, product provenance and label placement is sufficient. The source registry already provides an appropriate place for product citations. Content validation currently verifies shape and source keys, not passage support or scientific comparability.

Parent checks run at combined HEAD:

- `go test ./...`: passed, output `/tmp/khonsu-parent-go-tests.log`.
- `go vet ./...`: passed.
- `npm test` under `internal/webui`: 133 passed, zero failed/skipped.
- Re-ran `/tmp/pr71-repros.mjs` against current checkout. Confirmed cached-group race, Back camera failure, dirty-overlay inheritance and satellite-capacity refusal. Direct-link camera restoration is fixed locally.
- Generated actual scatter/light-spectrum/radio-spectrum/bar SVGs in `/tmp` and inspected Cairo rasterizations. Actual CSS colours/font sizes were used; CSS variables were resolved and root responsive sizing replaced with the fixed viewBox size for Cairo. Cairo's default fallback font is not the browser's resolved font. No live browser, server or GPU was used. Failed initial Cairo library discovery was resolved through the installed Homebrew library without project/dependency changes.
- NOAA exact CSV and NSIDC exact CSV retrieved successfully through verified HTTPS curl after the fetch tool's NOAA CSV request failed.
- No code, dependencies, generated bundle or GitHub comments changed. Only review artifacts were written. Broad Learn-kind citations beyond the original PR #70 and the seven additional stories are not certified by this supplement.
