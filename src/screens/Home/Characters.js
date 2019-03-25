import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from '../../api';

import Collection from '../../components/Collection';
import Loader from '../../components/Loader';

const Wrapper = styled.div`
  padding: 30px 0;
`;

function Characters() {
  const [isEndOfList, setIsEndOfList] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  const getAllCharacters = async page => {
    await setLoading(true);

    const newCharacters = await api.methods.GET_ALL_CHARACTERS(page);

    if (!newCharacters) {
      await setLoading(false);
      await setIsEndOfList(true);
      return;
    }

    await setCharacters([...characters, ...newCharacters]);

    await setLoading(false);
  };

  const handleChangePage = () => {
    if (isEndOfList) return;
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getAllCharacters(currentPage);
  }, [currentPage]);

  if (characters.length === 0) return <Loader height='fullscreen' />;

  const kiss = '\u{1F618}';
  return (
    <Wrapper>
      <Collection list={characters} onBottom={handleChangePage} />
      {isLoading && <Loader />}
      {isEndOfList && <p>You know every single character now {kiss}</p>}
    </Wrapper>
  );
}

export default Characters;
