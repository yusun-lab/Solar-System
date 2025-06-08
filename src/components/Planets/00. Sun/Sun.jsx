import React from 'react';
import sunModel from '../../../assets/models/00. Sun.glb';
// import sunTexture from '../../../assets/images/00. Sun.jpg';

const Sun = () => {
  return (
    <a-sphere
      gltf-model={sunModel}
      position="0 0 0"
      scale="0.18 0.18 0.18"
      rotation="0 0 0"
      animation="property: rotation; to: 0 360 0; loop: true; dur: 100000; easing: linear"
    />
  );
};

export default Sun;
