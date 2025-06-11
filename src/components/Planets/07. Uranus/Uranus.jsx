import React from 'react';
import uranusModel from '../../../assets/models/07. Uranus.glb';

const Uranus = () => {
  return (
    <a-entity 
      position="0 0 0"
      rotation="0.77 0 0"
      animation="property: rotation; to: 0 360 0; loop: true; dur: 3068800; easing: linear">
      <a-entity
        position="96 0 0"
        scale="0.0015 0.0015 0.0015"
        rotation="98 0 0"
        data-planet="Uranus">
        <a-entity
          animation="property: rotation; to: 0 -360 0; loop: true; dur: 720; easing: linear"
          gltf-model={uranusModel}
        >
        </a-entity>
      </a-entity>
    </a-entity>
  );
};

export default Uranus;
