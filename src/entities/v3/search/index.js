import { makeHttpRequest } from '../../../utils';
import urls from '../../../urls';

/**
 * @module search
 */

/**
 * Search for a TV show.
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.query - This value should be URI encoded.
 * @param {number} options.page
 * @param {number} options.firstAirDateYear
 * @returns Promise
 * @see https://developers.themoviedb.org/3/search/search-tv-shows
 */
export const tv = async (options = {}) => {
  const { language, query, page, firstAirDateYear } = options;

  if (!query) {
    return Promise.reject('A query has to be provided');
  }

  return await makeHttpRequest(urls.v3.SEARCH_TV, {
    language,
    query,
    page,
    firstAirDateYear,
  });
};
