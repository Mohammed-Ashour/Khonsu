package gibs

import (
	"bytes"
	"image/png"
	"strings"
	"testing"
)

func TestScientificLayersHaveProviderMatchedLocalLegends(t *testing.T) {
	for _, tc := range []struct {
		layer         Layer
		unit, meaning string
	}{
		{LandTemperature, "K", "not air temperature"},
		{SeaTemperature, "°C", "MUR"},
		{NewLayer("goes-east-infrared", "", Info, "", "GOES-East_ABI_Band13_Clean_Infrared", true, false), "°C", "brightness temperature"},
		{StoryWaterVapour, "cm", "not relative humidity"},
		{StorySeaHeight, "m", "not ocean depth"},
		{StoryNO2, "molecules/cm²", "not pollution at breathing height"},
		{StorySeaIce, "%", "not ice thickness"},
		{StoryRadarWater, "classes", "not flood depth"},
	} {
		t.Run(tc.layer.ID, func(t *testing.T) {
			legend := tc.layer.Legend
			if legend == nil || legend.Unit != tc.unit || !strings.Contains(legend.Description, tc.meaning) {
				t.Fatalf("legend=%+v", legend)
			}
			if legend.URL != "/api/v1/imagery-legend?layer="+tc.layer.ID || !strings.HasPrefix(legend.SourceURL, "https://gibs.earthdata.nasa.gov/legends/") {
				t.Fatalf("urls=%+v", legend)
			}
			body, err := LegendImage(tc.layer)
			if err != nil {
				t.Fatal(err)
			}
			cfg, err := png.DecodeConfig(bytes.NewReader(body))
			if err != nil || cfg.Width < 200 || cfg.Height < 70 {
				t.Fatalf("legend PNG: %+v %v", cfg, err)
			}
		})
	}
	if _, err := LegendImage(TrueColor); err == nil {
		t.Fatal("true colour should not acquire an unrelated value scale")
	}
}
