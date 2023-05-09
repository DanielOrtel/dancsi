import React from 'react';
import styled from 'styled-components';
import Pecset from 'public/media/pecset.svg';
import { query } from 'utils/media';

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
`;

const StyledPecset = styled(Pecset)`
  width: 100%;
  max-width: 200px;
  height: auto;

  animation: spin 2s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  ${query.phone`
    margin-left: -12px;
  `}
`;

export default function Loader({ loading }) {
  if (!loading) return null;

  return (
    <StyledLoader>
      <StyledPecset />
    </StyledLoader>
  );
}
