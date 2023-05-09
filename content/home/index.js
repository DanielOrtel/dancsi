import React, { useState, useRef, useEffect, useMemo } from 'react';
import Page from 'components/page';
import { Layers, Elements, Makakok, Static } from '../../assets';

import { usePreloadImages } from '../../hooks/use-preload-images';
import AnimationLayer from './animation-layer';
import Main from './main';
import EndScreen from './end-screen';

function fetchAudio(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';
    request.onload = () => resolve(request.response);
    request.onerror = (e) => reject(e);
    request.send();
  });
}

export default function Home() {
  const [start, setStart] = useState(false);
  const [backgroundAssetsLoaded, backgroundAssets] = usePreloadImages(...Layers);
  const [elementsAssetsLoaded, elementsAssets] = usePreloadImages(...Elements);
  const [makakoAssetsLoaded, makakoAssets] = usePreloadImages(...Makakok);
  const [skyAssetsLoaded, skyAssets] = usePreloadImages(...Static);
  const [makakokLoaded, setMakakokLoaded] = useState(false);
  const [makakokLoopLoaded, setMakakokLoopLoaded] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);

  const makakokRef = useRef(null);
  const makakokLoopRef = useRef(null);

  const [over, setOver] = useState(false);

  useEffect(() => {
    makakokRef.current = new Audio('/makakok.wav');
    const makakoLoopContext = new AudioContext();

    const onDecoded = (buffer) => {
      makakokLoopRef.current = makakoLoopContext.createBufferSource();
      makakokLoopRef.current.buffer = buffer;
      makakokLoopRef.current.connect(makakoLoopContext.destination);
      makakokLoopRef.current.loop = true;

      setMakakokLoopLoaded(true);
    };

    fetchAudio('/makakok-loop.wav').then((buffer) => {
      makakoLoopContext.decodeAudioData(buffer, onDecoded, () => setHasErrors(true));
    });

    const makakok = makakokRef.current;

    const setLoadedMakakok = () => setMakakokLoaded(true);

    makakok.addEventListener('canplaythrough', setLoadedMakakok);
  }, []);

  const loading = useMemo(
    () => !makakokLoaded || !backgroundAssetsLoaded || !elementsAssetsLoaded || !makakoAssetsLoaded || !skyAssetsLoaded,
    [makakokLoaded, backgroundAssetsLoaded, elementsAssetsLoaded, makakoAssetsLoaded, skyAssetsLoaded]
  );

  return (
    <Page>
      <Main loading={loading} start={start} setStart={setStart} />
      {start && (
        <AnimationLayer
          backgroundAssets={backgroundAssets}
          skyAssets={skyAssets}
          elementsAssets={elementsAssets}
          makakoAssets={makakoAssets}
          setOverState={setOver}
          makakokRef={makakokRef}
          makakokLoopRef={makakokLoopRef}
        />
      )}
      {over && <EndScreen />}
    </Page>
  );
}
