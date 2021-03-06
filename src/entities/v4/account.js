import { makeHttpRequest } from 'utils/utils';
import urls from 'urls/urls';

/**
 * @module account
 */

/**
 * Get the list of movies you have marked as a favorite.
 * @param {string} accessToken - Required
 * @param {string} accountId - Required
 * @param {Object} options
 * @param {number} options.page
 * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by - Allowed values: created_at.asc, created_at.desc, release_date.asc,
 * release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc,
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/account/get-account-favorite-movies
 */
export const favoriteMovies = async (accessToken, accountId, options = {}) => {
  const { page, sort_by } = options;

  if (!accessToken) {
    return Promise.reject('An accessToken has to be provided');
  }

  if (!accountId) {
    return Promise.reject('An accountId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_FAVORITE_MOVIES.replace(':id', accountId),
    { page, sort_by },
    'get',
    { usev4: true, userAccessToken: accessToken }
  );
};

/**
 * Get the list of TV shows you have marked as a favorite.
 * @param {string} accessToken - Required
 * @param {string} accountId - Required
 * @param {Object} options
 * @param {number} options.page
 * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by - Allowed values: created_at.asc, created_at.desc, release_date.asc,
 * release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/account/get-account-favorite-tv-shows
 */
export const favoriteTvShows = async (accessToken, accountId, options = {}) => {
  const { page, sort_by } = options;

  if (!accessToken) {
    return Promise.reject('An accessToken has to be provided');
  }

  if (!accountId) {
    return Promise.reject('An accountId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_FAVORITE_TV_SHOWS.replace(':id', accountId),
    { page, sort_by },
    'get',
    { usev4: true, userAccessToken: accessToken }
  );
};

/**
 * Get all of the lists you have created.
 * @param {string} accessToken - Required
 * @param {string} accountId - Required
 * @param {Object} options
 * @param {number} options.page
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/account/get-account-lists
 */
export const lists = async (accessToken, accountId, options = {}) => {
  const { page } = options;

  if (!accessToken) {
    return Promise.reject('An accessToken has to be provided');
  }

  if (!accountId) {
    return Promise.reject('An accountId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_LISTS.replace(':id', accountId),
    { page },
    'get',
    { usev4: true, userAccessToken: accessToken }
  );
};

/**
 * Get a list of your personal movie recommendations.
 * @param {string} accessToken - Required
 * @param {string} accountId - Required
 * @param {Object} options
 * @param {number} options.page
 * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by - Allowed values: created_at.asc, created_at.desc, release_date.asc,
 * release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/account/get-account-movie-recommendations
 */
export const movieRecommendations = async (
  accessToken,
  accountId,
  options = {}
) => {
  const { page, sort_by } = options;

  if (!accessToken) {
    return Promise.reject('An accessToken has to be provided');
  }

  if (!accountId) {
    return Promise.reject('An accountId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_MOVIE_RECOMMENDATIONS.replace(':id', accountId),
    { page, sort_by },
    'get',
    { usev4: true, userAccessToken: accessToken }
  );
};

/**
 * Get the list of movies you have added to your watchlist.
 * @param {string} accessToken - Required
 * @param {string} accountId - Required
 * @param {Object} options
 * @param {number} options.page
 * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by - Allowed values: created_at.asc, created_at.desc, release_date.asc,
 * release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/account/get-account-movie-watchlist
 */
export const movieWatchlist = async (accessToken, accountId, options = {}) => {
  const { page, sort_by } = options;

  if (!accessToken) {
    return Promise.reject('An accessToken has to be provided');
  }

  if (!accountId) {
    return Promise.reject('An accountId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_MOVIE_WATCHLIST.replace(':id', accountId),
    { page, sort_by },
    'get',
    { usev4: true, userAccessToken: accessToken }
  );
};

/**
 * Get the list of movies you have rated.
 * @param {string} accessToken - Required
 * @param {string} accountId - Required
 * @param {Object} options
 * @param {number} options.page
 * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by - Allowed values: created_at.asc, created_at.desc, release_date.asc,
 * release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/account/get-account-rated-movies
 */
export const ratedMovies = async (accessToken, accountId, options = {}) => {
  const { page, sort_by } = options;

  if (!accessToken) {
    return Promise.reject('An accessToken has to be provided');
  }

  if (!accountId) {
    return Promise.reject('An accountId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_RATED_MOVIES.replace(':id', accountId),
    { page, sort_by },
    'get',
    { usev4: true, userAccessToken: accessToken }
  );
};

/**
 * Get the list of TV shows you have rated.
 * @param {string} accessToken - Required
 * @param {string} accountId - Required
 * @param {Object} options
 * @param {number} options.page
 * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by - Allowed values: created_at.asc, created_at.desc, release_date.asc,
 * release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/account/get-account-rated-tv-shows
 */
export const ratedTvShows = async (accessToken, accountId, options = {}) => {
  const { page, sort_by } = options;

  if (!accessToken) {
    return Promise.reject('An accessToken has to be provided');
  }

  if (!accountId) {
    return Promise.reject('An accountId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_RATED_TV_SHOWS.replace(':id', accountId),
    { page, sort_by },
    'get',
    { usev4: true, userAccessToken: accessToken }
  );
};

/**
 * Get a list of your personal TV show recommendations.
 * @param {string} accessToken - Required
 * @param {string} accountId - Required
 * @param {Object} options
 * @param {number} options.page
 * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by - Allowed values: created_at.asc, created_at.desc, release_date.asc,
 * release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/account/get-account-tv-show-recommendations
 */
export const tvShowRecommendations = async (
  accessToken,
  accountId,
  options = {}
) => {
  const { page, sort_by } = options;

  if (!accessToken) {
    return Promise.reject('An accessToken has to be provided');
  }

  if (!accountId) {
    return Promise.reject('An accountId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_TV_SHOW_RECOMMENDATIONS.replace(':id', accountId),
    { page, sort_by },
    'get',
    { usev4: true, userAccessToken: accessToken }
  );
};

/**
 * Get the list of TV shows you have added to your watchlist.
 * @param {string} accessToken - Required
 * @param {string} accountId - Required
 * @param {Object} options
 * @param {number} options.page
 * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by - Allowed values: created_at.asc, created_at.desc, release_date.asc,
 * release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/account/get-account-tv-show-watchlist
 */
export const tvShowWatchlist = async (accessToken, accountId, options = {}) => {
  const { page, sort_by } = options;

  if (!accessToken) {
    return Promise.reject('An accessToken has to be provided');
  }

  if (!accountId) {
    return Promise.reject('An accountId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_TV_SHOW_WATCHLIST.replace(':id', accountId),
    { page, sort_by },
    'get',
    { usev4: true, userAccessToken: accessToken }
  );
};
