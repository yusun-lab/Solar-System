import React, { useEffect, useState } from 'react';
import './GuideAndAnimationController.css';

const GuideAndAnimationController = () => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault(); // Prevent the page from scrolling
        
        setIsPaused(prevPaused => {
          const newPaused = !prevPaused;
          
          const animations = document.querySelectorAll('[animation]');
          
          animations.forEach(animationEl => {
            const animationComponent = animationEl.components?.animation;
            if (animationComponent) {
              if (newPaused) {
                animationComponent.pause();
              } else {
                animationComponent.play();
              }
            }
          });
          
          return newPaused;
        });
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="Guide-And-Animation-Controller-container">
      <header>
        <h3>Operation Guide</h3>
      </header>

      <section>
        <h4>Camera:</h4>
        <ul>
          <li>WASD to move</li>
          <li>Mouse to look</li>
        </ul>
      </section>

      <section>
        <h4>Interaction:</h4>
        <ul>
          <li>Point at planets</li>
          <li>View planet info</li>
        </ul>
      </section>

      <footer>
        <p>Press SPACE to toggle</p>
        <p>{isPaused ? '⏸️ Paused' : '▶️ Playing'}</p>
      </footer>
    </div>
  );
};

export default GuideAndAnimationController; 