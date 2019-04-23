import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  height: 200px;
  margin: 15px 0;
  padding: 0 20px;
  background: #fff;
  border: 1px solid #d6d6d6;
  border-radius: 3px;
  box-shadow: #bababa 3px 3px 0px 0px;
`;

function CharacterCard(props) {
  console.log(props);
  return (
    <Link to={`/character/${props.id}`}>
      <Wrapper>
        <Header {...props} />
      </Wrapper>
    </Link>
  );
}

export default CharacterCard;
