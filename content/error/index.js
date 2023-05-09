import React from 'react';
import styled from "styled-components";
import ErrorView from './error-view';

export const StyledError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-grow: 1;
`;

export const StyledErrorContainer = styled.div`
  padding: 20px;
  max-width: 600px;
`;

function ErrorContent({ statusCode, error }) {
  return (
    <StyledError>
      <StyledErrorContainer>
        <ErrorView statusCode={statusCode} error={error} />
      </StyledErrorContainer>
    </StyledError>
  );
}

export default ErrorContent;
