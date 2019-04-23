import React from 'react';
import styled from 'styled-components';

const CardMedia = styled.img`
  background: #dae1e7;
  border-radius: 50%;
  min-height: 60px;
  width: 60px;
  transition: 0.3s;
  &:-moz-loading {
    visibility: hidden;
  }
`;

function Media({ image }) {
  return <CardMedia alt='Character avatar' src={image} />;
}

export default Media;
