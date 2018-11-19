import { makeRequest } from '../../utils';
import * as urls from '../../urls';

/**
 * Get the primary information about a movie.
 * @param {number} movieId
 * @param {object} options - language, appendToResponse
 * @see https://developers.themoviedb.org/3/movies/get-movie-details
 */
export const details = async (movieId, options = {}) => {
  const { language, appendToResponse } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return await makeRequest(urls.MOVIES_DETAILS.replace(':id', movieId), {
    language,
    appendToResponse,
  });
};

/**
 * @description Get a list of the current popular movies on TMDb.
 * This list updates daily.
 * @param {object} options - language, page, region
 * @see https://developers.themoviedb.org/3/movies/get-popular-movies
 */
export const popular = async (options = {}) => {
  const { language, page, region } = options;

  return await makeRequest(urls.MOVIES_POPULAR, { language, page, region });
};
