import axios from 'axios';

const api = {
  config: {
    BASE_URL: 'https://rickandmortyapi.com/api'
  },
  methods: {
    GET_ALL_CHARACTERS: async page => {
      try {
        const request = await axios.get(
          `${api.config.BASE_URL}/character?page=${page}`
        );
        const characters = request.data.results;
        return characters;
      } catch (err) {
        return console.log('Error', err);
      }
    },
    GET_CHARACTER: async characterId => {
      try {
        const request = await axios.get(
          `${api.config.BASE_URL}/character/${characterId}`
        );
        const character = request.data;
        return character;
      } catch (err) {
        return console.log('Error', err);
      }
    }
  }
};

export default api;
