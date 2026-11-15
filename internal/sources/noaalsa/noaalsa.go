// Package noaalsa reads global mean sea level from the NOAA Laboratory for Satellite
// Altimetry, measured by TOPEX/Poseidon, the Jason satellites and Sentinel-6 Michael Freilich.
package noaalsa

import (
	"bufio"
	"bytes"
	"context"
	"errors"
	"strconv"
	"strings"
	"time"

	"github.com/Mohammed-Ashour/khonsu/internal/sources/feed"
)

// ID identifies this source.
const ID = "noaa-lsa-sea-level"

const seriesTTL = 7 * 24 * time.Hour

// Info describes and credits this source with the acknowledgement NOAA asks for.
var Info = feed.Info{
	ID:       ID,
	Name:     "NOAA Laboratory for Satellite Altimetry",
	Category: feed.CategoryRecords,
	URL:      "https://www.star.nesdis.noaa.gov/socd/lsa/SeaLevelRise/",
	Credit:   "Altimetry data are provided by the NOAA Laboratory for Satellite Altimetry.",
	Summary:  "Global mean sea level since 1993 from radar altimeters.",
	Nature:   feed.NatureObserved,
	Refresh:  "Weekly, only when a lesson shows it",
	Status:   feed.StatusLive,
}

// DefaultURL is NOAA's global series with the yearly cycle removed. Its header states the trend.
const DefaultURL = "https://www.star.nesdis.noaa.gov/socd/lsa/SeaLevelRise/slr/slr_sla_gbl_free_ref_90.csv"

// Client reads this provider through a shared feed client.
type Client struct {
	feed *feed.Client
	url  string
}

// New returns a client for the provider's default address.
func New(f *feed.Client) *Client { return NewAt(f, DefaultURL) }

// NewAt returns a client for another address, such as a test server.
func NewAt(f *feed.Client, url string) *Client { return &Client{f, url} }

// Point is the sea level anomaly, in millimetres, at a decimal year, from one satellite.
type Point struct {
	Year      float64 `json:"year"`
	Level     float64 `json:"level_mm"`
	Satellite string  `json:"satellite"`
}

// Series is the record and the trend NOAA states in the file.
type Series struct {
	Points []Point `json:"points"`
	Trend  string  `json:"trend"`
}

// parse reads the CSV: comment lines start with #, then a header naming one column per
// satellite, and each row fills only the column of the satellite that measured it.
func parse(body []byte) (Series, error) {
	var series Series
	var satellites []string
	scanner := bufio.NewScanner(bytes.NewReader(body))
	for scanner.Scan() {
		line := strings.TrimSpace(scanner.Text())
		switch {
		case line == "":
			continue
		case strings.HasPrefix(line, "#"):
			if trend, ok := strings.CutPrefix(line, "#trend ="); ok {
				series.Trend = strings.TrimSpace(trend)
			}
			continue
		case satellites == nil:
			satellites = strings.Split(line, ",")
			if len(satellites) < 2 || strings.TrimSpace(satellites[0]) != "year" {
				return Series{}, errors.New("unexpected header")
			}
			continue
		}
		cells := strings.Split(line, ",")
		year, err := strconv.ParseFloat(cells[0], 64)
		if err != nil {
			return Series{}, errors.New("unreadable year")
		}
		for i := 1; i < len(cells) && i < len(satellites); i++ {
			if value, err := strconv.ParseFloat(strings.TrimSpace(cells[i]), 64); err == nil {
				series.Points = append(series.Points, Point{year, value, strings.TrimSpace(satellites[i])})
			}
		}
	}
	if len(series.Points) == 0 {
		return Series{}, errors.New("no points")
	}
	return series, scanner.Err()
}

// SeaLevel returns the whole record.
func (c *Client) SeaLevel(ctx context.Context) (Series, feed.Meta, error) {
	return feed.Get(ctx, c.feed, feed.Request{Source: ID, Key: "global-mean-sea-level", Ext: "csv", URL: c.url, TTL: seriesTTL, Timeout: time.Minute}, parse)
}
