import React from 'react';
import sunTexture from '../../../assets/images/00. Sun.jpg';

const Sun = () => {
  return (
    <a-sphere
      src={sunTexture}
      position="0 0 0"
      radius="1.5"
      rotation="0 0 0"
      animation="property: rotation; to: 0 360 0; loop: true; dur: 100000; easing: linear"
    />
  );
};

export default Sun;
