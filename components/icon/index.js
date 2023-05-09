import React from 'react';
import { ICON_SIZES } from './constants';
import { StyledIcon } from './styled';

export default function Icon({ icon, size, onClick, className }) {
  return <StyledIcon Component={icon} size={size} onClick={onClick} className={className} />;
}
Icon.defaultProps = {
  size: ICON_SIZES.regular
};

Icon.sizes = ICON_SIZES;
