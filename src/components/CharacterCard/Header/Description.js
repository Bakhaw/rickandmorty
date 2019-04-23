import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  h2,
  h3 {
    margin: 0 5px;
    width: 300px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    @media (max-width: 960px) {
      width: 55vw;
    }
  }
  .unknown {
    background: orange;
  }
  .alive {
    background: green;
  }
  .dead {
    background: red;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  color: #0a0a0a;
  font-size: 27px;
  font-weight: 500;
  @media (max-width: 960px) {
    font-size: 20px;
  }
`;

const Status = styled.div`
  height: 14px;
  width: 14px;
  border-radius: 50%;
`;

const Subtitle = styled.h3`
  color: #727980;
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 960px) {
    font-size: 14px;
  }
`;

function Description({ name, status, type }) {
  return (
    <Wrapper>
      <Row>
        <Title>{name}</Title>
        <Tooltip title={`Status: ${status}`}>
          <Status className={status.toLowerCase()} />
        </Tooltip>
      </Row>
      <Subtitle>{type}</Subtitle>
    </Wrapper>
  );
}

export default Description;
