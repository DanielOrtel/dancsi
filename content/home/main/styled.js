import styled, { css, keyframes } from 'styled-components';
import { query } from '../../../utils/media';

export const Main = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 800ms ease-in-out;
`;

export const Nap = styled.div`
  padding: 24px;
  display: ${({ $starting }) => ($starting ? 'none' : 'flex')};
  opacity: ${({ $start }) => ($start ? 0 : 1)};
  will-change: opacity;
  transition: opacity 800ms ease-in-out;
`;

export const Felhok = styled.div`
  padding: 24px;
  width: auto;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;
  display: ${({ $starting }) => ($starting ? 'none' : 'flex')};
  visibility: ${({ $loading }) => ($loading ? 'hidden' : 'visible')};
  opacity: ${({ $loading, $start }) => ($loading || $start ? 0 : 1)};
  will-change: opacity;
  transition: opacity 800ms ease-in-out;
`;

export const TextWrapper = styled.div`
  display: ${({ $starting }) => ($starting ? 'none' : 'flex')};
  visibility: ${({ $loading }) => ($loading ? 'hidden' : 'visible')};
  opacity: ${({ $loading, $start }) => ($loading || $start ? 0 : 1)};
  flex-direction: column;
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 18px;
  padding: 0 8px;
  text-align: center;
  color: ${({ theme }) => theme.turquoise};
`;

export const FelhoKicsi = styled.div`
  position: relative;
  left: 36px;

  ${query.phone`
    left: 12px;
  `}
`;

export const FelhoNagy = styled.div`
  position: relative;
  left: -48px;

  ${query.phone`
    left: -18px;
  `}
`;
