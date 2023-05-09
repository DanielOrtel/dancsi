import React from 'react';
import { StyledCol } from './styled';

export default function Col({ children, width, phone, tablet, desktop, xdesktop, className }) {
  return (
    <StyledCol width={width} phone={phone} tablet={tablet} desktop={desktop} xdesktop={xdesktop} className={className}>
      {children}
    </StyledCol>
  );
}
