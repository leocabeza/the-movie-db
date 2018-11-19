import axios from 'axios';
import parser from './parser';
import entities from './entities';

const LATEST_STABLE_VERSION = 3;
const HOST = 'https://api.themoviedb.org/';

const TheMovieDbClient = apiKey => {
  if (!apiKey) {
    throw new Error(`An api key is required. 
    You can get one at: https://www.themoviedb.org/faq/api`);
  }

  axios.defaults.baseURL = `${HOST}${LATEST_STABLE_VERSION}`;
  axios.defaults.params = { api_key: apiKey };
  //TODO: Need help to be able to test this
  // https://github.com/axios/axios/issues/511 ?
  axios.interceptors.response.use(
    async ({ data }) => await parser(data),
    async ({ response }) => await Promise.reject(response.data.status_message)
  );

  return entities;
};

export default TheMovieDbClient;
