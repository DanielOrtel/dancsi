import React from 'react';
import * as Styled from './styled';

const Container = ({ children, ...props }) => {
  return <Styled.Container {...props}>{children}</Styled.Container>;
};

export default Container;
