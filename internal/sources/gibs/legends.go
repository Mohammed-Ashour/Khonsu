package gibs

import (
	"embed"
	"fmt"
)

// Provider legends are shipped locally. The browser never needs a third-party request.
//
//go:embed legends/*.png
var legends embed.FS

// Legend describes the exact provider palette, including its physical meaning.
type Legend struct {
	URL         string `json:"url"`
	Unit        string `json:"unit"`
	Description string `json:"description"`
	SourceURL   string `json:"source_url"`
	file        string
}

func legendFor(layer, id string) *Legend {
	var file, unit, description, source string
	switch layer {
	case "MODIS_Terra_Land_Surface_Temp_Day":
		file, unit, source = "land-temperature.png", "K", "MODIS_Land_Surface_Temp_H.png"
		description = "Daytime land surface temperature, not air temperature. The provider scale spans below 200 K to 350 K and above. Missing or black pixels can be cloud, unavailable coverage or rejected observations, not cold ground."
	case "GHRSST_L4_MUR_Sea_Surface_Temperature":
		file, unit, source = "sea-temperature.png", "°C", "GHRSST_Sea_Surface_Temperature_H.png"
		description = "Sea surface temperature from the MUR analysis. The provider scale spans below 0 °C to 32 °C and above. Land and missing coverage are not temperature values."
	case "GOES-East_ABI_Band13_Clean_Infrared":
		file, unit, source = "brightness-temperature.png", "°C", "Clean_Longwave_Infrared_Window_Band_H.png"
		description = "Infrared brightness temperature at 10.3 µm, not a direct measurement of ground or air temperature. Clouds can hide the surface. The enhanced provider palette spans about -92 °C to above 57 °C; missing coverage is not a cold value."
	case "MODIS_Terra_Water_Vapor_5km_Day":
		file, unit, source = "water-vapour.png", "cm", "MODIS_Water_Vapor_H.png"
		description = "Total precipitable water vapour in an atmospheric column, expressed as the depth of liquid water if condensed. The provider's nonlinear scale runs from 0 cm to about 9.64 cm and above. This is not relative humidity or water at one altitude; gaps are missing displayed coverage."
	case "JPL_MEaSUREs_L4_Sea_Surface_Height_Anomalies":
		file, unit, source = "sea-height.png", "m", "MEaSUREs_Sea_Surface_Height_Anomalies_H.png"
		description = "Sea surface height anomaly relative to a mean surface, not ocean depth or wave height. The provider scale spans below -0.3 m to above +0.3 m. This is a corrected, gridded multi-altimeter product over a five-day window; land and gaps are not zero anomaly."
	case "OMI_Nitrogen_Dioxide_Tropo_Column":
		file, unit, source = "no2.png", "molecules/cm²", "OMI_Nitrogen_Dioxide_Tropo_Column_H.png"
		description = "Tropospheric nitrogen dioxide column, not pollution at breathing height. The provider palette spans below zero to 2 × 10¹⁶ molecules/cm² and above. Cloud and missing scan rows leave gaps; a gap does not mean clean air."
	case "AMSRU2_Sea_Ice_Concentration_12km":
		file, unit, source = "sea-ice.png", "%", "AMSR_Sea_Ice_Concentration_H.png"
		description = "Sea ice concentration from 0 to 100 percent of each 12 km grid cell. This is not ice thickness or the extent total shown in the monthly chart. Missing coverage is not zero ice."
	case "OPERA_L3_Dynamic_Surface_Water_Extent-Sentinel-1":
		file, unit, source = "radar-water.png", "classes", "OPERA_Dynamic_Surface_Water_Extent_S1_H.png"
		description = "Classified surface water, not flood depth or a before-and-after difference. White is not water, blue open water, green inundated vegetation, light grey a height-above-drainage mask and dark grey radar layover or shadow. Masked areas are not confirmed dry land."
	default:
		return nil
	}
	return &Legend{URL: "/api/v1/imagery-legend?layer=" + id, Unit: unit, Description: description, SourceURL: "https://gibs.earthdata.nasa.gov/legends/" + source, file: file}
}

// LegendImage returns an allowlisted embedded provider legend, never an arbitrary URL.
func LegendImage(layer Layer) ([]byte, error) {
	if layer.Legend == nil || layer.Legend.file == "" {
		return nil, fmt.Errorf("this layer has no embedded legend")
	}
	return legends.ReadFile("legends/" + layer.Legend.file)
}
