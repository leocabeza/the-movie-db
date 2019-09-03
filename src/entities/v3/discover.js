import { makeHttpRequest } from 'utils/utils';
import urls from 'urls/urls';

/**
 * @module discover
 */

/**
 * Discover movies by different types of data like average rating,
 * number of votes, genres and certifications.
 * For a full list of options, see https://developers.themoviedb.org/3/discover/movie-discover
 * @param {Object}  options
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/discover/movie-discover
 */
export const movie = async (options = {}) => {
  return await makeHttpRequest(urls.v3.DISCOVER_MOVIE, options);
};

/**
 * Discover TV shows by different types of data like average rating, number of votes, genres, the network they aired on and air dates.
 * For a full list of options, see https://developers.themoviedb.org/3/discover/tv-discover
 * @param {Object}  options
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/discover/tv-discover
 */
export const tvShows = async (options = {}) => {
  return await makeHttpRequest(urls.v3.DISCOVER_TV_SHOW, options);
};
