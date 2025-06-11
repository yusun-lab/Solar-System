import React, { useEffect, useState } from 'react';

const AnimationController = () => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault(); // 防止页面滚动
        
        setIsPaused(prevPaused => {
          const newPaused = !prevPaused;
          
          // 获取所有动画元素
          const animations = document.querySelectorAll('[animation]');
          
          animations.forEach(animationEl => {
            const animationComponent = animationEl.components?.animation;
            if (animationComponent) {
              if (newPaused) {
                // 暂停动画
                animationComponent.pause();
              } else {
                // 继续动画
                animationComponent.play();
              }
            }
          });
          
          return newPaused;
        });
      }
    };

    // 添加键盘事件监听器
    document.addEventListener('keydown', handleKeyPress);

    // 清理函数
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '10px 15px',
        borderRadius: '5px',
        fontSize: '14px',
        pointerEvents: 'none'
      }}
    >
      {isPaused ? '⏸️ Paused' : '▶️ Playing'}
      <br />
      <small>Press SPACE to toggle</small>
    </div>
  );
};

export default AnimationController; 