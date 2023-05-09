import React, { useState } from 'react';
import styled from 'styled-components';
import DateButton from './date-button';
import LocationButton from './location-button';
import { query } from 'utils/media';

const StyledLocationDate = styled.div`
  display: flex;
  flex-direction: row;

  border: 1px solid ${(props) => props.theme.red};
  color: ${(props) => props.theme.red};

  ${query.phone`
    flex-direction: column;
  `}
`;

const StyledDateButton = styled(DateButton)`
  width: 35%;

  ${query.phone`
    width: 100%;
  `}
`;

const StyledLocationButton = styled(LocationButton)`
  width: 65%;

  ${query.phone`
    width: 100%;
  `}
`;

export default function InfoButtons() {
  return (
    <StyledLocationDate>
      <StyledDateButton />
      <StyledLocationButton />
    </StyledLocationDate>
  );
}
