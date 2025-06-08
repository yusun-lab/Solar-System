import React from 'react';

const Camera = () => {
  return (
    <a-entity
      camera
      look-controls
      wasd-controls
      position="0 0 65"
    />
  );
};

export default Camera;
