package knowledge

import (
	"os"
	"slices"
	"testing"

	"github.com/Mohammed-Ashour/khonsu/internal/catalog"
	"github.com/Mohammed-Ashour/khonsu/internal/orbit"
)

// The topics a lesson may name must be ones the orbit explanation can report.
func TestOrbitTopicsMatchTheExplanation(t *testing.T) {
	for _, pattern := range []string{orbit.PatternSunSynchronous, orbit.PatternDawnDusk, orbit.PatternMolniya, orbit.PatternTundra, orbit.PatternPolar, orbit.PatternNearEquatorial, orbit.PatternRetrograde} {
		if !slices.Contains(OrbitTopics, pattern) {
			t.Errorf("OrbitTopics lacks pattern %q", pattern)
		}
	}
}

// Orbit lessons may follow satellites the knowledge base does not describe. Each must be a
// satellite whose real elements the orbit tests use, so a mistyped ID cannot slip in, and
// its explanation must report a topic the lesson teaches.
func TestOrbitLessonsFollowKnownSatellitesOfTheirOrbit(t *testing.T) {
	body, err := os.ReadFile("../orbit/testdata/explain-gp.json")
	if err != nil {
		t.Fatal(err)
	}
	records, err := catalog.ParseElements(body)
	if err != nil {
		t.Fatal(err)
	}
	// The orbit topics each test satellite's explanation reports.
	known := map[string][]string{}
	for _, record := range records {
		explanation, err := orbit.Explain(record)
		if err != nil {
			t.Fatal(err)
		}
		known[record.CatalogID] = append([]string{explanation.Regime}, explanation.Patterns...)
	}
	base := load(t)
	for _, lesson := range base.Lessons {
		if len(lesson.Orbits) == 0 {
			continue
		}
		for i, step := range lesson.Steps {
			if step.Satellite == "" {
				continue
			}
			topics, tested := known[step.Satellite]
			if !tested {
				t.Errorf("%s step %d: satellite %s lacks real elements in the orbit test data", lesson.ID, i+1, step.Satellite)
				continue
			}
			if !slices.ContainsFunc(lesson.Orbits, func(topic string) bool { return slices.Contains(topics, topic) }) {
				t.Errorf("%s step %d: satellite %s's orbit (%v) is none of the lesson's %v", lesson.ID, i+1, step.Satellite, topics, lesson.Orbits)
			}
		}
		if len(base.ForOrbit(lesson.Orbits)) == 0 {
			t.Errorf("%s is not found by its own orbit topics", lesson.ID)
		}
	}
}
