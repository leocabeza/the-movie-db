import { makeHttpRequest } from '../../utils';
import urls from '../../urls';

/**
 * @module movies
 */

/**
 * Grab the following account states for a session:
 * - Movie rating
 * - If it belongs to your watchlist
 * - If it belongs to your favourite list
 * @param {number} movieId - Required
 * @param {Object} options
 * @param {string} options.session_id
 * @param {string} options.guest_session_id
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-movie-account-states
 */
export const accountStates = async (movieId, options = {}) => {
  const { session_id, guest_session_id } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  if (session_id || guest_session_id) {
    return await makeHttpRequest(
      urls.v3.MOVIE_ACCOUNT_STATES.replace(':id', movieId),
      { session_id, guest_session_id }
    );
  }

  return Promise.reject(
    'A session_id or a guest_session_id has to be provided'
  );
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
    urls.v3.MOVIE_ALTERNATIVE_TITLES.replace(':id', movieId),
    { country }
  );
};

/**
 * Get the changes for a movie. By default only the last 24 hours are returned.
 * You can query up to 14 days in a single query by using the start_date and end_date query parameters.
 * @param {number} movieId
 * @param {Object} options
 * @param {string} options.start_date
 * @param {string} options.end_date
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-movie-changes
 */
export const changes = async (movieId, options = {}) => {
  const { start_date, end_date } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return await makeHttpRequest(urls.v3.MOVIE_CHANGES.replace(':id', movieId), {
    start_date,
    end_date,
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

  return await makeHttpRequest(urls.v3.MOVIE_CREDITS.replace(':id', movieId));
};

/**
 * Remove your rating for a movie.
 * @param {number} movieId
 * @param {Object} options
 * @param {string} options.session_id
 * @param {string} options.guest_session_id
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/delete-movie-rating
 */
export const deleteRating = async (movieId, options = {}) => {
  const { session_id, guest_session_id } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  if (session_id || guest_session_id) {
    return await makeHttpRequest(
      urls.v3.MOVIE_DELETE_RATING.replace(':id', movieId),
      { session_id, guest_session_id },
      'delete'
    );
  }

  return Promise.reject(
    'A session_id or a guest_session_id has to be provided'
  );
};

/**
 * Get the primary information about a movie.
 * @param {number} movieId
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.append_to_response
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-movie-details
 */
export const details = async (movieId, options = {}) => {
  const { language, append_to_response } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return await makeHttpRequest(urls.v3.MOVIE_DETAILS.replace(':id', movieId), {
    language,
    append_to_response,
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

  return makeHttpRequest(urls.v3.MOVIE_EXTERNAL_IDS.replace(':id', movieId));
};

/**
 * Get the images that belong to a movie.
 * Querying images with a language parameter will filter the results.
 * If you want to include a fallback language (especially useful for backdrops) you can use the include_image_language parameter.
 * This should be a comma separated value like so: { include_image_language: "en,null" }.
 * @param {number} movieId
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.include_image_language
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/get-movie-images
 */
export const images = async (movieId, options = {}) => {
  const { language, include_image_language } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  return makeHttpRequest(urls.v3.MOVIE_IMAGES.replace(':id', movieId), {
    language,
    include_image_language,
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

  return makeHttpRequest(urls.v3.MOVIE_KEYWORDS.replace(':id', movieId));
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

  return await makeHttpRequest(urls.v3.MOVIE_LATEST, { language });
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

  return makeHttpRequest(urls.v3.MOVIE_LISTS.replace(':id', movieId), {
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
  return await makeHttpRequest(urls.v3.MOVIE_NOW_PLAYING, {
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

  return await makeHttpRequest(urls.v3.MOVIE_POPULAR, {
    language,
    page,
    region,
  });
};

/**
 * Rate a movie.
 * @param {number} movieId - Required
 * @param {rating} rating - between 0.5 and 10.0
 * @param {Object} options
 * @param {string} options.guestSessionId
 * @param {string} options.sessionId
 * @returns Promise
 * @see https://developers.themoviedb.org/3/movies/rate-movie
 */
export const rate = async (movieId, rating, options = {}) => {
  const { session_id, guest_session_id } = options;
  if (!movieId) {
    return Promise.reject('A movieId has to be provided');
  }

  if (!rating) {
    return Promise.reject('A rating has to be provided');
  }

  if (session_id || guest_session_id) {
    const queryParam = session_id
      ? `?session_id=${session_id}`
      : `?guest_session_id=${guest_session_id}`;
    return await makeHttpRequest(
      urls.v3.MOVIE_RATING.replace(':id', movieId).concat(queryParam),
      { value: rating },
      'post'
    );
  }

  return Promise.reject(
    'A session_id or a guest_session_id has to be provided'
  );
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
    urls.v3.MOVIE_RECOMMENDATIONS.replace(':id', movieId),
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

  return makeHttpRequest(urls.v3.MOVIE_RELEASE_DATES.replace(':id', movieId));
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

  return makeHttpRequest(urls.v3.MOVIE_REVIEWS.replace(':id', movieId), {
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

  return makeHttpRequest(urls.v3.MOVIE_SIMILAR.replace(':id', movieId), {
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

  return makeHttpRequest(urls.v3.MOVIE_TOP_RATED, { language, page, region });
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

  return makeHttpRequest(urls.v3.MOVIE_TRANSLATIONS.replace(':id', movieId));
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

  return makeHttpRequest(urls.v3.MOVIE_UPCOMING, { language, page, region });
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

  return makeHttpRequest(urls.v3.MOVIE_VIDEOS.replace(':id', movieId));
};
