import axios from 'axios';

import parser from './parser';
import * as urls from './urls';
import { buildDefinedParams } from './utils';

const latestStableVersion = 3;
const host = 'https://api.themoviedb.org/';

export default class TheMovieDbClient {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error(`An api key is required. 
      You can get one at: https://www.themoviedb.org/faq/api`);
    }

    this.httpInstance = axios.create({
      baseURL: `${host}${latestStableVersion}`,
      params: {
        api_key: apiKey,
      },
    });

    this.httpInstance.interceptors.response.use(
      response => parser(response),
      error => Promise.reject(error)
    );
  }

  /**
   * @description Get the system wide configuration information.
   * @see https://developers.themoviedb.org/3/configuration/get-api-configuration
   */
  getConfiguration() {
    return new Promise((resolve, reject) =>
      this.httpInstance
        .get(urls.getConfiguration)
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    );
  }

  /**
   * @description Get a list of the current popular movies on TMDb.
   * This list updates daily.
   * @param {string} language
   * @param {number} page
   * @param {string} region
   * @see https://developers.themoviedb.org/3/movies/get-popular-movies
   */
  getPopularMovies(language, page, region) {
    return new Promise((resolve, reject) =>
      this.httpInstance
        .get(urls.getPopularMovies, {
          params: buildDefinedParams({ language, page, region }),
        })
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    );
  }
}
