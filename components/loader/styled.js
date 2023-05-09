import styled, { css, keyframes } from 'styled-components';

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
`;

export const SPINNER_SIZES_MAP = {
  xxlarge: '300px',
  xlarge: '192px',
  large: '124px',
  medium: '48px',
  regular: '32px',
  small: '24px',
  xsmall: '16px',
  xxsmall: '12px',
  button: '1em'
};

export const StyledSpinner = styled.img`
  transition: width 1000ms linear, height 1000ms linear;
  
  ${({ $loading }) =>
    $loading &&
    css`
      animation: ${spinner} 820ms ease-in-out infinite;
    `};

  ${({ size }) =>
    size &&
    css`
      width: ${SPINNER_SIZES_MAP[size]};
      height: ${SPINNER_SIZES_MAP[size]};
    `};
`;
