import React from 'react';
import styled from 'styled-components';

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

function Description({ name, type }) {
  return (
    <CardDescription>
      <CardTitle>{name}</CardTitle>
      <CardSubtitle>{type}</CardSubtitle>
    </CardDescription>
  );
}

export default Description;
