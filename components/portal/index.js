import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const Portal = ({ children, element = document.body, allowOverflow = false }) => {
  useEffect(() => {
    if (allowOverflow || !element) return;

    element.style.overflowY = 'hidden';
    element.style.overflowX = 'hidden';

    return () => {
      element.style.overflowY = '';
      element.style.overflowX = '';
    };
  }, [allowOverflow]);

  return createPortal(children, element || document.body);
};

export default Portal;
