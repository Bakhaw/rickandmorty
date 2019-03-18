import React from 'react';
import styled from 'styled-components';
import api from '../../api';
import CharacterCard from '../../components/CharacterCard';

const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 360px);
  gap: 60px 0;
  justify-content: center;
  padding: 20px 0;
`;

const ListItem = styled.li`
  margin: 0 30px;
`;

function Characters() {
  const [characters, setCharacters] = React.useState([]);

  const getCharacters = async () => {
    api.methods
      .GET_CHARACTER()
      .then(({ characters }) => setCharacters(characters));
  };

  React.useEffect(() => {
    getCharacters();
  }, []);

  return (
    <ListWrapper>
      {characters.map((character, index) => (
        <ListItem key={index}>
          <CharacterCard {...character} />
        </ListItem>
      ))}
    </ListWrapper>
  );
}

export default Characters;
