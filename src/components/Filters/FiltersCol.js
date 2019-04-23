import React from 'react';
import styled from 'styled-components';

import Button from '../Button';

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px;
  .FiltersRow__Button:hover {
    transform: scale(1.1);
  }
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 4px;
`;

const FiltersCol = ({ filters, label, ...rest }) => (
  <Wrapper>
    <Label>{label}</Label>

    {filters.map((filter, index) => (
      <li key={index}>
        <Button className='FiltersRow__Button' value={filter} {...rest}>
          {filter}
        </Button>
      </li>
    ))}
  </Wrapper>
);

export default FiltersCol;
