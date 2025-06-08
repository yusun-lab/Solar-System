import React from 'react';
import neptuneModel from '../../../assets/models/08. Neptune.glb';

const Neptune = () => {
  return (
    <a-entity 
      position="0 0 0"
      // 公转周期：164.79年（约60190天）
      animation="property: rotation; to: 0 360 0; loop: true; dur: 6019000; easing: linear">
      {/* 轨道倾角容器：海王星轨道倾角为1.77度 */}
      <a-entity
        rotation="1.77 0 0"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 6019000; easing: linear">
        <a-entity
          position="150 0 0"
          scale="0.06 0.06 0.06"
          // 自转轴倾斜容器：海王星自转轴倾斜28.32度
          rotation="28.32 0 0">
          <a-entity
            // 自转周期：16.11小时（约0.67天）
            animation="property: rotation; to: 0 360 0; loop: true; dur: 670; easing: linear"
            gltf-model={neptuneModel}
          >
          </a-entity>
        </a-entity>
      </a-entity>
    </a-entity>
  );
};

export default Neptune;
