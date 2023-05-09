import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../button';
import Icon from 'components/icon';
import IconArrowRight from 'public/media/arrow-right.svg';
import IconLocation from 'public/media/location.svg';

const StyledGoogleMapLink = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 8px 0;
  text-transform: uppercase;
  border-top: 1px solid ${({ $hovering, theme }) => ($hovering ? theme.white : theme.red)};
`;

const StyledLocation = styled.div`
  max-width: 150px;
  padding: 8px 0 8px 0;
`;

const StyledGoogleMapText = styled.div`
  svg {
    margin-right: 4px;
  }
`;

export default function LocationButton({ ...props }) {
  const [hovering, setHovering] = useState(false);

  return (
    <Button
      title="HOL"
      hovering={hovering}
      setHovering={setHovering}
      {...props}
      href="https://g.page/recenter-house?share"
      target="_blank"
      canHover
    >
      <StyledLocation>
        <h4>Nagyadorján, ReCenter House</h4>
      </StyledLocation>
      <span />
      <StyledGoogleMapLink $hovering={hovering}>
        <StyledGoogleMapText>
          <Icon icon={IconLocation} size={Icon.sizes.button} />
          <span>Google Térkép</span>
        </StyledGoogleMapText>
        <div>
          <Icon icon={IconArrowRight} size={Icon.sizes.xsmall} />
        </div>
      </StyledGoogleMapLink>
    </Button>
  );
}
