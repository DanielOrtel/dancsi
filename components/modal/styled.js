import styled, { css, keyframes } from 'styled-components';
import { query } from 'utils/media';

export const MODAL_SIZES = {
  auto: 'auto',
  fullWidth: 'fullWidth',
  fullHeight: 'fullHeight',
  small: 'small',
  regular: 'regular',
  large: 'large'
  // a little hack just for safari, the new IE... BECAUSE AUTO WIDTH JUST CAN'T FUCKING WORK AS EXPECTED NOW CAN IT
};

export const MODAL_POSITIONS = {
  none: 'none',
  centered: 'centered',
  centeredTop: 'centeredTop',
  left: 'left',
  right: 'right',
  top: 'top',
  bottom: 'bottom'
};

export const keyframeSlideX = (from, to) => keyframes`
  from {
    transform: translateX(${from}vw);
  }
  to {
    transform: translateX(${to}vw);
  }
`;

export const keyframeSlideY = (from, to) => keyframes`
  from {
    transform: translateY(${from}vh);
  }
  to {
    transform: translateY(${to}vh);
  }
`;

export const keyframeScale = (from, to) => keyframes`
  from {
    transform: scale(${from});
  }
  to {
    transform: scale(${to});
  }
`;

export const keyframesBackground = keyframes`
  0% {
    background: transparent;
  }
  
  98% {
    background: transparent;
  }
  
  100% {
    background: ${({ theme }) => theme.turquoise};;
  }
`;

export const keyframeHide = keyframes`
  0% {
    opacity: 1;
  }
  
  98% {
    opacity: 1;
  }
  
  100% {
    opacity: 0;
  }
`;

export const slideInTop = keyframeSlideY(-100, 0);
export const slideInBottom = keyframeSlideY(100, 0);
export const slideInLeft = keyframeSlideX(-100, 0);
export const slideInRight = keyframeSlideX(100, 0);

export const scaleUp = keyframeScale(0, 1);

export const keyframeFadeInModalBG = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
  }

  100% {
    opacity: 1;
    visibility: visible;
  }
`;

const animate = (anim) => css`
  animation: ${anim} 800ms cubic-bezier(0.77, 0.2, 0.05, 1);
  animation-fill-mode: forwards;
`;

const largePhoneStyle = css`
  width: 100%;
  flex-basis: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  border-radius: 0;
  margin: 0;
`;

export const ModalBase = styled.div`
  position: fixed;
  z-index: 500;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  ${({ $canAnimate }) => $canAnimate && animate(keyframeFadeInModalBG)}
`;

export const ModalImage = styled.img`
  position: absolute;
  width: auto;
  height: 100vh;

  ${query.tabletPhone`
    height: 160vh;
  `};
`;

export const ModalPosition = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  transform-origin: 50% 16%;
  overflow: visible;

  ${({ $position, $canAnimate }) => {
    switch ($position) {
      case MODAL_POSITIONS.centered:
        return css`
          justify-content: center;
          align-items: center;

          ${$canAnimate && animate(scaleUp)}
        `;
      case MODAL_POSITIONS.centeredTop:
        return css`
          justify-content: center;
          align-items: flex-start;
          margin-top: 100px;

          ${$canAnimate && animate(scaleUp)};
        `;
      case MODAL_POSITIONS.top:
        return css`
          align-items: flex-start;

          ${$canAnimate && animate(scaleUp)}
        `;
      case MODAL_POSITIONS.right:
        return css`
          justify-content: flex-end;

          ${$canAnimate && animate(slideInRight)}
        `;
      case MODAL_POSITIONS.bottom:
        return css`
          align-items: flex-end;

          ${$canAnimate && animate(slideInBottom)}
        `;
      case MODAL_POSITIONS.left:
        return css`
          justify-content: flex-start;

          ${$canAnimate && animate(slideInLeft)}
        `;
      default:
        return css`
          justify-content: center;
          align-items: center;

          ${$canAnimate && animate(slideInBottom)}
        `;
    }
  }}
`;

export const ModalBody = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${({ $maxWidth }) => $maxWidth || '100%'};
  max-height: ${({ $maxHeight }) => $maxHeight || 'auto'};
  box-sizing: border-box;
  overflow-y: scroll;
  ${animate(keyframeFadeInModalBG)}

  ${({ $size }) => {
    switch ($size) {
      case MODAL_SIZES.auto:
        return css`
          width: auto;
          height: auto;
          min-height: 10vh;
          margin-top: 120px;
          margin-bottom: 120px;

          ${query.tabletPhone`${largePhoneStyle}`}
        `;
      case MODAL_SIZES.small:
        return css`
          max-width: 460px;
          border-radius: 10px;
        `;
      case MODAL_SIZES.regular:
        return css`
          flex-basis: 1020px;
          max-width: 1020px;
          max-height: calc(100vh - 160px);
          height: 100%;
          min-height: 10vh;
          border-radius: 10px;
          margin-top: 80px;
          margin-bottom: 80px;

          ${query.tabletPhone`${largePhoneStyle}`}
        `;
      case MODAL_SIZES.large:
        return css`
          width: 100%;
          height: 100%;
          border-radius: 0;
        `;
      case MODAL_SIZES.fullWidth:
        return css`
          width: 100%;
          height: auto;
        `;
      case MODAL_SIZES.fullHeight:
        return css`
          width: auto;
          height: 100%;
          max-height: 100%;
        `;

      default:
        return css`
          width: auto;
          height: auto;
        `;
    }
  }}
`;
