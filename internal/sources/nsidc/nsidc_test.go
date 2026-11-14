package nsidc

import (
	"context"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/Mohammed-Ashour/khonsu/internal/sources/feed"
)

// The layout of the provider's monthly files, with padded columns and a missing month.
const monthly = `year, mo,source_dataset, region, extent,   area
1979,  9,    NSIDC-0051,      N,   7.05,   4.58
1987,  9,    NSIDC-0051,      N,  -9999,  -9999
2012,  9,    NSIDC-0081,      N,   3.57,   2.41
`

func TestMonthlyReadsTheFileForThatHemisphereAndMonth(t *testing.T) {
	var path string
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		path = r.URL.Path
		w.Write([]byte(monthly))
	}))
	defer server.Close()
	years, _, err := NewAt(feed.NewClient(t.TempDir()), server.URL).Monthly(context.Background(), true, 9)
	if err != nil {
		t.Fatal(err)
	}
	if path != "/north/monthly/data/N_09_extent_v4.0.csv" {
		t.Errorf("path = %s", path)
	}
	if len(years) != 2 || years[1] != (Year{2012, 3.57}) {
		t.Fatalf("years = %+v; want 1979 and 2012, with the missing month skipped", years)
	}
	if _, _, err := NewAt(feed.NewClient(t.TempDir()), server.URL).Monthly(context.Background(), false, 13); err == nil {
		t.Fatal("month 13 was accepted")
	}
}

func TestParseRejectsOtherFiles(t *testing.T) {
	for _, body := range []string{"", "<html>not found</html>", "year,mo\n1979,9\n", "year, mo, extent\nx, 9, 1\n"} {
		if _, err := parseMonthly([]byte(body)); err == nil {
			t.Errorf("accepted %q", body)
		}
	}
}
