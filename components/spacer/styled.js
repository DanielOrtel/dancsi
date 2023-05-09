import styled from 'styled-components';

export const Spacer = styled.div`
  max-width: 100%;
  margin-right: ${({ x }) => (x ? `${4 * x}px` : 0)};
  margin-bottom: ${({ y }) => (y ? `${4 * y}px` : 0)};
`;
