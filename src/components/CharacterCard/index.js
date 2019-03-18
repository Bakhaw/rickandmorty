import React from 'react';
import styled from 'styled-components';

import Description from './Description';
import Media from './Media';

const Card = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 150px;
  padding: 20px 10px;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
  &:hover {
    .CardMedia {
      border: 4px solid #eb5286;
      transition: 0.3s;
    }
  }
`;

function CharacterCard(props) {
  // const {
  //   image,
  //   gender,
  //   location,
  //   name,
  //   origin,
  //   species,
  //   status,
  //   type
  // } = props;
  return (
    <Card>
      <Media {...props} />
      <Description {...props} />
    </Card>
  );
}
export default CharacterCard;
