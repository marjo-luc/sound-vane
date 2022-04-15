import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapBox } from './components/Map';
import { MainMenu } from './components/Menus';
import { Player } from './components/Player';
import { Crosshair } from './components/Crosshair';

function App() {
  return (
    <>
      {/* <MainMenu /> */}
      <MapBox />
      <Player />
      <Crosshair />
    </>
  );
}

export default App;
