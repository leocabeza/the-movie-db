import { makeHttpRequest } from '../../../utils';
import urls from '../../../urls';

/**
 * @module guestSession
 */

/**
 * Get the rated movies for a guest session.
 * @param {string} guestSessionId - Required
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.sort_by - Allowed values: created_at.asc, created_at.desc
 * @returns Promise
 * @see https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-movies
 */
export const ratedMovies = async (guestSessionId, options = {}) => {
  const { language, sort_by } = options;
  if (!guestSessionId) {
    return Promise.reject('A guestSessionId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.GUEST_SESSION_RATED_MOVIES.replace(':id', guestSessionId),
    { language, sort_by }
  );
};

/**
 * Get the rated TV episodes for a guest session.
 * @param {string} guestSessionId - Required
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.sort_by - Allowed values: created_at.asc, created_at.desc
 * @returns Promise
 * @see https://developers.themoviedb.org/3/guest-sessions/get-gest-session-rated-tv-episodes
 */
export const ratedTvEpisodes = async (guestSessionId, options = {}) => {
  const { language, sort_by } = options;
  if (!guestSessionId) {
    return Promise.reject('A guestSessionId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.GUEST_SESSION_RATED_TV_EPISODES.replace(':id', guestSessionId),
    { language, sort_by }
  );
};

/**
 * Get the rated TV shows for a guest session.
 * @param {string} guestSessionId - Required
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.sort_by - Allowed values: created_at.asc, created_at.desc
 * @returns Promise
 * @see https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-tv-shows
 */
export const ratedTvShows = async (guestSessionId, options = {}) => {
  const { language, sort_by } = options;
  if (!guestSessionId) {
    return Promise.reject('A guestSessionId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.GUEST_SESSION_RATED_TV_SHOWS.replace(':id', guestSessionId),
    { language, sort_by }
  );
};
