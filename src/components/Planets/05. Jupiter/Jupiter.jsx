import React from 'react';
import jupiterModel from '../../../assets/models/05. Jupiter.glb';

const Jupiter = () => {
  return (
    <a-entity 
      position="0 0 0"
      // 公转周期：11.86年（约4333天）
      animation="property: rotation; to: 0 360 0; loop: true; dur: 433300; easing: linear">
      {/* 轨道倾角容器：木星轨道倾角为1.3度 */}
      <a-entity
        rotation="1.3 0 0"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 433300; easing: linear">
        <a-entity
          position="26 0 0"
          scale="0.01 0.01 0.01"
          // 自转周期：9.93小时（约0.41天）
          animation="property: rotation; to: 0 360 0; loop: true; dur: 410; easing: linear"
          gltf-model={jupiterModel}
        >
        </a-entity>
      </a-entity>
    </a-entity>
  );
};

export default Jupiter;
