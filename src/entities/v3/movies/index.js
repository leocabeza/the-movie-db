import { makeHttpRequest } from '../../../utils';
import urls from '../../../urls';

/**
 * @module movies
 */

/**
 * Grab the following account states for a session:
 * - Movie rating
 * - If it belongs to your watchlist
 * - If it belongs to your favourite list
 * @param {number} movieId
 * @param {Object} options
 * @param {string} options.sessionId
 * @param {string} options.guestSessionId
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-movie-account-states
 */
export const accountStates = async (movieId, options = {}) => {
  const { sessionId, guestSessionId } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  if (sessionId || guestSessionId) {
    return await makeHttpRequest(
      urls.v3.MOVIES_ACCOUNT_STATES.replace(':id', movieId),
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
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-movie-alternative-titles
 */
export const alternativeTitles = async (movieId, options = {}) => {
  const { country } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.MOVIES_ALTERNATIVE_TITLES.replace(':id', movieId),
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
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-movie-changes
 */
export const changes = async (movieId, options = {}) => {
  const { startDate, endDate } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return await makeHttpRequest(urls.v3.MOVIES_CHANGES.replace(':id', movieId), {
    startDate,
    endDate,
  });
};

/**
 * Get the cast and crew for a movie.
 * @param {number} movieId
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-movie-credits
 */
export const credits = async movieId => {
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return await makeHttpRequest(urls.v3.MOVIES_CREDITS.replace(':id', movieId));
};

/**
 * Remove your rating for a movie.
 * @param {number} movieId
 * @param {*} options
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/delete-movie-rating
 */
export const deleteRating = async (movieId, options = {}) => {
  const { sessionId, guestSessionId } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  if (sessionId || guestSessionId) {
    return await makeHttpRequest(
      urls.v3.MOVIES_DELETE_RATING.replace(':id', movieId),
      { sessionId, guestSessionId },
      'delete'
    );
  }

  return Promise.reject('A sessionId or a guestSessionId has to be provided');
};

/**
 * Get the primary information about a movie.
 * @param {number} movieId
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.appendToResponse
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-movie-details
 */
export const details = async (movieId, options = {}) => {
  const { language, appendToResponse } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return await makeHttpRequest(urls.v3.MOVIES_DETAILS.replace(':id', movieId), {
    language,
    appendToResponse,
  });
};

/**
 * Get the external ids for a movie.
 * We currently support the following external sources: IMDB ID, Facebook, Instagram, Twitter.
 * @param {number} movieId
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-movie-external-ids
 */
export const externalIds = async movieId => {
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return makeHttpRequest(urls.v3.MOVIES_EXTERNAL_IDS.replace(':id', movieId));
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
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-movie-images
 */
export const images = async (movieId, options = {}) => {
  const { language, includeImageLanguage } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return makeHttpRequest(urls.v3.MOVIES_IMAGES.replace(':id', movieId), {
    language,
    includeImageLanguage,
  });
};

/**
 * Get the keywords that have been added to a movie.
 * @param {number} movieId
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-movie-keywords
 */
export const keywords = async movieId => {
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return makeHttpRequest(urls.v3.MOVIES_KEYWORDS.replace(':id', movieId));
};

/**
 * Get the most newly created movie. This is a live response and will continuously change.
 * @param {Object} options
 * @param {string} options.language
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-latest-movie
 */
export const latest = async (options = {}) => {
  const { language } = options;

  return await makeHttpRequest(urls.v3.MOVIES_LATEST, { language });
};

/**
 * @param {number} movieId
 * @param {Object} options
 * @param {string} options.language
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-movie-lists
 */
export const lists = async (movieId, options = {}) => {
  const { language, page } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return makeHttpRequest(urls.v3.MOVIES_LISTS.replace(':id', movieId), {
    language,
    page,
  });
};

/**
 * Get a list of movies in theatres.
 * This is a release type query that looks for all movies that have a release type
 * of 2 or 3 within the specified date range.
 * You can optionally specify a region prameter which will narrow the search
 * to only look for theatrical release dates within the specified country.
 * @param {Object} options
 * @param {string} options.language
 * @param {number} options.page
 * @param {string} options.region
 * @see https://developers.themoviedb.org/3/movies/get-now-playing
 */
export const nowPlaying = async (options = {}) => {
  const { language, page, region } = options;
  return await makeHttpRequest(urls.v3.MOVIES_NOW_PLAYING, {
    language,
    page,
    region,
  });
};

/**
 * Get a list of the current popular movies on TMDb.
 * This list updates daily.
 * @param {Object} options
 * @param {string} options.language
 * @param {number} options.page
 * @param {string} options.region
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-popular-movies
 */
export const popular = async (options = {}) => {
  const { language, page, region } = options;

  return await makeHttpRequest(urls.v3.MOVIES_POPULAR, {
    language,
    page,
    region,
  });
};

/**
 * Rate a movie.
 * @param {number} movieId
 * @param {rating} rating - between 0.5 and 10.0
 * @param {Object} options
 * @param {string} guestSessionId
 * @param {string} sessionId
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/rate-movie
 */
export const rating = async (movieId, rating, options = {}) => {
  const { sessionId, guestSessionId } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  if (!rating) {
    return Promise.reject('A rating has to be provided');
  }

  if (sessionId || guestSessionId) {
    const queryParam = sessionId
      ? `?session_id=${sessionId}`
      : `?guest_session_id=${guestSessionId}`;
    return await makeHttpRequest(
      urls.v3.MOVIES_RATING.replace(':id', movieId).concat(queryParam),
      { value: rating },
      'post'
    );
  }

  return Promise.reject('A sessionId or a guestSessionId has to be provided');
};

/**
 * Get a list of recommended movies for a movie.
 * @param {number} movieId
 * @param {Object} options
 * @param {string} options.language
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-movie-recommendations
 */
export const recommendations = async (movieId, options = {}) => {
  const { language, page } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return makeHttpRequest(
    urls.v3.MOVIES_RECOMMENDATIONS.replace(':id', movieId),
    {
      language,
      page,
    }
  );
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
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-movie-release-dates
 */
export const releaseDates = async movieId => {
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return makeHttpRequest(urls.v3.MOVIES_RELEASE_DATES.replace(':id', movieId));
};

/**
 * Get the user reviews for a movie.
 * @param {number} movieId
 * @param {Object} options
 * @param {string} options.language
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-movie-reviews
 */
export const reviews = async (movieId, options = {}) => {
  const { language, page } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return makeHttpRequest(urls.v3.MOVIES_REVIEWS.replace(':id', movieId), {
    language,
    page,
  });
};

/**
 * Get a list of similar movies. This is not the same as the "Recommendation" system you see on the website.
 * These items are assembled by looking at keywords and genres.
 * @param {number} movieId
 * @param {Object} options
 * @param {string} options.language
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-similar-movies
 */
export const similar = async (movieId, options = {}) => {
  const { language, page } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return makeHttpRequest(urls.v3.MOVIES_SIMILAR.replace(':id', movieId), {
    language,
    page,
  });
};

/**
 * Get the top rated movies on TMDb.
 * @param {Object} options
 * @param {string} options.language
 * @param {number} options.page
 * @param {string} options.region
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-top-rated-movies
 */
export const topRated = async (options = {}) => {
  const { language, page, region } = options;

  return makeHttpRequest(urls.v3.MOVIES_TOP_RATED, { language, page, region });
};

/**
 * Get a list of translations that have been created for a movie.
 * @param {number} movieId
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-movie-translations
 */
export const translations = async movieId => {
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return makeHttpRequest(urls.v3.MOVIES_TRANSLATIONS.replace(':id', movieId));
};

/**
 * Get a list of upcoming movies in theatres.
 * This is a release type query that looks for all movies that
 * have a release type of 2 or 3 within the specified date range.
 * You can optionally specify a region parameter which will narrow the search to only look
 * for theatrical release dates within the specified country.
 * @param {Object} options
 * @param {string} options.language
 * @param {number} options.page
 * @param {string} options.region
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-upcoming
 */
export const upcoming = async (options = {}) => {
  const { language, page, region } = options;

  return makeHttpRequest(urls.v3.MOVIES_UPCOMING, { language, page, region });
};

/**
 * Get the videos that have been added to a movie.
 * @param {number} movieId
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-movie-videos
 */
export const videos = async movieId => {
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return makeHttpRequest(urls.v3.MOVIES_VIDEOS.replace(':id', movieId));
};
