// Package knowledge describes what satellites measure: the kinds of data, the
// instruments that collect them, and which satellites carry which instruments.
// Every sentence links to a published source. The data is curated by hand in
// knowledge.json, so a satellite that is not listed is "not described yet"
// rather than guessed from its name.
package knowledge

import (
	"bytes"
	_ "embed"
	"encoding/json"
	"fmt"
	"sync"
)

//go:embed knowledge.json
var data []byte

// Source is a published page that supports a statement.
type Source struct {
	Label string `json:"label"`
	Title string `json:"title"`
	URL   string `json:"url"`
}

// Statement is one sentence and the sources that support it.
type Statement struct {
	Text    string   `json:"text"`
	Sources []Source `json:"sources"`
}

// Kind is a kind of data, such as visible light or thermal infrared. Layers are
// the globe images that show it, and Lessons the lessons about it.
type Kind struct {
	ID         string       `json:"id"`
	Name       string       `json:"name"`
	Statements []Statement  `json:"statements"`
	Layers     []string     `json:"layers"`
	Lessons    []LessonLink `json:"lessons"`
}

// LessonLink names a lesson.
type LessonLink struct {
	ID    string `json:"id"`
	Title string `json:"title"`
}

// Lesson is a short guided tour on the globe. Each step may select a satellite,
// set the base picture and view, offer two views to compare, and turn the camera,
// then shows sourced sentences, an optional unsourced hint (a direction such as
// "switch between the views", never a fact) and an optional question.
type Lesson struct {
	ID      string   `json:"id"`
	Title   string   `json:"title"`
	Summary string   `json:"summary"`
	Kinds   []string `json:"kinds"`
	Steps   []Step   `json:"steps"`
}

// Step is one card of a lesson. Empty fields leave that part of the app as it is,
// except View, which is null to keep the view and "" to clear it.
type Step struct {
	Satellite string      `json:"satellite,omitempty"`
	Base      *string     `json:"base,omitempty"`
	View      *string     `json:"view,omitempty"`
	Compare   []string    `json:"compare,omitempty"`
	Camera    *Camera     `json:"camera,omitempty"`
	Text      []Statement `json:"text"`
	Hint      string      `json:"hint,omitempty"`
	Question  *Question   `json:"question,omitempty"`
}

// Camera turns the globe to face a point.
type Camera struct {
	Lat float64 `json:"lat"`
	Lon float64 `json:"lon"`
}

// Question asks the reader to predict before the answer is shown.
type Question struct {
	Prompt  string    `json:"prompt"`
	Choices []string  `json:"choices"`
	Answer  int       `json:"answer"`
	Explain Statement `json:"explain"`
}

// Instrument is a sensor and the kinds of data it collects.
type Instrument struct {
	ID         string      `json:"id"`
	Name       string      `json:"name"`
	Kinds      []string    `json:"kinds"`
	Statements []Statement `json:"statements"`
}

// Profile is what one satellite measures, with every instrument and kind it
// refers to resolved.
type Profile struct {
	NoradID     string       `json:"norad_id"`
	Name        string       `json:"name"`
	Statements  []Statement  `json:"statements"`
	Instruments []Instrument `json:"instruments"`
	Kinds       []Kind       `json:"kinds"`
}

type rawStatement struct {
	Text    string   `json:"text"`
	Sources []string `json:"sources"`
}

type rawFile struct {
	Sources map[string]Source `json:"sources"`
	Kinds   []struct {
		ID         string         `json:"id"`
		Name       string         `json:"name"`
		Statements []rawStatement `json:"statements"`
		Layers     []string       `json:"layers"`
	} `json:"kinds"`
	Instruments []struct {
		ID         string         `json:"id"`
		Name       string         `json:"name"`
		Kinds      []string       `json:"kinds"`
		Statements []rawStatement `json:"statements"`
	} `json:"instruments"`
	Satellites []struct {
		NoradID     string         `json:"norad_id"`
		Name        string         `json:"name"`
		Instruments []string       `json:"instruments"`
		Statements  []rawStatement `json:"statements"`
	} `json:"satellites"`
	Lessons []struct {
		ID      string   `json:"id"`
		Title   string   `json:"title"`
		Summary string   `json:"summary"`
		Kinds   []string `json:"kinds"`
		Steps   []struct {
			Satellite string         `json:"satellite"`
			Base      *string        `json:"base"`
			View      *string        `json:"view"`
			Compare   []string       `json:"compare"`
			Camera    *Camera        `json:"camera"`
			Text      []rawStatement `json:"text"`
			Hint      string         `json:"hint"`
			Question  *struct {
				Prompt  string       `json:"prompt"`
				Choices []string     `json:"choices"`
				Answer  int          `json:"answer"`
				Explain rawStatement `json:"explain"`
			} `json:"question"`
		} `json:"steps"`
	} `json:"lessons"`
}

// Base is the whole knowledge base, with source references resolved.
type Base struct {
	Kinds       []Kind
	Instruments []Instrument
	Lessons     []Lesson
	satellites  map[string]rawSatellite
	order       []string
	kindByID    map[string]Kind
	instByID    map[string]Instrument
}

type rawSatellite struct {
	name        string
	instruments []string
	statements  []Statement
}

var (
	loadOnce sync.Once
	loaded   *Base
	loadErr  error
)

// Load returns the embedded knowledge base. It fails only if knowledge.json is
// malformed, which the package tests prevent.
func Load() (*Base, error) {
	loadOnce.Do(func() { loaded, loadErr = parse(data) })
	return loaded, loadErr
}

func parse(body []byte) (*Base, error) {
	var raw rawFile
	decoder := json.NewDecoder(bytes.NewReader(body))
	decoder.DisallowUnknownFields()
	if err := decoder.Decode(&raw); err != nil {
		return nil, fmt.Errorf("knowledge.json: %w", err)
	}
	statements := func(owner string, in []rawStatement) ([]Statement, error) {
		out := make([]Statement, 0, len(in))
		for _, s := range in {
			if s.Text == "" || len(s.Sources) == 0 {
				return nil, fmt.Errorf("%s: every statement needs text and at least one source", owner)
			}
			statement := Statement{Text: s.Text}
			for _, id := range s.Sources {
				source, ok := raw.Sources[id]
				if !ok {
					return nil, fmt.Errorf("%s: unknown source %q", owner, id)
				}
				statement.Sources = append(statement.Sources, source)
			}
			out = append(out, statement)
		}
		return out, nil
	}

	base := &Base{satellites: map[string]rawSatellite{}, kindByID: map[string]Kind{}, instByID: map[string]Instrument{}}
	for _, k := range raw.Kinds {
		list, err := statements("kind "+k.ID, k.Statements)
		if err != nil {
			return nil, err
		}
		if _, dup := base.kindByID[k.ID]; dup || k.ID == "" || k.Name == "" {
			return nil, fmt.Errorf("kind %q is unnamed or repeated", k.ID)
		}
		kind := Kind{ID: k.ID, Name: k.Name, Statements: list, Layers: append([]string{}, k.Layers...)}
		base.Kinds = append(base.Kinds, kind)
		base.kindByID[k.ID] = kind
	}
	for _, in := range raw.Instruments {
		list, err := statements("instrument "+in.ID, in.Statements)
		if err != nil {
			return nil, err
		}
		if _, dup := base.instByID[in.ID]; dup || in.ID == "" || in.Name == "" || len(in.Kinds) == 0 {
			return nil, fmt.Errorf("instrument %q is unnamed, repeated or has no kinds", in.ID)
		}
		for _, kind := range in.Kinds {
			if _, ok := base.kindByID[kind]; !ok {
				return nil, fmt.Errorf("instrument %s: unknown kind %q", in.ID, kind)
			}
		}
		instrument := Instrument{ID: in.ID, Name: in.Name, Kinds: in.Kinds, Statements: list}
		base.Instruments = append(base.Instruments, instrument)
		base.instByID[in.ID] = instrument
	}
	for _, sat := range raw.Satellites {
		list, err := statements("satellite "+sat.NoradID, sat.Statements)
		if err != nil {
			return nil, err
		}
		if _, dup := base.satellites[sat.NoradID]; dup || sat.NoradID == "" || len(sat.Instruments) == 0 {
			return nil, fmt.Errorf("satellite %q is repeated or has no instruments", sat.NoradID)
		}
		for _, id := range sat.Instruments {
			if _, ok := base.instByID[id]; !ok {
				return nil, fmt.Errorf("satellite %s: unknown instrument %q", sat.NoradID, id)
			}
		}
		base.satellites[sat.NoradID] = rawSatellite{name: sat.Name, instruments: sat.Instruments, statements: list}
		base.order = append(base.order, sat.NoradID)
	}
	for _, raw := range raw.Lessons {
		owner := "lesson " + raw.ID
		if raw.ID == "" || raw.Title == "" || raw.Summary == "" || len(raw.Steps) == 0 {
			return nil, fmt.Errorf("%s needs an id, a title, a summary and steps", owner)
		}
		for _, l := range base.Lessons {
			if l.ID == raw.ID {
				return nil, fmt.Errorf("%s is repeated", owner)
			}
		}
		lesson := Lesson{ID: raw.ID, Title: raw.Title, Summary: raw.Summary, Kinds: raw.Kinds}
		for _, kind := range raw.Kinds {
			if _, ok := base.kindByID[kind]; !ok {
				return nil, fmt.Errorf("%s: unknown kind %q", owner, kind)
			}
		}
		for i, rs := range raw.Steps {
			where := fmt.Sprintf("%s step %d", owner, i+1)
			text, err := statements(where, rs.Text)
			if err != nil {
				return nil, err
			}
			if rs.Satellite != "" {
				if _, ok := base.satellites[rs.Satellite]; !ok {
					return nil, fmt.Errorf("%s: satellite %q is not described", where, rs.Satellite)
				}
			}
			if len(rs.Compare) != 0 && len(rs.Compare) != 2 {
				return nil, fmt.Errorf("%s: compare needs two views", where)
			}
			if rs.Camera != nil && (rs.Camera.Lat < -90 || rs.Camera.Lat > 90 || rs.Camera.Lon < -180 || rs.Camera.Lon > 180) {
				return nil, fmt.Errorf("%s: camera is off the globe", where)
			}
			step := Step{Satellite: rs.Satellite, Base: rs.Base, View: rs.View, Compare: rs.Compare, Camera: rs.Camera, Text: text, Hint: rs.Hint}
			if rs.Question != nil {
				q := rs.Question
				if q.Prompt == "" || len(q.Choices) < 2 || q.Answer < 0 || q.Answer >= len(q.Choices) {
					return nil, fmt.Errorf("%s: a question needs a prompt, two or more choices and a valid answer", where)
				}
				explain, err := statements(where+" answer", []rawStatement{q.Explain})
				if err != nil {
					return nil, err
				}
				step.Question = &Question{Prompt: q.Prompt, Choices: q.Choices, Answer: q.Answer, Explain: explain[0]}
			}
			if len(step.Text) == 0 && step.Question == nil {
				return nil, fmt.Errorf("%s has nothing to say", where)
			}
			lesson.Steps = append(lesson.Steps, step)
		}
		base.Lessons = append(base.Lessons, lesson)
	}
	for i, kind := range base.Kinds {
		kind.Lessons = []LessonLink{}
		for _, lesson := range base.Lessons {
			for _, id := range lesson.Kinds {
				if id == kind.ID {
					kind.Lessons = append(kind.Lessons, LessonLink{lesson.ID, lesson.Title})
				}
			}
		}
		base.Kinds[i] = kind
		base.kindByID[kind.ID] = kind
	}
	return base, nil
}

// Lesson returns a lesson by ID.
func (b *Base) Lesson(id string) (Lesson, bool) {
	for _, lesson := range b.Lessons {
		if lesson.ID == id {
			return lesson, true
		}
	}
	return Lesson{}, false
}

// ForSatellite returns what a satellite measures, or false when it is not described.
// Kinds are listed in the base's order, once each.
func (b *Base) ForSatellite(noradID string) (Profile, bool) {
	sat, ok := b.satellites[noradID]
	if !ok {
		return Profile{}, false
	}
	profile := Profile{NoradID: noradID, Name: sat.name, Statements: sat.statements, Instruments: []Instrument{}, Kinds: []Kind{}}
	wanted := map[string]bool{}
	for _, id := range sat.instruments {
		instrument := b.instByID[id]
		profile.Instruments = append(profile.Instruments, instrument)
		for _, kind := range instrument.Kinds {
			wanted[kind] = true
		}
	}
	for _, kind := range b.Kinds {
		if wanted[kind.ID] {
			profile.Kinds = append(profile.Kinds, kind)
		}
	}
	return profile, true
}

// NoradIDs lists the described satellites in file order.
func (b *Base) NoradIDs() []string { return append([]string{}, b.order...) }
