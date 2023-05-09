import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  text-decoration: none;
  border: none;
  font: inherit;
  white-space: pre-wrap;
  text-align: center;
  flex-grow: 1;
  padding: 0;
  cursor: pointer;
  height: 100%;

  &:hover,
  &:active {
    text-decoration: none;
  }
`;

export const Image = styled.img`
  transition: width 1000ms linear, height 1000ms linear;
  width: ${({ $width }) => $width || '240px'};
  max-width: 100%;
`;

export const Text = styled.div`
  ${({ theme }) => theme.fonts.handelson};
  z-index: 1;
  position: absolute;
  font-size: 40px;
  line-height: 42px;
  font-weight: normal;
  text-transform: uppercase;
  color: ${({ theme }) => theme.turquoise};;
`;
