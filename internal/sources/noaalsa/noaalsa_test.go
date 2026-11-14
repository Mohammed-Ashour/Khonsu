package noaalsa

import (
	"context"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/Mohammed-Ashour/khonsu/internal/sources/feed"
)

// The layout of the provider's file: comments, then one column per satellite.
const sample = `#title = mean sea level anomaly global ocean (Annual signals removed)
#trend = 3.11 mm/year (no glacial isostatic adjustment correction)
year,TOPEX/Poseidon,Jason-1,Jason-2,Jason-3,Sentinel-6MF
1992.96140,-19.33000,,,,
2002.10000,,1.50000,,,
2025.12680,,,,,83.60000
`

func TestSeaLevelReadsEachSatellitesColumnAndTheTrend(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) { w.Write([]byte(sample)) }))
	defer server.Close()
	series, _, err := NewAt(feed.NewClient(t.TempDir()), server.URL).SeaLevel(context.Background())
	if err != nil {
		t.Fatal(err)
	}
	if series.Trend != "3.11 mm/year (no glacial isostatic adjustment correction)" {
		t.Errorf("trend = %q", series.Trend)
	}
	want := []Point{{1992.9614, -19.33, "TOPEX/Poseidon"}, {2002.1, 1.5, "Jason-1"}, {2025.1268, 83.6, "Sentinel-6MF"}}
	if len(series.Points) != len(want) {
		t.Fatalf("points = %+v", series.Points)
	}
	for i := range want {
		if series.Points[i] != want[i] {
			t.Errorf("point %d = %+v, want %+v", i, series.Points[i], want[i])
		}
	}
}

func TestParseRejectsOtherFiles(t *testing.T) {
	for _, body := range []string{"", "<html></html>", "#only comments\n", "time,a\n1,2\n", "year,a\nx,1\n"} {
		if _, err := parse([]byte(body)); err == nil {
			t.Errorf("accepted %q", body)
		}
	}
}
