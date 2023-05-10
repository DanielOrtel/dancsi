import React, { useState, useEffect } from 'react';
import felhoNagy from '../../../assets/static/felhok-nagy.png';
import felhoKicsi from '../../../assets/static/felhok-kicsi.png';
import Button from 'components/button';
import Spinner from 'components/loader';
import * as Styled from './styled';
import useIsMedia from '../../../hooks/use-is-media';
import Spacer from '../../../components/spacer';

export default function Main({ start, setStart, loading }) {
  const [isLoading, setIsLoading] = useState(loading);
  const [isStarting, setIsStarting] = useState(false);
  const isPhone = useIsMedia('phone');

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
              Indítsd
            </Button>
          </Styled.FelhoNagy>
          <Styled.FelhoKicsi>
            <Button src={felhoKicsi.src} width={start ? '200px' : '300px'} onClick={() => setStart(true)}>
              El
            </Button>
          </Styled.FelhoKicsi>
        </Styled.Felhok>
        <Spacer y={6} />
        <Styled.TextWrapper $starting={isStarting} $start={start} $loading={loading}>
          <Styled.Text>Ezzel a meghívóval kísérő zene is jár. Ha nem otthonról nézed, ajánlott a fülhallgató.</Styled.Text>
          <Spacer y={4} />
          {isPhone && (
              <Styled.Text>Jobb egy rendes képernyöröl megnézni. Mobilon nem az igazi.</Styled.Text>
          )}
          <Spacer y={4} />
        </Styled.TextWrapper>
      </Styled.Container>
    </Styled.Main>
  );
}
