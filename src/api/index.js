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
      const characters = await request.data.results;
      return { characters };
    }
  }
};

export default api;
