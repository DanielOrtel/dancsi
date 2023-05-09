import styled, { keyframes } from 'styled-components';

const anim = keyframes`
  from {
    opacity: 0;
    transform: scale(0%);
  }

  to {
    opacity: 1;
    transform: rotate(100%);
  }
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  margin: 0 auto;
  display: flex;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  transition: all 800ms ease-in-out;
`;

export const Felhok = styled.div`
  padding: 24px;
  width: auto;
  position: relative;
  left: -40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 120px;
  display: flex;
  animation: ${anim} linear 800ms;
`;
