import React from 'react';
import Sky from './components/Sky/Sky';
import Sun from './components/Planets/00. Sun/Sun';
import Mercury from './components/Planets/01. Mercury/Mercury';
import Venus from './components/Planets/02. Venus/Venus';
import EarthAndMoon from './components/Planets/03. Earth&Moon/Earth&Moon';
import Mars from './components/Planets/04. Mars/Mars';
import Jupiter from './components/Planets/05. Jupiter/Jupiter';
import AmbientLight from './components/Lights/AmbientLight';
import PointLight from './components/Lights/PointLight';
import Camera from './components/Camera/Camera';

function App() {
  return (
    <div className="app">
      <a-scene>
        <Sky />
        <Sun />
        <Mercury />
        <Venus />
        <EarthAndMoon />
        <Mars />
        <Jupiter />
        <AmbientLight />
        <PointLight />
        <Camera />
      </a-scene>
    </div>
  );
}

export default App;
