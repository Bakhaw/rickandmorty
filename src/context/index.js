import React, { createContext } from 'react';
import { useCharacters } from '../hooks';

export const CharactersContext = createContext(null);

export function ContextProvider({ children }) {
  const {
    allCharacters,
    filterCharacters,
    filteredCharacters,
    isEndOfList,
    isLoading
  } = useCharacters();

  const value = {
    allCharacters,
    filterCharacters,
    filteredCharacters,
    isEndOfList,
    isLoading
  };

  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
}
