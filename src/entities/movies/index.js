import { makeRequest } from '../../utils';
import * as urls from '../../urls';

/**
 * Grab the following account states for a session:
 * - Movie rating
 * - If it belongs to your watchlist
 * - If it belongs to your favourite list
 * @param {number} movieId
 * @param {Object} options
 * @param {string} options.sessionId
 * @param {string} options.guestSessionId
 * @see https://developers.themoviedb.org/3/movies/get-movie-account-states
 */
export const accountStates = async (movieId, options = {}) => {
  const { sessionId, guestSessionId } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  if (sessionId || guestSessionId) {
    return await makeRequest(
      urls.MOVIES_ACCOUNT_STATES.replace(':id', movieId),
      { sessionId, guestSessionId }
    );
  }

  return Promise.reject('A sessionId or a guestSessionId has to be provided');
};

/**
 * Get all of the alternative titles for a movie.
 * @param {number} movieId
 * @param {Object} options
 * @param {string} options.country
 * @see https://developers.themoviedb.org/3/movies/get-movie-alternative-titles
 */
export const alternativeTitles = async (movieId, options = {}) => {
  const { country } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return await makeRequest(
    urls.MOVIES_ALTERNATIVE_TITLES.replace(':id', movieId),
    { country }
  );
};

/**
 * Get the changes for a movie. By default only the last 24 hours are returned.
 * You can query up to 14 days in a single query by using the startDate and endDate query parameters.
 * @param {number} movieId
 * @param {Object} options
 * @param {string} options.startDate
 * @param {string} options.endDate
 * @param {number} options.page
 * @see https://developers.themoviedb.org/3/movies/get-movie-changes
 */
export const changes = async (movieId, options = {}) => {
  const { startDate, endDate } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return await makeRequest(urls.MOVIES_CHANGES.replace(':id', movieId), {
    startDate,
    endDate,
  });
};

/**
 * Get the cast and crew for a movie.
 * @param {number} movieId
 * @see https://developers.themoviedb.org/3/movies/get-movie-credits
 */
export const credits = async movieId => {
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return await makeRequest(urls.MOVIES_CREDITS.replace(':id', movieId));
};

/**
 * Get the primary information about a movie.
 * @param {number} movieId
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.appendToResponse
 * @see https://developers.themoviedb.org/3/movies/get-movie-details
 */
export const details = async (movieId, options = {}) => {
  const { language, appendToResponse } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return await makeRequest(urls.MOVIES_DETAILS.replace(':id', movieId), {
    language,
    appendToResponse,
  });
};

/**
 * Get the external ids for a movie.
 * We currently support the following external sources: IMDB ID, Facebook, Instagram, Twitter.
 * @param {number} movieId
 * @see https://developers.themoviedb.org/3/movies/get-movie-external-ids
 */
export const externalIds = async movieId => {
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return makeRequest(urls.MOVIES_EXTERNAL_IDS.replace(':id', movieId));
};

/**
 * Get the images that belong to a movie.
 * Querying images with a language parameter will filter the results.
 * If you want to include a fallback language (especially useful for backdrops) you can use the includeImageLanguage parameter.
 * This should be a comma separated value like so: { includeImageLanguage: 'en,null' }.
 * @param {number} movieId
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.includeImageLanguage
 */
export const images = async (movieId, options = {}) => {
  const { language, includeImageLanguage } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return makeRequest(urls.MOVIES_IMAGES.replace(':id', movieId), {
    language,
    includeImageLanguage,
  });
};

/**
 * Get the keywords that have been added to a movie.
 * @param {number} movieId
 */
export const keywords = async movieId => {
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return makeRequest(urls.MOVIES_KEYWORDS.replace(':id', movieId));
};

/**
 * @description Get a list of the current popular movies on TMDb.
 * This list updates daily.
 * @param {Object} options
 * @param {string} options.language
 * @param {number} options.page
 * @param {string} options.region
 * @see https://developers.themoviedb.org/3/movies/get-popular-movies
 */
export const popular = async (options = {}) => {
  const { language, page, region } = options;

  return await makeRequest(urls.MOVIES_POPULAR, { language, page, region });
};

/**
 * Get the release date along with the certification for a movie.
 * Release dates support different types:
 * - Premiere
 * - Theatrical (limited)
 * - Theatrical
 * - Digital
 * - Physical
 * - TV
 * @param {number} movieId
 */
export const releaseDates = async movieId => {
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return makeRequest(urls.MOVIES_RELEASE_DATES.replace(':id', movieId));
};

/**
 * Get a list of translations that have been created for a movie.
 * @param {number} movieId
 */
export const translations = async movieId => {
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return makeRequest(urls.MOVIES_TRANSLATIONS.replace(':id', movieId));
};

/**
 * Get the videos that have been added to a movie.
 * @param {nuber} movieId
 */
export const videos = async movieId => {
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return makeRequest(urls.MOVIES_VIDEOS.replace(':id', movieId));
};
