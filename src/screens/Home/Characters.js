import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import CharacterCard from '../../components/CharacterCard';
import Loader from '../../components/Loader';
import api from '../../api';

const Wrapper = styled.main`
  padding: 20px 0;
  width: 45vw;
  margin: auto;
`;

function Characters() {
  const [isEndOfList, setIsEndOfList] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  const getAllCharacters = async page => {
    await setLoading(true);

    // Rick & Morty API total pages = 25
    if (page <= 2) {
      const newCharacters = await api.methods.GET_ALL_CHARACTERS(page);

      // If error we stop the function
      if (!newCharacters) {
        await setLoading(false);
        await setIsEndOfList(true);
        return;
      }

      await setCharacters([...new Set([...characters, ...newCharacters])]);
      await handleChangePage();
    }

    // If last page stop loading
    if (page === 2) {
      await setLoading(false);
      await setIsEndOfList(true);
    }
  };

  const handleChangePage = () => {
    if (isEndOfList) return;
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getAllCharacters(currentPage);
  }, [currentPage]);

  if (isLoading) return <Loader height='fullscreen' />;

  const kiss = '\u{1F618}';

  return (
    <Wrapper>
      <ul>
        {characters.map(character => (
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
