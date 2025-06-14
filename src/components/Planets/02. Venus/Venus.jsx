import venusModel from '../../../assets/models/02. Venus.glb';

const Venus = () => {
  return (
    <a-entity 
      position="0 0 0"
      rotation="0.059 0 0"
      animation="property: rotation; to: 0 360 0; loop: true; dur: 22432; easing: linear">
      <a-entity
        data-planet="Venus"
        gltf-model={venusModel}
        position="3 0 0"
        scale="0.15 0.15 0.15"
        animation="property: rotation; to: 0 -360 0; loop: true; dur: 24281; easing: linear"
      >
      </a-entity>
    </a-entity>
  );
};

export default Venus;
