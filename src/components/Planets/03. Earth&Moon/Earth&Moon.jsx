import React from 'react';
import earthModel from '../../../assets/models/03. Earth.glb';

const EarthAndMoon = () => {
  return (
    <a-entity 
      position="0 0 0"
      rotation="0.028 0 0"
      animation="property: rotation; to: 0 360 0; loop: true; dur: 36508; easing: linear">
      <a-entity
        position="5.16 0 0"
        scale="0.00075 0.00075 0.00075"
        data-planet="Earth"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 3000; easing: linear"
        gltf-model={earthModel}
      >
      </a-entity>
    </a-entity>
  );
};

export default EarthAndMoon;
