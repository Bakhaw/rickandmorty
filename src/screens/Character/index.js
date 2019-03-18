import React from 'react';
import api from '../../api';
import Loader from '../../components/Loader';

function Character(props) {
  const [isLoading, setLoading] = React.useState(false);
  const [character, setCharacter] = React.useState(null);

  const getCharacter = async () => {
    await setLoading(true);
    await api.methods
      .GET_CHARACTER(props.match.params.characterId)
      .then(character => setCharacter(character));

    await setLoading(false);
  };

  React.useEffect(() => {
    getCharacter();
  }, [props.match.params.characterId]);

  if (isLoading || character === null) return <Loader />;

  return (
    <ul>
      <li>
        <img
          alt='Character img'
          src={character.image}
          height={100}
          width={100}
        />
      </li>
      <li>NAME: {character.name}</li>
      <li>STATUS: {character.status}</li>
      <li>SPECIES: {character.species}</li>
      <li>TYPE: {character.type}</li>
      <li>GENDER: {character.gender}</li>
      <li>ORIGIN: {character.origin.name}</li>
      <li>ACTUAL LOCATION: {character.location.name}</li>
    </ul>
  );
}

export default Character;
