import React from 'react';
import * as Styled from './styled';

const Spacer = React.forwardRef(({ as, children, x, y, className, ...rest }, ref) => {
  return (
    <Styled.Spacer as={as || 'div'} ref={ref} x={x} y={y} className={className} {...rest}>
      {children}
    </Styled.Spacer>
  );
});

export default Spacer;
