import React from 'react';
import styled, { css } from 'styled-components';
import { ICON_SIZES_MAP } from './constants';

// wraps the passed in icon element and calls it
function StyledIconElement({ Component, ...props }) {
  return <Component {...props} />;
}

export const StyledIcon = styled(StyledIconElement)`
  ${({ size }) =>
    size &&
    css`
      width: ${ICON_SIZES_MAP[size]};
      height: ${ICON_SIZES_MAP[size]};
    `}
`;
