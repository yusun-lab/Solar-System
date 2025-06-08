import React from 'react';

const Camera = () => {
  return (
    <a-entity
      camera
      look-controls
      wasd-controls
      position="0 4 45"
    />
  );
};

export default Camera;
