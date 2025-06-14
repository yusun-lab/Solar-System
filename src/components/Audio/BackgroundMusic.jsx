import React, { useEffect, useRef, useState } from 'react';
import backgroundMusic from '../../assets/BackgroundMusic/Star Wars.aac';
import './BackgroundMusic.css';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.loop = true; 
      
      const attemptAutoPlay = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Auto-play prevented:', error);
          // If auto-play fails, wait for user interaction to play
          const handleUserInteraction = async () => {
            try {
              await audio.play();
              setIsPlaying(true);
              // Remove event listeners after successful play
              document.removeEventListener('click', handleUserInteraction);
              document.removeEventListener('keydown', handleUserInteraction);
            } catch (err) {
              console.log('Play failed:', err);
            }
          };
          
          document.addEventListener('click', handleUserInteraction);
          document.addEventListener('keydown', handleUserInteraction);
        }
      };

      // Attempt to auto-play when the audio is ready
      audio.addEventListener('canplaythrough', attemptAutoPlay);
      
      if (audio.readyState >= 3) {
        attemptAutoPlay();
      }

      // Listen for playback state changes
      audio.addEventListener('play', () => setIsPlaying(true));
      audio.addEventListener('pause', () => setIsPlaying(false));
      audio.addEventListener('ended', () => setIsPlaying(false));
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(error => {
          console.log('Play failed:', error);
        });
      }
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={backgroundMusic}
        preload="auto"
        muted={false}
      />
      
      <div className="background-music-container">
        <div className="background-music-controls">
          <button
            onClick={togglePlay}
            className="background-music-play-btn"
          >
            {isPlaying ? '⏸️ Pause' : '▶️ Play'}
          </button>
          
          <button
            onClick={toggleMute}
            className="background-music-mute-btn"
          >
            {isMuted ? '🔇' : '🔊'}
          </button>
        </div>
        
        <div className="background-music-volume">
          <span className="background-music-volume-label">Vol:</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="background-music-volume-slider"
          />
          <span className="background-music-volume-percent">
            {Math.round(volume * 100)}%
          </span>
        </div>
      </div>
    </>
  );
};

export default BackgroundMusic;