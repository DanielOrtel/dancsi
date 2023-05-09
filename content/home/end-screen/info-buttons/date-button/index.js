import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../button';

const StyledDate = styled.div`
  max-width: 220px;

  h4 {
    font-size: 20px;
  }
`;

export default function DateButton({ ...props }) {
  const [hovering, setHovering] = useState(false);

  return (
    <Button title="MIKOR" hovering={hovering} setHovering={setHovering} canHover={false} {...props}>
      <StyledDate>
        <h4>2023. június 17.</h4>
        <h4>13 óra</h4>
      </StyledDate>
    </Button>
  );
}
