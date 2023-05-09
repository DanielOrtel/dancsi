import React, { useRef, useEffect, useState } from 'react';
import { Paralax, Wrapper } from './styled';
import { Wedding } from '../wedding';
import { animationElements } from '../config';
import PlayPauseLayer from './play-pause-layer';

export default function AnimationLayer({
  backgroundAssets,
  skyAssets,
  elementsAssets,
  makakoAssets,
  setOverState,
  makakokRef,
  makakokLoopRef
}) {
  const canvas = useRef(null);
  const config = animationElements(backgroundAssets, elementsAssets, skyAssets, makakoAssets);

  const wedding = new Wedding({
    width: 1920,
    height: 1080,
    canvas,
    config,
    setOverState
  });

  return <PlayPauseLayer wedding={wedding} makakokLoopRef={makakokLoopRef} makakokRef={makakokRef} canvasRef={canvas} />;
}
