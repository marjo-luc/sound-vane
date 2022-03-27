import React, { useEffect } from "react";
import "./style.css";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { config } from '../../config';
import { testBackend } from '../../apis/map';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({accessToken: config.tokens.MAPBOX});

export const MapBox = () => {

    useEffect(() => {
        // Make test call to backend server
        console.log("Sending request to frontend api handler.")
    }, [])

    return (
        <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: '100vh',
                width: '100vw',
                zIndex: '1'
            }}
        >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer>
        </Map>
    )
}