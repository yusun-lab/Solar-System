import React from 'react';

const Camera = () => {
  return (
    <a-entity
      camera
      look-controls
      wasd-controls
      position="0 4 18"
    />
  );
};

export default Camera;
