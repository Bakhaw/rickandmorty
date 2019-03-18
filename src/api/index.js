import axios from 'axios';

const api = {
  config: {
    BASE_URL: 'https://rickandmortyapi.com/api'
  },
  methods: {
    GET_ALL_CHARACTERS: async page => {
      const request = await axios.get(
        `${api.config.BASE_URL}/character?page=${page}`
      );
      const characters = request.data.results;
      const totalPages = request.data.info.pages;
      return { characters, totalPages };
    },
    GET_CHARACTER: async characterId => {
      const request = await axios.get(
        `${api.config.BASE_URL}/character/${characterId}`
      );
      const character = request.data;
      console.log(character);
      return character;
    }
  }
};

export default api;
