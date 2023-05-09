import { useEffect, useState, useCallback } from 'react';
import { useVideoContext, VIDEO_ERRORS } from 'components/video-context/hooks';
import useIntersectionObserver from 'hooks/use-intersection-observer';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function useVideoPlay(videoRef) {
  const { interacted, setInteracted, error, played, setError, setPlayed } = useVideoContext();
  const [loaded, setLoaded] = useState(false);

  useVideoIntersecting(videoRef);

  const play = async (attempt = 0) => {
    if (!videoRef?.current && attempt < 5) {
      await sleep(3000);
      return await play(attempt + 1);
    }

    if (attempt < 5) {
      return videoRef.current.play();
    }

    return false;
  };

  const pause = useCallback(async () => {
    if (!videoRef?.current) return;

    return videoRef.current.pause();
  }, [videoRef?.current]);

  useEffect(() => {
    if (!videoRef?.current || !loaded || error || interacted) return;

    try {
      videoRef.current
        .play()
        .then(() => {
          // Start whatever you need to do only after playback
          // has begun.
        })
        .catch((e) => {
          if (e.name === VIDEO_ERRORS.notAllowedError) {
            setError(VIDEO_ERRORS.notAllowedError);
          } else {
            // Handle a load or playback error
            console.error(e);
            setError(VIDEO_ERRORS.playbackError);
          }
        });
    } catch (e) {
      console.error(e);
      setError(VIDEO_ERRORS.playbackError);
    }
  }, [videoRef?.current, loaded, error]);

  return {
    videoRef,
    error,
    setError,
    played,
    setPlayed,
    setLoaded,
    loaded,
    interacted,
    setInteracted,
    play,
    pause
  };
}

export function useVideoIntersecting(videoRef) {
  const { interacted } = useVideoContext();
  const isIntersecting = useIntersectionObserver(videoRef, 0.9);

  useEffect(() => {
    if (!videoRef?.current || !interacted) return;

    try {
      if (!isIntersecting) videoRef.current.pause();
      if (isIntersecting) videoRef.current.play();
    } catch (e) {
      console.error(e);
    }
  }, [videoRef?.current, isIntersecting]);
}
