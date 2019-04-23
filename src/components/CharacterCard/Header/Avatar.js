import React from 'react';
import styled from 'styled-components';

const CardAvatar = styled.img`
  background: #dae1e7;
  border-radius: 50%;
  width: 50px;
  transition: 0.3s;
  &:-moz-loading {
    visibility: hidden;
  }
`;

function Avatar({ image }) {
  return <CardAvatar alt='Character avatar' src={image} />;
}

export default Avatar;
