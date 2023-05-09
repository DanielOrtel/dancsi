import { useState, useEffect } from 'react';

function preloadImage({ src }) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function onload() {
      resolve(img);
    };
    img.onerror = img.onabort = function onerror() {
      reject(src);
    };
    img.src = src;
  });
}

export function usePreloadImages(...imgs) {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    let isCancelled = false;

    async function effect() {
      if (isCancelled || !imgs.length) {
        return;
      }

      setAssetsLoaded(false);
      const imagesPromiseList = [];
      for (const i of imgs) {
        imagesPromiseList.push(preloadImage(i));
      }

      const prm = await Promise.all(imagesPromiseList);

      if (isCancelled) {
        return;
      }

      setLoadedImages(prm);
      setAssetsLoaded(true);
    }

    effect();

    return () => {
      isCancelled = true;
    };
  }, [JSON.stringify(imgs)]);

  return [assetsLoaded, loadedImages];
}

export function usePreloadImage(img) {
  const [assetLoaded, setAssetLoaded] = useState(false);
  const [loadedImage, setLoadedImage] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    async function effect() {
      if (isCancelled || !img) {
        return;
      }

      setAssetLoaded(false);

      const prm = await preloadImage(img);

      if (isCancelled) {
        return;
      }

      setLoadedImage(prm);
      setAssetLoaded(true);
    }

    effect();

    return () => {
      isCancelled = true;
    };
  }, [img]);

  return [assetLoaded, loadedImage];
}
