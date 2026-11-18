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
	"errors"
	"fmt"
	"regexp"
	"slices"
	"sync"
	"time"
)

// noradID is a catalog number without leading zeros.
var noradID = regexp.MustCompile(`^[1-9][0-9]{0,8}$`)

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
	Conditions []Condition  `json:"conditions"`
	Uses       []Statement  `json:"uses"`
	Layers     []string     `json:"layers"`
	Lessons    []LessonLink `json:"lessons"`
	Visual     *KindVisual  `json:"visual,omitempty"`
}

// KindVisual pairs a measurement diagram with an illustrative output and an optional
// dated observation. Example describes only the illustration; Observation describes
// the provider image, so a failed image cannot turn the illustration into evidence.
type KindVisual struct {
	Capture     Statement  `json:"capture"`
	Example     Statement  `json:"example"`
	Picture     *Picture   `json:"picture,omitempty"`
	Observation *Statement `json:"observation,omitempty"`
}

type rawKindVisual struct {
	Capture     rawStatement  `json:"capture"`
	Example     rawStatement  `json:"example"`
	Picture     *Picture      `json:"picture"`
	Observation *rawStatement `json:"observation"`
}

// Condition says whether a kind of data works in some situation, such as at night or
// through cloud, with the sentence and sources that support it.
type Condition struct {
	Label string `json:"label"`
	Value bool   `json:"value"`
	Statement
}

// Band is a wavelength range an instrument measures, in micrometres.
type Band struct {
	Name   string  `json:"name"`
	FromUM float64 `json:"from_um"`
	ToUM   float64 `json:"to_um"`
}

// Region is a named part of the spectrum, in micrometres.
type Region struct {
	Label  string  `json:"label"`
	FromUM float64 `json:"from_um"`
	ToUM   float64 `json:"to_um"`
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
	// A story is a lesson about one real event; When and Where describe it.
	Story bool   `json:"story,omitempty"`
	When  string `json:"when,omitempty"`
	Where string `json:"where,omitempty"`
	// Orbits are the orbit types and patterns a lesson explains, named as in the orbit
	// explanation (internal/orbit), so the "Why is it up there?" card can offer it.
	Orbits []string `json:"orbits,omitempty"`
}

// OrbitTopics are the names a lesson's Orbits may use: the orbit classes and the named
// patterns of internal/orbit. A test keeps the two lists in step.
var OrbitTopics = []string{"LEO", "MEO", "GEO", "GSO", "HEO", "Elliptical",
	"sun_synchronous", "dawn_dusk", "molniya", "tundra", "polar", "near_equatorial", "retrograde"}

// Tabs are the satellite panel's tabs a lesson step may open.
var Tabs = []string{"now", "passes", "orbit", "data"}

// Speeds are the timeline speeds a lesson step may play at, as offered by the app.
var Speeds = []float64{1, 10, 60, 600}

// Picture is a story layer for one past day, over an area when Box is set.
type Picture struct {
	Layer string `json:"layer"`
	Date  string `json:"date"`
	Box   *Box   `json:"box,omitempty"`
	Label string `json:"label,omitempty"`
	// Plain leaves out the true-colour picture usually drawn under a see-through one,
	// such as white sea ice that would vanish against white cloud.
	Plain bool `json:"plain,omitempty"`
}

// Box is an area on the globe, in degrees.
type Box struct {
	MinLat float64 `json:"min_lat"`
	MinLon float64 `json:"min_lon"`
	MaxLat float64 `json:"max_lat"`
	MaxLon float64 `json:"max_lon"`
}

// Chart draws a record that Khonsu fetches when it is shown (sea-ice or sea-level), or a
// few sourced numbers given here (bars).
type Chart struct {
	Dataset    string     `json:"dataset"`
	Title      string     `json:"title"`
	Hemisphere string     `json:"hemisphere,omitempty"`
	Month      int        `json:"month,omitempty"`
	Highlight  []int      `json:"highlight,omitempty"`
	Unit       string     `json:"unit,omitempty"`
	Bars       []Bar      `json:"bars,omitempty"`
	Source     *Statement `json:"source,omitempty"`
}

// Bar is one labelled value of a bar chart.
type Bar struct {
	Label string  `json:"label"`
	Value float64 `json:"value"`
}

// Step is one card of a lesson. Empty fields leave that part of the app as it is,
// except View, which is null to keep the view and "" to clear it.
type Step struct {
	Satellite string      `json:"satellite,omitempty"`
	Base      *string     `json:"base,omitempty"`
	View      *string     `json:"view,omitempty"`
	Compare   []string    `json:"compare,omitempty"`
	Picture   *Picture    `json:"picture,omitempty"`
	Pictures  []Picture   `json:"pictures,omitempty"`
	Chart     *Chart      `json:"chart,omitempty"`
	Camera    *Camera     `json:"camera,omitempty"`
	Text      []Statement `json:"text"`
	Hint      string      `json:"hint,omitempty"`
	Question  *Question   `json:"question,omitempty"`
	// Tab opens a tab of the satellite panel, so the lesson can point at real values.
	Tab string `json:"tab,omitempty"`
	// Play runs the timeline at this many times real speed.
	Play float64 `json:"play,omitempty"`
}

// Camera turns the globe to face a point.
type Camera struct {
	Lat float64 `json:"lat"`
	Lon float64 `json:"lon"`
	// Distance from Earth's centre in Earth radii, for a close view of a region.
	Distance float64 `json:"distance,omitempty"`
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
	Short      string      `json:"short,omitempty"`
	Kinds      []string    `json:"kinds"`
	Statements []Statement `json:"statements"`
	// Bands, pixel size and time between looks, for the Learn charts; Specs sources them.
	Bands       []Band     `json:"bands,omitempty"`
	ResolutionM float64    `json:"resolution_m,omitempty"`
	RevisitDays float64    `json:"revisit_days,omitempty"`
	Specs       *Statement `json:"specs,omitempty"`
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
		Conditions []struct {
			Label   string   `json:"label"`
			Value   bool     `json:"value"`
			Text    string   `json:"text"`
			Sources []string `json:"sources"`
		} `json:"conditions"`
		Uses   []rawStatement `json:"uses"`
		Layers []string       `json:"layers"`
		Visual *rawKindVisual `json:"visual"`
	} `json:"kinds"`
	Instruments []struct {
		ID          string         `json:"id"`
		Name        string         `json:"name"`
		Short       string         `json:"short"`
		Kinds       []string       `json:"kinds"`
		Statements  []rawStatement `json:"statements"`
		Bands       []Band         `json:"bands"`
		ResolutionM float64        `json:"resolution_m"`
		RevisitDays float64        `json:"revisit_days"`
		Specs       *rawStatement  `json:"specs"`
	} `json:"instruments"`
	Regions         []Region       `json:"regions"`
	RegionsSources  []rawStatement `json:"regions_sources"`
	SharpStatements []rawStatement `json:"sharp_statements"`
	Satellites      []struct {
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
		Story   bool     `json:"story"`
		When    string   `json:"when"`
		Where   string   `json:"where"`
		Orbits  []string `json:"orbits"`
		Steps   []struct {
			Satellite string         `json:"satellite"`
			Base      *string        `json:"base"`
			View      *string        `json:"view"`
			Compare   []string       `json:"compare"`
			Picture   *Picture       `json:"picture"`
			Pictures  []Picture      `json:"pictures"`
			Chart     *rawChart      `json:"chart"`
			Camera    *Camera        `json:"camera"`
			Text      []rawStatement `json:"text"`
			Hint      string         `json:"hint"`
			Tab       string         `json:"tab"`
			Play      float64        `json:"play"`
			Question  *struct {
				Prompt  string       `json:"prompt"`
				Choices []string     `json:"choices"`
				Answer  int          `json:"answer"`
				Explain rawStatement `json:"explain"`
			} `json:"question"`
		} `json:"steps"`
	} `json:"lessons"`
}

type rawChart struct {
	Dataset    string        `json:"dataset"`
	Title      string        `json:"title"`
	Hemisphere string        `json:"hemisphere"`
	Month      int           `json:"month"`
	Highlight  []int         `json:"highlight"`
	Unit       string        `json:"unit"`
	Bars       []Bar         `json:"bars"`
	Source     *rawStatement `json:"source"`
}

// Base is the whole knowledge base, with source references resolved.
type Base struct {
	Kinds       []Kind
	Instruments []Instrument
	Lessons     []Lesson
	// For the Learn charts: the spectrum's regions, and what the charts rest on.
	Regions         []Region
	RegionsSources  []Statement
	SharpStatements []Statement
	satellites      map[string]rawSatellite
	order           []string
	kindByID        map[string]Kind
	instByID        map[string]Instrument
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
		uses, err := statements("kind "+k.ID+" uses", k.Uses)
		if err != nil {
			return nil, err
		}
		conditions := []Condition{}
		for _, c := range k.Conditions {
			list, err := statements("kind "+k.ID+" condition", []rawStatement{{Text: c.Text, Sources: c.Sources}})
			if err != nil || c.Label == "" {
				return nil, fmt.Errorf("kind %s: every condition needs a label, text and a source", k.ID)
			}
			conditions = append(conditions, Condition{Label: c.Label, Value: c.Value, Statement: list[0]})
		}
		kind := Kind{ID: k.ID, Name: k.Name, Statements: list, Conditions: conditions, Uses: uses, Layers: append([]string{}, k.Layers...)}
		if v := k.Visual; v != nil {
			text, err := statements("kind "+k.ID+" visual", []rawStatement{v.Capture, v.Example})
			if err != nil {
				return nil, err
			}
			kind.Visual = &KindVisual{Capture: text[0], Example: text[1], Picture: v.Picture}
			if (v.Picture == nil) != (v.Observation == nil) {
				return nil, fmt.Errorf("kind %s: a picture and its sourced observation description must be paired", k.ID)
			}
			if v.Picture != nil {
				if err := checkPicture(*v.Picture); err != nil {
					return nil, fmt.Errorf("kind %s: %w", k.ID, err)
				}
				text, err := statements("kind "+k.ID+" observation", []rawStatement{*v.Observation})
				if err != nil {
					return nil, err
				}
				kind.Visual.Observation = &text[0]
			}
		}
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
		instrument := Instrument{ID: in.ID, Name: in.Name, Short: in.Short, Kinds: in.Kinds, Statements: list, Bands: in.Bands, ResolutionM: in.ResolutionM, RevisitDays: in.RevisitDays}
		if (len(in.Bands) > 0 || in.ResolutionM > 0 || in.RevisitDays > 0) && in.Specs == nil {
			return nil, fmt.Errorf("instrument %s: bands and figures need a specs statement with sources", in.ID)
		}
		for _, band := range in.Bands {
			if band.Name == "" || band.FromUM <= 0 || band.ToUM < band.FromUM {
				return nil, fmt.Errorf("instrument %s: band %q is not a range", in.ID, band.Name)
			}
		}
		if in.Specs != nil {
			specs, err := statements("instrument "+in.ID+" specs", []rawStatement{*in.Specs})
			if err != nil {
				return nil, err
			}
			instrument.Specs = &specs[0]
		}
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
	var err error
	if base.RegionsSources, err = statements("regions", raw.RegionsSources); err != nil {
		return nil, err
	}
	if base.SharpStatements, err = statements("sharp", raw.SharpStatements); err != nil {
		return nil, err
	}
	if len(raw.Regions) > 0 && len(base.RegionsSources) == 0 {
		return nil, errors.New("spectrum regions need sources")
	}
	base.Regions = raw.Regions
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
		lesson := Lesson{ID: raw.ID, Title: raw.Title, Summary: raw.Summary, Kinds: append([]string{}, raw.Kinds...), Story: raw.Story, When: raw.When, Where: raw.Where, Orbits: raw.Orbits}
		for _, topic := range raw.Orbits {
			if !contains(OrbitTopics, topic) {
				return nil, fmt.Errorf("%s: unknown orbit topic %q", owner, topic)
			}
		}
		if len(raw.Kinds) == 0 && len(raw.Orbits) == 0 {
			return nil, fmt.Errorf("%s needs kinds of data or orbit topics", owner)
		}
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
			// Data lessons pick described satellites. Orbit lessons may follow any satellite,
			// since what they teach comes from its elements; tests check those IDs by name.
			if rs.Satellite != "" {
				if _, ok := base.satellites[rs.Satellite]; !ok && (len(raw.Orbits) == 0 || !noradID.MatchString(rs.Satellite)) {
					return nil, fmt.Errorf("%s: satellite %q is not described", where, rs.Satellite)
				}
			}
			if rs.Tab != "" && !contains(Tabs, rs.Tab) {
				return nil, fmt.Errorf("%s: unknown tab %q", where, rs.Tab)
			}
			if rs.Play != 0 && !slices.Contains(Speeds, rs.Play) {
				return nil, fmt.Errorf("%s: the timeline plays at 1, 10, 60 or 600 times real speed", where)
			}
			if len(rs.Compare) != 0 && len(rs.Compare) != 2 {
				return nil, fmt.Errorf("%s: compare needs two views", where)
			}
			if rs.Camera != nil && (rs.Camera.Lat < -90 || rs.Camera.Lat > 90 || rs.Camera.Lon < -180 || rs.Camera.Lon > 180) {
				return nil, fmt.Errorf("%s: camera is off the globe", where)
			}
			if rs.Camera != nil && rs.Camera.Distance != 0 && (rs.Camera.Distance < 1.02 || rs.Camera.Distance > 60) {
				return nil, fmt.Errorf("%s: camera distance must be 1.02 to 60 Earth radii", where)
			}
			pictures := rs.Pictures
			if rs.Picture != nil {
				pictures = append([]Picture{*rs.Picture}, pictures...)
			}
			if len(rs.Pictures) == 1 {
				return nil, fmt.Errorf("%s: pictures compares two or more; use picture for one", where)
			}
			for _, picture := range pictures {
				if err := checkPicture(picture); err != nil {
					return nil, fmt.Errorf("%s: %w", where, err)
				}
			}
			step := Step{Satellite: rs.Satellite, Base: rs.Base, View: rs.View, Compare: rs.Compare, Picture: rs.Picture, Pictures: rs.Pictures, Camera: rs.Camera, Text: text, Hint: rs.Hint, Tab: rs.Tab, Play: rs.Play}
			if rs.Chart != nil {
				chart, err := checkChart(where, rs.Chart, statements)
				if err != nil {
					return nil, err
				}
				step.Chart = chart
			}
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
			if len(step.Text) == 0 && step.Question == nil && step.Chart == nil {
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

func checkPicture(p Picture) error {
	if p.Layer == "" {
		return errors.New("a picture needs a layer")
	}
	if _, err := time.Parse("2006-01-02", p.Date); err != nil {
		return fmt.Errorf("picture %s: date must be YYYY-MM-DD", p.Layer)
	}
	if b := p.Box; b != nil && !(b.MinLat >= -90 && b.MaxLat <= 90 && b.MinLon >= -180 && b.MaxLon <= 180 && b.MaxLat > b.MinLat && b.MaxLon > b.MinLon) {
		return fmt.Errorf("picture %s: the box is not a rectangle on the globe", p.Layer)
	}
	return nil
}

func checkChart(where string, raw *rawChart, statements func(string, []rawStatement) ([]Statement, error)) (*Chart, error) {
	chart := &Chart{Dataset: raw.Dataset, Title: raw.Title, Hemisphere: raw.Hemisphere, Month: raw.Month, Highlight: raw.Highlight, Unit: raw.Unit, Bars: raw.Bars}
	if raw.Title == "" {
		return nil, fmt.Errorf("%s: a chart needs a title", where)
	}
	switch raw.Dataset {
	case "sea-ice":
		if (raw.Hemisphere != "north" && raw.Hemisphere != "south") || raw.Month < 1 || raw.Month > 12 {
			return nil, fmt.Errorf("%s: a sea-ice chart needs a hemisphere and a month", where)
		}
	case "sea-level":
	case "bars":
		if len(raw.Bars) == 0 || raw.Source == nil {
			return nil, fmt.Errorf("%s: a bar chart needs bars and a source for their numbers", where)
		}
	default:
		return nil, fmt.Errorf("%s: unknown chart dataset %q", where, raw.Dataset)
	}
	if raw.Source != nil {
		source, err := statements(where+" chart", []rawStatement{*raw.Source})
		if err != nil {
			return nil, err
		}
		chart.Source = &source[0]
	}
	return chart, nil
}

// ForOrbit lists the lessons that explain any of the given orbit classes or patterns.
func (b *Base) ForOrbit(topics []string) []LessonLink {
	links := []LessonLink{}
	for _, lesson := range b.Lessons {
		for _, topic := range lesson.Orbits {
			if slices.Contains(topics, topic) {
				links = append(links, LessonLink{lesson.ID, lesson.Title})
				break
			}
		}
	}
	return links
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

// SatelliteLink names a described satellite.
type SatelliteLink struct {
	NoradID string `json:"norad_id"`
	Name    string `json:"name"`
}

// Carriers lists the described satellites with an instrument that collects a kind of data.
func (b *Base) Carriers(kind string) []SatelliteLink {
	links := []SatelliteLink{}
	for _, id := range b.order {
		sat := b.satellites[id]
		for _, instrument := range sat.instruments {
			if contains(b.instByID[instrument].Kinds, kind) {
				links = append(links, SatelliteLink{id, sat.name})
				break
			}
		}
	}
	return links
}

func contains(list []string, value string) bool {
	for _, item := range list {
		if item == value {
			return true
		}
	}
	return false
}

// NoradIDs lists the described satellites in file order.
func (b *Base) NoradIDs() []string { return append([]string{}, b.order...) }
