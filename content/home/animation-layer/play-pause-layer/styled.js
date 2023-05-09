import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
`;

export const Paralax = styled.canvas`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;