import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import "./style.css";
import { getAQIValues } from '../../apis/aqi';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;

export const MapBox = ({ lnglat, setLngLat, setAQI }) => {
    const mapContainer = useRef(null);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lnglat.lng, lnglat.lat],
            zoom: zoom
        });

        // Add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        map.on('dragend', () => {
            setLngLat({ lat: map.getCenter().lat.toFixed(2), lng: map.getCenter().lng.toFixed(2) })
            setZoom(map.getZoom());
        });

        // Clean up on unmount
        return () => map.remove();
    }, []);


    useEffect(() => {
        getAQIValues(lnglat).then((result) => {
            setAQI(result)
        })
    }, [lnglat, setAQI]);

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}
