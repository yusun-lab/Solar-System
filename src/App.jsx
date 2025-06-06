import React from 'react';
import Sky from './components/Sky/Sky';
import Sun from './components/Planets/00. Sun/Sun';
import Mercury from './components/Planets/01. Mercury/Mercury';
import AmbientLight from './components/Lights/AmbientLight';
import Camera from './components/Camera/Camera';

function App() {
  return (
    <div className="app">
      <a-scene>
        <Sky />
        <Sun />
        <Mercury />
        <AmbientLight />
        <a-light type="point" intensity="50" position="0 0 0" color="#ffffff"></a-light>
        <Camera />
      </a-scene>
    </div>
  );
}

export default App;
