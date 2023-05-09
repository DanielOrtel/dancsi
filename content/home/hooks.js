import { useCallback, useEffect, useState, useRef } from 'react';
import _throttle from 'lodash/throttle';
import { useVideoContext } from 'components/video-context/hooks';

const isSSR = !(typeof window !== 'undefined' && window.document?.createElement);

function useReducedMotionMedia() {
  const mediaQueryList = !isSSR && window.matchMedia('(prefers-reduced-motion: reduce)');
  const [matches, setMatches] = useState(mediaQueryList.matches);
  useEffect(() => {
    const callback = () => setMatches(mediaQueryList.matches);

    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', callback);
    } else {
      window.addEventListener('resize', callback);
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', callback);
      } else {
        window.removeEventListener('resize', callback);
      }
    };
  }, [mediaQueryList]);
  return matches;
}

function getDocumentBottom() {
  return document.body.scrollHeight;
}

function isOnPageBottom(threshold = 0) {
  return window.innerHeight + window.scrollY >= getDocumentBottom() - threshold;
}

function windowYOffset() {
  return parseInt(window.pageYOffset.toFixed(), 10);
}

function scrollTo(offset, options, callback, threshold = 0) {
  const onScroll = _throttle(() => {
    const fixedOffset = parseInt(offset.toFixed(), 10);

    if (windowYOffset() === fixedOffset || isOnPageBottom(threshold)) {
      window.removeEventListener('scroll', onScroll);
      callback();
    }
  }, 60);

  window.addEventListener('scroll', onScroll);
  onScroll();
  window.scrollTo({
    top: offset,
    left: 0,
    ...options
  });
}

export function useScrollToRef() {
  const ref = useRef(null);
  const isReducedMotion = useReducedMotionMedia();
  const { error, played } = useVideoContext();

  const scroll = useCallback(async () => {
    if (!ref?.current) return;

    const elemPosition = ref.current.offsetTop;

    setTimeout(() => {
      scrollTo(elemPosition, !isReducedMotion ? { behavior: 'smooth' } : {}, () => {}, 0);
    }, 50);
  }, [isReducedMotion]);

  useEffect(() => {
    if (played && !error) scroll();
  }, [played]);

  return ref;
}
