import React, { useState } from 'react';
import { MapBox } from './components/Map';
import { Player } from './components/Player';
import { Crosshair } from './components/Crosshair';
import { LngLatLike } from 'mapbox-gl';


export const App = () => {

  const [lnglat, setLngLat] = useState<LngLatLike>({lng: -70.9, lat: 42.35});

  return (
    <>
      <MapBox lnglat={lnglat} setLngLat={setLngLat}/>
      <Player lnglat={lnglat}/>
      <Crosshair />
    </>
  );
}

export default App;
