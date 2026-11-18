# Visual examples for data kinds

Architecture source: `ARCHITECTURE.md`. Keep sourced claims and picture definitions in `internal/knowledge`; drawing and lazy-load state belong to the web app. Reuse the existing GIBS endpoint and provider legends.

## Composition

Within each expanded kind, put the output first and the measurement second:

```
Visible light
[Example observation or labelled illustration]
Instrument, date, what the colours mean, sources
[Sun -> surface -> satellite diagram]
How it is captured, with sources
Existing uses, satellites and globe/lesson actions
```

Keep the current dark-blue surfaces `#090d1c`, `#0c1124`, `#141b30`, text `#eef0f6`, secondary text `#c0c6d8`, and gold action accent `#ebd193`. No additional typefaces. Left-aligned captions and figures occupy the available column width. Provider raster colours are never recoloured; schematic colours explain paths and qualitative classes rather than pretending to encode measured values.

No decorative motion. Native disclosure reveals both visuals; image loading replaces only the output figure, not its card or focus target. Static pulse arrows distinguish active instruments from passive receivers. These are diagrams, not simulations.

## Scientific distinctions

- Visible/NIR/SWIR use reflected sunlight. A false-colour composite is not a single-band image.
- Thermal infrared and passive microwave detect emitted radiation, not reflected sunlight or an outgoing satellite beam.
- Water-vapour example is MODIS total-column water, not GOES's altitude-sensitive channels.
- Radar sends a pulse and measures its return; OPERA maps processed water classes rather than directly displaying raw radar amplitude.
- Altimetry times a return to infer distance; mapped sea-level anomalies include orbit information and geophysical corrections.
- Atmospheric gas retrievals compare spectral absorption; a colour map is a processed column quantity, not a photograph of a gas plume.
- Laser profiles and imaging spectra are labelled illustrations, not acquired GEDI/EMIT measurements. They carry no invented quantitative values.

## Verification

- Every kind has two accessible SVGs and sourced descriptions. The image definitions are schema-validated and checked against registered layers; the six quantitative/classified examples require provider scales.
- Chromium checks at 1440, 1024, 640 and 390 px cover offline behavior, diagram bounds, lazy image requests, success/failure/retry transitions and six local legends. Synthetic image responses test loading behavior only.
- All ten dated examples were fetched successfully through the actual GIBS adapter on 2026-11-18, with matching picture-date headers. The pixels were inspected together, and the real MODIS false-colour example was rendered in the app at desktop and phone widths.
- The water-vapour scale is nonlinear, reaching a final bin at about 9.64 cm and above; the original provider PNG is preserved. The sea-height scale spans below -0.3 m to above +0.3 m.
- Review corrections distinguish the separate VIIRS globe layer from the inline MODIS example, originate the GOES water-vapour ray within the atmospheric moisture layer, and align the laser pulse and both echoes with one canopy/ground footprint. Regression tests check the ray geometry as well as the wording.
- Live availability can change. These checks do not turn a visual example into a scientific analysis or validate every pixel's quality flags.

## Loading and accessibility

Only an expanded kind can request its dated example. Offline mode shows the illustration without provider requests. Failure leaves the labelled illustration and a retry control. Capture diagrams always work locally. Figures have accessible descriptions and equivalent sourced prose. Quantitative observed rasters include the exact provider scale and units; transparent gaps are identified as missing displayed coverage.
