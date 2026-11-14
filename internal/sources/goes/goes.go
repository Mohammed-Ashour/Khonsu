// Package goes defines the GOES imagery layers, which are served through NASA GIBS.
package goes

import (
	"github.com/Mohammed-Ashour/khonsu/internal/sources/feed"
	"github.com/Mohammed-Ashour/khonsu/internal/sources/gibs"
)

// ID identifies this source.
const ID = "noaa-goes"

// Info describes and credits this source.
var Info = feed.Info{
	ID:       ID,
	Name:     "NOAA GOES",
	Category: feed.CategoryEarthImagery,
	URL:      "https://www.goes.noaa.gov/",
	Credit:   "GOES imagery from NOAA, via NASA GIBS",
	Summary:  "Near-live views of the Americas and the Pacific.",
	Nature:   feed.NatureObserved,
	Refresh:  "Only when you choose a layer",
	Status:   feed.StatusLive,
}

// The two operational GOES views.
var (
	East = gibs.NewLayer("goes-east", "GOES East (near live)", Info, "GeoColor view of the Americas and Atlantic.", "GOES-East_ABI_GeoColor", true, false)
	West = gibs.NewLayer("goes-west", "GOES West (near live)", Info, "GeoColor view of the Pacific and western Americas.", "GOES-West_ABI_GeoColor", true, false)
)

// GOES East's single-band views, for comparing what visible and infrared light show.
var (
	EastVisible  = gibs.NewLayer("goes-east-visible", "GOES East visible (band 2)", Info, "Red visible light at 0.64 µm, near live. The night side is dark.", "GOES-East_ABI_Band2_Red_Visible_1km", true, false).About("visible")
	EastInfrared = gibs.NewLayer("goes-east-infrared", "GOES East infrared (band 13)", Info, "Heat given off at 10.3 µm, near live. Clouds show by day and by night.", "GOES-East_ABI_Band13_Clean_Infrared", true, false).About("thermal_infrared")
)
