import { makeHttpRequest } from '../../utils';
import urls from '../../urls';

/**
 * @module keyword
 */

/**
 * Get details of keyword
 * @param {number} keywordId - Required
 * @returns Promise
 * @see https://developers.themoviedb.org/3/keywords/get-keyword-details
 */
export const details = async keywordId => {
  if (!keywordId && keywordId !== 0) {
    return Promise.reject('A keywordId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.KEYWORD_DETAILS.replace(':id', keywordId)
  );
};

/**
 * Get the movies that belong to a keyword.
 * @param {number}  keywordId - Required
 * @param {Object}  options
 * @param {string}  options.language
 * @param {boolean} options.include_adult
 * @returns Promise
 * @see https://developers.themoviedb.org/3/keywords/get-movies-by-keyword
 */
export const movies = async (keywordId, options = {}) => {
  const { language, include_adult } = options;
  if (!keywordId && keywordId !== 0) {
    return Promise.reject('A keywordId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.KEYWORD_MOVIES.replace(':id', keywordId),
    { language, include_adult }
  );
};
