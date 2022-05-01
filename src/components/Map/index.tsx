import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import "./style.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;

export const MapBox = ({lnglat, setLngLat}) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: lnglat,
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('dragend', () => {
            // TODO: looks like this event fires off way more often than expected
            setLngLat({lat: map.current.getCenter().lat.toFixed(2), lng: map.current.getCenter().lng.toFixed(2)})
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}
