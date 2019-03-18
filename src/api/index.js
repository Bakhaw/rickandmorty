import axios from 'axios';

const api = {
  config: {
    BASE_URL: 'https://rickandmortyapi.com/api',
    TOTAL_CHARACTERS_PAGES: 25
  },
  methods: {
    GET_CHARACTER: async page => {
      const request = await axios.get(
        `${api.config.BASE_URL}/character?page=${page}`
      );
      const characters = request.data.results;
      const totalPages = request.data.info.pages;
      return { characters, totalPages };
    }
  }
};

export default api;
