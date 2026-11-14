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
- **Views.** Some kinds link to a globe view. These are NASA GIBS layers in the *What satellites measure* group of the Layers panel. Daily views fall back to an earlier day when yesterday's picture isn't ready yet.

To add a satellite, find its NORAD number on [CelesTrak SATCAT](https://celestrak.org/satcat/search.php). Add it with its instruments, giving each new sentence a source you have read. Then run `go test ./internal/knowledge`.

## Satellites described

| Satellite | NORAD | Instruments | Kinds of data |
|---|---|---|---|
| ISS | 25544 | ECOSTRESS, GEDI, EMIT | Thermal infrared, Laser ranging, Imaging spectroscopy |
| Terra | 25994 | MODIS | Visible light, Near infrared, Shortwave infrared, Thermal infrared |
| Aqua | 27424 | MODIS | Visible light, Near infrared, Shortwave infrared, Thermal infrared |
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

## Lessons

The notes also hold short lessons, in the same file. They follow the same rules:

- **Sentences need sources.** Every sentence and every answer has a source.
- **Hints are only directions.** A step's *hint* tells the reader what to do, such as "switch between the two views". It never states a fact.
- **Tests check every lesson.** Each lesson must start by choosing a described satellite, use real views, and link from the kinds of data it teaches.

| Lesson | Satellites | What it shows |
|---|---|---|
| Light or heat? | GOES 19 | Visible band 2 against infrared band 13, and why infrared works at night |
| Colours you can't see | NOAA 20 | True colour against shortwave infrared false colour: plants, burns, ice |
| The orbit decides the data | GOES 19, Terra | A geostationary view every 10 minutes against polar strips every day or two |

## Globe views

| View | Kind | From |
|---|---|---|
| GOES East visible (band 2) | Visible light | NOAA GOES-East ABI, near live |
| GOES East infrared (band 13) | Thermal infrared | NOAA GOES-East ABI, near live |
| Shortwave infrared false colour | Shortwave and near infrared | NOAA-20 VIIRS bands M11, I2 and I1, daily |
| Earth at night | Light at night | NOAA-20 VIIRS Day/Night Band, daily |
| Land surface temperature | Thermal infrared | Terra MODIS, daily |
| Sea surface temperature | Thermal infrared | GHRSST MUR analysis, daily |

All views come from [NASA GIBS](https://nasa-gibs.github.io/gibs-api-docs/), and each is credited on the globe while it shows.

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
