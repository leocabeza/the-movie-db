import { makeHttpRequest } from 'utils/utils';
import urls from 'urls/urls';

/**
 * @module tvSeason
 */

/**
 * Returns all of the user ratings for the season's episodes.
 * @param {number} tvId - Required
 * @param {number} seasonNumber - Required
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.session_id
 * @param {string} options.guest_session_id
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-account-states
 */
export const accountStates = async (tvId, seasonNumber, options = {}) => {
  const { language, session_id, guest_session_id } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  if (!seasonNumber && seasonNumber !== 0) {
    return Promise.reject('A seasonNumber has to be provided');
  }

  if (session_id || guest_session_id) {
    return await makeHttpRequest(
      urls.v3.TV_SEASON_ACCOUNT_STATES.replace(':tvId', tvId).replace(
        ':seasonNumber',
        seasonNumber
      ),
      { language, session_id, guest_session_id }
    );
  }

  return Promise.reject(
    'A session_id or a guest_session_id has to be provided'
  );
};

/**
 * Get the changes for a TV season. By default only the last 24 hours are returned.
 * You can query up to 14 days in a single query by using the start_date and end_date query options.
 * @param {number} seasonId - Required
 * @param {Object} options
 * @param {string} options.start_date
 * @param {string} options.end_date
 * @param {number} options.page
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-changes
 */
export const changes = async (seasonId, options = {}) => {
  const { start_date, end_date, page } = options;

  if (!seasonId && seasonId !== 0) {
    return Promise.reject('A seasonId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TV_SEASON_CHANGES.replace(':seasonId', seasonId),
    { start_date, end_date, page }
  );
};

/**
 * Get the credits for TV season.
 * @param {number} tvId - Required
 * @param {number} seasonNumber - Required
 * @param {Object} options
 * @param {string} options.language
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-credits
 */
export const credits = async (tvId, seasonNumber, options = {}) => {
  const { language } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  if (!seasonNumber && seasonNumber !== 0) {
    return Promise.reject('A seasonNumber has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TV_SEASON_CREDITS.replace(':tvId', tvId).replace(
      ':seasonNumber',
      seasonNumber
    ),
    { language }
  );
};

/**
 * Get the TV season details by id.
 * @param {number} tvId - Required
 * @param {number} seasonNumber - Required
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.append_to_response
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-details
 */
export const details = async (tvId, seasonNumber, options = {}) => {
  const { language, append_to_response } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  if (!seasonNumber && seasonNumber !== 0) {
    return Promise.reject('A seasonNumber has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TV_SEASON_DETAILS.replace(':tvId', tvId).replace(
      ':seasonNumber',
      seasonNumber
    ),
    { language, append_to_response }
  );
};

/**
 * Get the external ids for a TV season. We currently support the following external sources.
 * TVDB ID, Freebase MID, Freebase ID, TVRage ID
 * @param {number} tvId - Required
 * @param {number} seasonNumber - Required
 * @param {Object} options
 * @param {string} options.language
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-external-ids
 */
export const externalIds = async (tvId, seasonNumber, options = {}) => {
  const { language } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  if (!seasonNumber && seasonNumber !== 0) {
    return Promise.reject('A seasonNumber has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TV_SEASON_EXTERNAL_IDS.replace(':tvId', tvId).replace(
      ':seasonNumber',
      seasonNumber
    ),
    { language }
  );
};

/**
 * Get the images that belong to a TV season.
 * Querying images with a language parameter will filter the results.
 * If you want to include a fallback language (especially useful for backdrops)
 * you can use the include_image_language option.
 * This should be a: include_image_language comma separated value like so: include_image_language: "en,null".
 * @param {number} tvId - Required
 * @param {number} seasonNumber - Required
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.include_image_language
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-images
 */
export const images = async (tvId, seasonNumber, options = {}) => {
  const { language, include_image_language } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  if (!seasonNumber && seasonNumber !== 0) {
    return Promise.reject('A seasonNumber has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TV_SEASON_IMAGES.replace(':tvId', tvId).replace(
      ':seasonNumber',
      seasonNumber
    ),
    { language, include_image_language }
  );
};

/**
 * Get the videos that have been added to a TV season.
 * @param {number} tvId - Required
 * @param {number} seasonNumber - Required
 * @param {Object} options
 * @param {string} options.language
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv-seasons/get-tv-season-videos
 */
export const videos = async (tvId, seasonNumber, options = {}) => {
  const { language } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  if (!seasonNumber && seasonNumber !== 0) {
    return Promise.reject('A seasonNumber has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TV_SEASON_VIDEOS.replace(':tvId', tvId).replace(
      ':seasonNumber',
      seasonNumber
    ),
    { language }
  );
};
