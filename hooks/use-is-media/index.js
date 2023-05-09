import { useState, useEffect } from 'react';
import { QUERIES } from 'utils/media';

/**
 * Hook to test media queries
 * @param platforms: a single or an Array of media query strings to match
 * @param opts: object of options:
 *    @opt initial value returned when window is undefined, defaults to false
 */
export default function useIsMedia(platforms, opts = { initial: false }) {
  const medias = [];
  const [matches, setMatches] = useState(opts.initial);

  useEffect(() => {
    if (Array.isArray(platforms)) {
      platforms.forEach((platform) => {
        medias.push(window.matchMedia(QUERIES[platform]));
      });
    } else {
      medias.push(window.matchMedia(QUERIES[platforms]));
    }

    const handler = () => setMatches(medias.some((media) => media.matches));
    medias.forEach((media) => media.addListener(handler));

    handler();

    return () => medias.forEach((media) => media.removeListener(handler));
  }, [platforms]);

  return matches;
}
