import React, { useContext } from 'react';
import styled from 'styled-components';

import CharacterCard from '../../components/CharacterCard';
import Filters from '../../components/Filters';
import Loader from '../../components/Loader';
import { CharactersContext } from '../../context';

const Wrapper = styled.main`
  padding: 20px 0;
  width: 45vw;
  margin: auto;
  margin-top: 50px;
  @media (max-width: 960px) {
    width: 90vw;
  }
`;

function Characters() {
  const {
    allCharacters,
    filteredCharacters,
    isLoading,
    isEndOfList
  } = useContext(CharactersContext);
  const items =
    filteredCharacters.length === 0 ? allCharacters : filteredCharacters;
  const kiss = '\u{1F618}';

  if (isLoading) return <Loader height='fullscreen' />;

  return (
    <Wrapper>
      <Filters />
      <ul>
        {items.map(character => (
          <li key={character.id}>
            <CharacterCard {...character} />
          </li>
        ))}
      </ul>
      {isEndOfList && <p>You know every characters now {kiss}</p>}
    </Wrapper>
  );
}

export default Characters;
