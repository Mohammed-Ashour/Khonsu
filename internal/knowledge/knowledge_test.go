package knowledge

import (
	"os"
	"regexp"
	"strings"
	"testing"

	"github.com/Mohammed-Ashour/khonsu/internal/sources"
)

func load(t *testing.T) *Base {
	t.Helper()
	base, err := Load()
	if err != nil {
		t.Fatal(err)
	}
	return base
}

func eachStatement(base *Base, visit func(owner string, s Statement)) {
	for _, kind := range base.Kinds {
		for _, s := range kind.Statements {
			visit("kind "+kind.ID, s)
		}
	}
	for _, instrument := range base.Instruments {
		for _, s := range instrument.Statements {
			visit("instrument "+instrument.ID, s)
		}
	}
	for _, id := range base.NoradIDs() {
		profile, _ := base.ForSatellite(id)
		for _, s := range profile.Statements {
			visit("satellite "+id, s)
		}
	}
	for _, lesson := range base.Lessons {
		for _, step := range lesson.Steps {
			for _, s := range step.Text {
				visit("lesson "+lesson.ID, s)
			}
			if step.Question != nil {
				visit("lesson "+lesson.ID+" answer", step.Question.Explain)
			}
		}
	}
}

func TestEveryStatementHasAnHTTPSSourceAndEndsAsASentence(t *testing.T) {
	base := load(t)
	count := 0
	eachStatement(base, func(owner string, s Statement) {
		count++
		if !strings.HasSuffix(s.Text, ".") {
			t.Errorf("%s: %q does not end with a full stop", owner, s.Text)
		}
		for _, source := range s.Sources {
			if !strings.HasPrefix(source.URL, "https://") || source.Label == "" || source.Title == "" {
				t.Errorf("%s: source %+v needs a label, a title and an https URL", owner, source)
			}
		}
	})
	if count < 40 {
		t.Fatalf("only %d statements; the base did not load fully", count)
	}
}

func TestLayersExistAndMatchTheirKind(t *testing.T) {
	base := load(t)
	for _, kind := range base.Kinds {
		for _, id := range kind.Layers {
			if _, ok := sources.FindLayer(id); !ok {
				t.Errorf("kind %s: unknown layer %q", kind.ID, id)
			}
		}
	}
	// Every "what satellites measure" layer is reachable from the kind it is about.
	for _, layer := range sources.Layers() {
		if layer.Topic == "" {
			continue
		}
		kind, ok := base.kindByID[layer.Topic]
		if !ok || !contains(kind.Layers, layer.ID) {
			t.Errorf("layer %s has topic %q, but that kind does not list it", layer.ID, layer.Topic)
		}
	}
}

func TestEveryKindIsCollectedByAnInstrumentAndEverySatelliteIsDescribed(t *testing.T) {
	base := load(t)
	used := map[string]bool{}
	for _, instrument := range base.Instruments {
		for _, kind := range instrument.Kinds {
			used[kind] = true
		}
	}
	for _, kind := range base.Kinds {
		if !used[kind.ID] {
			t.Errorf("no instrument collects %s", kind.ID)
		}
	}
	digits := regexp.MustCompile(`^[1-9][0-9]{0,8}$`)
	for _, id := range base.NoradIDs() {
		profile, ok := base.ForSatellite(id)
		if !ok || !digits.MatchString(id) || len(profile.Instruments) == 0 || len(profile.Kinds) == 0 {
			t.Errorf("satellite %q: ok=%v, %d instruments, %d kinds", id, ok, len(profile.Instruments), len(profile.Kinds))
		}
		for _, instrument := range profile.Instruments {
			if len(instrument.Statements) == 0 && len(profile.Statements) == 0 {
				t.Errorf("satellite %s: instrument %s has nothing to say", id, instrument.ID)
			}
		}
	}
}

func TestForSatelliteResolvesKindsOnceInOrder(t *testing.T) {
	base := load(t)
	profile, ok := base.ForSatellite("39084") // Landsat 8: OLI and TIRS
	if !ok || profile.Name != "Landsat 8" {
		t.Fatalf("Landsat 8 = %+v, %v", profile.Name, ok)
	}
	var kinds []string
	for _, kind := range profile.Kinds {
		kinds = append(kinds, kind.ID)
	}
	if got := strings.Join(kinds, ","); got != "visible,near_infrared,shortwave_infrared,thermal_infrared" {
		t.Fatalf("kinds = %s", got)
	}
	if _, ok := base.ForSatellite("99999"); ok {
		t.Fatal("an undescribed satellite was described")
	}
}

func TestParseRejectsBrokenReferences(t *testing.T) {
	for name, body := range map[string]string{
		"unknown source":     `{"sources":{},"kinds":[{"id":"k","name":"K","statements":[{"text":"x.","sources":["nope"]}],"layers":[]}],"instruments":[],"satellites":[]}`,
		"no source":          `{"sources":{},"kinds":[{"id":"k","name":"K","statements":[{"text":"x.","sources":[]}],"layers":[]}],"instruments":[],"satellites":[]}`,
		"unknown kind":       `{"sources":{},"kinds":[],"instruments":[{"id":"i","name":"I","kinds":["k"],"statements":[]}],"satellites":[]}`,
		"unknown instrument": `{"sources":{},"kinds":[],"instruments":[],"satellites":[{"norad_id":"1","name":"S","instruments":["i"],"statements":[]}]}`,
		"unknown field":      `{"sources":{},"kinds":[],"instruments":[],"satellites":[],"extra":1}`,
	} {
		if _, err := parse([]byte(body)); err == nil {
			t.Errorf("%s: parse accepted it", name)
		}
	}
}

func contains(list []string, value string) bool {
	for _, item := range list {
		if item == value {
			return true
		}
	}
	return false
}

// docs/what-satellites-measure.md lists the described satellites; it must not fall behind.
func TestDocsListEveryDescribedSatellite(t *testing.T) {
	doc, err := os.ReadFile("../../docs/what-satellites-measure.md")
	if err != nil {
		t.Fatal(err)
	}
	base := load(t)
	for _, id := range base.NoradIDs() {
		profile, _ := base.ForSatellite(id)
		if !strings.Contains(string(doc), "| "+profile.Name+" | "+id+" |") {
			t.Errorf("docs/what-satellites-measure.md does not list %s (%s)", profile.Name, id)
		}
	}
}

func TestLessonsUseRealViewsAndLinkFromTheirKinds(t *testing.T) {
	base := load(t)
	if len(base.Lessons) < 3 {
		t.Fatalf("%d lessons", len(base.Lessons))
	}
	isView := func(id string) bool {
		layer, ok := sources.FindLayer(id)
		return ok && layer.Topic != ""
	}
	for _, lesson := range base.Lessons {
		if lesson.Steps[0].Satellite == "" {
			t.Errorf("lesson %s does not start by choosing a satellite", lesson.ID)
		}
		for i, step := range lesson.Steps {
			if step.View != nil && *step.View != "" && !isView(*step.View) {
				t.Errorf("lesson %s step %d: %q is not a view", lesson.ID, i+1, *step.View)
			}
			for _, id := range step.Compare {
				if !isView(id) {
					t.Errorf("lesson %s step %d: compare %q is not a view", lesson.ID, i+1, id)
				}
			}
			if step.Base != nil && *step.Base != "" {
				if layer, ok := sources.FindLayer(*step.Base); !ok || layer.Topic != "" || layer.Transparent {
					t.Errorf("lesson %s step %d: %q is not a base picture", lesson.ID, i+1, *step.Base)
				}
			}
		}
		for _, kind := range lesson.Kinds {
			found := false
			for _, link := range base.kindByID[kind].Lessons {
				found = found || link.ID == lesson.ID
			}
			if !found {
				t.Errorf("kind %s does not link to lesson %s", kind, lesson.ID)
			}
		}
	}
	if _, ok := base.Lesson("light-and-heat"); !ok {
		t.Error("Lesson did not find light-and-heat")
	}
	profile, _ := base.ForSatellite("60133")
	for _, kind := range profile.Kinds {
		if kind.ID == "thermal_infrared" && len(kind.Lessons) == 0 {
			t.Error("GOES 19's thermal infrared kind has no lessons")
		}
	}
}

func TestParseRejectsBrokenLessons(t *testing.T) {
	head := `{"sources":{"s":{"label":"L","title":"T","url":"https://x"}},"kinds":[{"id":"k","name":"K","statements":[],"layers":[]}],"instruments":[{"id":"i","name":"I","kinds":["k"],"statements":[]}],"satellites":[{"norad_id":"1","name":"S","instruments":["i"],"statements":[]}],"lessons":[`
	for name, lesson := range map[string]string{
		"unknown satellite": `{"id":"l","title":"L","summary":"S","kinds":["k"],"steps":[{"satellite":"2","text":[{"text":"x.","sources":["s"]}]}]}`,
		"unsourced text":    `{"id":"l","title":"L","summary":"S","kinds":["k"],"steps":[{"text":[{"text":"x.","sources":[]}]}]}`,
		"bad answer":        `{"id":"l","title":"L","summary":"S","kinds":["k"],"steps":[{"text":[],"question":{"prompt":"p","choices":["a","b"],"answer":2,"explain":{"text":"x.","sources":["s"]}}}]}`,
		"unsourced answer":  `{"id":"l","title":"L","summary":"S","kinds":["k"],"steps":[{"text":[],"question":{"prompt":"p","choices":["a","b"],"answer":0,"explain":{"text":"x.","sources":[]}}}]}`,
		"empty step":        `{"id":"l","title":"L","summary":"S","kinds":["k"],"steps":[{"text":[],"hint":"only a hint"}]}`,
		"one compare":       `{"id":"l","title":"L","summary":"S","kinds":["k"],"steps":[{"compare":["a"],"text":[{"text":"x.","sources":["s"]}]}]}`,
		"unknown kind":      `{"id":"l","title":"L","summary":"S","kinds":["nope"],"steps":[{"text":[{"text":"x.","sources":["s"]}]}]}`,
		"off the globe":     `{"id":"l","title":"L","summary":"S","kinds":["k"],"steps":[{"camera":{"lat":95,"lon":0},"text":[{"text":"x.","sources":["s"]}]}]}`,
	} {
		if _, err := parse([]byte(head + lesson + "]}")); err == nil {
			t.Errorf("%s: parse accepted it", name)
		}
	}
	good := `{"id":"l","title":"L","summary":"S","kinds":["k"],"steps":[{"satellite":"1","text":[{"text":"x.","sources":["s"]}]}]}`
	if _, err := parse([]byte(head + good + "]}")); err != nil {
		t.Errorf("a valid lesson was rejected: %v", err)
	}
}
