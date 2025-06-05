import React from 'react';
import Sky from './components/Sky/Sky';
import Sun from './components/Planets/00. Sun/Sun';
import AmbientLight from './components/Lights/AmbientLight';
import Camera from './components/Camera/Camera';

function App() {
  return (
    <div>
      <a-scene>
        <Sky />
        <Sun />
        <AmbientLight />
        <Camera />
      </a-scene>
    </div>
  );
}

export default App;
