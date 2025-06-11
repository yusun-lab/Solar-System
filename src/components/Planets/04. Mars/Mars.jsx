import React from 'react';
import marsModel from '../../../assets/models/04. Mars.glb';

const Mars = () => {
  return (
    <a-entity 
      position="0 0 0"
      rotation="1.85 0 0"
      animation="property: rotation; to: 0 360 0; loop: true; dur: 68700; easing: linear">
      <a-entity
        position="7.6 0 0"
        scale="0.09 0.09 0.09"
        data-planet="Mars"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 1030; easing: linear"
        gltf-model={marsModel}
      >
      </a-entity>
    </a-entity>
  );
};

export default Mars;
