import { makeHttpRequest } from 'utils/utils';
import urls from 'urls/urls';

/**
 * @module watchProvider
 */

/**
 * Returns a list of all of the countries we have watch provider (OTT/streaming) data for.
 * @param {Object} options
 * @param {string} options.language
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/watch-providers/get-available-regions
 */
export const availableRegions = async (options = {}) => {
  const { language } = options;

  return await makeHttpRequest(urls.v3.WATCH_PROVIDERS_AVAILABLE_REGIONS, {
    language,
  });
};

/**
 * Returns a list of the watch provider (OTT/streaming) data we have available for movies.
 * You can specify a watch_region param if you want to further filter the list by country.
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.watch_region
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/watch-providers/get-movie-providers
 */
export const movie = async (options = {}) => {
  const { language, watch_region } = options;

  return await makeHttpRequest(urls.v3.WATCH_PROVIDERS_MOVIE, {
    language,
    watch_region,
  });
};

/**
 * Returns a list of the watch provider (OTT/streaming) data we have available for TV series.
 * You can specify a watch_region param if you want to further filter the list by country.
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.watch_region
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/watch-providers/get-tv-providers
 */
export const tv = async (options = {}) => {
  const { language, watch_region } = options;

  return await makeHttpRequest(urls.v3.WATCH_PROVIDERS_TV, {
    language,
    watch_region,
  });
};
