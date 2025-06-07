import React from 'react';
import mercuryModel from '../../../assets/models/01. Mercury.glb';

const Mercury = () => {
  return (
    <a-entity 
      position="0 0 0"
      animation="property: rotation; to: 0 360 0; loop: true; dur: 88000; easing: linear">
      <a-entity
        gltf-model={mercuryModel}
        position="2 0 0"
        scale="0.1 0.1 0.1"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 5000; easing: linear"
      >
      </a-entity>
    </a-entity>
  );
};

export default Mercury;
