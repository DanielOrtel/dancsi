import styled, { css } from 'styled-components';
import Icon from 'components/icon';

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.lightBlue};
  width: 100%;
  flex-shrink: 0;
  z-index: 1;

  ${({ $overlap }) =>
    $overlap &&
    css`
      position: absolute;
      width: 100%;
      height: auto;
      top: 0;
      background-color: transparent;
    `}
`;

export const XIcon = styled(Icon)`
  margin-left: auto;
  cursor: pointer;
  fill: white;

  &:hover {
    fill: ${({ theme }) => theme.lightBlue};
  }
`;
