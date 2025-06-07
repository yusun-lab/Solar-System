import React from 'react';
import mercuryModel from './mercury.glb';

const Mercury = () => {
  return (
    <a-entity 
      position="0 0 0"
      animation="property: rotation; to: 0 360 0; loop: true; dur: 88000; easing: linear">
      <a-entity
        position="2 0 0"
        scale="0.1 0.1 0.1"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 5000; easing: linear"
        gltf-model={mercuryModel}
      >
      </a-entity>
    </a-entity>
  );
};

export default Mercury;
