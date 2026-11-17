package server

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"testing/fstest"
	"time"

	"github.com/Mohammed-Ashour/khonsu/internal/knowledge"
	"github.com/Mohammed-Ashour/khonsu/internal/sources"
	"github.com/Mohammed-Ashour/khonsu/internal/sources/feed"
	"github.com/Mohammed-Ashour/khonsu/internal/sources/gibs"
)

func TestEveryLocalStoryIsExposedAndItsPicturesAreRegistered(t *testing.T) {
	handler := appHandler(t)
	recorder := httptest.NewRecorder()
	handler.ServeHTTP(recorder, httptest.NewRequest(http.MethodGet, "/api/v1/learn", nil))
	var hub struct {
		Stories []knowledge.Lesson `json:"stories"`
		Lessons []knowledge.Lesson `json:"lessons"`
	}
	if err := json.Unmarshal(recorder.Body.Bytes(), &hub); err != nil {
		t.Fatal(err)
	}
	if recorder.Code != http.StatusOK || len(hub.Stories) != 7 || len(hub.Lessons) != 10 {
		t.Fatalf("status=%d stories=%d lessons=%d", recorder.Code, len(hub.Stories), len(hub.Lessons))
	}
	base, err := knowledge.Load()
	if err != nil {
		t.Fatal(err)
	}
	for _, story := range hub.Stories {
		if !story.Story {
			t.Fatalf("%s not marked as story", story.ID)
		}
		player, ok := base.Lesson(story.ID)
		if !ok || len(player.Steps) == 0 {
			t.Fatalf("%s not loadable by player", story.ID)
		}
		for _, step := range story.Steps {
			pictures := append([]knowledge.Picture{}, step.Pictures...)
			if step.Picture != nil {
				pictures = append(pictures, *step.Picture)
			}
			for _, picture := range pictures {
				layer, ok := sources.FindLayer(picture.Layer)
				if !ok || !layer.Story || !layer.Daily || picture.Date == "" {
					t.Fatalf("%s: unregistered dated story picture %+v", story.ID, picture)
				}
			}
		}
	}
}

func TestEmbeddedLegendsWorkWithoutLiveDataAndRejectArbitraryPaths(t *testing.T) {
	handler := appHandler(t)
	for _, method := range []string{http.MethodGet, http.MethodHead} {
		response := httptest.NewRecorder()
		handler.ServeHTTP(response, httptest.NewRequest(method, "/api/v1/imagery-legend?layer=land-temperature", nil))
		if response.Code != http.StatusOK || response.Header().Get("Content-Type") != "image/png" {
			t.Fatalf("%s: %d %+v", method, response.Code, response.Header())
		}
		if method == http.MethodGet && !bytes.HasPrefix(response.Body.Bytes(), []byte{0x89, 'P', 'N', 'G'}) {
			t.Fatal("not a PNG")
		}
		if method == http.MethodHead && response.Body.Len() != 0 {
			t.Fatal("HEAD returned body")
		}
	}
	for _, id := range []string{"true-color", "../../private", "https://example.com/a.png"} {
		response := httptest.NewRecorder()
		handler.ServeHTTP(response, httptest.NewRequest(http.MethodGet, "/api/v1/imagery-legend?layer="+id, nil))
		if response.Code != http.StatusBadRequest {
			t.Fatalf("%s: %d", id, response.Code)
		}
	}
}

func TestImageryHeadersIdentifyActualDailyFallbackDate(t *testing.T) {
	now := time.Date(2026, 11, 14, 12, 0, 0, 0, time.UTC)
	upstream := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		body := []byte{0xff, 0xd8, 0xff}
		if r.URL.Query().Get("TIME") == "2026-11-12" {
			body = append(body, bytes.Repeat([]byte{42}, 100000)...)
		}
		w.Write(body)
	}))
	defer upstream.Close()
	f := feed.NewClient(t.TempDir())
	f.Clock = func() time.Time { return now }
	hub := sources.NewHub(t.TempDir())
	hub.GIBS = gibs.NewAt(f, upstream.URL)
	handler := newAppHandler(fileSource{nil}, hub, fstest.MapFS{"index.html": {Data: []byte("app")}})
	for _, method := range []string{http.MethodGet, http.MethodHead} {
		response := httptest.NewRecorder()
		handler.ServeHTTP(response, httptest.NewRequest(method, "/api/v1/imagery?layer=true-color", nil))
		if response.Code != http.StatusOK || response.Header().Get("X-Khonsu-Picture-Date") != "2026-11-12" {
			t.Fatalf("%s status=%d date=%s body=%s", method, response.Code, response.Header().Get("X-Khonsu-Picture-Date"), strings.TrimSpace(response.Body.String())[:min(100, response.Body.Len())])
		}
		if response.Header().Get("X-Khonsu-Fetched-At") == "" || response.Header().Get("X-Khonsu-Stale") != "false" {
			t.Fatalf("headers=%v", response.Header())
		}
	}
}
