import { makeRequest } from '../../utils';
import * as urls from '../../urls';

/**
 * @description Get a list of the current popular movies on TMDb.
 * This list updates daily.
 * @param {object} language, page, region
 * @see https://developers.themoviedb.org/3/movies/get-popular-movies
 */
export const popular = async(options = {}) => {
  const { language, page, region } = options;

  return await makeRequest(urls.POPULAR_MOVIES, { language, page, region }, 'get');
};
