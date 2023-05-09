import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { query } from 'utils/media';
import Page from 'components/page';

import Container from 'components/container';
import nap from '../../../assets/static/nap.png';
import felhoNagy from '../../../assets/static/felhok-nagy.png';
import felhoKicsi from '../../../assets/static/felhok-kicsi.png';
import Button from 'components/button';
import Spinner from 'components/loader';
import * as Styled from './styled';

export default function Main({ start, setStart, loading }) {
  const [isLoading, setIsLoading] = useState(loading);
  const [isStarting, setIsStarting] = useState(false);

  useEffect(() => {
    const setLoading = setTimeout(() => {
      if (!loading) setIsLoading(false);
      clearTimeout(setLoading);
    }, 500);

    return () => clearTimeout(setLoading);
  }, [loading]);

  useEffect(() => {
    const setStarting = setTimeout(() => {
      if (start) setIsStarting(true);
      clearTimeout(setStarting);
    }, 800);

    return () => clearTimeout(setStarting);
  }, [start]);

  return (
    <Styled.Main>
      <Styled.Container $start={start}>
        <Styled.Nap $starting={isStarting} $start={start}>
          <Spinner loading={isLoading} size={start ? 'large' : 'xxlarge'} />
        </Styled.Nap>
        <Styled.Felhok $starting={isStarting} $start={start} $loading={loading}>
          <Styled.FelhoNagy>
            <Button src={felhoNagy.src} width={start ? '240px' : '360px'} onClick={() => setStart(true)}>
              Indítsd el
            </Button>
          </Styled.FelhoNagy>
          <Styled.FelhoKicsi>
            <Button src={felhoKicsi.src} width={start ? '200px' : '300px'} onClick={() => setStart(true)}>
              Vagy engem
            </Button>
          </Styled.FelhoKicsi>
        </Styled.Felhok>
      </Styled.Container>
    </Styled.Main>
  );
}
