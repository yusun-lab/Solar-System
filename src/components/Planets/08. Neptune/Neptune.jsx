import React from 'react';
import neptuneModel from '../../../assets/models/08. Neptune.glb';

const Neptune = () => {
  return (
    <a-entity 
      position="0 0 0"
      rotation="1.77 0 0"
      animation="property: rotation; to: 0 360 0; loop: true; dur: 6019000; easing: linear">
      <a-entity
        position="150 0 0"
        scale="0.06 0.06 0.06"
        rotation="28.32 0 0"
        data-planet="Neptune">
        <a-entity
          animation="property: rotation; to: 0 360 0; loop: true; dur: 670; easing: linear"
          gltf-model={neptuneModel}
        >
        </a-entity>
      </a-entity>
    </a-entity>
  );
};

export default Neptune;
