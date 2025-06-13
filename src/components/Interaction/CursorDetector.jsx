import React, { useEffect, useCallback } from 'react';

const CursorDetector = ({ onPlanetHover, onPlanetLeave }) => {
  // Constants
  const SCENE_LOAD_DELAY = 1500;
  const PLANET_SELECTOR = '[data-planet]';
  
  // Memoized event handler factory to prevent recreation on every render
  const createEventHandlers = useCallback((planet, planetName) => {
    const createHandler = (eventType, action) => (event) => {
      // Prevent event bubbling
      event.stopPropagation();
      
      console.log(`Cursor ${eventType}: ${planetName}`);
      action(planetName);
    };

    return {
      handleIntersected: createHandler('ray intersected', onPlanetHover),
      handleIntersectedCleared: createHandler('ray cleared', () => onPlanetLeave()),
      handleClick: createHandler('clicked', onPlanetHover)
    };
  }, [onPlanetHover, onPlanetLeave]);

  const setupCursorEvents = useCallback(() => {
    const planets = document.querySelectorAll(PLANET_SELECTOR);
    console.log('CursorDetector: Found', planets.length, 'planet entities');
    
    const eventHandlers = new Map();
    
    planets.forEach(planet => {
      const planetName = planet.getAttribute('data-planet');
      console.log('Setting cursor event listeners for:', planetName);
      
      const handlers = createEventHandlers(planet, planetName);
      
      planet.addEventListener('raycaster-intersected', handlers.handleIntersected);
      planet.addEventListener('raycaster-intersected-cleared', handlers.handleIntersectedCleared);
      planet.addEventListener('click', handlers.handleClick);

      eventHandlers.set(planet, handlers);
    });

    return () => {
      eventHandlers.forEach((handlers, planet) => {
        planet.removeEventListener('raycaster-intersected', handlers.handleIntersected);
        planet.removeEventListener('raycaster-intersected-cleared', handlers.handleIntersectedCleared);
        planet.removeEventListener('click', handlers.handleClick);
      });
      eventHandlers.clear();
    };
  }, [createEventHandlers]);

  useEffect(() => {
    const scene = document.querySelector('a-scene');
    let cleanup = null;
    
    const initializeEvents = () => {
      setTimeout(() => {
        cleanup = setupCursorEvents();
      }, SCENE_LOAD_DELAY);
    };
    
    if (scene && scene.hasLoaded) {
      initializeEvents();
    } else {
      scene.addEventListener('loaded', initializeEvents);
    }

    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, [setupCursorEvents]);

  return null;
};

export default CursorDetector; 