import { makeHttpRequest } from 'utils/utils';
import urls from 'urls/urls';

/**
 * @module certification
 */

/**
 * Get an up to date list of the officially supported movie certifications on TMDb.
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/certifications/get-movie-certifications
 */
export const movies = async () => {
  return await makeHttpRequest(urls.v3.CERTIFICATION_MOVIES);
};

/**
 * Get an up to date list of the officially supported TV show certifications on TMDb.
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/certifications/get-tv-certifications
 */
export const tvShows = async () => {
  return await makeHttpRequest(urls.v3.CERTIFICATION_TV_SHOWS);
};
