import React, { createContext, useMemo } from 'react';

export const ModalContext = createContext({
  disableClose: false,
  onClose: () => {},
  bgColor: 'lightblue'
});

export const ModalProvider = ({ children, bgColor, disableClose, onClose }) => {
  const value = useMemo(() => ({ disableClose, onClose, bgColor }), [disableClose, onClose, bgColor]);

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export default {
  ModalContext,
  ModalProvider
};
