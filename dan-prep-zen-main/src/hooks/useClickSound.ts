import { useCallback, useRef } from 'react';

// Create a simple click sound using Web Audio API
const createClickSound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.05);
  
  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.1);
};

export const playClickSound = () => {
  try {
    createClickSound();
  } catch (error) {
    // Silently fail if audio is not supported
    console.log('Audio not supported');
  }
};

export const useClickSound = () => {
  const play = useCallback(() => {
    playClickSound();
  }, []);

  return { play };
};
