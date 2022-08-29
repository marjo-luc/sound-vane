import React, { useState } from 'react';
import { MapBox } from './components/Map';
import { Crosshair } from './components/Crosshair';
import { LngLatLike } from 'mapbox-gl';
import { MainMenu } from './components/Menus';

export const App = () => {

  const [lnglat, setLngLat] = useState<LngLatLike>({lng: -70.9, lat: 42.35});
  const [aqi, setAQI] = useState();

  return (
    <>
      <MapBox lnglat={lnglat} setLngLat={setLngLat} setAQI={setAQI}/>
      {/* <Player lnglat={lnglat} aqi={aqi}/> */}
      <MainMenu lnglat={lnglat} aqi={aqi} />
      <Crosshair />
    </>
  );
}

export default App;
