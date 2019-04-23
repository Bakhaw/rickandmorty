import React from 'react';
import LocationIcon from '@material-ui/icons/LocationOn';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    fill: #727980;
    font-size: 30px;
  }
  li {
    color: #727980;
    font-size: 14px;
    width: 450px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    @media (max-width: 960px) {
      width: 70vw;
    }
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
