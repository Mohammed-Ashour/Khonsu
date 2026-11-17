package knowledge

import (
	"encoding/json"
	"math"
	"os"
	"regexp"
	"strings"
	"testing"
)

func lessonContent(t *testing.T, id string) Lesson {
	t.Helper()
	lesson, ok := load(t).Lesson(id)
	if !ok {
		t.Fatalf("missing lesson %s", id)
	}
	return lesson
}

func stepContent(step Step) string {
	var text []string
	for _, statement := range step.Text {
		text = append(text, statement.Text)
	}
	return strings.Join(text, " ")
}

func requireContent(t *testing.T, text string, fragments ...string) {
	t.Helper()
	for _, fragment := range fragments {
		if !strings.Contains(strings.ToLower(text), strings.ToLower(fragment)) {
			t.Errorf("content lacks %q: %s", fragment, text)
		}
	}
}

func hasContentSource(statements []Statement, suffix string) bool {
	for _, statement := range statements {
		for _, source := range statement.Sources {
			if strings.HasSuffix(source.URL, suffix) {
				return true
			}
		}
	}
	return false
}

func TestOrbitLessonsDistinguishLiveElementsFromCuratedDescriptions(t *testing.T) {
	tle := lessonContent(t, "what-is-a-tle")
	requireContent(t, tle.Summary, "orbital element", "GP JSON")
	requireContent(t, stepContent(tle.Steps[0]), "live GP elements as JSON", "not as two lines of TLE text")
	if strings.Contains(tle.Summary, "behind every satellite") {
		t.Error("TLE lesson must not describe the live catalog as TLE text")
	}
	molniya := lessonContent(t, "why-molniya-is-stretched")
	requireContent(t, stepContent(molniya.Steps[1]), "November 2026", "current estimate")
	if strings.Contains(stepContent(molniya.Steps[1]), "no longer works") {
		t.Error("SATCAT source does not establish operational status")
	}
}

func TestContentInventoryAndKindConnections(t *testing.T) {
	// IDs are saved in URLs. Preserve all ten lessons and seven local stories.
	expected := map[string]bool{
		"what-is-an-orbit":          false,
		"why-satellites-stay-still": false,
		"sun-synchronous-orbits":    false,
		"how-gps-covers-the-planet": false,
		"why-molniya-is-stretched":  false,
		"what-is-a-tle":             false,
		"why-orbits-decay":          false,
		"light-and-heat":            false,
		"colours-you-cannot-see":    false,
		"orbit-decides-the-data":    false,
		"puerto-rico-goes-dark":     true,
		"los-angeles-fires":         true,
		"helene-flood-radar":        true,
		"cleaner-air-2020":          true,
		"lake-mead-shrinks":         true,
		"rising-seas":               true,
		"arctic-sea-ice-minimum":    true,
	}
	base := load(t)
	if len(base.Lessons) != len(expected) {
		t.Fatalf("got %d lessons/stories, want %d", len(base.Lessons), len(expected))
	}
	seen := map[string]bool{}
	for _, lesson := range base.Lessons {
		story, ok := expected[lesson.ID]
		if !ok || story != lesson.Story || seen[lesson.ID] {
			t.Errorf("unexpected, duplicated or misclassified content %q", lesson.ID)
		}
		seen[lesson.ID] = true
		for _, kindID := range lesson.Kinds {
			found := false
			for _, link := range base.kindByID[kindID].Lessons {
				found = found || link.ID == lesson.ID
			}
			if !found {
				t.Errorf("%s is disconnected from kind %s", lesson.ID, kindID)
			}
		}
	}
	// Validate against the existing strict schema, not a test-only extension.
	if _, err := parse(data); err != nil {
		t.Fatal(err)
	}
}

func TestHintsRemainDirectionsAndLessonsAvoidFalseFreshness(t *testing.T) {
	direction := regexp.MustCompile(`^(Look|Compare|Switch|Open|Turn|Rotate)\b`)
	claim := regexp.MustCompile(`(?i)\b(is|are|was|were|because|shows|reflects|absorbs|yesterday|polar night)\b|\b[0-9]{4}\b|µm`)
	for _, lesson := range load(t).Lessons {
		for i, step := range lesson.Steps {
			if step.Hint != "" && (!direction.MatchString(step.Hint) || claim.MatchString(step.Hint)) {
				t.Errorf("%s step %d: hint must only direct an action: %q", lesson.ID, i+1, step.Hint)
			}
			body, err := json.Marshal(step)
			if err != nil {
				t.Fatal(err)
			}
			for _, obsolete := range []string{"yesterday", "close to live", "near-live", "April and September", "near infrared and green combination"} {
				if strings.Contains(string(body), obsolete) {
					t.Errorf("%s step %d retains %q", lesson.ID, i+1, obsolete)
				}
			}
		}
	}
}

func TestVIIRSRecipeAndQuestionsUseActualLayerMetadata(t *testing.T) {
	lesson := lessonContent(t, "colours-you-cannot-see")
	step := lesson.Steps[1]
	requireContent(t, stepContent(step), "shortwave infrared M11 becomes red", "near infrared I2 becomes green", "visible red I1 becomes blue")
	metadata := "viirs/noaa20/VIIRS_NOAA20_CorrectedReflectance_BandsM11-I2-I1.md"
	if !hasContentSource(step.Text, metadata) {
		t.Error("VIIRS recipe needs the exact NASA layer citation")
	}
	question := lesson.Steps[0].Question
	if question == nil {
		t.Fatal("missing vegetation question")
	}
	requireContent(t, question.Prompt, "display colour", "vegetation")
	requireContent(t, question.Choices[question.Answer], "green")
	if !hasContentSource([]Statement{question.Explain}, metadata) {
		t.Error("vegetation answer lacks actual display metadata")
	}
	requireContent(t, stepContent(lesson.Steps[2]), "High clouds", "ice crystals", "blue", "does not identify surface ice")
}

func TestPuertoRicoCaveatPrecedesBothImageSteps(t *testing.T) {
	lesson := lessonContent(t, "puerto-rico-goes-dark")
	for i := 0; i < 2; i++ {
		step := lesson.Steps[i]
		if len(step.Text) == 0 {
			t.Fatalf("image step %d lacks visible text", i+1)
		}
		// Keep the warning in always-visible text, first, not in a hint or quiz answer.
		requireContent(t, step.Text[0].Text, "ENCC", "qualitative", "not comparable across nights", "do not infer power outages")
		if !hasContentSource(step.Text[:1], "viirs/snpp/VIIRS_SNPP_DayNightBand_ENCC.md") {
			t.Errorf("step %d warning needs the exact ENCC product source", i+1)
		}
		requireContent(t, stepContent(step), "NASA", "corrected", "comparison")
	}
	question := lesson.Steps[0].Question
	if question == nil || !strings.Contains(question.Prompt, "According to NOAA") {
		t.Fatal("outage question must ask a published finding, not infer ENCC light loss")
	}
	requireContent(t, stepContent(lesson.Steps[0]), "27 and 28 September", "do not reproduce")
}

func TestInstrumentMetricsAndNumericalCitations(t *testing.T) {
	base := load(t)
	for _, tc := range []struct {
		id        string
		frequency float64
		source    string
	}{
		{"c_sar", 5.405e9, "/web/s1-mission"},
		{"smap_radiometer", 1.41e9, "/observatory/specifications/"},
	} {
		instrument := base.instByID[tc.id]
		if len(instrument.Bands) != 1 || instrument.Specs == nil {
			t.Fatalf("%s needs a sourced centre marker", tc.id)
		}
		band := instrument.Bands[0]
		want := 299792458 / tc.frequency * 1e6 // metres to micrometres
		if band.FromUM != band.ToUM || math.Abs(band.FromUM-want) > 1e-6 {
			t.Errorf("%s marker = %+v, want centre %g µm", tc.id, band, want)
		}
		if !hasContentSource([]Statement{*instrument.Specs}, tc.source) {
			t.Errorf("%s lacks its actual frequency specification", tc.id)
		}
	}
	sar := base.instByID["c_sar"]
	if sar.ResolutionM != 5 {
		t.Errorf("C-SAR finest dimension = %g, want 5 m", sar.ResolutionM)
	}
	requireContent(t, sar.Specs.Text, "5 m by 20 m", "Interferometric Wide", "not square", "pixel spacing", "two-satellite", "repeat cycle")
	var raw struct {
		Instruments []map[string]json.RawMessage `json:"instruments"`
	}
	if err := json.Unmarshal(data, &raw); err != nil {
		t.Fatal(err)
	}
	for _, instrument := range raw.Instruments {
		if string(instrument["id"]) == `"swot_interferometer"` {
			for _, key := range []string{"resolution_m", "revisit_days"} {
				if _, present := instrument[key]; present {
					t.Errorf("SWOT must omit incomparable scatter field %s", key)
				}
			}
		}
	}
	abi := base.instByID["abi"]
	if len(abi.Bands) != 3 {
		t.Fatalf("ABI has %d markers", len(abi.Bands))
	}
	for i, centre := range []float64{0.64, 3.9, 10.3} {
		if abi.Bands[i].FromUM != centre || abi.Bands[i].ToUM != centre {
			t.Errorf("ABI band %d should show sourced centre %g", i, centre)
		}
	}
	for id, source := range map[string]string{
		"abi":   "/abi-scan-mode-information-and-channel-summary",
		"viirs": "/viirs/spectral-bands",
		"oli":   "/what-are-band-designations-landsat-satellites",
	} {
		instrument := base.instByID[id]
		if instrument.Specs == nil || !hasContentSource([]Statement{*instrument.Specs}, source) {
			t.Errorf("%s numerical bands lack their band-table citation", id)
		}
	}
}

func TestCoverageChronologyAndProductPlatforms(t *testing.T) {
	base := load(t)
	requireContent(t, base.kindByID["passive_microwave"].Statements[0].Text, "unfrozen", "not covered by water")
	smap := base.instByID["smap_radiometer"]
	requireContent(t, smap.Statements[0].Text, "7 July 2015", "5 August", "power supply")
	if !hasContentSource(smap.Statements, "/news/1244/smap-team-investigating-radar-instrument-anomaly/") {
		t.Error("SMAP chronology needs the dated anomaly notice")
	}
	for _, id := range []string{"40697", "42063", "60989"} {
		profile, _ := base.ForSatellite(id)
		requireContent(t, profile.Statements[0].Text, "nominal two-satellite", "5 days", "not guaranteed cloud-free")
	}
	for _, tc := range []struct {
		lesson    string
		platforms []string
	}{
		{"los-angeles-fires", []string{"25994", "25994", "43013"}},
		{"lake-mead-shrinks", []string{"25994", "25994", "39084"}},
		{"cleaner-air-2020", []string{"28376", "28376", "42969"}},
	} {
		selected := ""
		for i, step := range lessonContent(t, tc.lesson).Steps {
			if step.Satellite != "" {
				selected = step.Satellite
			}
			if i >= len(tc.platforms) || selected != tc.platforms[i] {
				t.Errorf("%s step %d selects %s, not the product platform", tc.lesson, i+1, selected)
			}
		}
	}
	for _, id := range []string{"olci", "slstr"} {
		requireContent(t, base.instByID[id].Specs.Text, "Two satellites", "equator")
	}
}

func TestStoriesKeepAnalysisAndIllustrationsSeparate(t *testing.T) {
	ice := lessonContent(t, "arctic-sea-ice-minimum")
	requireContent(t, stepContent(ice.Steps[0]), "concentration", "percentage", "12 km")
	if ice.Steps[1].Pictures[1].Date != "2025-09-01" {
		t.Error("2025 illustration date changed; recheck its minimum disclaimer")
	}
	requireContent(t, stepContent(ice.Steps[1]), "not a map of the 2025 minimum", "10 September", "4.60")
	requireContent(t, stepContent(ice.Steps[2]), "monthly mean extent", "not the single lowest day", "4.75")
	if ice.Steps[2].Chart == nil || ice.Steps[2].Chart.Month != 9 || ice.Steps[2].Chart.Hemisphere != "north" {
		t.Error("Arctic chart must request northern September monthly extent")
	}
	radar := lessonContent(t, "helene-flood-radar")
	requireContent(t, stepContent(radar.Steps[0]), "Masked", "not necessarily dry land")
	requireContent(t, stepContent(radar.Steps[1]), "Permanent water", "not the amount of newly flooded land")
	air := lessonContent(t, "cleaner-air-2020")
	requireContent(t, stepContent(air.Steps[0]), "single-day OMI", "does not reproduce")
	requireContent(t, stepContent(air.Steps[2]), "15 percent", "uncertainty")
	sea := lessonContent(t, "rising-seas")
	requireContent(t, stepContent(sea.Steps[0]), "through 2022", "annual signals", "does not apply", "glacial-isostatic adjustment")
	requireContent(t, stepContent(sea.Steps[1]), "2024", "partial year", "not a full-year average")
	for _, step := range sea.Steps {
		statements := append([]Statement{}, step.Text...)
		if step.Question != nil {
			statements = append(statements, step.Question.Explain)
		}
		for _, statement := range statements {
			for _, source := range statement.Sources {
				if strings.Contains(source.URL, "www.jpl.nasa.gov/") {
					t.Errorf("replace inaccessible sea-level citation with its verified NASA copy: %s", source.URL)
				}
			}
		}
	}
}

func TestDocsListEveryContentSource(t *testing.T) {
	var raw struct {
		Sources map[string]Source `json:"sources"`
	}
	if err := json.Unmarshal(data, &raw); err != nil {
		t.Fatal(err)
	}
	doc, err := os.ReadFile("../../docs/what-satellites-measure.md")
	if err != nil {
		t.Fatal(err)
	}
	for id, source := range raw.Sources {
		if !strings.Contains(string(doc), source.URL) {
			t.Errorf("docs omit source %s: %s", id, source.URL)
		}
	}
}
