import React from 'react';
import styled from 'styled-components';

import Description from './Description';
import Media from './Media';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
`;

function Header(props) {
  return (
    <Wrapper>
      <Media {...props} />
      <Description {...props} />
    </Wrapper>
  );
}

export default Header;
