import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import FiltersCol from './FiltersCol';
import ToggleFilters from './ToggleFilters';
import { CharactersContext } from '../../context';

const Wrapper = styled.div`
  display: ${props => (props.isVisible ? 'flex' : 'none')};
`;

function Filters() {
  const { activeFilter, filterCharacters, resetFilters } = useContext(
    CharactersContext
  );
  const [showFilters, setShowFilters] = useState(false);

  const genderFilters = ['male', 'female', 'genderless', 'unknown'];
  const statusFilters = ['alive', 'dead', 'unknown'];
  function handleFilterChange({ target: { name, value } }) {
    filterCharacters(name, value, true); // strict filter = true
  }

  // TODO add a loading placeholder when toggling a filter
  function toggleShowFilters() {
    setShowFilters(!showFilters);
  }

  function handleResetFilters() {
    resetFilters();
  }

  return (
    <>
      <ToggleFilters
        activeFilter={activeFilter}
        handleToggle={toggleShowFilters}
        handleResetFilters={handleResetFilters}
        show={showFilters}
      />
      <Wrapper isVisible={showFilters}>
        <FiltersCol
          filters={genderFilters}
          label='Gender'
          name='gender'
          onClick={handleFilterChange}
        />
        <FiltersCol
          filters={statusFilters}
          label='Status'
          name='status'
          onClick={handleFilterChange}
        />
      </Wrapper>
    </>
  );
}

export default Filters;
