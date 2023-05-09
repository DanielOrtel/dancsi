import { useEffect, useState } from 'react';

export default function useFavicon() {
  const oneOrZero = Math.round(Math.random());

  const [favicon, setFavicon] = useState(!!oneOrZero);

  useEffect(() => {
    const interval = setInterval(() => {
      setFavicon(!favicon);
    }, 2000);
    return () => clearInterval(interval);
  }, [favicon]);

  return favicon ? 'favicon_1.png' : 'favicon_2.png';
}
