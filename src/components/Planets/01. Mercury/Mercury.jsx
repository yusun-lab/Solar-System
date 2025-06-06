import React from 'react';
import mercuryModel from './mercury.glb';

const Mercury = () => {
  return (
    <>      
      {/* Mercury planet */}
      <a-entity
        position="15 0 0"
        scale="0.8 0.8 0.8"
        rotation="0 0 0"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 5000; easing: linear"
        gltf-model={mercuryModel}
      />
    </>
  );
};

export default Mercury;
