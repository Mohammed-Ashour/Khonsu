# What satellites measure

The Data tab, `/api/v1/satellite-data` and `khonsu report` say what a satellite measures. Khonsu answers from its own notes in [`internal/knowledge/knowledge.json`](../internal/knowledge/knowledge.json), so the answer needs no provider request and works with `--file`.

The notes are written by hand. A satellite that isn't listed is "not described yet": Khonsu never guesses from a name.

## How the notes are built

- **Three record types:**
  - **kinds:** the kinds of data, such as visible light or thermal infrared;
  - **instruments:** each one lists the kinds it collects;
  - **satellites:** each is keyed by NORAD catalog number and lists its instruments.
- **Every sentence has a source.** The source is an https page that was read and supports the sentence. Agency and mission pages come first: NASA, NOAA, ESA and Copernicus, JMA, USGS. Tests reject a sentence without a source, an unknown reference, or a view that no kind lists.
- **Kinds are Khonsu's classification.** Linking an instrument to a kind, such as SLSTR to thermal infrared, is Khonsu's own grouping. The sentences under each instrument carry the sources.
- **Views.** Some kinds link to NASA GIBS globe images. Daily images can come from an earlier available date. An instrument's scan rate does not guarantee the age or coverage of the image shown. Retrieval time is not observation time.

To add a satellite, find its NORAD number on [CelesTrak SATCAT](https://celestrak.org/satcat/search.php). Add it with its instruments, giving each new sentence a source you have read. Then run `go test ./internal/knowledge`.

## Visual examples in Learn

Every expanded kind pairs an output example with a sourced capture diagram. Drawings are labelled illustrations, not measured data. Ten kinds can load a dated GIBS image on expansion; no image is requested for a closed kind or while serving a local file. If an image fails, the labelled illustration stays available with a retry action. Quantitative rasters show their provider scale and missing-data qualifications.

| Kind | Dated example | Capture diagram |
|---|---|---|
| Visible light | Terra MODIS true colour, Lake Mead, 2022-07-03 | Reflected sunlight |
| Near infrared | Terra MODIS 7-2-1 composite, southern California, 2025-01-08; NIR is green | Reflected sunlight, not emitted heat |
| Shortwave infrared | Same MODIS composite; SWIR is red | Reflected shortwave infrared |
| Thermal infrared | Terra MODIS land surface temperature, 2025-01-08 | Emitted infrared |
| Water vapour | Terra MODIS total-column water, 2025-01-08; not a GOES altitude-specific quantity | Passive infrared reception |
| Light at night | Suomi NPP ENCC, Puerto Rico, 2017-07-24; brightness is not comparable across nights | Faint visible and near-infrared light |
| Passive microwave | GCOM-W1 AMSR2 sea-ice concentration, Beaufort Sea, 2012-09-16 | Naturally emitted microwaves |
| Imaging radar | OPERA water classes from Sentinel-1, northern Florida, 2024-09-26 | Outgoing pulse and echo |
| Altimetry | MEaSUREs sea-height anomalies, five-day window centred on 2017-10-29 | Range from return timing, then orbit and processing |
| Gases in the air | Aura OMI NO2 column, eastern China, 2020-01-15; not TROPOMI or breathing-height concentration | Spectral absorption |
| Laser ranging | Illustrative canopy/ground profile, not acquired GEDI or ICESat-2 data | Laser pulse and returns |
| Imaging spectroscopy | Illustrative pixel spectra, not measured EMIT spectra or mineral identification | Separate wavelengths per pixel |

## Satellites described

| Satellite | NORAD | Instruments | Kinds of data |
|---|---|---|---|
| ISS | 25544 | ECOSTRESS, GEDI, EMIT | Thermal infrared, Laser ranging, Imaging spectroscopy |
| Terra | 25994 | MODIS | Visible light, Near infrared, Shortwave infrared, Thermal infrared, Water vapour |
| Aqua | 27424 | MODIS | Visible light, Near infrared, Shortwave infrared, Thermal infrared, Water vapour |
| NOAA 20 | 43013 | VIIRS | Visible light, Near infrared, Shortwave infrared, Thermal infrared, Light at night |
| NOAA 21 | 54234 | VIIRS | Visible light, Near infrared, Shortwave infrared, Thermal infrared, Light at night |
| Suomi NPP | 37849 | VIIRS | Visible light, Near infrared, Shortwave infrared, Thermal infrared, Light at night |
| GOES 19 | 60133 | ABI | Visible light, Shortwave infrared, Water vapour, Thermal infrared |
| GOES 18 | 51850 | ABI | Visible light, Shortwave infrared, Water vapour, Thermal infrared |
| GOES 16 | 41866 | ABI | Visible light, Shortwave infrared, Water vapour, Thermal infrared |
| Himawari-9 | 41836 | AHI | Visible light, Thermal infrared |
| Himawari-8 | 40267 | AHI | Visible light, Thermal infrared |
| Sentinel-1A | 39634 | C-SAR | Imaging radar |
| Sentinel-1C | 62261 | C-SAR | Imaging radar |
| Sentinel-1D | 66315 | C-SAR | Imaging radar |
| Sentinel-2A | 40697 | MSI | Visible light, Near infrared, Shortwave infrared |
| Sentinel-2B | 42063 | MSI | Visible light, Near infrared, Shortwave infrared |
| Sentinel-2C | 60989 | MSI | Visible light, Near infrared, Shortwave infrared |
| Sentinel-3A | 41335 | OLCI, SLSTR, SRAL | Visible light, Thermal infrared, Altimetry |
| Sentinel-3B | 43437 | OLCI, SLSTR, SRAL | Visible light, Thermal infrared, Altimetry |
| Sentinel-5P | 42969 | TROPOMI | Gases in the air |
| Landsat 8 | 39084 | OLI, TIRS | Visible light, Near infrared, Shortwave infrared, Thermal infrared |
| Landsat 9 | 49260 | OLI, TIRS | Visible light, Near infrared, Shortwave infrared, Thermal infrared |
| SMAP | 40376 | SMAP radiometer | Passive microwave |
| SWOT | 54754 | SWOT radar interferometer | Altimetry |
| Sentinel-6A | 46984 | Radar altimeter | Altimetry |
| GCOM-W1 | 38337 | AMSR2 | Passive microwave |
| Aura | 28376 | OMI | Gases in the air |

## Lessons

The notes also hold short lessons, in the same file. They follow the same rules:

- **Sentences need sources.** Every sentence and every answer has a source.
- **Hints are only directions.** A step's *hint* tells the reader what to do, such as "switch between the two views". It never states a fact.
- **Tests check every lesson.** Each lesson must start by choosing a satellite, use real views, and link from the kinds of data or the orbit types it teaches.

Orbit lessons follow a live satellite and name the orbit types they explain, such as `GEO` or `molniya`, using the names of Khonsu's orbit explanation. The *Why is it up there?* card on the Orbit tab offers the lessons that match. Lesson statements are curated, sourced explanations, not live measurements. The Orbit tab computes classifications and estimates from the satellite's current elements. A test requires every orbit-lesson satellite to have real elements in the orbit fixture and checks that its computed orbit matches a lesson topic. Steps can open a tab of the satellite panel and play the timeline.

| Orbit lesson | Satellite | What it shows |
|---|---|---|
| What is an orbit? | ISS | Falling around Earth, 90 to 93 minute orbits, the 51.6° tilt and the westward shift of each pass |
| Why do some satellites stay still? | GOES 19 | A geostationary orbit, the third of Earth it sees and its poor view of high latitudes |
| Sun-synchronous orbits | Landsat 9 | The same local time at every equator crossing, and how Earth's bulge turns the orbit |
| How GPS covers the planet | NAVSTAR 75 | Six planes at about 20,200 km, and why a receiver needs four satellites |
| Why Molniya orbits are so stretched | Molniya 1-29 | A 12-hour ellipse that lingers over the north, and why 63.4° matters |
| What is a TLE? | ISS | Orbital elements, TLE text versus live GP JSON, their epoch, and why they age |
| Why orbits decay | ISS | Drag, the Sun's effect on it, reboosts and how long debris stays up |

`khonsu learn` lists every lesson and story, `khonsu learn <lesson>` opens one in the web app, and `khonsu learn <lesson> --text` prints it in the terminal.

| Data lesson | Satellites | What it shows |
|---|---|---|
| Light or heat? | GOES 19 | Visible band 2 against infrared band 13, and why infrared works at night |
| Colours you can't see | NOAA 20 | True colour against shortwave infrared false colour: plants, burns, ice |
| How orbit shapes the view | GOES 19, Terra | A fixed geostationary view against strips from a near-polar orbit |

Stories are lessons about one real event, with `when` and `where`. Their pictures are story layers for a past day, usually over a small area:

| Story | Satellites | Pictures and charts |
|---|---|---|
| The night Puerto Rico went dark | Suomi NPP | Qualitative ENCC illustrations, 24 July and 27 September 2017; NASA's corrected outage findings in text |
| Los Angeles fires, January 2025 | Terra, NOAA 20 | Terra true colour and bands 7-2-1, then NOAA-20 VIIRS heat detections |
| Mapping a flood through the clouds | Sentinel-1A | OPERA surface water from Sentinel-1, 14 and 26 September 2024 |
| Cleaner air during the 2020 lockdowns | Sentinel-5P, Aura | OMI nitrogen dioxide over China; ESA's city figures as a bar chart |
| Lake Mead shrinks | Terra, Landsat 8 | Terra overviews, 6 July 2000 and 3 July 2022; the Landsat 8/9 HLS L30 collection for the closer 2022 view |
| Three decades of rising seas | Sentinel-6A | NOAA's global mean sea level record |
| Arctic sea ice at its summer low | GCOM-W1 | Daily AMSR2 ice concentration, 2012 and 2025; monthly mean September extent from NSIDC |

### Limits of the seven stories

The dates in a picture request name archive selections. They do not certify that every cell has an observation on that day. A missing or masked cell does not prove that nothing happened there. The app's reduced-resolution globe images cannot show all the detail of the original sensor data.

1. **Puerto Rico.** ENCC means Enhanced Near Constant Contrast. NASA normalizes each scan separately, so brightness values are not comparable across nights. Both image steps put this warning before the event explanation. These images cannot identify or measure outages. NASA's published study used corrected observations from 27 and 28 September; the app does not provide that corrected comparison. NASA discontinued ENCC in July 2023.
2. **Los Angeles fires.** The visible and false-colour images come from Terra MODIS. The false-colour recipe uses shortwave infrared, near infrared and visible red. Burn colour is not fire temperature or total burned area. The next step selects NOAA-20 for VIIRS heat detections. A point marks a detected anomaly near a sensor pixel's centre, not a fire boundary; the product can also detect non-fire heat sources.
3. **Helene flood.** OPERA classifies surface water from Sentinel-1 radar. Open water can be permanent. Inundated vegetation is a separate class, and masked cells lack a usable classification. The 14 and 26 September dates follow NASA's article; they are not a verified acquisition time for every cell or a calculated new-flood-area map. The story avoids assigning a UTC landfall date from an article using a local date.
4. **Cleaner air in 2020.** The two daily maps use Aura OMI, not the averaged Sentinel-5P TROPOMI maps in NASA's published comparison. They cannot by themselves establish a lockdown effect. These maps measure a lower-atmosphere column, not street-level exposure. ESA's European bars reproduce approximate published decreases, with about 15 percent uncertainty from weather variability.
5. **Lake Mead.** The 2000 and 2022 MODIS images are broad Terra overviews, not NASA's Landsat comparison. The closer view requests the 30 m HLS L30 collection, which combines Landsat 8 and 9 observations. It is not NASA's original image processing and does not measure reservoir volume. Cloud and collection coverage can leave gaps.
6. **Rising seas.** NASA's 9.1 cm result is for 1993 through 2022. Its 0.59 cm rise and roughly two-thirds thermal-expansion contribution refer to 2024 in the March 2025 analysis. These are separate from the plotted NOAA series. The chart averages sea-level anomalies by year, not ocean depths. NOAA removes annual signals and applies no glacial-isostatic adjustment. Boundary years can be partial, and the latest available observation need not be current. Sentinel-6 contributes to the record; it did not measure all three decades.
7. **Arctic sea ice.** The maps show daily concentration, the percentage of a 12 km cell covered by ice. The second map is dated 1 September 2025, not the likely 10 September minimum. NASA's minimum animation uses different processing and 10 km data. The chart instead shows monthly mean extent, counting cells with at least 15 percent ice. September 2025's mean is 4.75 million km², not its 4.60 million km² daily minimum.

### Reading the instrument charts

Wavelength ranges depend on the source's definitions. NASA's near/shortwave infrared boundary is 1.1 µm; WMO uses 1.3 µm. The displayed spectrum uses NASA's convention, so ABI's 3.9 µm band is called infrared rather than treating it as shortwave infrared everywhere.

The ABI points mark sourced central wavelengths, not uncertain band edges. C-SAR and SMAP also use centre markers, converted with wavelength = speed of light / frequency. C-SAR uses 5.405 GHz and SMAP's radiometer uses 1.41 GHz. Neither marker means the sensor measures the whole C or L category.

The resolution comparison uses a selected band, mode or footprint. C-SAR's Interferometric Wide swath mode resolves 5 m by 20 m, so the chart uses the finer 5 m dimension. That is not a square pixel or product pixel spacing. SMAP uses the finer dimension of its 38 km by 49 km footprint. OLI uses the listed 30 m multispectral bands. SWOT is excluded because its 100 m river-width capability is not pixel size.

Time values also need their specifications. Sentinel-2's 5 days describes a nominal two-satellite constellation at the equator. C-SAR's 6 days is a nominal two-satellite repeat cycle, not guaranteed coverage. OLCI and SLSTR intervals refer to two satellites at the equator. MODIS's 1.5 days and SMAP's 2.5 days represent stated ranges. An optical revisit is another observing opportunity, not guaranteed cloud-free coverage.

## Globe views

| View | Kind | From |
|---|---|---|
| GOES East visible (band 2) | Visible light | NOAA GOES-East ABI; instrument scan cadence is not delivery age |
| GOES East infrared (band 13) | Thermal infrared | NOAA GOES-East ABI; brightness temperature, not ground temperature everywhere |
| Shortwave infrared false colour | Shortwave infrared, near infrared and visible red | NOAA-20 VIIRS bands M11, I2 and I1, daily composite |
| Earth at night | Light at night | NOAA-20 VIIRS Day/Night Band, daily |
| Land surface temperature | Thermal infrared | Terra MODIS, daily |
| Sea surface temperature | Thermal infrared | GHRSST MUR analysis, daily; blends satellite and in-situ data |

All views come from [NASA GIBS](https://nasa-gibs.github.io/gibs-api-docs/), and each is credited on the globe while it shows. The daily NOAA-20 night layer is also a qualitative display product whose values cannot be directly compared across dates. It is not corrected Black Marble imagery. In the false-colour view, ice clouds can look blue like surface snow and ice; colour alone is not a land-cover classification.

## Sources used

- Copernicus SentiWiki, [Sentinel-1 Mission](https://sentiwiki.copernicus.eu/web/s1-mission)
- Copernicus SentiWiki, [Sentinel-2 Mission](https://sentiwiki.copernicus.eu/web/s2-mission)
- Copernicus SentiWiki, [Sentinel-3 Mission](https://sentiwiki.copernicus.eu/web/s3-mission)
- Copernicus SentiWiki, [Sentinel-5P Mission](https://sentiwiki.copernicus.eu/web/s5p-mission)
- JMA Meteorological Satellite Center, [Advanced Himawari Imager (AHI)](https://www.data.jma.go.jp/mscweb/en/himawari89/space_segment/spsg_ahi.html)
- Japan Meteorological Agency, [Meteorological Satellites](https://www.jma.go.jp/jma/jma-eng/satellite/)
- NASA, [Black Marble](https://blackmarble.gsfc.nasa.gov/)
- NASA, [International Space Station](https://www.nasa.gov/international-space-station/)
- NASA, [Terra](https://terra.nasa.gov/)
- NASA Earth Observatory, [How to Interpret a False-Color Satellite Image](https://science.nasa.gov/earth/earth-observatory/how-to-interpret-a-false-color-satellite-image)
- NASA Earthdata, [Active Instruments](https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/remote-sensing/active-instruments)
- NASA Earthdata, [Electromagnetic Spectrum](https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/electromagnetic-spectrum)
- NASA Earthdata, [GHRSST Level 4 MUR Global Foundation Sea Surface Temperature Analysis (v4.1)](https://www.earthdata.nasa.gov/data/catalog/pocloud-mur-jpl-l4-glob-v4.1-4.1)
- NASA Earthdata, [MODIS](https://www.earthdata.nasa.gov/data/instruments/modis)
- NASA Earthdata, [MODIS/Terra Land Surface Temperature/Emissivity Daily (MOD11A1)](https://www.earthdata.nasa.gov/data/catalog/lpcloud-mod11a1-061)
- NASA Earthdata, [Passive Instruments](https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/remote-sensing/passive-instruments)
- NASA Earthdata, [Remote Sensing Resolution](https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/remote-sensing-resolution)
- NASA Earthdata, [VIIRS](https://www.earthdata.nasa.gov/data/instruments/viirs)
- NASA Earthdata, [VIIRS Spectral Bands](https://www.earthdata.nasa.gov/data/instruments/viirs/spectral-bands)
- NASA Earthdata, [What is Synthetic Aperture Radar?](https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/sar)
- NASA JPL, [ECOSTRESS](https://ecostress.jpl.nasa.gov/)
- NASA JPL, [EMIT](https://earth.jpl.nasa.gov/emit/)
- NASA JPL, [SMAP Mission Description](https://smap.jpl.nasa.gov/mission/description/)
- NASA JPL, [SWOT Mission Overview](https://swot.jpl.nasa.gov/mission/overview/)
- NASA Science, [Aqua: MODIS](https://science.nasa.gov/mission/aqua/modis)
- NASA Science, [Landsat 9](https://science.nasa.gov/mission/landsat-9)
- NOAA NESDIS, [ABI Scan Mode Information and Channel Summary](https://www.nesdis.noaa.gov/our-satellites/currently-flying/goes-east-west/abi-scan-mode-information-and-channel-summary)
- NOAA NESDIS, [Advanced Baseline Imager (ABI)](https://www.nesdis.noaa.gov/our-satellites/currently-flying/goes-east-west/advanced-baseline-imager-abi)
- NOAA NESDIS, [Geostationary Satellites](https://www.nesdis.noaa.gov/our-satellites/currently-flying/geostationary-satellites)
- USGS, [What are the band designations for the Landsat satellites?](https://www.usgs.gov/faqs/what-are-band-designations-landsat-satellites)
- University of Maryland, [GEDI](https://gedi.umd.edu/)
- ESA, [Types of orbits](https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits)
- CelesTrak, [Basics of the Geostationary Orbit](https://celestrak.org/columns/v04n07/)
- NOAA NHC, [Tropical Cyclone Report: Hurricane Maria](https://www.nhc.noaa.gov/data/tcr/AL152017_Maria.pdf)
- NASA Earth Observatory, [Pinpointing Where the Lights Went Out in Puerto Rico](https://science.nasa.gov/earth/earth-observatory/pinpointing-where-lights-went-out-in-puerto-rico-91044)
- NOAA NESDIS, [NOAA Satellites Monitor Raging Wildfires in California](https://www.nesdis.noaa.gov/news/noaa-satellites-monitor-raging-wildfires-california)
- NASA Earthdata, [OPERA: Mapping Flood Waters in the Face of the Storm](https://www.earthdata.nasa.gov/learn/data-in-action/opera-mapping-flood-waters-face-storm)
- NASA Earth Observatory, [Airborne Nitrogen Dioxide Plummets Over China](https://science.nasa.gov/earth/earth-observatory/airborne-nitrogen-dioxide-plummets-over-china-146362)
- ESA, [Air pollution remains low as Europeans stay at home](https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-5P/Air_pollution_remains_low_as_Europeans_stay_at_home)
- NASA Earth Observatory, [Lake Mead Keeps Dropping](https://science.nasa.gov/earth/earth-observatory/lake-mead-keeps-dropping-150111)
- NASA Science / JPL-Caltech, [30 Years of Sea Level Rise, 17 March 2023](https://science.nasa.gov/photojournal/30-years-of-sea-level-rise/)
- NASA Science / JPL-Caltech, [Satellite Record of Sea Level Rise From 1993 to 2024, 13 March 2025](https://science.nasa.gov/photojournal/satellite-record-of-sea-level-rise-from-1993-to-2024/)
- NOAA LSA, [Laboratory for Satellite Altimetry: Sea Level Rise](https://www.star.nesdis.noaa.gov/socd/lsa/SeaLevelRise/)
- NASA SVS, [Arctic Sea Ice Minimum 2025](https://svs.gsfc.nasa.gov/5583)
- NASA SVS, [Arctic Sea Ice Minimum 1979–2012](https://svs.gsfc.nasa.gov/11081/)
- NASA Earth Observatory, [Arctic Sea Ice Ties for 10th Lowest on Record](https://science.nasa.gov/earth/earth-observatory/arctic-sea-ice-ties-for-10th-lowest-on-record-154807/)
- NSIDC, [Sea Ice Index, Version 4 (G02135)](https://nsidc.org/data/g02135/versions/4)
- NOAA, [ABI Band 2 Quick Guide](https://www.goes.noaa.gov/documents/ABIQuickGuide_Band02.pdf)
- NOAA, [ABI Band 8 Upper-Level Water Vapor Quick Guide](https://www.goes.noaa.gov/documents/ABIQuickGuide_Band08.pdf)
- NOAA, [ABI Band 10 Lower-Level Water Vapor Quick Guide](https://www.goes.noaa.gov/documents/ABIQuickGuide_Band10.pdf)
- NOAA, [ABI Spectral Attributes](https://www.goes.noaa.gov/abispectralattributes.php)
- NASA Earth Observatory, [Remote Sensing](https://science.nasa.gov/earth/earth-observatory/remote-sensing)
- WMO OSCAR, [Mid-wave infrared observing missions](https://space.oscar.wmo.int/observingmissions/view/39)
- NASA Science, [Infrared Waves](https://science.nasa.gov/ems/07_infraredwaves/)
- Copernicus, [CLMS releases HR-VPP product to assess ecosystems and biodiversity](https://www.copernicus.eu/en/news/news/observer-clms-releases-hr-vpp-product-assess-ecosystems-and-biodiversity)
- USDA NASS, [Crop-CASMA metadata](https://www.nass.usda.gov/Research_and_Science/Cropland/metadata/metadata_cropcasma.htm)
- NASA Earthdata, [Black Marble](https://www.earthdata.nasa.gov/data/projects/black-marble)
- NASA Science, [Landsat Spectral Bands and Applications](https://science.nasa.gov/mission/landsat/spectral-bands-and-applications/)
- MTBS (USGS and USDA Forest Service), [Project Overview](https://www.mtbs.gov/project-overview)
- USGS, [Landsat Normalized Burn Ratio](https://www.usgs.gov/landsat-missions/landsat-normalized-burn-ratio)
- NOAA CoastWatch, [Sea Surface Temperature](https://coastwatch.noaa.gov/cwn/product-families/sea-surface-temperature.html)
- NASA Earthdata, [FIRMS](https://www.earthdata.nasa.gov/data/tools/firms)
- NOAA Coral Reef Watch, [Daily 5km Satellite Coral Bleaching Heat Stress Monitoring](https://coralreefwatch.noaa.gov/product/5km/index.php)
- NASA, [NASA Launches Groundbreaking Soil Moisture Mapping Satellite](https://www.nasa.gov/news-release/nasa-launches-groundbreaking-soil-moisture-mapping-satellite-2/)
- ECMWF, [Recent progress in all-sky radiance assimilation](https://www.ecmwf.int/en/newsletter/161/meteorology/recent-progress-all-sky-radiance-assimilation)
- NOAA NESDIS, [Advanced Technology Microwave Sounder (ATMS)](https://www.nesdis.noaa.gov/our-satellites/currently-flying/joint-polar-satellite-system/advanced-technology-microwave-sounder-atms)
- Copernicus, [Copernicus Emergency Management Service week 2021](https://www.copernicus.eu/en/news/news/observer-copernicus-emergency-management-service-week-2021)
- Copernicus Land Monitoring Service, [European Ground Motion Service](https://land.copernicus.eu/en/products/european-ground-motion-service)
- Copernicus, [How Sentinel-6 Michael Freilich improves Copernicus Marine Service ocean data](https://www.copernicus.eu/en/news/news/observer-how-sentinel-6-michael-freilich-improves-copernicus-marine-service-ocean-data)
- NASA Earthdata, [SWOT](https://www.earthdata.nasa.gov/data/platforms/space-based-platforms/swot)
- NASA GSFC, [ICESat-2: Space Lasers](https://icesat-2.gsfc.nasa.gov/space-lasers)
- Copernicus CAMS, [CAMS global forecasting system introduces operational use of Sentinel-5P NO2](https://atmosphere.copernicus.eu/successful-upgrade-cams-global-forecasting-system-introduces-operational-use-sentinel-5p-no2)
- BIRA-IASB, [Support to Aviation Control Service](https://sacs.aeronomie.be/)
- NASA SVS, [OCO-2 carbon dioxide](https://svs.gsfc.nasa.gov/5115)
- NASA LAADS, [VIIRS Day/Night Band (VJ102DNB)](https://ladsweb.modaps.eosdis.nasa.gov/missions-and-measurements/products/VJ102DNB)
- NOAA NCC, [About VIIRS](https://ncc.nesdis.noaa.gov/VIIRS/aboutVIIRS.php)
- NASA Earthdata, [Transition from MODIS to VIIRS](https://www.earthdata.nasa.gov/data/alerts-outages/transition-from-modis-viirs)
- USGS, [Landsat 9](https://www.usgs.gov/landsat-missions/landsat-9)
- USGS, [Landsat 8 and Landsat 9 satellite constellation](https://www.usgs.gov/media/videos/landsat-8-and-landsat-9-satellite-constellation)
- NASA JPL, [SMAP Observatory Specifications](https://smap.jpl.nasa.gov/observatory/specifications/)
- TROPOMI mission team, [Nitrogen dioxide](https://www.tropomi.eu/data-products/nitrogen-dioxide)
- AVISO (CNES), [SWOT](https://www.aviso.altimetry.fr/en/missions/current-missions/swot)
- NASA GIBS / Worldview, [NOAA-20 VIIRS corrected reflectance, bands M11-I2-I1](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/viirs/noaa20/VIIRS_NOAA20_CorrectedReflectance_BandsM11-I2-I1.md)
- NASA GIBS / Worldview, [NOAA-20 VIIRS corrected reflectance, true color](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/viirs/noaa20/VIIRS_NOAA20_CorrectedReflectance_TrueColor.md)
- NASA GIBS / Worldview, [Suomi NPP VIIRS Day/Night Band ENCC limitations](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/viirs/snpp/VIIRS_SNPP_DayNightBand_ENCC.md)
- NASA GIBS / Worldview, [OPERA Sentinel-1 dynamic surface water extent](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/multi-mission/opera/OPERA_L3_Dynamic_Surface_Water_Extent-Sentinel-1.md)
- NASA GIBS / Worldview, [AMSR-E/AMSR2 sea ice concentration, 12 km](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/amsr2/AMSRU2_Sea_Ice_Concentration_12km.md)
- NASA GIBS / Worldview, [Terra MODIS corrected reflectance, true color](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/modis/terra/MODIS_Terra_CorrectedReflectance_TrueColor.md)
- NASA GIBS / Worldview, [Terra MODIS corrected reflectance, bands 7-2-1](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/modis/terra/MODIS_Terra_CorrectedReflectance_Bands721.md)
- NASA GIBS / Worldview, [NOAA-20 VIIRS thermal anomalies, 375 m](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/viirs/noaa20/VIIRS_NOAA20_Thermal_Anomalies_375m_All.md)
- NASA GIBS / Worldview, [MODIS Terra precipitable water vapour](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/modis/terra/MODIS_Terra_Water_Vapor_5km_Day.md)
- NASA GIBS / Worldview, [MEaSUREs gridded sea surface height anomalies](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/multi-mission/tpj/JPL_MEaSUREs_L4_Sea_Surface_Height_Anomalies.md)
- NASA GIBS / Worldview, [Aura OMI tropospheric nitrogen dioxide column](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/omi/OMI_Nitrogen_Dioxide_Tropo_Column.md)
- NASA GIBS / Worldview, [HLS Landsat 8/9 OLI adjusted reflectance](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/multi-mission/hls/HLS_L30_Nadir_BRDF_Adjusted_Reflectance.md)
- NASA JPL, [SMAP Team Investigating Radar Instrument Anomaly, updated 5 August 2015](https://smap.jpl.nasa.gov/news/1244/smap-team-investigating-radar-instrument-anomaly/)
- WMO OSCAR, [Instruments covering 700-1300 nm](https://space.oscar.wmo.int/observingmissions/view/37)
- WMO OSCAR, [Instruments covering 1300-3000 nm](https://space.oscar.wmo.int/observingmissions/view/38)
- NASA GIBS / Worldview, [Terra MODIS daytime land surface temperature](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/modis/terra/MODIS_Terra_Land_Surface_Temp_Day.md)
- NASA GIBS / Worldview, [GOES East ABI band 13 clean infrared](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/goes/GOES-East_ABI_Band13_Clean_Infrared.md)
- NASA GIBS / Worldview, [NOAA-20 VIIRS Day/Night Band display limitations](https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/viirs/noaa20/VIIRS_NOAA20_DayNightBand.md)
- NOAA LSA, [Global mean sea level anomaly, annual signals removed, CSV](https://www.star.nesdis.noaa.gov/socd/lsa/SeaLevelRise/slr/slr_sla_gbl_free_ref_90.csv)
- NSIDC, [Sea Ice Index V4, northern September monthly extent, CSV](https://noaadata.apps.nsidc.org/NOAA/G02135/north/monthly/data/N_09_extent_v4.0.csv)
- NASA, [Catalog of Earth Satellite Orbits](https://science.nasa.gov/earth/earth-observatory/catalog-of-earth-satellite-orbits/)
- NASA, [Spot The Station](https://www.nasa.gov/spot-the-station/)
- NASA Johnson Space Center, [Orbit Tutorial](https://eol.jsc.nasa.gov/Tools/orbitTutorial.htm)
- NASA, [International Space Station Facts and Figures](https://www.nasa.gov/international-space-station/space-station-facts-and-figures/)
- NASA, [International Space Station](https://www.nasa.gov/reference/international-space-station/)
- NASA, [International Space Station Frequently Asked Questions](https://www.nasa.gov/international-space-station-frequently-asked-questions/)
- NASA, [ISS Trajectory Operations (April 2025)](https://ntrs.nasa.gov/api/citations/20250003418/downloads/2025_April_POIWG_TOPO_final_rework.pdf)
- NOAA NESDIS, [NOAA's GOES-19 Now Operational as GOES East](https://www.nesdis.noaa.gov/news/noaas-goes-19-now-operational-goes-east-providing-critical-new-data-forecasters)
- NOAA, [Polar-orbiting and Geostationary Satellites](https://www.noaa.gov/heritage/resource-collections/polar-orbiting-and-geostationary-satellites-revolutionizing-earth-observations)
- NASA Goddard, [GDC Orbit Primer](https://science.nasa.gov/wp-content/uploads/2023/05/GDC_OrbitPrimer.pdf)
- GPS.gov, [Space Segment](https://www.gps.gov/space-segment)
- GPS.gov, [GPS Standard Positioning Service Performance Standard (2020)](https://www.gps.gov/sites/default/files/2025-07/2020-SPS-performance-standard.pdf)
- NASA Goddard, [Introduction to GPS and other Global Navigation Satellite Systems](https://ntrs.nasa.gov/api/citations/20120010317/downloads/20120010317.pdf)
- Wikipedia, [Molniya orbit](https://en.wikipedia.org/wiki/Molniya_orbit)
- CelesTrak, [SATCAT record for MOLNIYA 1-29](https://celestrak.org/satcat/records.php?CATNR=7780)
- CelesTrak, [FAQs: Two-Line Element Set Format](https://celestrak.org/columns/v04n03/)
- CelesTrak, [More Frequently Asked Questions](https://celestrak.org/columns/v04n05/)
- CelesTrak, [A New Way to Obtain GP Data (aka TLEs)](https://celestrak.org/NORAD/documentation/gp-data-formats.php)
- NOAA SWPC, [Satellite Drag](https://www.swpc.noaa.gov/impacts/satellite-drag)
- NASA, [NASA, NOAA: Sun Reaches Maximum Phase in 11-Year Solar Cycle](https://science.nasa.gov/science-research/heliophysics/nasa-noaa-sun-reaches-maximum-phase-in-11-year-solar-cycle/)
- NASA, [NASA, SpaceX CRS-33 Dragon Boost Space Station](https://www.nasa.gov/blogs/spacestation/2025/12/29/spacex-dragon-boosts-stations-orbit/)
- NASA, [Station Orbiting Higher as Exercise Research and Maintenance Continue](https://www.nasa.gov/blogs/spacestation/2025/11/19/station-orbiting-higher-as-exercise-research-and-maintenance-continue/)
- NASA Orbital Debris Program Office, [Frequently Asked Questions](https://orbitaldebris.jsc.nasa.gov/faq/)
- ESA, [Reentry and collision avoidance](https://www.esa.int/Space_Safety/Space_Debris/Reentry_and_collision_avoidance)
