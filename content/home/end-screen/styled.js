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
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
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

export const Content = styled.div`

`;

export const LargeHeader = styled.h1`
  ${({ theme }) => theme.fonts.handelson};
  color: ${({ theme }) => theme.white};
  font-weight: 400;
  font-size: 84px;
  line-height: 110px;
`;

export const SubHeader = styled.h2`
  text-transform: uppercase;
  font-weight: normal;
  font-size: 28px;
`;

export const InviteText = styled.p`
  font-weight: normal;
  font-size: 16px;

  strong {
    color: ${({ theme }) => theme.white};
  }
`;

export const Small = styled.small``;
