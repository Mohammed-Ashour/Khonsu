package knowledge

import (
	"encoding/json"
	"strings"
	"testing"

	"github.com/Mohammed-Ashour/khonsu/internal/sources"
)

func TestEveryKindHasSourcedOutputAndCaptureVisuals(t *testing.T) {
	base := load(t)
	observations := 0
	for _, kind := range base.Kinds {
		t.Run(kind.ID, func(t *testing.T) {
			v := kind.Visual
			if v == nil || v.Capture.Text == "" || v.Example.Text == "" || len(v.Capture.Sources) == 0 || len(v.Example.Sources) == 0 {
				t.Fatal("kind needs sourced capture and illustrative output descriptions")
			}
			if !strings.Contains(strings.ToLower(v.Example.Text), "illustrat") && !strings.Contains(v.Example.Text, "drawing") {
				t.Error("unmeasured example must explicitly describe itself as an illustration")
			}
			if v.Picture == nil {
				if kind.ID != "laser_ranging" && kind.ID != "imaging_spectroscopy" {
					t.Error("this kind should have a dated provider example")
				}
				return
			}
			observations++
			layer, ok := sources.FindLayer(v.Picture.Layer)
			if !ok || v.Observation == nil {
				t.Fatalf("unregistered or unexplained picture: %+v", v.Picture)
			}
			if v.Picture.Box != nil && !layer.Story {
				t.Error("only a story layer accepts a regional box")
			}
			if layer.Topic != kind.ID && !(kind.ID == "near_infrared" && layer.ID == "story-false-color") {
				t.Errorf("picture topic %s does not match %s", layer.Topic, kind.ID)
			}
			switch kind.ID {
			case "thermal_infrared", "water_vapour", "passive_microwave", "radar", "altimetry", "atmospheric_composition":
				if layer.Legend == nil {
					t.Error("quantitative or classified observation needs its provider scale")
				}
			}
		})
	}
	if observations != 10 {
		t.Fatalf("got %d observed examples, want 10", observations)
	}
}

func TestCaptureAndObservationDescriptionsKeepTheirPhysicalReferents(t *testing.T) {
	base := load(t)
	water := base.kindByID["water_vapour"].Visual
	if !strings.Contains(water.Capture.Text, "absorbs and emits") || !strings.Contains(water.Capture.Text, "atmospheric moisture layers") {
		t.Error("water-vapour capture must explain atmospheric emission")
	}
	if !strings.Contains(water.Observation.Text, "Terra MODIS total-column") {
		t.Error("MODIS column water must remain distinct from the GOES capture explanation")
	}
	swir := base.kindByID["shortwave_infrared"]
	if !strings.Contains(swir.Visual.Observation.Text, "Terra MODIS bands 7-2-1") {
		t.Error("the inline observation must identify its MODIS product")
	}
	if !strings.Contains(swir.Statements[1].Text, "separate NOAA-20 VIIRS globe layer") || strings.Contains(swir.Statements[1].Text, "This VIIRS") {
		t.Error("VIIRS description must refer to the separate globe layer, not the MODIS example")
	}
}

func TestKindVisualRejectsInvalidDefinitions(t *testing.T) {
	for name, mutate := range map[string]func(*rawKindVisual){
		"unsourced capture":           func(v *rawKindVisual) { v.Capture.Sources = nil },
		"empty example":               func(v *rawKindVisual) { v.Example.Text = "" },
		"unknown source":              func(v *rawKindVisual) { v.Capture.Sources = []string{"not-a-source"} },
		"missing observation caption": func(v *rawKindVisual) { v.Observation = nil },
		"caption without picture":     func(v *rawKindVisual) { v.Picture = nil },
		"invalid date":                func(v *rawKindVisual) { v.Picture.Date = "2025-02-30" },
		"invalid rectangle":           func(v *rawKindVisual) { v.Picture.Box.MinLat = 99 },
	} {
		t.Run(name, func(t *testing.T) {
			var raw rawFile
			if err := json.Unmarshal(data, &raw); err != nil {
				t.Fatal(err)
			}
			mutate(raw.Kinds[0].Visual)
			body, err := json.Marshal(raw)
			if err != nil {
				t.Fatal(err)
			}
			if _, err := parse(body); err == nil {
				t.Fatal("accepted invalid visual metadata")
			}
		})
	}
}
