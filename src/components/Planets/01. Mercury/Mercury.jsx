import React from 'react';
import mercuryModel from './mercury.glb';

const Mercury = () => {
  return (
    <a-entity>
      {/* Orbital container */}
      <a-entity
        position="0 0 0"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 88000; easing: linear"
      >
        {/* Mercury with self rotation */}
        <a-entity
          position="15 0 0"
          scale="0.8 0.8 0.8"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 5000; easing: linear"
          gltf-model={mercuryModel}
        />
      </a-entity>
    </a-entity>
  );
};

export default Mercury;
