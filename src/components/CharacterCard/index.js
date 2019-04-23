import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BottomBar from './BottomBar';
import Header from './Header';

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  margin: 20px 0;
  padding: 15px 20px;
  background: #fff;
  border: 1px solid #d6d6d6;
  border-radius: 3px;
  box-shadow: #bababa 3px 3px 0px 0px;
  @media (max-width: 960px) {
  }
`;

const CharacterCard = props => (
  <Link to={`/character/${props.id}`}>
    <Wrapper>
      <Header {...props} />
      <BottomBar {...props} />
    </Wrapper>
  </Link>
);

export default CharacterCard;
