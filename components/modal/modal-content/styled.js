import styled from 'styled-components';

export const StyledModalContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.lightBlue};
  padding: 20px;
`;
