import { css } from 'styled-components';

export const ANIMATION_SMALL_TIMEOUT = 240;
export const ANIMATION_TIMEOUT = 400;
export const ANIMATION_LARGE_TIMEOUT = 620;
export const ANIMATION_TIMING_FUNCTION = 'cubic-bezier(0.77, 0.2, 0.05, 1)';

export const transition = (timeout = ANIMATION_TIMEOUT) => css`
  transition: all ${timeout}ms ${ANIMATION_TIMING_FUNCTION};
`;
