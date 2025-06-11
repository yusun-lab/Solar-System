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
        const planetEntity = planet.getAttribute('position');
        if (!planetEntity) return;

        let actualPlanetPosition = { ...planetEntity };
        
        const calculateNestedPosition = (element) => {
          const children = element.children;
          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const childPosition = child.getAttribute('position');
            if (childPosition) {
              actualPlanetPosition.x += childPosition.x;
              actualPlanetPosition.y += childPosition.y;
              actualPlanetPosition.z += childPosition.z;
            }
            calculateNestedPosition(child);
          }
        };
        
        calculateNestedPosition(planet);

        const distance = Math.sqrt(
          Math.pow(cameraPosition.x - actualPlanetPosition.x, 2) +
          Math.pow(cameraPosition.y - actualPlanetPosition.y, 2) +
          Math.pow(cameraPosition.z - actualPlanetPosition.z, 2)
        );

        const threshold = 5;
        
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