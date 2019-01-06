import axios from 'axios';
import { success, error } from './interceptors/parser';
import entities from './entities';

const HOST = 'https://api.themoviedb.org/';

/**
 * Initializes a client instance with an api key
 * @param {string} apiKey
 * @param {boolean} useVersion3 - defaul true
 */
const TheMovieDbClient = (apiKey, useVersion3 = true) => {
  const versionToUse = useVersion3 ? 3 : 4;
  if (!apiKey) {
    throw new Error(`An api key is required. 
    You can get one at: https://www.themoviedb.org/faq/api`);
  }

  axios.defaults.baseURL = `${HOST}${versionToUse}`;
  axios.defaults.params = versionToUse === 3 ? { api_key: apiKey } : {};
  axios.defaults.headers =
    versionToUse === 3
      ? {
          'content-type': 'application/json;charset=utf-8',
        }
      : {
          'content-type': 'application/json;charset=utf-8',
          authorization: `Bearer ${apiKey}`,
        };

  axios.interceptors.response.use(success, error);

  return versionToUse === 3 ? entities.v3 : entities.v4;
};

/**
 * Client to use with your api key
 * @module TheMovieDbClient
 */
export default TheMovieDbClient;
