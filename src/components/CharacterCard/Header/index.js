import React from 'react';
import styled from 'styled-components';

import Description from './Description';
import Avatar from './Avatar';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

function Header(props) {
  return (
    <Wrapper>
      <Avatar {...props} />
      <Description {...props} />
    </Wrapper>
  );
}

export default Header;
