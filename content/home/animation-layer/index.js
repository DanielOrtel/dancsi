import React, { useRef, useEffect, useState } from 'react';
import { Paralax, Wrapper } from './styled';
import { Wedding } from '../wedding';
import { animationElements } from '../config';
import PlayPauseLayer from './play-pause-layer';
import useIsMedia from "../../../hooks/use-is-media";

export default function AnimationLayer({
  backgroundAssets,
  skyAssets,
  elementsAssets,
  makakoAssets,
  setOverState,
  makakokRef,
  makakokLoopRef,
  isPhone,
}) {
  const canvas = useRef(null);
  const config = animationElements(backgroundAssets, elementsAssets, skyAssets, makakoAssets, isPhone);

  const wedding = new Wedding({
    width: 1920,
    height: 1080,
    canvas,
    config,
    setOverState,
    isPhone
  });

  return <PlayPauseLayer wedding={wedding} makakokLoopRef={makakokLoopRef} makakokRef={makakokRef} canvasRef={canvas} />;
}
