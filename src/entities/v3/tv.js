import { makeHttpRequest } from 'utils/utils';
import urls from 'urls/urls';

/**
 * @module tv
 */

/**
 * Grab the following account states for a session:
 * TV show rating, If it belongs to your watchlist and If it belongs to your favourite list
 * @param {number} tvId - Required
 * @param {Object} options
 * @param {string} options.session_id
 * @param {string} options.guest_session_id
 * @param {string} options.language
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-tv-account-states
 */
export const accountStates = async (tvId, options = {}) => {
  const { session_id, guest_session_id, language } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  if (session_id || guest_session_id) {
    return await makeHttpRequest(
      urls.v3.TV_ACCOUNT_STATES.replace(':id', tvId),
      { session_id, guest_session_id, language }
    );
  }

  return Promise.reject(
    'A session_id or a guest_session_id has to be provided'
  );
};

/**
 * Get a list of TV shows that are airing today. This query is purely day based as we do not currently support airing times.
 * You can specify a timezone to offset the day calculation. Without a specified timezone, this query defaults to EST (Eastern Time UTC-05:00).
 * @param {Object} options
 * @param {string} options.language
 * @param {number} options.page
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-tv-airing-today
 */
export const airingToday = async (options = {}) => {
  const { language, page } = options;

  return await makeHttpRequest(urls.v3.TV_AIRING_TODAY, { language, page });
};

/**
 * Returns all of the alternative titles for a TV show.
 * @param {number} tvId - Required
 * @param {Object} options
 * @param {string} options.language
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-tv-alternative-titles
 */
export const alternativeTitles = async (tvId, options = {}) => {
  const { language } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TV_ALTERNATIVE_TITLES.replace(':id', tvId),
    { language }
  );
};

/**
 * Get the changes for a TV show. By default only the last 24 hours are returned.
 * You can query up to 14 days in a single query by using the start_date and end_date options.
 * @param {number} tvId - Required
 * @param {Object} options
 * @param {string} options.start_date
 * @param {string} options.end_date
 * @param {number} options.page
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-tv-changes
 */
export const changes = async (tvId, options = {}) => {
  const { start_date, end_date, page } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  return await makeHttpRequest(urls.v3.TV_CHANGES.replace(':id', tvId), {
    start_date,
    end_date,
    page,
  });
};

/**
 * Get the list of content ratings (certifications) that have been added to a TV show.
 * @param {number} tvId - Required
 * @param {Object} options
 * @param {string} options.language
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-tv-content-ratings
 */
export const contentRatings = async (tvId, options = {}) => {
  const { language } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TV_CONTENT_RATINGS.replace(':id', tvId),
    { language }
  );
};

/**
 * Get the credits (cast and crew) that have been added to a TV show.
 * @param {number} tvId - Required
 * @param {Object} options
 * @param {string} options.language
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-tv-credits
 */
export const credits = async (tvId, options = {}) => {
  const { language } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  return await makeHttpRequest(urls.v3.TV_CREDITS.replace(':id', tvId), {
    language,
  });
};

/**
 * Remove your rating for a TV show.
 * @param {number} tvId
 * @param {Object} options
 * @param {string} options.session_id
 * @param {string} options.guest_session_id
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/delete-tv-show-rating
 */
export const deleteRating = async (tvId, options = {}) => {
  const { session_id, guest_session_id } = options;
  if (!tvId) {
    return Promise.reject('A tvId has to be provided');
  }

  if (session_id || guest_session_id) {
    return await makeHttpRequest(
      urls.v3.TV_RATING.replace(':id', tvId),
      { session_id, guest_session_id },
      'delete'
    );
  }

  return Promise.reject(
    'A session_id or a guest_session_id has to be provided'
  );
};

/**
 * Get the primary TV show details by id.
 * @param {number} tvId - Required
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.append_to_response
 * @param {string} options.include_image_language
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-tv-details
 */
export const details = async (tvId, options = {}) => {
  const { language, append_to_response, include_image_language } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  return await makeHttpRequest(urls.v3.TV_DETAILS.replace(':id', tvId), {
    language,
    append_to_response,
    include_image_language,
  });
};

/**
 * Get all of the episode groups that have been created for a TV show.
 * With a group ID you can call the tvEpisodeGroups.details method.
 * @param {number} tvId - Required
 * @param {Object} options
 * @param {string} options.language
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-tv-credits
 */
export const episodeGroups = async (tvId, options = {}) => {
  const { language } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  return await makeHttpRequest(urls.v3.TV_EPISODE_GROUPS.replace(':id', tvId), {
    language,
  });
};

/**
 * Get the external ids for a TV show. We currently support the following external sources.
 * IMDB ID, TVDB ID, Freebase MID, Freebase ID, TVRage ID
 * @param {number} tvId - Required
 * @param {Object} options
 * @param {string} options.language
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-tv-external-ids
 */
export const externalIds = async (tvId, options = {}) => {
  const { language } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  return await makeHttpRequest(urls.v3.TV_EXTERNAL_IDS.replace(':id', tvId), {
    language,
  });
};

/**
 * Get the images that belong to a TV show.
 * Querying images with a language parameter will filter the results.
 * If you want to include a fallback language (especially useful for backdrops)
 * you can use the include_image_language option.
 * This should be a comma separated value like so: include_image_language=en,null.
 * @param {number} tvId - Required
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.include_image_language
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-tv-images
 */
export const images = async (tvId, options = {}) => {
  const { language, include_image_language } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  return await makeHttpRequest(urls.v3.TV_IMAGES.replace(':id', tvId), {
    language,
    include_image_language,
  });
};

/**
 * Get the keywords that have been added to a TV show.
 * @param {number} tvId - Required
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-tv-keywords
 */
export const keywords = async tvId => {
  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  return await makeHttpRequest(urls.v3.TV_KEYWORDS.replace(':id', tvId));
};

/**
 * Get the most newly created TV show. This is a live response and will continuously change.
 * @param {Object} options
 * @param {string} options.language
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-latest-tv
 */
export const latest = async (options = {}) => {
  const { language } = options;

  return await makeHttpRequest(urls.v3.TV_LATEST, { language });
};

/**
 * Get a list of shows that are currently on the air.
 * This query looks for any TV show that has an episode with an air date in the next 7 days.
 * @param {Object} options
 * @param {string} options.language
 * @param {number} options.page
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-tv-on-the-air
 */
export const onTheAir = async (options = {}) => {
  const { language, page } = options;

  return await makeHttpRequest(urls.v3.TV_ON_THE_AIR, { language, page });
};

/**
 * Get a list of the current popular TV shows on TMDb.
 * This list updates daily.
 * @param {Object} options
 * @param {string} options.language
 * @param {number} options.page
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-popular-tv-shows
 */
export const popular = async (options = {}) => {
  const { language, page } = options;

  return await makeHttpRequest(urls.v3.TV_POPULAR, {
    language,
    page,
  });
};

/**
 * Rate a TV episode.
 * @param {number} tvId - Required
 * @param {rating} rating - between 0.5 and 10.0
 * @param {Object} options
 * @param {string} options.session_id
 * @param {string} options.guest_session_id
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/rate-tv-show
 */
export const rate = async (tvId, rating, options = {}) => {
  const { session_id, guest_session_id } = options;
  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  if (!rating) {
    return Promise.reject('A rating has to be provided');
  }

  if (session_id || guest_session_id) {
    const queryParam = session_id
      ? `?session_id=${session_id}`
      : `?guest_session_id=${guest_session_id}`;
    return await makeHttpRequest(
      urls.v3.TV_RATING.replace(':id', tvId).concat(queryParam),
      { value: rating },
      'post'
    );
  }

  return Promise.reject(
    'A session_id or a guest_session_id has to be provided'
  );
};

/**
 * Get the list of TV show recommendations for this item.
 * @param {number} tvId - Required
 * @param {Object} options
 * @param {string} options.language
 * @param {number} options.page
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-tv-recommendations
 */
export const recommendations = async (tvId, options = {}) => {
  const { language, page } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TV_RECOMMENDATIONS.replace(':id', tvId),
    { language, page }
  );
};

/**
 * Get the reviews for a TV show.
 * @param {number} tvId - Required
 * @param {Object} options
 * @param {string} options.language
 * @param {number} options.page
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-tv-reviews
 */
export const reviews = async (tvId, options = {}) => {
  const { language, page } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  return await makeHttpRequest(urls.v3.TV_REVIEWS.replace(':id', tvId), {
    language,
    page,
  });
};

/**
 * Get a list of seasons or episodes that have been screened in a film festival or theatre.
 * @param {number} tvId - Required
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-screened-theatrically
 */
export const screenedTheatrically = async tvId => {
  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TV_SCREENED_THEATRICALLY.replace(':id', tvId)
  );
};

/**
 * Get a list of similar TV shows. These items are assembled by looking at keywords and genres.
 * @param {number} tvId - Required
 * @param {Object} options
 * @param {string} options.language
 * @param {number} options.page
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-similar-tv-shows
 */
export const similar = async (tvId, options = {}) => {
  const { language, page } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  return await makeHttpRequest(urls.v3.TV_SIMILAR.replace(':id', tvId), {
    language,
    page,
  });
};

/**
 * Get a list of the top rated TV shows on TMDb.
 * @param {Object} options
 * @param {string} options.language
 * @param {number} options.page
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-top-rated-tv
 */
export const topRated = async (options = {}) => {
  const { language, page } = options;

  return makeHttpRequest(urls.v3.TV_TOP_RATED, { language, page });
};

/**
 * Get a list of the translations that exist for a TV show.
 * @param {number} tvId - Required
 * @param {Object} options
 * @param {string} options.language
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-tv-translations
 */
export const translations = async (tvId, options = {}) => {
  const { language } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  return await makeHttpRequest(urls.v3.TV_TRANSLATIONS.replace(':id', tvId), {
    language,
  });
};

/**
 * Get the videos that have been added to a TV show.
 * @param {number} tvId - Required
 * @param {Object} options
 * @param {string} options.language
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv/get-tv-videos
 */
export const videos = async (tvId, options = {}) => {
  const { language } = options;

  if (!tvId && tvId !== 0) {
    return Promise.reject('A tvId has to be provided');
  }

  return await makeHttpRequest(urls.v3.TV_VIDEOS.replace(':id', tvId), {
    language,
  });
};
