import { makeHttpRequest } from '../../../utils';
import urls from '../../../urls';

/**
 * @module account
 */

/**
 * Get the list of movies you have marked as a favorite.
 * @param {string} accountId - Required
 * @param {Object} options
 * @param {number} options.page
 * @param {string} options.sort_by - Allowed values: created_at.asc, created_at.desc, release_date.asc,
 * release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc,
 * @returns Promise
 * @see https://developers.themoviedb.org/4/account/get-account-favorite-movies
 */
export const favoriteMovies = async (accountId, options = {}) => {
  const { page, sort_by } = options;

  if (!accountId) {
    return Promise.reject('An accountId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_FAVORITE_MOVIES.replace(':id', accountId),
    { page, sort_by }
  );
};

/**
 * Get the list of TV shows you have marked as a favorite.
 * @param {string} accountId - Required
 * @param {Object} options
 * @param {number} options.page
 * @param {string} options.sort_by - Allowed values: created_at.asc, created_at.desc, release_date.asc,
 * release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc,
 * @returns Promise
 * @see https://developers.themoviedb.org/4/account/get-account-favorite-tv-shows
 */
export const favoriteTvShows = async (accountId, options = {}) => {
  const { page, sort_by } = options;

  if (!accountId) {
    return Promise.reject('An accountId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_FAVORITE_TV_SHOWS.replace(':id', accountId),
    { page, sort_by }
  );
};

/**
 * Get all of the lists you've created.
 * @param {string} accountId - Required
 * @param {Object} options
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/4/account/get-account-lists
 */
export const lists = async (accountId, options = {}) => {
  const { page } = options;

  if (!accountId) {
    return Promise.reject('An accountId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_LISTS.replace(':id', accountId),
    { page }
  );
};

/**
 * Get a list of your personal movie recommendations.
 * @param {string} accountId - Required
 * @param {Object} options
 * @param {number} options.page
 * @param {string} options.sort_by - Allowed values: created_at.asc, created_at.desc, release_date.asc,
 * release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc,
 * @returns Promise
 * @see https://developers.themoviedb.org/4/account/get-account-movie-recommendations
 */
export const movieRecommendations = async (accountId, options = {}) => {
  const { page, sort_by } = options;

  if (!accountId) {
    return Promise.reject('An accountId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_MOVIE_RECOMMENDATIONS.replace(':id', accountId),
    { page, sort_by }
  );
};

/**
 * Get the list of movies you have added to your watchlist.
 * @param {string} accountId - Required
 * @param {Object} options
 * @param {number} options.page
 * @param {string} options.sort_by - Allowed values: created_at.asc, created_at.desc, release_date.asc,
 * release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc,
 * @returns Promise
 * @see https://developers.themoviedb.org/4/account/get-account-movie-watchlist
 */
export const movieWatchlist = async (accountId, options = {}) => {
  const { page, sort_by } = options;

  if (!accountId) {
    return Promise.reject('An accountId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_MOVIE_WATCHLIST.replace(':id', accountId),
    { page, sort_by }
  );
};

/**
 * Get the list of movies you have rated.
 * @param {string} accountId - Required
 * @param {Object} options
 * @param {number} options.page
 * @param {string} options.sort_by - Allowed values: created_at.asc, created_at.desc, release_date.asc,
 * release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc,
 * @returns Promise
 * @see https://developers.themoviedb.org/4/account/get-account-rated-movies
 */
export const ratedMovies = async (accountId, options = {}) => {
  const { page, sort_by } = options;

  if (!accountId) {
    return Promise.reject('An accountId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_RATED_MOVIES.replace(':id', accountId),
    { page, sort_by }
  );
};

/**
 * Get the list of TV shows you have rated.
 * @param {string} accountId - Required
 * @param {Object} options
 * @param {number} options.page
 * @param {string} options.sort_by - Allowed values: created_at.asc, created_at.desc, release_date.asc,
 * release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc,
 * @returns Promise
 * @see https://developers.themoviedb.org/4/account/get-account-rated-tv-shows
 */
export const ratedTvShows = async (accountId, options = {}) => {
  const { page, sort_by } = options;

  if (!accountId) {
    return Promise.reject('An accountId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_RATED_TV_SHOWS.replace(':id', accountId),
    { page, sort_by }
  );
};

/**
 * Get a list of your personal TV show recommendations.
 * @param {string} accountId - Required
 * @param {Object} options
 * @param {number} options.page
 * @param {string} options.sort_by - Allowed values: created_at.asc, created_at.desc, release_date.asc,
 * release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc,
 * @returns Promise
 * @see https://developers.themoviedb.org/4/account/get-account-tv-show-recommendations
 */
export const tvShowRecommendations = async (accountId, options = {}) => {
  const { page, sort_by } = options;

  if (!accountId) {
    return Promise.reject('An accountId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_TV_SHOW_RECOMMENDATIONS.replace(':id', accountId),
    { page, sort_by }
  );
};

/**
 * Get the list of TV shows you have added to your watchlist.
 * @param {string} accountId - Required
 * @param {Object} options
 * @param {number} options.page
 * @param {string} options.sort_by - Allowed values: created_at.asc, created_at.desc, release_date.asc,
 * release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc,
 * @returns Promise
 * @see https://developers.themoviedb.org/4/account/get-account-tv-show-watchlist
 */
export const tvShowWatchlist = async (accountId, options = {}) => {
  const { page, sort_by } = options;

  if (!accountId) {
    return Promise.reject('An accountId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_TV_SHOW_WATCHLIST.replace(':id', accountId),
    { page, sort_by }
  );
};
