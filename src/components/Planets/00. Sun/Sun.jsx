import sunModel from '../../../assets/models/00. Sun.glb';

const Sun = () => {
  return (
    <a-sphere
      data-planet="Sun"
      gltf-model={sunModel}
      position="0 0 0"
      scale="0.15 0.15 0.15"
      rotation="0 0 0"
      animation="property: rotation; to: 0 360 0; loop: true; dur: 100000; easing: linear"
    />
  );
};

export default Sun;
