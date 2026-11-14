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
// the globe images that show it.
type Kind struct {
	ID         string      `json:"id"`
	Name       string      `json:"name"`
	Statements []Statement `json:"statements"`
	Layers     []string    `json:"layers"`
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
}

// Base is the whole knowledge base, with source references resolved.
type Base struct {
	Kinds       []Kind
	Instruments []Instrument
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
	return base, nil
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
