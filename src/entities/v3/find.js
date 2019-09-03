import { makeHttpRequest } from 'utils/utils';
import urls from 'urls/urls';

/**
 * @module find
 */

/**
 * The find method makes it easy to search for objects in our database by an external id. For example, an IMDB ID.
 * This method will search all objects (movies, TV shows and people) and return the results in a single response.
 * @param {Object} options
 * @param {string} options.external_id
 * @param {string} options.external_source - Possible values: imdb_id, freebase_mid, freebase_id, tvdb_id, tvrage_id
 * @param {string} options.language
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/find/find-by-id
 */
export const byId = async (options = {}) => {
  const { external_id, external_source, language } = options;

  if (!external_id) {
    return Promise.reject('An external_id has to be provided');
  }

  if (!external_source) {
    return Promise.reject('An external_source has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.FIND_EXTERNAL_ID.replace(':externalId', external_id),
    { external_source, language }
  );
};
