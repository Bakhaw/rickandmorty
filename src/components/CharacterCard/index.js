import React from 'react';
import styled from 'styled-components';

const CardMedia = styled.img`
  max-height: 100px;
  width: 100px;
  border-radius: 50%;
  transition: 0.3s;
  padding: 4px;
  border: 4px solid #fff;
`;

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
  border-radius: 10px;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
  &:hover {
    ${CardMedia} {
      border: 4px solid #eb5286;
      transition: 0.3s;
    }
  }
`;

const CardDescription = styled.div``;

const CardTitle = styled.h2`
  color: #22292f;
  font-size: 26px;
  margin: 0;
  line-height: 35px;
  width: 250px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CardSubtitle = styled.h3`
  color: #8795a1;
  font-size: 16px;
  font-weight: normal;
  line-height: 18px;
  width: 250px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
`;

function CharacterCard({
  image,
  gender,
  location,
  name,
  origin,
  species,
  status,
  type
}) {
  return (
    <Card>
      <CardMedia src={image} />
      <CardDescription>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{type}</CardSubtitle>
      </CardDescription>
    </Card>
  );
}
export default CharacterCard;
