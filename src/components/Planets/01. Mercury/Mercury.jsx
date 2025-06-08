import React from 'react';
import mercuryModel from '../../../assets/models/01. Mercury.glb';

const Mercury = () => {
  return (
    <a-entity 
      position="0 0 0"
      animation="property: rotation; to: 0 360 0; loop: true; dur: 8797; easing: linear">
      <a-entity
        gltf-model={mercuryModel}
        position="2 0 0"
        scale="0.06 0.06 0.06"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 5865; easing: linear"
      >
      </a-entity>
    </a-entity>
  );
};

export default Mercury;
