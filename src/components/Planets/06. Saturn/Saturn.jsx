import React from 'react';
import saturnModel from '../../../assets/models/06. Saturn.glb';

const Saturn = () => {
  return (
    <a-entity 
      data-planet="Saturn"
      position="0 0 0"
      animation="property: rotation; to: 0 360 0; loop: true; dur: 1075900; easing: linear">
      <a-entity
        rotation="2.49 0 0"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 1075900; easing: linear">
        <a-entity
          position="48 0 0"
          scale="0.002 0.002 0.002"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 450; easing: linear"
          gltf-model={saturnModel}
        >
        </a-entity>
      </a-entity>
    </a-entity>
  );
};

export default Saturn;
