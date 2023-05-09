import React from 'react';
import styled, { css } from 'styled-components';
import { query } from 'utils/media';

const StyledRotatedTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  position: relative;
`;

const StyledRotatedText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-transform: uppercase;
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
`;

const StyledLocationButtonContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  align-items: center;
  height: 100%;
`;

const StyledLocationButtonContentContainer = styled.div`
  flex-grow: 1;
  padding: 12px 24px;
`;

const StyledLocationButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin: 0;
  border: none;
  font: inherit;
  text-decoration: none;
  white-space: pre-wrap;
  text-align: start;
  cursor: ${({ $canHover }) => ($canHover ? 'pointer' : 'default')};
  flex-grow: 1;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.red};
  fill: ${(props) => props.theme.red};
  padding: 0;

  & + & {
    border-left: 1px solid ${(props) => props.theme.red};

    ${query.phone`
      border-left: 0;
      border-top: 1px solid ${(props) => props.theme.red};
    `}
  }

  ${StyledRotatedTextContainer} + ${StyledLocationButtonContent} {
    border-left: 1px solid ${(props) => props.theme.red};
  }

  ${({ $hovering, theme }) =>
    $hovering &&
    css`
      background: ${theme.red};
      color: ${theme.white};
      fill: ${theme.white};

      ${StyledRotatedTextContainer} + ${StyledLocationButtonContent} {
        border-left: 1px solid ${theme.white};
      }
    `}
`;

export default function Button({ children, title, href, canHover, hovering, setHovering, ...props }) {
  return (
    <StyledLocationButton
      $hovering={canHover && hovering}
      $canHover={canHover}
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      href={href}
      {...props}
    >
      <StyledRotatedTextContainer $hovering={hovering}>
        <StyledRotatedText $hovering={hovering}>{title}</StyledRotatedText>
      </StyledRotatedTextContainer>
      <StyledLocationButtonContent $hovering={hovering}>
        <StyledLocationButtonContentContainer $hovering={hovering}>{children}</StyledLocationButtonContentContainer>
      </StyledLocationButtonContent>
    </StyledLocationButton>
  );
}
