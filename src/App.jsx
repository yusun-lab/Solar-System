import React from 'react';
import Sky from './components/Sky/Sky';
import './App.css';

function App() {
  return (
    <div className="app">
      <a-scene>
        <Sky />
        <a-light type="ambient" intensity="0.5"></a-light>
        <a-entity camera look-controls wasd-controls position="0 0 10"></a-entity>
      </a-scene>
    </div>
  );
}

export default App;
