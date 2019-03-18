import React from 'react';
import styled from 'styled-components';

const CardMedia = styled.img`
  background: #dae1e7;
  border-radius: 50%;
  min-height: 100px;
  width: 100px;
  transition: 0.3s;
  padding: 4px;
  border: 4px solid #fff;
`;

function Media({ image }) {
  return <CardMedia alt='Character avatar' className='CardMedia' src={image} />;
}

export default Media;
