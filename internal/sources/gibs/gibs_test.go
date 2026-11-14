package gibs

import (
	"bytes"
	"context"
	"errors"
	"image"
	"image/color"
	"image/jpeg"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"strings"
	"sync/atomic"
	"testing"
	"time"

	"github.com/Mohammed-Ashour/khonsu/internal/sources/feed"
)

func TestDailyImageFallsBackToEarlierDaysAndRejectsEmptyPictures(t *testing.T) {
	var times []string
	ready := map[string]bool{}
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		day := r.URL.Query().Get("TIME")
		times = append(times, day)
		size := 12_000 // A day that is not ready yet returns a valid but blank worldwide image.
		if ready[day] {
			size = minImageBytes
		}
		w.Write(append([]byte{0xFF, 0xD8, 0xFF}, bytes.Repeat([]byte{1}, size)...))
	}))
	defer server.Close()
	clock := func() time.Time { return time.Date(2026, 11, 9, 1, 0, 0, 0, time.UTC) }

	f := feed.NewClient(t.TempDir())
	f.Clock = clock
	if _, _, err := NewAt(f, server.URL).Image(context.Background(), TrueColor); err == nil {
		t.Fatal("Image accepted a blank picture")
	}
	if strings.Join(times, ",") != "2026-11-08,2026-11-07,2026-11-06" {
		t.Fatalf("days asked = %v, want yesterday and then two earlier days", times)
	}

	times, ready["2026-11-07"] = nil, true
	f = feed.NewClient(t.TempDir())
	f.Clock = clock
	image, _, err := NewAt(f, server.URL).Image(context.Background(), TrueColor)
	if err != nil || len(image) < minImageBytes || strings.Join(times, ",") != "2026-11-08,2026-11-07" {
		t.Fatalf("days asked = %v, err = %v; want the day before yesterday after an empty yesterday", times, err)
	}
}

func TestEmptyPictureDoesNotPauseTheProvider(t *testing.T) {
	var hits atomic.Int32
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		hits.Add(1)
		w.Write(append([]byte{0x89, 'P', 'N', 'G'}, bytes.Repeat([]byte{1}, 10)...))
	}))
	defer server.Close()
	c := NewAt(feed.NewClient(t.TempDir()), server.URL)
	layer := NewLayer("live", "Live", Info, "", "Layer", true, false)
	for range 2 {
		if _, _, err := c.Image(context.Background(), layer); err == nil {
			t.Fatal("Image accepted an empty picture")
		}
	}
	if hits.Load() != 2 {
		t.Fatalf("hits = %d; an empty picture must not pause later requests", hits.Load())
	}
}

func TestDailyImageExpiresAtUTCMidnight(t *testing.T) {
	var hits atomic.Int32
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		hits.Add(1)
		w.Write(append([]byte{0xFF, 0xD8, 0xFF}, bytes.Repeat([]byte{1}, minImageBytes)...))
	}))
	defer server.Close()
	cache := t.TempDir()
	f := feed.NewClient(cache)
	now := time.Date(2026, 11, 8, 23, 50, 0, 0, time.UTC)
	f.Clock = func() time.Time { return now }
	c := NewAt(f, server.URL)
	// The feed client reads the saved file's age from its modification time, so set it to the fake clock.
	path := filepath.Join(cache, "sources", ID, TrueColor.ID+".jpg")
	if _, _, err := c.Image(context.Background(), TrueColor); err != nil {
		t.Fatal(err)
	}
	if err := os.Chtimes(path, now, now); err != nil {
		t.Fatal(err)
	}
	now = time.Date(2026, 11, 9, 0, 10, 0, 0, time.UTC)
	if _, _, err := c.Image(context.Background(), TrueColor); err != nil || hits.Load() != 2 {
		t.Fatalf("hits = %d, err = %v; want the picture saved before midnight to be refetched", hits.Load(), err)
	}
	if err := os.Chtimes(path, now, now); err != nil {
		t.Fatal(err)
	}
	now = time.Date(2026, 11, 9, 0, 20, 0, 0, time.UTC)
	if _, _, err := c.Image(context.Background(), TrueColor); err != nil || hits.Load() != 2 {
		t.Fatalf("hits = %d, err = %v; want the picture saved after midnight to be reused", hits.Load(), err)
	}
}

func TestImageAcceptsFullPictureAndRejectsErrorDocument(t *testing.T) {
	var body []byte
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) { w.Write(body) }))
	defer server.Close()
	layer := NewLayer("partial", "Partial", Info, "", "Layer", true, false)
	c := NewAt(feed.NewClient(t.TempDir()), server.URL)
	body = []byte(`<ServiceException>no such layer</ServiceException>`)
	if _, _, err := c.Image(context.Background(), layer); err == nil {
		t.Fatal("Image accepted an XML error")
	}
	if _, _, err := NewAt(feed.NewClient(t.TempDir()), server.URL).Image(context.Background(), layer); err == nil {
		t.Fatal("Image accepted an XML error from a fresh client")
	}
	body = append([]byte{0x89, 'P', 'N', 'G'}, bytes.Repeat([]byte{1}, minImageBytes)...)
	if image, _, err := NewAt(feed.NewClient(t.TempDir()), server.URL).Image(context.Background(), layer); err != nil || len(image) != len(body) {
		t.Fatalf("len = %d, err = %v", len(image), err)
	}
}

func TestImageOnAsksForThatDayAndKeepsIt(t *testing.T) {
	var queries []string
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		queries = append(queries, r.URL.Query().Get("TIME"))
		w.Write(append([]byte{0xFF, 0xD8, 0xFF}, bytes.Repeat([]byte{1}, minImageBytes)...))
	}))
	defer server.Close()
	c := NewAt(feed.NewClient(t.TempDir()), server.URL)
	day := time.Date(2017, 9, 20, 0, 0, 0, 0, time.UTC)
	for range 2 {
		if _, _, err := c.ImageOn(context.Background(), NightLights, day, World); err != nil {
			t.Fatal(err)
		}
	}
	if strings.Join(queries, ",") != "2017-09-20" {
		t.Fatalf("queries = %v; want one request for that day", queries)
	}
	if _, _, err := c.ImageOn(context.Background(), NewLayer("live", "Live", Info, "", "L", true, false), day, World); err == nil {
		t.Fatal("a live layer accepted a date")
	}
}

func TestStoryPicturesOverAnAreaAreSizedAndCheckedForFlatColour(t *testing.T) {
	if w, h := (Box{17.6, -67.6, 18.8, -65.2}).pixels(); w != 2048 || h != 1024 {
		t.Errorf("Puerto Rico box = %dx%d", w, h)
	}
	if w, h := (Box{60, -10, 90, 0}).pixels(); w != 683 || h != 2048 {
		t.Errorf("tall box = %dx%d", w, h)
	}
	flat := encodeJPEG(t, func(x, y int) color.Color { return color.Gray{0} })
	busy := encodeJPEG(t, func(x, y int) color.Color { return color.Gray{uint8(x * 4)} })
	opaque := NewLayer("s", "S", Info, "", "S", false, true).AsStory()
	if err := validateImage(opaque)(flat); !errors.Is(err, feed.ErrNoData) {
		t.Errorf("flat picture: %v", err)
	}
	if err := validateImage(opaque)(busy); err != nil {
		t.Errorf("real picture rejected: %v", err)
	}
	var query string
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		query = r.URL.RawQuery
		w.Write(busy)
	}))
	defer server.Close()
	c := NewAt(feed.NewClient(t.TempDir()), server.URL)
	if _, _, err := c.ImageOn(context.Background(), opaque, time.Date(2017, 9, 27, 0, 0, 0, 0, time.UTC), Box{17.6, -67.6, 18.8, -65.2}); err != nil {
		t.Fatal(err)
	}
	if !strings.Contains(query, "BBOX=17.6%2C-67.6%2C18.8%2C-65.2") || !strings.Contains(query, "HEIGHT=1024") {
		t.Errorf("query = %s", query)
	}
	if _, _, err := c.ImageOn(context.Background(), opaque, time.Now(), Box{10, 10, 5, 20}); err == nil {
		t.Error("an inside-out box was accepted")
	}
}

func encodeJPEG(t *testing.T, pixel func(x, y int) color.Color) []byte {
	t.Helper()
	img := image.NewGray(image.Rect(0, 0, 64, 32))
	for y := 0; y < 32; y++ {
		for x := 0; x < 64; x++ {
			img.Set(x, y, pixel(x, y))
		}
	}
	var out bytes.Buffer
	if err := jpeg.Encode(&out, img, nil); err != nil {
		t.Fatal(err)
	}
	return out.Bytes()
}
