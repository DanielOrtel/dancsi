import React from 'react';
import { StyledLoader, StyledSpinner } from './styled';
import nap from 'assets/static/nap.png';

const Spinner = ({ size = 'medium', loading, className }) => {
  return (
    <StyledLoader className={className}>
      <StyledSpinner src={nap.src} $loading={loading} size={size} />
    </StyledLoader>
  );
};

export default Spinner;
