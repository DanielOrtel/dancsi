import styled, { css } from 'styled-components';
import Icon from 'components/icon';

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  justify-content: space-between;
  background-color: transparent;
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
  border-radius: 50%;
  background: ${({ theme }) => theme.turquoise};
  padding: 8px;

  &:hover {
    fill: ${({ theme }) => theme.lightBlue};
  }
`;
