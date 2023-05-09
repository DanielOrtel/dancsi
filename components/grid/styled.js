import styled, { css } from 'styled-components';
import { query } from 'utils/media';

export const StyledGrid = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-wrap: wrap;
  margin-left: -24px;
  margin-right: -24px;
  width: 100%;

  ${query.phone`
      margin-left: -12px;
      margin-right: -12px;
    `}

  ${query.tablet`
      margin-left: -12px;
      margin-right: -12px;
    `}

  ${query.desktop`
      margin-left: -24px;
      margin-right: -24px;
    `}

  ${query.xdesktop`
      margin-left: -24px;
      margin-right: -24px;
    `}
`;
