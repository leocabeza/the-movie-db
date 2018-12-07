import { makeHttpRequest } from '../../../utils';
import urls from '../../../urls';

/**
 * @module genre
 */

/**
 * Get the list of official genres for movies.
 * @param {Object} options
 * @param {string} options.language
 * @returns Promise
 * @see https://developers.themoviedb.org/3/genres/get-movie-list
 */
export const movieList = async (options = {}) => {
  const { language } = options;

  return await makeHttpRequest(urls.v3.GENRE_MOVIE_LIST, { language });
};

/**
 * Get the list of official genres for TV shows.
 * @param {Object} options
 * @param {string} options.language
 * @returns Promise
 * @see https://developers.themoviedb.org/3/genres/get-tv-list
 */
export const tvList = async (options = {}) => {
  const { language } = options;

  return await makeHttpRequest(urls.v3.GENRE_TV_LIST, { language });
};
