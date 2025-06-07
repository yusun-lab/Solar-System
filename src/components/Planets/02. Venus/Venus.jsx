import React from 'react';
import venusModel from '../../../assets/models/venus (1).glb';

const Venus = () => {
  return (
    <a-entity 
      position="0 0 0"
      // 公转周期约为水星的2.5倍 (88000 * 2.5 ≈ 220000)
      animation="property: rotation; to: 0 360 0; loop: true; dur: 220000; easing: linear">
      <a-entity
        // 距离约为水星的1.5倍 (2 * 1.5 = 3)
        position="3 0 0"
        // 金星比水星大，但保持适当比例
        scale="0.15 0.15 0.15"
        // 金星逆向自转，使用负值表示顺时针旋转
        animation="property: rotation; to: 0 -360 0; loop: true; dur: 60000; easing: linear"
        gltf-model={venusModel}
      >
      </a-entity>
    </a-entity>
  );
};

export default Venus;
