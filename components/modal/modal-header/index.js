import React, {  useContext } from 'react';
import { ModalContext } from 'components/modal/provider';
import Icon from 'components/icon';
import IconX from 'assets/icons/icon-x.svg'
import * as Styled from './styled';

const ModalHeader = ({ children, bgColor, overlap, className }) => {
  const { disableClose, bgColor: contextColor, onClose } = useContext(ModalContext);

  function closeButton() {
    if (disableClose) {
      return null;
    }

    return <Styled.XIcon icon={IconX} size={Icon.sizes.regular} onClick={onClose} />;
  }

  return (
    <Styled.ModalHeader $overlap $bgColor={bgColor || contextColor} className={className}>
      {children}
      {closeButton()}
    </Styled.ModalHeader>
  );
};

export default ModalHeader;
