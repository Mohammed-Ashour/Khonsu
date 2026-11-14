// Package nsidc reads monthly sea ice extent from NSIDC's Sea Ice Index (G02135), which
// passive microwave satellites have measured since 1979.
package nsidc

import (
	"bytes"
	"context"
	"encoding/csv"
	"errors"
	"fmt"
	"io"
	"strconv"
	"strings"
	"time"

	"github.com/Mohammed-Ashour/khonsu/internal/sources/feed"
)

// ID identifies this source.
const ID = "nsidc-sea-ice"

// The index is updated each day, so a month's file can change; a day is soon enough.
const monthlyTTL = 24 * time.Hour

// Info describes and credits this source. NSIDC asks that the data set be cited.
var Info = feed.Info{
	ID:       ID,
	Name:     "NSIDC Sea Ice Index",
	Category: feed.CategoryRecords,
	URL:      "https://nsidc.org/data/g02135/versions/4",
	Credit:   "Sea ice extent: Fetterer et al. (2025), Sea Ice Index, Version 4, NSIDC, doi:10.7265/a98x-0f50",
	Summary:  "Monthly Arctic and Antarctic sea ice extent since 1979, from passive microwave satellites.",
	Nature:   feed.NatureObserved,
	Refresh:  "Daily, only when a lesson shows it",
	Status:   feed.StatusLive,
}

// DefaultBase is the provider's address.
const DefaultBase = "https://noaadata.apps.nsidc.org/NOAA/G02135"

// Client reads this provider through a shared feed client.
type Client struct {
	feed *feed.Client
	base string
}

// New returns a client for the provider's default address.
func New(f *feed.Client) *Client { return NewAt(f, DefaultBase) }

// NewAt returns a client for another address, such as a test server.
func NewAt(f *feed.Client, base string) *Client { return &Client{f, base} }

// Year is one year's extent for the chosen month, in million square kilometres.
type Year struct {
	Year   int     `json:"year"`
	Extent float64 `json:"extent_million_km2"`
}

// parseMonthly reads a monthly file. Missing months are written as -9999 and are skipped.
func parseMonthly(body []byte) ([]Year, error) {
	reader := csv.NewReader(bytes.NewReader(body))
	reader.TrimLeadingSpace = true
	header, err := reader.Read()
	if err != nil {
		return nil, err
	}
	columns := map[string]int{}
	for index, name := range header {
		columns[strings.TrimSpace(name)] = index
	}
	for _, required := range []string{"year", "extent"} {
		if _, ok := columns[required]; !ok {
			return nil, fmt.Errorf("no %s column", required)
		}
	}
	var years []Year
	for {
		row, err := reader.Read()
		if errors.Is(err, io.EOF) {
			break
		}
		if err != nil {
			return nil, err
		}
		year, yearErr := strconv.Atoi(strings.TrimSpace(row[columns["year"]]))
		extent, extentErr := strconv.ParseFloat(strings.TrimSpace(row[columns["extent"]]), 64)
		if yearErr != nil || extentErr != nil {
			return nil, fmt.Errorf("unreadable row %v", row)
		}
		if extent < 0 {
			continue
		}
		years = append(years, Year{year, extent})
	}
	if len(years) == 0 {
		return nil, errors.New("no years")
	}
	return years, nil
}

// Monthly returns one month's extent for every year. North is the Arctic; month is 1 to 12.
func (c *Client) Monthly(ctx context.Context, north bool, month int) ([]Year, feed.Meta, error) {
	if month < 1 || month > 12 {
		return nil, feed.Meta{}, errors.New("month must be 1 to 12")
	}
	hemisphere, prefix := "south", "S"
	if north {
		hemisphere, prefix = "north", "N"
	}
	name := fmt.Sprintf("%s_%02d_extent_v4.0.csv", prefix, month)
	return feed.Get(ctx, c.feed, feed.Request{Source: ID, Key: strings.TrimSuffix(name, ".csv"), Ext: "csv", URL: c.base + "/" + hemisphere + "/monthly/data/" + name, TTL: monthlyTTL}, parseMonthly)
}
