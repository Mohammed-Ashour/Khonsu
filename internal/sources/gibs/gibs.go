// Package gibs fetches worldwide images from NASA's Global Imagery Browse Services,
// which also carries the GOES and Himawari layers defined in their own packages.
package gibs

import (
	"bytes"
	"context"
	"errors"
	"fmt"
	"image"
	_ "image/jpeg"
	_ "image/png"
	"math"
	"net/url"
	"strconv"
	"time"

	"github.com/Mohammed-Ashour/khonsu/internal/sources/feed"
)

// ID identifies this source.
const ID = "nasa-gibs"

const (
	dailyImageTTL = 6 * time.Hour
	liveImageTTL  = 30 * time.Minute
	maxImageBytes = 16 << 20
	minImageBytes = 100_000
	// A past day's picture does not change.
	pastImageTTL = 30 * 24 * time.Hour
	// How many days back a daily layer looks for a picture that is ready.
	dailyFallbackDays = 3
)

// Info describes and credits this source.
var Info = feed.Info{
	ID:       ID,
	Name:     "NASA GIBS",
	Category: feed.CategoryEarthImagery,
	URL:      "https://nasa-gibs.github.io/gibs-api-docs/access-basics/",
	Credit:   "Imagery from NASA GIBS",
	Summary:  "Daily true-color Earth on the globe.",
	Nature:   feed.NatureObserved,
	Refresh:  "Only when you choose a layer",
	Status:   feed.StatusLive,
}

// DefaultBase is the provider's address.
const DefaultBase = "https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi"

// Client reads this provider through a shared feed client.
type Client struct {
	feed *feed.Client
	base string
}

// New returns a client for the provider's default address.
func New(f *feed.Client) *Client { return NewAt(f, DefaultBase) }

// NewAt returns a client for another address, such as a test server.
func NewAt(f *feed.Client, base string) *Client { return &Client{f, base} }

// Layer is a global image that can be draped on the globe.
type Layer struct {
	ID          string  `json:"id"`
	Name        string  `json:"name"`
	SourceID    string  `json:"source_id"`
	Credit      string  `json:"credit"`
	Description string  `json:"description"`
	Legend      *Legend `json:"legend,omitempty"`
	Transparent bool    `json:"transparent"`
	// Topic names the kind of data a layer shows, such as thermal_infrared. Layers
	// with a topic are the "what satellites measure" views, kept apart from the
	// everyday base and cloud pictures.
	Topic string `json:"topic,omitempty"`
	// Story layers are shown only by lessons and stories, for a chosen past date, and
	// are left out of the Layers panel.
	Story bool `json:"story,omitempty"`

	GIBSName string `json:"-"`
	Daily    bool   `json:"-"`
	MinBytes int    `json:"-"`
}

// ContentType is the image format the provider returns for this layer.
func (l Layer) ContentType() string {
	if l.Transparent {
		return "image/png"
	}
	return "image/jpeg"
}

func validateImage(layer Layer) func([]byte) error {
	signature := []byte{0xFF, 0xD8, 0xFF}
	if layer.Transparent {
		signature = []byte{0x89, 'P', 'N', 'G'}
	}
	return func(body []byte) error {
		if !bytes.HasPrefix(body, signature) {
			return errors.New("not the expected image format")
		}
		if layer.Story {
			// Story pictures cover regions of any size, so their byte count says nothing. A
			// transparent overlay may rightly be empty, such as a day with no fires, but an
			// opaque picture of one flat colour means the provider has no data for that day.
			if !layer.Transparent && uniform(body) {
				return fmt.Errorf("the image is empty: %w", feed.ErrNoData)
			}
			return nil
		}
		if len(body) < layer.MinBytes {
			return fmt.Errorf("the image is empty: %w", feed.ErrNoData)
		}
		return nil
	}
}

// uniform reports whether a picture is a single flat colour, allowing for compression noise.
func uniform(body []byte) bool {
	img, _, err := image.Decode(bytes.NewReader(body))
	if err != nil {
		return false
	}
	bounds := img.Bounds()
	r0, g0, b0, _ := img.At(bounds.Min.X, bounds.Min.Y).RGBA()
	const noise = 6 << 8
	near := func(a, b uint32) bool { return a+noise >= b && b+noise >= a }
	for y := bounds.Min.Y; y < bounds.Max.Y; y++ {
		for x := bounds.Min.X; x < bounds.Max.X; x++ {
			r, g, b, _ := img.At(x, y).RGBA()
			if !near(r, r0) || !near(g, g0) || !near(b, b0) {
				return false
			}
		}
	}
	return true
}

// Image returns one layer as a worldwide equirectangular image.
func (c *Client) Image(ctx context.Context, layer Layer) ([]byte, feed.Meta, error) {
	query := url.Values{"SERVICE": {"WMS"}, "REQUEST": {"GetMap"}, "VERSION": {"1.3.0"}, "STYLES": {""}, "CRS": {"EPSG:4326"}, "BBOX": {"-90,-180,90,180"}, "WIDTH": {"2048"}, "HEIGHT": {"1024"}, "LAYERS": {layer.GIBSName}, "FORMAT": {layer.ContentType()}}
	ttl, ext := liveImageTTL, "jpg"
	if layer.Transparent {
		query.Set("TRANSPARENT", "TRUE")
		ext = "png"
	}
	request := feed.Request{Source: ID, Key: layer.ID, Ext: ext, TTL: ttl, MaxBytes: maxImageBytes, Timeout: time.Minute, Validate: validateImage(layer)}
	if !layer.Daily {
		request.URL = c.base + "?" + query.Encode()
		return c.feed.Fetch(ctx, request)
	}
	// A date is part of the identity of a daily image. A saved response for one
	// day must never mask another day's availability or inherit its date.
	now := c.feed.Now().UTC()
	request.TTL = dailyImageTTL
	var lastErr error
	for back := 1; back <= dailyFallbackDays; back++ {
		day := now.AddDate(0, 0, -back).Format("2006-01-02")
		query.Set("TIME", day)
		request.Key = layer.ID + "-" + day
		request.URL = c.base + "?" + query.Encode()
		body, meta, err := c.feed.Fetch(ctx, request)
		if err == nil && !meta.Stale {
			meta.PictureDate = day
			return body, meta, nil
		}
		if err != nil {
			lastErr = err
		}
		if ctx.Err() != nil {
			return nil, feed.Meta{}, ctx.Err()
		}
		// ErrNoData does not pause the provider. Other failures do, so later
		// candidate calls only consult their own cache during the backoff.
	}
	// Preserve a recent last-good, dated picture on outages. Read only: do not
	// issue thirty provider requests. Undated legacy cache files are not used.
	for back := 1; back <= 30; back++ {
		day := now.AddDate(0, 0, -back).Format("2006-01-02")
		request.Key = layer.ID + "-" + day
		if body, meta, ok := c.feed.Cached(request); ok {
			meta.PictureDate = day
			meta.Stale = true
			meta.Warning = "Showing a saved picture because no newer daily image was available."
			return body, meta, nil
		}
	}
	if lastErr == nil {
		lastErr = feed.ErrNoData
	}
	return nil, feed.Meta{}, lastErr
}

// Box is a latitude and longitude rectangle, in degrees.
type Box struct {
	MinLat, MinLon, MaxLat, MaxLon float64
}

// World is the whole Earth.
var World = Box{-90, -180, 90, 180}

// Valid reports whether the box is a real, non-empty rectangle on the globe.
func (b Box) Valid() bool {
	return b.MinLat >= -90 && b.MaxLat <= 90 && b.MinLon >= -180 && b.MaxLon <= 180 && b.MaxLat > b.MinLat && b.MaxLon > b.MinLon
}

// key names the box in a saved file. World keeps the short name used before boxes existed.
func (b Box) key() string {
	if b == World {
		return ""
	}
	return fmt.Sprintf("-%g_%g_%g_%g", b.MinLat, b.MinLon, b.MaxLat, b.MaxLon)
}

// pixels gives an image size with the box's shape, at most 2048 on the longer side, so a
// small region is drawn far more sharply than the same region in a whole-Earth picture.
func (b Box) pixels() (int, int) {
	width, height := b.MaxLon-b.MinLon, b.MaxLat-b.MinLat
	if width >= height {
		return 2048, max(64, int(math.Round(2048*height/width)))
	}
	return max(64, int(math.Round(2048*width/height))), 2048
}

// ImageOn returns a daily or story layer for one past day, over a box. A day that has
// passed does not change, so its picture is kept for a long time.
func (c *Client) ImageOn(ctx context.Context, layer Layer, day time.Time, box Box) ([]byte, feed.Meta, error) {
	if !layer.Daily {
		return nil, feed.Meta{}, errors.New("this layer has no dated pictures")
	}
	if !box.Valid() {
		return nil, feed.Meta{}, errors.New("the area is not a rectangle on the globe")
	}
	width, height := box.pixels()
	query := url.Values{"SERVICE": {"WMS"}, "REQUEST": {"GetMap"}, "VERSION": {"1.3.0"}, "STYLES": {""}, "CRS": {"EPSG:4326"},
		"BBOX":  {fmt.Sprintf("%g,%g,%g,%g", box.MinLat, box.MinLon, box.MaxLat, box.MaxLon)},
		"WIDTH": {strconv.Itoa(width)}, "HEIGHT": {strconv.Itoa(height)}, "LAYERS": {layer.GIBSName}, "FORMAT": {layer.ContentType()}, "TIME": {day.Format("2006-01-02")}}
	ext := "jpg"
	if layer.Transparent {
		query.Set("TRANSPARENT", "TRUE")
		ext = "png"
	}
	body, meta, err := c.feed.Fetch(ctx, feed.Request{Source: ID, Key: layer.ID + "-" + day.Format("2006-01-02") + box.key(), Ext: ext, URL: c.base + "?" + query.Encode(), TTL: pastImageTTL, MaxBytes: maxImageBytes, Timeout: time.Minute, Validate: validateImage(layer)})
	if err == nil {
		meta.PictureDate = day.Format("2006-01-02")
	}
	return body, meta, err
}

// Story marks a layer for lessons and stories only.
func (l Layer) AsStory() Layer {
	l.Story = true
	return l
}

// NewLayer describes a GIBS layer for one source. Transparent layers are partial
// views of the Earth and come as PNG.
func NewLayer(id, name string, info feed.Info, description, gibsName string, transparent, daily bool) Layer {
	return Layer{ID: id, Name: name, SourceID: info.ID, Credit: info.Credit, Description: description, Legend: legendFor(gibsName, id), Transparent: transparent, GIBSName: gibsName, Daily: daily, MinBytes: minImageBytes}
}

// About marks a layer as a view of one kind of data, such as thermal_infrared.
func (l Layer) About(topic string) Layer {
	l.Topic = topic
	return l
}

// TrueColor is a recent daily mosaic. It uses NOAA-20 because Suomi NPP's
// layer has had long outages.
var TrueColor = NewLayer("true-color", "True color (daily)", Info, "A daily mosaic from NOAA-20's VIIRS instrument. The credit gives the product date; polar night and missing observations can leave gaps.", "VIIRS_NOAA20_CorrectedReflectance_TrueColor", false, true)

// The daily "what satellites measure" views. Each falls back to an earlier day
// when the newest one is not ready yet.
var (
	FalseColor      = NewLayer("false-color", "Shortwave infrared false colour (daily)", Info, "NOAA-20 VIIRS shows shortwave infrared as red, near infrared as green and red light as blue: plants look green, fresh burns red, and snow and ice blue.", "VIIRS_NOAA20_CorrectedReflectance_BandsM11-I2-I1", false, true).About("shortwave_infrared")
	NightLights     = NewLayer("night-lights", "Earth at night (daily)", Info, "NOAA-20's VIIRS Day/Night Band: city lights, gas flares, fishing boats and aurora.", "VIIRS_NOAA20_DayNightBand", false, true).About("night_lights")
	LandTemperature = NewLayer("land-temperature", "Land surface temperature (daily)", Info, "Daytime land temperature from Terra's MODIS. Clouds leave gaps, because the heat of the ground can't be seen through them.", "MODIS_Terra_Land_Surface_Temp_Day", false, true).About("thermal_infrared")
	SeaTemperature  = NewLayer("sea-temperature", "Sea surface temperature (daily)", Info, "A daily analysis that blends several satellite instruments with buoy data (GHRSST MUR).", "GHRSST_L4_MUR_Sea_Surface_Temperature", false, true).About("thermal_infrared")
)

// Story layers: pictures of past events, shown by stories for chosen dates and areas.
func story(id, name, description, gibsName string, transparent bool, topic string) Layer {
	return NewLayer(id, name, Info, description, gibsName, transparent, true).About(topic).AsStory()
}

var (
	StoryNightLights  = story("story-night-lights", "Suomi NPP night lights", "VIIRS Day/Night Band, Enhanced Near Constant Contrast.", "VIIRS_SNPP_DayNightBand_ENCC", false, "night_lights")
	StoryFires        = story("story-fires", "NOAA-20 fire detections", "VIIRS active fires at 375 m.", "VIIRS_NOAA20_Thermal_Anomalies_375m_All", true, "thermal_infrared")
	StoryFalseColor   = story("story-false-color", "Terra false colour (bands 7-2-1)", "MODIS shortwave infrared, near infrared and red.", "MODIS_Terra_CorrectedReflectance_Bands721", false, "shortwave_infrared")
	StoryTrueColor    = story("story-true-color", "Terra true colour", "MODIS natural colour.", "MODIS_Terra_CorrectedReflectance_TrueColor", false, "visible")
	StoryTrueColorNPP = story("story-true-color-npp", "Suomi NPP true colour", "VIIRS natural colour, 2012 to 2026.", "VIIRS_SNPP_CorrectedReflectance_TrueColor", false, "visible")
	StoryLandsat      = story("story-landsat", "Landsat true colour (HLS)", "Harmonized Landsat and Sentinel-2, 30 m.", "HLS_L30_Nadir_BRDF_Adjusted_Reflectance", false, "visible")
	StoryRadarWater   = story("story-radar-water", "Sentinel-1 surface water (OPERA)", "Water mapped from Sentinel-1 radar by NASA JPL's OPERA project.", "OPERA_L3_Dynamic_Surface_Water_Extent-Sentinel-1", true, "radar")
	StoryNO2          = story("story-no2", "Aura OMI nitrogen dioxide", "Tropospheric nitrogen dioxide from OMI on Aura, one day.", "OMI_Nitrogen_Dioxide_Tropo_Column", true, "atmospheric_composition")
	StorySeaHeight    = story("story-sea-height", "Sea surface height (MEaSUREs)", "Sea surface height anomalies from radar altimeters.", "JPL_MEaSUREs_L4_Sea_Surface_Height_Anomalies", true, "altimetry")
	StorySeaIce       = story("story-sea-ice", "AMSR2 sea ice concentration", "Sea ice from the AMSR2 microwave radiometer on GCOM-W1.", "AMSRU2_Sea_Ice_Concentration_12km", true, "passive_microwave")
)
