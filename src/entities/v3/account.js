import { makeHttpRequest } from 'utils/utils';
import urls from 'urls/urls';

/**
 * @module account
 */

/**
 * Add a movie or TV show to your watchlist.
 * @param {number}  accountId - Required
 * @param {string}  sessionId - Required
 * @param {Object}  body - Required
 * @param {('movie'|'tv')}  body.media_type - Required - Allowed values: movie, tv
 * @param {number}  body.media_id - Required
 * @param {boolean} body.watchlist - Required
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/account/add-to-watchlist
 */
export const addToWatchlist = async (accountId, sessionId, body = {}) => {
  const { media_type, media_id, watchlist } = body;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!sessionId) {
    return Promise.reject('A sessionId has to be provided');
  }

  if (!body || !Object.keys(body).length) {
    return Promise.reject(
      'A body must have a media_type, media_id and watchlist keys'
    );
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_ADD_TO_WATCHLIST.replace(':id', accountId).concat(
      `?session_id=${sessionId}`
    ),
    { media_type, media_id, watchlist },
    'post'
  );
};

/**
 * Get your account details.
 * @param {string} sessionId
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/account/get-account-details
 */
export const details = async sessionId => {
  if (!sessionId) {
    return Promise.reject('A sessionId has to be provided');
  }

  return await makeHttpRequest(urls.v3.ACCOUNT_DETAILS, {
    session_id: sessionId,
  });
};

/**
 * Get the list of your favorite movies.
 * @param {number} accountId - Required
 * @param {Object} options
 * @param {string} options.session_id - Required
 * @param {string} options.language
 * @param {number} options.page
 * @param {('created_at.asc'|'created_at.desc')} options.sort_by - Allowed values: created_at.asc, created_at.desc
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/account/get-favorite-movies
 */
export const favoriteMovies = async (accountId, options = {}) => {
  const { session_id, language, page, sort_by } = options;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!session_id) {
    return Promise.reject('A session_id option has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_FAVORITE_MOVIES.replace(':id', accountId),
    { session_id, language, page, sort_by }
  );
};

/**
 * Get the list of your favorite TV shows.
 * @param {number} accountId - Required
 * @param {Object} options
 * @param {string} options.session_id - Required
 * @param {string} options.language
 * @param {number} options.page
 * @param {('created_at.asc'|'created_at.desc')} options.sort_by - Allowed values: created_at.asc, created_at.desc
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/account/get-favorite-tv-shows
 */
export const favoriteTvShows = async (accountId, options = {}) => {
  const { session_id, language, page, sort_by } = options;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!session_id) {
    return Promise.reject('A session_id option has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_FAVORITE_TV_SHOWS.replace(':id', accountId),
    { session_id, language, page, sort_by }
  );
};

/**
 * Get all of the lists created by an account. Will invlude private lists if you are the owner.
 * @param {number} accountId - Required
 * @param {Object} options
 * @param {string} options.session_id - Required
 * @param {string} options.language
 * @param {number} options.page
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/account/get-created-lists
 */
export const lists = async (accountId, options = {}) => {
  const { session_id, language, page } = options;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!session_id) {
    return Promise.reject('A session_id option has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_LISTS.replace(':id', accountId),
    { session_id, language, page }
  );
};

/**
 * This method allows you to mark a movie or TV show as a favorite item.
 * @param {number} accountId - Required
 * @param {string} sessionId - Required
 * @param {Object} body - Required
 * @param {('movie'|'tv')} body.media_type - Required
 * @param {number} body.media_id - Required
 * @param {boolean} body.favorite - Required
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/account/mark-as-favorite
 */
export const markAsFavorite = async (accountId, sessionId, body = {}) => {
  const { media_type, media_id, favorite } = body;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!sessionId) {
    return Promise.reject('A sessionId has to be provided');
  }

  if (!body || !Object.keys(body).length) {
    return Promise.reject(
      'A body must have a media_type, media_id and favorite keys'
    );
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_MARK_AS_FAVORITE.replace(':id', accountId).concat(
      `?session_id=${sessionId}`
    ),
    { media_type, media_id, favorite },
    'post'
  );
};

/**
 * Get a list of all the movies you have added to your watchlist.
 * @param {number} accountId - Required
 * @param {Object} options
 * @param {string} options.session_id - Required
 * @param {string} options.language
 * @param {number} options.page
 * @param {('created_at.asc'|'created_at.desc')} options.sort_by - Allowed values: created_at.asc, created_at.desc
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/account/get-movie-watchlist
 */
export const movieWatchlist = async (accountId, options = {}) => {
  const { session_id, language, page, sort_by } = options;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!session_id) {
    return Promise.reject('A session_id option has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_MOVIE_WATCHLIST.replace(':id', accountId),
    { session_id, language, page, sort_by }
  );
};

/**
 * Get a list of all the movies you have rated.
 * @param {number} accountId - Required
 * @param {Object} options
 * @param {string} options.session_id - Required
 * @param {string} options.language
 * @param {number} options.page
 * @param {('created_at.asc'|'created_at.desc')} options.sort_by - Allowed values: created_at.asc, created_at.desc
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/account/get-rated-movies
 */
export const ratedMovies = async (accountId, options = {}) => {
  const { session_id, language, page, sort_by } = options;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!session_id) {
    return Promise.reject('A session_id option has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_RATED_MOVIES.replace(':id', accountId),
    { session_id, language, page, sort_by }
  );
};

/**
 * Get a list of all the TV shows you have rated.
 * @param {number} accountId - Required
 * @param {Object} options
 * @param {string} options.session_id - Required
 * @param {string} options.language
 * @param {number} options.page
 * @param {('created_at.asc'|'created_at.desc')} options.sort_by - Allowed values: created_at.asc, created_at.desc
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/account/get-rated-tv-shows
 */
export const ratedTvShows = async (accountId, options = {}) => {
  const { session_id, language, page, sort_by } = options;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!session_id) {
    return Promise.reject('A session_id option has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_RATED_TV_SHOWS.replace(':id', accountId),
    { session_id, language, page, sort_by }
  );
};

/**
 * Get a list of all the TV episodes you have rated.
 * @param {number} accountId - Required
 * @param {Object}  options
 * @param {string}  options.session_id - Required
 * @param {string}  options.language
 * @param {number}  options.page
 * @param {('created_at.asc'|'created_at.desc')} options.sort_by - Allowed values: created_at.asc, created_at.desc
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/account/get-rated-tv-episodes
 */
export const ratedTvEpisodes = async (accountId, options = {}) => {
  const { session_id, language, page, sort_by } = options;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!session_id) {
    return Promise.reject('A session_id option has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_RATED_TV_SHOWS_EPISODES.replace(':id', accountId),
    { session_id, language, page, sort_by }
  );
};

/**
 * Get a list of all the TV shows you have added to your watchlist.
 * @param {number} accountId - Required
 * @param {Object} options
 * @param {string} options.session_id - Required
 * @param {string} options.language
 * @param {number} options.page
 * @param {('created_at.asc'|'created_at.desc')} options.sort_by - Allowed values: created_at.asc, created_at.desc
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/account/get-tv-show-watchlist
 */
export const tvShowWatchlist = async (accountId, options = {}) => {
  const { session_id, language, page, sort_by } = options;
  if (!accountId && accountId !== 0) {
    return Promise.reject('An accountId has to be provided');
  }

  if (!session_id) {
    return Promise.reject('A session_id option has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.ACCOUNT_MOVIE_WATCHLIST.replace(':id', accountId),
    { session_id, language, page, sort_by }
  );
};
