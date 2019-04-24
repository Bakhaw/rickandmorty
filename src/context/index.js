import React, { createContext } from 'react';
import { useCharacters } from '../hooks';

export const CharactersContext = createContext(null);

export function ContextProvider({ children }) {
  const providerValue = useCharacters();

  return (
    <CharactersContext.Provider value={providerValue}>
      {children}
    </CharactersContext.Provider>
  );
}
