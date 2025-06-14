import { useEffect, useRef } from 'react';

const Camera = () => {
  const cameraRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (cameraRef.current) {
        const camera = cameraRef.current.object3D;
        const currentY = camera.position.y;

        const newY = currentY + event.deltaY * -0.01; 
        camera.position.y = Math.max(-10, Math.min(10, newY)); 
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <a-entity
      ref={cameraRef}
      camera
      look-controls
      wasd-controls
      position="150 0 5"
    >
      <a-cursor 
        color="#4CAF50"
        fuse="true"
        fuse-timeout="1500"
        geometry="primitive: ring; radiusInner: 0.008; radiusOuter: 0.012"
        position="0 0 -1"
      />
    </a-entity>
  );
};

export default Camera;
