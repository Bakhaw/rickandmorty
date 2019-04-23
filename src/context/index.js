import React, { createContext } from 'react';
import { useCharacters } from '../hooks';

export const CharactersContext = createContext(null);

export function ContextProvider({ children }) {
  const {
    activeFilter,
    allCharacters,
    filterCharacters,
    filteredCharacters,
    isEndOfList,
    isLoading,
    resetFilters
  } = useCharacters();

  const providerValue = {
    activeFilter,
    allCharacters,
    filterCharacters,
    filteredCharacters,
    isEndOfList,
    isLoading,
    resetFilters
  };

  return (
    <CharactersContext.Provider value={providerValue}>
      {children}
    </CharactersContext.Provider>
  );
}
