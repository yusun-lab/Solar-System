import React, { useEffect } from 'react';

const DistanceDetector = ({ onPlanetDetected, onPlanetLost }) => {
  useEffect(() => {
    const checkDistance = () => {
      const camera = document.querySelector('[camera]');
      if (!camera) return;

      const cameraPosition = camera.getAttribute('position');
      const planets = document.querySelectorAll('[data-planet]');
      
      let closestPlanet = null;
      let closestDistance = Infinity;

      planets.forEach(planet => {
        const planetPosition = planet.getAttribute('position');
        if (!planetPosition) return;

        const distance = Math.sqrt(
          Math.pow(cameraPosition.x - planetPosition.x, 2) +
          Math.pow(cameraPosition.y - planetPosition.y, 2) +
          Math.pow(cameraPosition.z - planetPosition.z, 2)
        );

        const threshold = 3;
        
        if (distance < threshold && distance < closestDistance) {
          closestPlanet = planet.getAttribute('data-planet');
          closestDistance = distance;
        }
      });

      if (closestPlanet) {
        onPlanetDetected(closestPlanet);
      } else {
        onPlanetLost();
      }
    };

    const interval = setInterval(checkDistance, 100);

    return () => clearInterval(interval);
  }, [onPlanetDetected, onPlanetLost]);

  return null;
};

export default DistanceDetector; 