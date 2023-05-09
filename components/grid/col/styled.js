import styled, { css } from 'styled-components';
import { query } from 'utils/media';

export const GRID_COLUMNS = 12;

export const StyledCol = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;

  ${(props) =>
    props.width &&
    css`
      flex-basis: calc(100% * ${props.width / GRID_COLUMNS});
      max-width: calc(100% * ${props.width / GRID_COLUMNS});
    `}

  ${(props) =>
    props.phone &&
    query.phone`
      flex-basis: calc(100% * ${props.phone / GRID_COLUMNS});
      max-width: calc(100% * ${props.phone / GRID_COLUMNS});
      padding: 0 12px;
    `}

  ${(props) =>
    props.tablet &&
    query.tablet`
      flex-basis: calc(100% * ${props.tablet / GRID_COLUMNS});
      max-width: calc(100% * ${props.tablet / GRID_COLUMNS});
      padding: 0 12px;
    `}

  ${(props) =>
    props.desktop &&
    query.desktop`
      flex-basis: calc(100% * ${props.desktop / GRID_COLUMNS});
      max-width: calc(100% * ${props.desktop / GRID_COLUMNS});
      padding: 0 24px;
    `}

  ${(props) =>
    props.xdesktop &&
    query.xdesktop`
      flex-basis: calc(100% * ${props.xdesktop / GRID_COLUMNS});
      max-width: calc(100% * ${props.xdesktop / GRID_COLUMNS});
      padding: 0 24px;
    `}
`;
