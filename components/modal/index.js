import React, { ReactNode, useEffect } from 'react';
import Portal from 'components/portal';
import { ModalProvider } from './provider';
import * as Styled from './styled';
import { MODAL_SIZES, MODAL_POSITIONS } from './styled';

const ESC_KEY = 'Escape';

export const Modal = ({
  children,
  parent,
  maxWidth,
  maxHeight,
  bgColor = 'white',
  size = 'regular',
  position = 'centered',
  disableClose = false,
  disableEscape = false,
  canAnimate = true,
  disableClickOutside = false,
  onClose,
  className
}) => {
  useEffect(() => {
    if (!disableEscape) addKeydownListener();
    else removeKeydownListener();

    return () => removeKeydownListener();
  }, [disableEscape]);

  const addKeydownListener = () => {
    document.addEventListener('keydown', onKeyDown, false);
  };

  const removeKeydownListener = () => {
    document.removeEventListener('keydown', onKeyDown, false);
  };

  const onKeyDown = (event) => {
    if (event.code === ESC_KEY) {
      handleClose();
    }
  };

  const handleClickOutside = () => {
    if (!disableClickOutside) {
      handleClose();
    }
  };

  const handleClose = () => {
    if (!disableClose && onClose) {
      onClose();
    }
  };

  return (
    <Portal element={parent}>
      <Styled.ModalBase className={className} onClick={(e) => e.stopPropagation()} data-qa="modal">
        <Styled.ModalBackground $canAnimate={canAnimate} />
        <Styled.ModalPosition $position={position} $canAnimate={canAnimate} onClick={handleClickOutside}>
          <Styled.ModalBody
            $maxWidth={maxWidth}
            $maxHeight={maxHeight}
            $size={size}
            className={className}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalProvider disableClose={disableClose} onClose={handleClose} bgColor={bgColor}>
              {children}
            </ModalProvider>
          </Styled.ModalBody>
        </Styled.ModalPosition>
      </Styled.ModalBase>
    </Portal>
  );
};

Modal.sizes = MODAL_SIZES;
Modal.positions = MODAL_POSITIONS;

Modal.displayName = 'Modal';

export default Modal;
