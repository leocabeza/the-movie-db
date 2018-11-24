import axios from 'axios';
import parser from './parser';
import v3Entities from './entities/v3';

const HOST = 'https://api.themoviedb.org/';

/**
 * Initializes a client instance with an api key
 * @param {string} apiKey
 */
const TheMovieDbClient = apiKey => {
  //NOTE: In the future we will ask if you want to use this default or v4
  const versionToUse = 3;
  if (!apiKey) {
    throw new Error(`An api key is required. 
    You can get one at: https://www.themoviedb.org/faq/api`);
  }

  axios.defaults.baseURL = `${HOST}${versionToUse}`;
  axios.defaults.params = { api_key: apiKey };
  //TODO: Need help to be able to test this
  // https://github.com/axios/axios/issues/511 ?
  axios.interceptors.response.use(
    async ({ data }) => await parser(data),
    async ({ response }) => await Promise.reject(response.data.status_message)
  );

  return v3Entities;
};

/**
 * Client to use with your api key
 * @module TheMovieDbClient
 */
export default TheMovieDbClient;
