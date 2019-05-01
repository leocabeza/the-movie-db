import { makeHttpRequest } from '../../utils';
import urls from '../../urls';

/**
 * @module tvEpisode
 */

/**
 * Get your rating for a episode.
 * @param {number} tvId - Required
 * @param {number} seasonNumber - Required
 * @param {number} episodeNumber - Required
 * @param {Object} options
 * @param {string} options.session_id
 * @param {string} options.guest_session_id
 * @returns Promise
 * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-account-states
 */
export const accountStates = async (
  tvId,
  seasonNumber,
  episodeNumber,
  options = {}
) => {
  const { session_id, guest_session_id } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  if (!seasonNumber && seasonNumber !== 0) {
    return Promise.reject('A seasonNumber has to be provided');
  }

  if (!episodeNumber && episodeNumber !== 0) {
    return Promise.reject('An episodeNumber has to be provided');
  }

  if (session_id || guest_session_id) {
    return await makeHttpRequest(
      urls.v3.TV_EPISODE_ACCOUNT_STATES.replace(':tvId', tvId)
        .replace(':seasonNumber', seasonNumber)
        .replace(':episodeNumber', episodeNumber),
      { session_id, guest_session_id }
    );
  }

  return Promise.reject(
    'A session_id or a guest_session_id has to be provided'
  );
};

/**
 * Get the changes for a TV episode. By default only the last 24 hours are returned.
 * @param {number} episodeId - Required
 * @param {Object} options
 * @param {string} options.start_date
 * @param {string} options.end_date
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-changes
 */
export const changes = async (episodeId, options = {}) => {
  const { start_date, end_date, page } = options;

  if (!episodeId && episodeId !== 0) {
    return Promise.reject('An episodeId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TV_EPISODE_CHANGES.replace(':episodeId', episodeId),
    { start_date, end_date, page }
  );
};

/**
 * Get the credits (cast, crew and guest stars) for a TV episode.
 * @param {number} tvId - Required
 * @param {number} seasonNumber - Required
 * @param {number} episodeNumber - Required
 * @returns Promise
 * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-credits
 */
export const credits = async (tvId, seasonNumber, episodeNumber) => {
  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  if (!seasonNumber && seasonNumber !== 0) {
    return Promise.reject('A seasonNumber has to be provided');
  }

  if (!episodeNumber && episodeNumber !== 0) {
    return Promise.reject('An episodeNumber has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TV_EPISODE_CREDITS.replace(':tvId', tvId)
      .replace(':seasonNumber', seasonNumber)
      .replace(':episodeNumber', episodeNumber)
  );
};

/**
 * Remove your rating for a TV episode.
 * @param {number} tvId - Required
 * @param {number} seasonNumber - Required
 * @param {number} episodeNumber - Required
 * @param {Object} options
 * @param {string} options.session_id
 * @param {string} options.guest_session_id
 * @returns Promise
 * @see https://developers.themoviedb.org/3/tv-episodes/delete-tv-episode-rating
 */
export const deleteRating = async (
  tvId,
  seasonNumber,
  episodeNumber,
  options = {}
) => {
  const { session_id, guest_session_id } = options;
  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  if (!seasonNumber && seasonNumber !== 0) {
    return Promise.reject('A seasonNumber has to be provided');
  }

  if (!episodeNumber && episodeNumber !== 0) {
    return Promise.reject('An episodeNumber has to be provided');
  }

  if (session_id || guest_session_id) {
    const queryParam = session_id
      ? `?session_id=${session_id}`
      : `?guest_session_id=${guest_session_id}`;
    return await makeHttpRequest(
      urls.v3.TV_EPISODE_RATING.replace(':tvId', tvId)
        .replace(':seasonNumber', seasonNumber)
        .replace(':episodeNumber', episodeNumber)
        .concat(queryParam),
      {},
      'delete'
    );
  }

  return Promise.reject(
    'A session_id or a guest_session_id has to be provided'
  );
};

/**
 * Get the TV episode details by id.
 * @param {number} tvId - Required
 * @param {number} seasonNumber - Required
 * @param {number} episodeNumber - Required
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.append_to_response
 * @returns Promise
 * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-details
 */
export const details = async (
  tvId,
  seasonNumber,
  episodeNumber,
  options = {}
) => {
  const { language, append_to_response } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  if (!seasonNumber && seasonNumber !== 0) {
    return Promise.reject('A seasonNumber has to be provided');
  }

  if (!episodeNumber && episodeNumber !== 0) {
    return Promise.reject('An episodeNumber has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TV_EPISODE_DETAILS.replace(':tvId', tvId)
      .replace(':seasonNumber', seasonNumber)
      .replace(':episodeNumber', episodeNumber),
    { language, append_to_response }
  );
};

/**
 * Get the external ids for a TV episode. We currently support the following external sources:
 * IMDB ID, TVDB ID, Freebase MID, Freebase ID, TVRage ID
 * @param {number} tvId - Required
 * @param {number} seasonNumber - Required
 * @param {number} episodeNumber - Required
 * @returns Promise
 * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-external-ids
 */
export const externalIds = async (tvId, seasonNumber, episodeNumber) => {
  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  if (!seasonNumber && seasonNumber !== 0) {
    return Promise.reject('A seasonNumber has to be provided');
  }

  if (!episodeNumber && episodeNumber !== 0) {
    return Promise.reject('An episodeNumber has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TV_EPISODE_EXTERNAL_IDS.replace(':tvId', tvId)
      .replace(':seasonNumber', seasonNumber)
      .replace(':episodeNumber', episodeNumber)
  );
};

/**
 * Get the images that belong to a TV episode.
 * Querying images with a language parameter will filter the results.
 * If you want to include a fallback language (especially useful for backdrops)
 * you can use the include_image_language option.
 * This should be a comma separated value like so: include_image_language=en,null.
 * @param {number} tvId - Required
 * @param {number} seasonNumber - Required
 * @param {number} episodeNumber - Required
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.include_image_language
 * @returns Promise
 * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-images
 */
export const images = async (
  tvId,
  seasonNumber,
  episodeNumber,
  options = {}
) => {
  const { language, include_image_language } = options;
  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  if (!seasonNumber && seasonNumber !== 0) {
    return Promise.reject('A seasonNumber has to be provided');
  }

  if (!episodeNumber && episodeNumber !== 0) {
    return Promise.reject('An episodeNumber has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TV_EPISODE_IMAGES.replace(':tvId', tvId)
      .replace(':seasonNumber', seasonNumber)
      .replace(':episodeNumber', episodeNumber),
    { language, include_image_language }
  );
};

/**
 * Rate a TV episode.
 * @param {number} tvId - Required
 * @param {number} seasonNumber - Required
 * @param {number} episodeNumber - Required
 * @param {rating} rating - between 0.5 and 10.0
 * @param {Object} options
 * @param {string} options.session_id
 * @param {string} options.guest_session_id
 * @returns Promise
 * @see https://developers.themoviedb.org/3/tv-episodes/rate-tv-episode
 */
export const rate = async (
  tvId,
  seasonNumber,
  episodeNumber,
  rating,
  options = {}
) => {
  const { session_id, guest_session_id } = options;
  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  if (!seasonNumber && seasonNumber !== 0) {
    return Promise.reject('A seasonNumber has to be provided');
  }

  if (!episodeNumber && episodeNumber !== 0) {
    return Promise.reject('An episodeNumber has to be provided');
  }

  if (!rating) {
    return Promise.reject('A rating has to be provided');
  }

  if (session_id || guest_session_id) {
    const queryParam = session_id
      ? `?session_id=${session_id}`
      : `?guest_session_id=${guest_session_id}`;
    return await makeHttpRequest(
      urls.v3.TV_EPISODE_RATING.replace(':tvId', tvId)
        .replace(':seasonNumber', seasonNumber)
        .replace(':episodeNumber', episodeNumber)
        .concat(queryParam),
      { value: rating },
      'post'
    );
  }

  return Promise.reject(
    'A session_id or a guest_session_id has to be provided'
  );
};

/**
 * Get the translation data for an episode.
 * @param {number} tvId - Required
 * @param {number} seasonNumber - Required
 * @param {number} episodeNumber - Required
 * @returns Promise
 * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-translations
 */
export const translations = async (tvId, seasonNumber, episodeNumber) => {
  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  if (!seasonNumber && seasonNumber !== 0) {
    return Promise.reject('A seasonNumber has to be provided');
  }

  if (!episodeNumber && episodeNumber !== 0) {
    return Promise.reject('An episodeNumber has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TV_EPISODE_TRANSLATIONS.replace(':tvId', tvId)
      .replace(':seasonNumber', seasonNumber)
      .replace(':episodeNumber', episodeNumber)
  );
};

/**
 * Get the videos that have been added to a TV episode.
 * @param {number} tvId - Required
 * @param {number} seasonNumber - Required
 * @param {number} episodeNumber - Required
 * @param {Object} options
 * @param {string} language
 * @returns Promise
 * @see https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-videos
 */
export const videos = async (
  tvId,
  seasonNumber,
  episodeNumber,
  options = {}
) => {
  const { language } = options;
  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  if (!seasonNumber && seasonNumber !== 0) {
    return Promise.reject('A seasonNumber has to be provided');
  }

  if (!episodeNumber && episodeNumber !== 0) {
    return Promise.reject('An episodeNumber has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TV_EPISODE_VIDEOS.replace(':tvId', tvId)
      .replace(':seasonNumber', seasonNumber)
      .replace(':episodeNumber', episodeNumber),
    { language }
  );
};
