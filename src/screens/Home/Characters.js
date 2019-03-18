import React from 'react';
import styled from 'styled-components';
import api from '../../api';

import CharacterCard from '../../components/CharacterCard';
import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';

const CharactersList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 360px);
  gap: 60px 0;
  justify-content: center;
  padding: 20px 0;
`;

const CharactersListItem = styled.li`
  margin: 0 30px;
`;

function Characters() {
  const [characters, setCharacters] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState({});
  const [isLoading, setLoading] = React.useState(false);

  const getAllCharacters = async page => {
    await setLoading(true);
    await api.methods
      .GET_ALL_CHARACTERS(page)
      .then(({ characters, totalPages }) => {
        setCharacters(characters);
        setTotalPages(totalPages);
      });
    await setLoading(false);
  };

  const handleChangePage = e => {
    setCurrentPage(e.selected + 1);
  };

  React.useEffect(() => {
    getAllCharacters(currentPage);
  }, [currentPage]);

  if (isLoading) return <Loader />;

  return (
    <React.Fragment>
      <CharactersList>
        {characters.map((character, index) => (
          <CharactersListItem key={index}>
            <CharacterCard {...character} />
          </CharactersListItem>
        ))}
      </CharactersList>
      <Pagination
        currentPage={currentPage}
        handleChangePage={handleChangePage}
        totalPages={totalPages}
      />
    </React.Fragment>
  );
}

export default Characters;
