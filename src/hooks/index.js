import { useEffect, useState } from 'react';
import api from '../api';

export function useCharacters() {
  const TOTAL_PAGES = 25; // Rick & Morty API total pages = 25
  const [isEndOfList, setIsEndOfList] = useState(false);
  const [allCharacters, setAllCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [activeFilter, setActiveFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  async function getAllCharacters(page) {
    await setLoading(true);

    if (page <= TOTAL_PAGES) {
      const newCharacters = await api.methods.GET_ALL_CHARACTERS(page);

      // If error we stop the function
      if (!newCharacters) {
        await setLoading(false);
        await setIsEndOfList(true);
        return;
      }

      await setAllCharacters([
        ...new Set([...allCharacters, ...newCharacters])
      ]);
      await changePage();
    }

    // If last page stop loading
    if (page === TOTAL_PAGES) {
      await setLoading(false);
      await setIsEndOfList(true);
    }
  }

  function filterCharacters(key, query, strict = false) {
    let result;

    if (strict) {
      result = [...allCharacters].filter(
        character => character[key].toLowerCase() === query.toLowerCase()
      );
    } else {
      result = [...allCharacters].filter(
        character =>
          character[key].toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }

    setActiveFilter(query);
    setFilteredCharacters(result);
  }

  function resetFilters() {
    setActiveFilter('');
    setFilteredCharacters(allCharacters);
  }

  function changePage() {
    if (isEndOfList) return;
    setCurrentPage(currentPage + 1);
  }

  useEffect(() => {
    getAllCharacters(currentPage);
  }, [currentPage]);

  return {
    activeFilter,
    allCharacters,
    filterCharacters,
    filteredCharacters,
    isEndOfList,
    isLoading,
    resetFilters
  };
}
