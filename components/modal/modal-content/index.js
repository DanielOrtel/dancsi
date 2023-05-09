import React, { useContext } from 'react';
import { StyledModalContent } from './styled';
import { ModalContext } from 'components/modal/provider';

const ModalContent = ({ children, bgColor = false, className }) => {
  const { bgColor: contextColor } = useContext(ModalContext);

  return (
    <StyledModalContent className={className} $bgColor={bgColor || contextColor}>
      {children}
    </StyledModalContent>
  );
};

export default ModalContent;
