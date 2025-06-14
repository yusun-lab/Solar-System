import './PlanetInfo.css';

const PlanetInfo = ({ planetName, isVisible, onClose }) => {
  const planetData = {
    'Sun': {
      name: 'Sun',
      type: 'Star',
      diameter: '1,392,700 km',
      distance: '0 AU',
      orbitalPeriod: '25.05 days (rotation)',
      description: 'The central star of our solar system, providing light and heat to all planets.'
    },
    'Mercury': {
      name: 'Mercury',
      type: 'Terrestrial Planet',
      diameter: '4,879 km',
      distance: '0.387 AU',
      orbitalPeriod: '87.97 days',
      description: 'The smallest planet in our solar system and the closest to the Sun.'
    },
    'Venus': {
      name: 'Venus',
      type: 'Terrestrial Planet',
      diameter: '12,104 km',
      distance: '0.723 AU',
      orbitalPeriod: '224.70 days',
      description: 'Known as Earth\'s sister planet, it\'s the hottest planet in our solar system.'
    },
    'Earth': {
      name: 'Earth',
      type: 'Terrestrial Planet',
      diameter: '12,756 km',
      distance: '1 AU',
      orbitalPeriod: '365.25 days',
      description: 'Our home planet and the only known planet with life in the universe.'
    },
    'Moon': {
      name: 'Moon',
      type: 'Natural Satellite',
      diameter: '3,474 km',
      distance: '0.00257 AU',
      orbitalPeriod: '27.32 days',
      description: 'Earth\'s only natural satellite, the Moon has fascinated humans throughout history.'
    },
    'Mars': {
      name: 'Mars',
      type: 'Terrestrial Planet',
      diameter: '6,792 km',
      distance: '1.524 AU',
      orbitalPeriod: '686.98 days',
      description: 'The Red Planet, scientists believe it may have once harbored life.'
    },
    'Jupiter': {
      name: 'Jupiter',
      type: 'Gas Giant',
      diameter: '139,822 km',
      distance: '5.203 AU',
      orbitalPeriod: '11.86 years',
      description: 'The largest planet in our solar system, famous for its Great Red Spot.'
    },
    'Saturn': {
      name: 'Saturn',
      type: 'Gas Giant',
      diameter: '116,464 km',
      distance: '9.537 AU',
      orbitalPeriod: '29.46 years',
      description: 'Famous for its spectacular ring system.'
    },
    'Uranus': {
      name: 'Uranus',
      type: 'Ice Giant',
      diameter: '50,724 km',
      distance: '19.191 AU',
      orbitalPeriod: '84.02 years',
      description: 'The sideways planet with a 98-degree axial tilt.'
    },
    'Neptune': {
      name: 'Neptune',
      type: 'Ice Giant',
      diameter: '49,244 km',
      distance: '30.069 AU',
      orbitalPeriod: '164.79 years',
      description: 'The farthest planet from the Sun, known for its powerful storms.'
    }
  };

  const planet = planetData[planetName];

  if (!isVisible || !planet) return null;

  return (
    <div className="planet-info-container">
      <div className="planet-info-header">
        <h2 className="planet-info-title">{planet.name}</h2>
        <button 
          onClick={onClose}
          className="planet-info-close-btn"
        >
          ×
        </button>
      </div>
      
      <div className="planet-info-field">
        <strong>Type:</strong> {planet.type}
      </div>
      
      <div className="planet-info-field">
        <strong>Diameter:</strong> {planet.diameter}
      </div>
      
      <div className="planet-info-field">
        <strong>Distance from Sun:</strong> {planet.distance}
      </div>
      
      <div className="planet-info-field">
        <strong>Orbital Period:</strong> {planet.orbitalPeriod}
      </div>
      
      <div className="planet-info-description">
        {planet.description}
      </div>
    </div>
  );
};

export default PlanetInfo; 