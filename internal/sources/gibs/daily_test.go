package gibs

import (
	"bytes"
	"context"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"reflect"
	"testing"
	"time"

	"github.com/Mohammed-Ashour/khonsu/internal/sources/feed"
)

func TestDailyFallbackDoesNotLetSavedImageMaskAvailableDay(t *testing.T) {
	now := time.Date(2026, 11, 14, 12, 0, 0, 0, time.UTC)
	cache := t.TempDir()
	f := feed.NewClient(cache)
	f.Clock = func() time.Time { return now }
	good := append([]byte{0xff, 0xd8, 0xff}, bytes.Repeat([]byte{42}, minImageBytes)...)
	dir := filepath.Join(cache, "sources", ID)
	if err := os.MkdirAll(dir, 0755); err != nil {
		t.Fatal(err)
	}
	// An expired exact-date cache can be returned with nil error by feed.Fetch.
	for _, day := range []string{"2026-11-13", "2026-11-11"} {
		path := filepath.Join(dir, TrueColor.ID+"-"+day+".jpg")
		if err := os.WriteFile(path, good, 0644); err != nil {
			t.Fatal(err)
		}
		old := now.Add(-48 * time.Hour)
		if err := os.Chtimes(path, old, old); err != nil {
			t.Fatal(err)
		}
	}
	var requested []string
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		day := r.URL.Query().Get("TIME")
		requested = append(requested, day)
		if day == "2026-11-12" {
			w.Write(good)
			return
		}
		w.Write([]byte{0xff, 0xd8, 0xff, 0})
	}))
	defer server.Close()
	body, meta, err := NewAt(f, server.URL).Image(context.Background(), TrueColor)
	if err != nil || !bytes.Equal(body, good) || meta.Stale || meta.PictureDate != "2026-11-12" {
		t.Fatalf("meta=%+v err=%v", meta, err)
	}
	if !reflect.DeepEqual(requested, []string{"2026-11-13", "2026-11-12"}) {
		t.Fatalf("requested=%v", requested)
	}
	// A second client reads the same date's cached bytes without relabelling them.
	again := feed.NewClient(cache)
	again.Clock = f.Clock
	_, meta, err = NewAt(again, server.URL).Image(context.Background(), TrueColor)
	if err != nil || meta.PictureDate != "2026-11-12" || meta.Stale {
		t.Fatalf("warm meta=%+v err=%v", meta, err)
	}
}

func TestDailyOutageReturnsDatedSavedCopyWithoutFurtherProviderRequests(t *testing.T) {
	now := time.Date(2026, 11, 14, 12, 0, 0, 0, time.UTC)
	cache := t.TempDir()
	f := feed.NewClient(cache)
	f.Clock = func() time.Time { return now }
	dir := filepath.Join(cache, "sources", ID)
	if err := os.MkdirAll(dir, 0755); err != nil {
		t.Fatal(err)
	}
	body := append([]byte{0xff, 0xd8, 0xff}, bytes.Repeat([]byte{42}, minImageBytes)...)
	if err := os.WriteFile(filepath.Join(dir, TrueColor.ID+"-2026-11-08.jpg"), body, 0644); err != nil {
		t.Fatal(err)
	}
	hits := 0
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		hits++
		http.Error(w, "offline", http.StatusServiceUnavailable)
	}))
	defer server.Close()
	got, meta, err := NewAt(f, server.URL).Image(context.Background(), TrueColor)
	if err != nil || !bytes.Equal(got, body) || !meta.Stale || meta.PictureDate != "2026-11-08" || meta.Warning == "" || hits != 1 {
		t.Fatalf("meta=%+v err=%v hits=%d", meta, err, hits)
	}
}
