import React from 'react';
import styled from 'styled-components';
import { query } from 'utils/media';

const StyledErrorSegment = styled.div`
  position: absolute;
  z-index: 5;
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledPermissionAsk = styled.h3`
  color: ${({ theme }) => theme.red};
  margin-bottom: 36px;
`;

const StyledButton = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  padding: 14px 30px;
  color: ${({ theme }) => theme.red};
  fill: ${({ theme }) => theme.red};
  border: 1px solid ${({ theme }) => theme.red};

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.red};
    fill: ${({ theme }) => theme.red};
  }

  &:hover,
  &:active {
    color: ${({ theme }) => theme.white};
    fill: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.red};
  }

  ${query.phone`
    width: 100%;
  `}
`;

export default function VideoError({ interacted, error, onClick }) {
  if (!error || interacted) return null;

  return (
    <StyledErrorSegment>
      {error && interacted && (
        <StyledPermissionAsk>Valami hiba történt. Küldjük mindjárt Lángost, hogy javítsa meg.</StyledPermissionAsk>
      )}
      {!interacted && (
        <StyledPermissionAsk>
          Az oldal megtekintéséhez engedélyezned kell a hang és videó lejátszást!
        </StyledPermissionAsk>
      )}
      <StyledButton onClick={onClick}>{!interacted ? 'Engedélyezem' : 'Próbáld lejátszani'}</StyledButton>
    </StyledErrorSegment>
  );
}
