import React from 'react';
import venusModel from '../../../assets/models/venus (1).glb';

const Venus = () => {
  return (
    <a-entity 
      position="0 0 0"
      // 公转周期：水星的2.55倍 (8797 * 2.55 ≈ 22432)
      animation="property: rotation; to: 0 360 0; loop: true; dur: 22432; easing: linear">
      <a-entity
        // 距离约为水星的1.5倍 (2 * 1.5 = 3)
        position="3 0 0"
        // 金星比水星大，但保持适当比例
        scale="0.15 0.15 0.15"
        // 自转周期：水星的4.14倍 (5865 * 4.14 ≈ 24281)，保持逆向
        animation="property: rotation; to: 0 -360 0; loop: true; dur: 24281; easing: linear"
        gltf-model={venusModel}
      >
      </a-entity>
    </a-entity>
  );
};

export default Venus;
