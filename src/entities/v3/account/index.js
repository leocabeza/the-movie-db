import { makeHttpRequest } from '../../../utils';
import urls from '../../../urls';

/**
 * @module search
 */

/**
 * Add a movie or TV show to your watchlist.
 * @param {integer} accountId - Required
 * @param {string} sessionId - Required
 * @param {Object} body - Required
 * @param {string} body.mediaType - Required - Allowed values: movie, tv
 * @param {number} body.mediaId - Required
 * @param {boolean} body.watchlist - Required
 * @returns Promise
 * @see https://developers.themoviedb.org/3/account/add-to-watchlist
 */
export const addToWatchlist = async (accountId, sessionId, body = {}) => {
  const { mediaType, mediaId, watchlist } = body;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!sessionId) {
    return Promise.reject('A sessionId has to be provided');
  }

  if (!body || !Object.keys(body).length) {
    return Promise.reject(
      'A body must have a mediaType, mediaId and watchlist keys'
    );
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_ADD_TO_WATCHLIST.replace(':id', accountId).concat(
      `?session_id=${sessionId}`
    ),
    { mediaType, mediaId, watchlist },
    'post'
  );
};

/**
 * Get your account details.
 * @param {string} sessionId
 * @returns Promise
 * @see https://developers.themoviedb.org/3/account/get-account-details
 */
export const details = async sessionId => {
  if (!sessionId) {
    return Promise.reject('A sessionId has to be provided');
  }

  return await makeHttpRequest(urls.v3.ACCOUNT_DETAILS, { sessionId });
};

/**
 * Get the list of your favorite movies.
 * @param {number} accountId - Required
 * @param {Object} options
 * @param {string} options.sessionId - Required
 * @param {string} options.language
 * @param {number} options.page
 * @param {string} options.sortBy - Allowed values: created_at.asc, created_at.desc
 * @returns Promise
 * @see https://developers.themoviedb.org/3/account/get-favorite-movies
 */
export const favoriteMovies = async (accountId, options = {}) => {
  const { sessionId, language, page, sortBy } = options;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!sessionId) {
    return Promise.reject('A sessionId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_FAVORITE_MOVIES.replace(':id', accountId),
    { sessionId, language, page, sortBy }
  );
};

/**
 * Get the list of your favorite TV shows.
 * @param {number} accountId - Required
 * @param {Object} options
 * @param {string} options.sessionId - Required
 * @param {string} options.language
 * @param {number} options.page
 * @param {string} options.sortBy - Allowed values: created_at.asc, created_at.desc
 * @returns Promise
 * @see https://developers.themoviedb.org/3/account/get-favorite-tv-shows
 */
export const favoriteTvShows = async (accountId, options = {}) => {
  const { sessionId, language, page, sortBy } = options;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!sessionId) {
    return Promise.reject('A sessionId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_FAVORITE_TV_SHOWS.replace(':id', accountId),
    { sessionId, language, page, sortBy }
  );
};

/**
 * Get all of the lists created by an account. Will invlude private lists if you are the owner.
 * @param {integer} accountId - Required
 * @param {Object} options
 * @param {string} options.sessionId - Required
 * @param {string} options.language
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/3/account/get-created-lists
 */
export const lists = async (accountId, options = {}) => {
  const { sessionId, language, page } = options;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!sessionId) {
    return Promise.reject('A sessionId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_LISTS.replace(':id', accountId),
    { sessionId, language, page }
  );
};

/**
 * This method allows you to mark a movie or TV show as a favorite item.
 * @param {integer} accountId - Required
 * @param {string} sessionId - Required
 * @param {Object} body - Required
 * @param {string} body.mediaType - Required
 * @param {number} body.mediaId - Required
 * @param {boolean} body.favorite - Required
 * @returns Promise
 * @see https://developers.themoviedb.org/3/account/mark-as-favorite
 */
export const markAsFavorite = async (accountId, sessionId, body = {}) => {
  const { mediaType, mediaId, favorite } = body;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!sessionId) {
    return Promise.reject('A sessionId has to be provided');
  }

  if (!body || !Object.keys(body).length) {
    return Promise.reject(
      'A body must have a mediaType, mediaId and favorite keys'
    );
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_MARK_AS_FAVORITE.replace(':id', accountId).concat(
      `?session_id=${sessionId}`
    ),
    { mediaType, mediaId, favorite },
    'post'
  );
};

/**
 * Get a list of all the movies you have added to your watchlist.
 * @param {integer} accountId - Required
 * @param {Object} options
 * @param {string} options.sessionId - Required
 * @param {string} options.language
 * @param {number} options.page
 * @param {string} options.sortBy - Allowed values: created_at.asc, created_at.desc
 * @returns Promise
 * @see https://developers.themoviedb.org/3/account/get-movie-watchlist
 */
export const movieWatchlist = async (accountId, options = {}) => {
  const { sessionId, language, page, sortBy } = options;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!sessionId) {
    return Promise.reject('A sessionId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_MOVIE_WATCHLIST.replace(':id', accountId),
    { sessionId, language, page, sortBy }
  );
};

/**
 * Get a list of all the movies you have rated.
 * @param {integer} accountId - Required
 * @param {Object} options
 * @param {string} options.sessionId - Required
 * @param {string} options.language
 * @param {number} options.page
 * @param {string} options.sortBy - Allowed values: created_at.asc, created_at.desc
 * @returns Promise
 * @see https://developers.themoviedb.org/3/account/get-rated-movies
 */
export const ratedMovies = async (accountId, options = {}) => {
  const { sessionId, language, page, sortBy } = options;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!sessionId) {
    return Promise.reject('A sessionId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_RATED_MOVIES.replace(':id', accountId),
    { sessionId, language, page, sortBy }
  );
};

/**
 * Get a list of all the TV shows you have rated.
 * @param {integer} accountId - Required
 * @param {Object} options
 * @param {string} options.sessionId - Required
 * @param {string} options.language
 * @param {number} options.page
 * @param {string} options.sortBy - Allowed values: created_at.asc, created_at.desc
 * @returns Promise
 * @see https://developers.themoviedb.org/3/account/get-rated-tv-shows
 */
export const ratedTvShows = async (accountId, options = {}) => {
  const { sessionId, language, page, sortBy } = options;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!sessionId) {
    return Promise.reject('A sessionId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_RATED_TV_SHOWS.replace(':id', accountId),
    { sessionId, language, page, sortBy }
  );
};

/**
 * Get a list of all the TV episodes you have rated.
 * @param {integer} accountId - Required
 * @param {Object} options
 * @param {string} options.sessionId - Required
 * @param {string} options.language
 * @param {number} options.page
 * @param {string} options.sortBy - Allowed values: created_at.asc, created_at.desc
 * @returns Promise
 * @see https://developers.themoviedb.org/3/account/get-rated-tv-episodes
 */
export const ratedTvEpisodes = async (accountId, options = {}) => {
  const { sessionId, language, page, sortBy } = options;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!sessionId) {
    return Promise.reject('A sessionId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_RATED_TV_SHOWS_EPISODES.replace(':id', accountId),
    { sessionId, language, page, sortBy }
  );
};

/**
 * Get a list of all the TV shows you have added to your watchlist.
 * @param {integer} accountId - Required
 * @param {Object} options
 * @param {string} options.sessionId - Required
 * @param {string} options.language
 * @param {number} options.page
 * @param {string} options.sortBy - Allowed values: created_at.asc, created_at.desc
 * @returns Promise
 * @see https://developers.themoviedb.org/3/account/get-tv-show-watchlist
 */
export const tvShowWatchlist = async (accountId, options = {}) => {
  const { sessionId, language, page, sortBy } = options;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!sessionId) {
    return Promise.reject('A sessionId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_MOVIE_WATCHLIST.replace(':id', accountId),
    { sessionId, language, page, sortBy }
  );
};
