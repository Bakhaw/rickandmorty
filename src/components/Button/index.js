import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  cursor: pointer;
  background: #cfd7ff;
  border: 1px solid #4e57ef;
  border-radius: 2px;
  box-shadow: 3px 4px 0px #4e57ef;
  color: #0a0a0a;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 8px 0;
  padding: 3px 8px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  outline: 0;
`;

function Button({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
}

export default Button;
