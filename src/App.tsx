import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapBox } from './components/Map';
import { Synth } from './components/Synth';

function App() {
  return (
    <>
      <MapBox/>
      <Synth/>
    </>
  );
}

export default App;
