import styled from 'styled-components';

export const StyledModalContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  overflow-y: auto;
  background-color: transparent;
  padding: 0 20px;
  ${({ theme }) => theme.fonts.brandon};
  text-align: center;
  color: ${({ theme }) => theme.turquoise};
`;
