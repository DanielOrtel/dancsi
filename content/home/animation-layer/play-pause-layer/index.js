import React, { useRef, useEffect, useState } from 'react';
import { Paralax, Wrapper } from './styled';

export default function PlayPauseLayer({ wedding, makakokRef, makakokLoopRef, canvasRef }) {
  const [paused, setPaused] = useState(false);
  const loopStarted = useRef(false);

  const setPause = (e) => {
    if (e.code === 'Space') {
      setPaused(!paused);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', setPause);

    return () => window.removeEventListener('keydown', setPause);
  }, [paused]);

  const requestRef = useRef(null);
  const previousTimeRef = useRef(0);

  const animate = (currentTime) => {
    if (!previousTimeRef.current) {
      previousTimeRef.current = currentTime;
    }

    if (currentTime === 0 && previousTimeRef.current > 0) {
      currentTime = previousTimeRef.current;
    }

    const deltaTime = currentTime - previousTimeRef.current;

    // callback needs to return a boolean value for ticks
    const ticks = deltaTime > wedding.fps;

    // only increase time delta if callback returned true
    if (ticks) {
      const context = canvasRef.current.getContext('2d', {
        willReadFrequently: true
      });

      previousTimeRef.current = currentTime;
      context.clearRect(0, 0, wedding.width, wedding.height);
      wedding.update({ currentTime, deltaTime });
      wedding.draw(context);
    }

    // always request a new animation frame, even if you don't change anything
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const makakok = makakokRef.current;
    const makakokLoop = makakokLoopRef.current;

    if (paused) {
      if (!makakok.paused && !loopStarted.current) makakok.pause();
      // if (loopStarted.current) makakokLoop.suspend();
      return;
    }

    if (loopStarted.current) {
      // makakokLoop.resume();
    } else {
      makakok.play();
    }

    const startLoop = () => {
      loopStarted.current = true;
      makakokLoop.volume = 0.3;
      makakokLoop.start();
    };

    makakok.addEventListener('ended', startLoop);

    return () => {
      if (makakok) {
        makakok.removeEventListener('ended', startLoop);
      }
    };
  }, [paused]);

  useEffect(() => {
    if (!paused) requestRef.current = requestAnimationFrame(animate);
    if (paused) cancelAnimationFrame(requestRef.current);
    return () => cancelAnimationFrame(requestRef.current);
  }, [paused]);

  return (
    <Wrapper>
      <Paralax ref={canvasRef} width={1920} height={1080} />
    </Wrapper>
  );
}
