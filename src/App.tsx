import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapBox } from './components/Map';
import { Synth } from './components/Synth';
// import Select from 'react-select';

function App() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <>
      <MapBox/>
      <Synth/>
      {/* <Select options={options} /> */}
    </>
  );
}

export default App;
