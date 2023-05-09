import React from 'react';
import { PLATFORMS } from 'utils/media';
import { StyledGrid } from './styled';

export default function Grid({ children, reverse, className }) {
  return (
    <StyledGrid reverse={reverse} className={className}>
      {children}
    </StyledGrid>
  );
}

Grid.sizes = PLATFORMS;
