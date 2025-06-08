import React from 'react';

const Camera = () => {
  return (
    <a-entity
      camera
      look-controls
      wasd-controls
      position="0 0 25"
    />
  );
};

export default Camera;
