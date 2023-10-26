import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import "./style.css"
import { getAQIValues } from "../../apis/aqi"

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX

export const MapBox = ({ lnglat, setLngLat, setAQI, userHasInteracted }) => {
  const mapContainer = useRef(null)
  const [zoom, setZoom] = useState(4)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lnglat.lng, lnglat.lat],
      zoom: zoom,
    })

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right")

    map.on("dragend", () => {
      setLngLat({
        lat: map.getCenter().lat.toFixed(2),
        lng: map.getCenter().lng.toFixed(2),
      })
      setZoom(map.getZoom())
    })

    map.on("load", () => {
      map.addSource("aq", {
        type: "geojson",
        data: "aq.geojson",
      })

      map.addLayer({
        id: "aq-layer",
        type: "heatmap",
        source: "aq",
        paint: {
          // Increase the heatmap weight based on frequency and property magnitude
          "heatmap-weight": [
            "interpolate",
            ["linear"],
            ["get", "mag"],
            0,
            0,
            6,
            1,
          ],
          // Increase the heatmap color weight weight by zoom level
          // heatmap-intensity is a multiplier on top of heatmap-weight
          "heatmap-intensity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0,
            0.5,
            0.5,
            0.1,
          ],
          // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
          // Begin color ramp at 0-stop with a 0-transparancy color
          // to create a blur-like effect.
          "heatmap-color": [
            "interpolate",
            ["linear"],
            ["heatmap-density"],
            0,
            "rgba(33,102,172,0)",
            0.5,
            "lightgreen",
            0.75,
            "yellow",
            1,
            "red",
          ],
          // Adjust the heatmap radius by zoom level
          "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 0, 2, 9, 20],
          // Transition from heatmap to circle layer by zoom level
          "heatmap-opacity": ["interpolate", ["linear"], ["zoom"], 7, 1, 9, 0],
        },
      })
    })

    // Clean up on unmount
    return () => map.remove()
  }, [])

  useEffect(() => {
    getAQIValues(lnglat).then((result) => {
      userHasInteracted && setAQI(result)
    })
  }, [lnglat, setAQI, userHasInteracted])

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}
