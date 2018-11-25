import { makeHttpRequest } from '../../../utils';
import urls from '../../../urls';

/**
 * @module find
 */

/**
 * The find method makes it easy to search for objects in our database by an external id. For example, an IMDB ID.
 * This method will search all objects (movies, TV shows and people) and return the results in a single response.
 * @param {Object} options
 * @param {string} options.externalId
 * @param {string} options.externalSource - Possible values: imdb_id, freebase_mid, freebase_id, tvdb_id, tvrage_id
 * @param {string} options.language
 * @returns Promise
 * @see https://developers.themoviedb.org/3/find/find-by-id
 */
export const byId = async (options = {}) => {
  const { externalId, externalSource, language } = options;

  if (!externalId) {
    return Promise.reject('An externalId has to be provided');
  }

  if (!externalSource) {
    return Promise.reject('An externalSource has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.FIND_EXTERNAL_ID.replace(':externalId', externalId),
    { externalSource, language }
  );
};
