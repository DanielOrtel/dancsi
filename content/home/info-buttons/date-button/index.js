import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../button';

const StyledDate = styled.div`
  max-width: 100px;
`;

export default function DateButton({...props}) {
  const [hovering, setHovering] = useState(false);

  return (
    <Button title="MIKOR" hovering={hovering} setHovering={setHovering} canHover={false} {...props}>
      <StyledDate>
        <h4>2022. Július 23.</h4>
      </StyledDate>
    </Button>
  );
}
