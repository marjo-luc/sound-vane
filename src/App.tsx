import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapBox } from './components/Map';
import { MainMenu } from './components/Menus';

function App() {
  return (
    <>
      <MainMenu />
      <MapBox />
    </>
  );
}

export default App;
