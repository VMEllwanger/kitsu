import axios from 'axios';

export const instanciaAxios = axios.create({
  baseURL: 'https://kitsu.io/api/edge',
  headers: {
    'Content-Type': 'application/json',
  },
});
