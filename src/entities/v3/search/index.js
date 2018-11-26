import { makeHttpRequest } from '../../../utils';
import urls from '../../../urls';

/**
 * @module search
 */

/**
 * Search for collections.
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.query
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/3/search/search-collections
 */
export const collections = async (options = {}) => {
  const { language, query, page } = options;

  if (!query) {
    return Promise.reject('A query has to be provided');
  }

  return await makeHttpRequest(urls.v3.SEARCH_COLLECTION, {
    language,
    query,
    page,
  });
};

/**
 * Search for companies.
 * @param {Object} options
 * @param {string} options.query
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/3/search/search-companies
 */
export const companies = async (options = {}) => {
  const { query, page } = options;

  if (!query) {
    return Promise.reject('A query has to be provided');
  }

  return await makeHttpRequest(urls.v3.SEARCH_COMPANY, { query, page });
};

/**
 * Search for keywords.
 * @param {Object} options
 * @param {string} options.query
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/3/search/search-keywords
 */
export const keywords = async (options = {}) => {
  const { query, page } = options;

  if (!query) {
    return Promise.reject('A query has to be provided');
  }

  return await makeHttpRequest(urls.v3.SEARCH_KEYWORD, { query, page });
};

/**
 * Search for movies.
 * @param {Object}  options
 * @param {string}  options.language
 * @param {string}  options.query
 * @param {number}  options.page
 * @param {boolean} options.includeAdult
 * @param {string}  options.region
 * @param {number}  option.year
 * @param {number}  option.primaryReleaseYear
 * @returns Promise
 * @see https://developers.themoviedb.org/3/search/search-movies
 */
export const movies = async (options = {}) => {
  const {
    language,
    query,
    page,
    includeAdult,
    region,
    year,
    primaryReleaseYear,
  } = options;

  if (!query) {
    return Promise.reject('A query has to be provided');
  }

  return await makeHttpRequest(urls.v3.SEARCH_MOVIE, {
    language,
    query,
    page,
    includeAdult,
    region,
    year,
    primaryReleaseYear,
  });
};

/**
 * Search multiple models in a single request. Multi search currently supports searching for movies, tv shows and people in a single request.
 * @param {Object}  options
 * @param {string}  options.language
 * @param {string}  options.query
 * @param {number}  options.page
 * @param {boolean} options.includeAdult
 * @param {string}  options.region
 * @returns Promise
 * @see https://developers.themoviedb.org/3/search/multi-search
 */
export const multi = async (options = {}) => {
  const { language, query, page, includeAdult, region } = options;

  if (!query) {
    return Promise.reject('A query has to be provided');
  }

  return await makeHttpRequest(urls.v3.SEARCH_MULTI, {
    language,
    query,
    page,
    includeAdult,
    region,
  });
};

/**
 * Search for people.
 * @param {Object}  options
 * @param {string}  options.language
 * @param {string}  options.query
 * @param {number}  options.page
 * @param {boolean} options.includeAdult
 * @param {string}  options.region
 * @returns Promise
 * @see https://developers.themoviedb.org/3/search/search-people
 */
export const people = async (options = {}) => {
  const { language, query, page, includeAdult, region } = options;

  if (!query) {
    return Promise.reject('A query has to be provided');
  }

  return await makeHttpRequest(urls.v3.SEARCH_PEOPLE, {
    language,
    query,
    page,
    includeAdult,
    region,
  });
};

/**
 * Search for a TV show.
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.query
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
