import React from 'react';
import LocationIcon from '@material-ui/icons/LocationOn';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: #727980;
  svg {
    fill: #727980;
    font-size: 30px;
  }
`;

function BottomBar({ location, origin }) {
  return (
    <Wrapper>
      <LocationIcon />
      <ul>
        <li>Origin: {origin.name}</li>
        <li>Last location: {location.name}</li>
      </ul>
    </Wrapper>
  );
}

export default BottomBar;
