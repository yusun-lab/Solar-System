const Camera = () => {
  return (
    <a-entity
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
