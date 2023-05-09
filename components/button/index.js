import React from 'react';
import * as Styled from './styled';

const Button = ({ children, src, width, ...rest }) => {
  return (
    <Styled.Button {...rest}>
      <Styled.Image src={src} $width={width} />
      <Styled.Text>{children}</Styled.Text>
    </Styled.Button>
  );
};

export default Button;
