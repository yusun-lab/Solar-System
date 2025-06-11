import React, { useState } from 'react';
import Sky from './components/Sky/Sky';
import Sun from './components/Planets/00. Sun/Sun';
import Mercury from './components/Planets/01. Mercury/Mercury';
import Venus from './components/Planets/02. Venus/Venus';
import EarthAndMoon from './components/Planets/03. Earth&Moon/Earth&Moon';
import Mars from './components/Planets/04. Mars/Mars';
import Jupiter from './components/Planets/05. Jupiter/Jupiter';
import Saturn from './components/Planets/06. Saturn/Saturn';
import Uranus from './components/Planets/07. Uranus/Uranus';
import Neptune from './components/Planets/08. Neptune/Neptune';
import AmbientLight from './components/Lights/AmbientLight';
import PointLight from './components/Lights/PointLight';
import Camera from './components/Camera/Camera';
import PlanetInfo from './components/UI/PlanetInfo';
import DistanceDetector from './components/Interaction/DistanceDetector';
import AnimationController from './components/Controls/AnimationController';
import BackgroundMusic from './components/Audio/BackgroundMusic';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handlePlanetDetected = (planetName) => {
    setSelectedPlanet(planetName);
  };

  const handlePlanetLost = () => {
    setSelectedPlanet(null);
  };

  const handleCloseInfo = () => {
    setSelectedPlanet(null);
  };

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
        <Saturn />
        <Uranus /> 
        <Neptune />
        <AmbientLight />
        <PointLight />
        <Camera />
        <DistanceDetector 
          onPlanetDetected={handlePlanetDetected}
          onPlanetLost={handlePlanetLost}
        />
      </a-scene>
      
      <PlanetInfo 
        planetName={selectedPlanet}
        isVisible={!!selectedPlanet}
        onClose={handleCloseInfo}
      />
      
      <AnimationController />
      <BackgroundMusic />
    </div>
  );
}

export default App;
