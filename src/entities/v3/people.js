import { makeHttpRequest } from '../../utils';
import urls from '../../urls';

/**
 * @module people
 */

/**
 * Get the changes for a person. By default only the last 24 hours are returned.
 * You can query up to 14 days in a single query by using the start_date and end_date options.
 * @param {number} personId - Required
 * @param {Object} options
 * @param {string} options.start_date
 * @param {string} options.end_date
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/3/people/get-person-changes
 */
export const changes = async (personId, options = {}) => {
  const { start_date, end_date, page } = options;

  if (!personId && personId !== 0) {
    return Promise.reject('A personId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.PEOPLE_CHANGES.replace(':id', personId),
    {
      start_date,
      end_date,
      page,
    }
  );
};

/**
 * Get the movie and TV credits together in a single response.
 * @param {number} personId - Required
 * @param {Object} options
 * @param {string} options.language
 * @returns Promise
 * @see https://developers.themoviedb.org/3/people/get-person-combined-credits
 */
export const combinedCredits = async (personId, options = {}) => {
  const { language } = options;

  if (!personId && personId !== 0) {
    return Promise.reject('A personId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.PEOPLE_COMBINED_CREDITS.replace(':id', personId),
    {
      language,
    }
  );
};

/**
 * Get the primary person details by id.
 * @param {number} personId - Required
 * @param {Object} options
 * @param {string} options.language
 * @param {string} options.append_to_response
 * @returns Promise
 * @see https://developers.themoviedb.org/3/people/get-person-details
 */
export const details = async (personId, options = {}) => {
  const { language, append_to_response } = options;

  if (!personId && personId !== 0) {
    return Promise.reject('A personId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.PEOPLE_DETAILS.replace(':id', personId),
    {
      language,
      append_to_response,
    }
  );
};

/**
 * Get the external ids for a person. We currently support the following external sources.
 * IMDB ID, TVDB ID, Freebase MID, Freebase ID, TVRage ID, Instagram, Facebook, Twitter
 * @param {number} personId - Required
 * @param {Object} options
 * @param {string} options.language
 * @returns Promise
 * @see https://developers.themoviedb.org/3/people/get-person-external-ids
 */
export const externalIds = async (personId, options = {}) => {
  const { language } = options;

  if (!personId && personId !== 0) {
    return Promise.reject('A personId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.PEOPLE_EXTERNAL_IDS.replace(':id', personId),
    {
      language,
    }
  );
};

/**
 * Get the images for a person.
 * @param {number} personId - Required
 * @returns Promise
 * @see https://developers.themoviedb.org/3/people/get-person-images
 */
export const images = async personId => {
  if (!personId && personId !== 0) {
    return Promise.reject('A personId has to be provided');
  }

  return await makeHttpRequest(urls.v3.PEOPLE_IMAGES.replace(':id', personId));
};

/**
 * Get the most newly created person. This is a live response and will continuously change.
 * @param {Object} options
 * @param {string} options.language
 * @returns Promise
 * @see https://developers.themoviedb.org/3/people/get-latest-person
 */
export const latest = async (options = {}) => {
  const { language } = options;

  return await makeHttpRequest(urls.v3.PEOPLE_LATEST, { language });
};

/**
 * Get the movie credits for a person.
 * @param {number} personId - Required
 * @param {Object} options
 * @param {string} options.language
 * @returns Promise
 * @see https://developers.themoviedb.org/3/people/get-person-movie-credits
 */
export const movieCredits = async (personId, options = {}) => {
  const { language } = options;

  if (!personId && personId !== 0) {
    return Promise.reject('A personId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.PEOPLE_MOVIE_CREDITS.replace(':id', personId),
    {
      language,
    }
  );
};

/**
 * Get the list of popular people on TMDb.
 * This list updates daily.
 * @param {Object} options
 * @param {string} options.language
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/3/people/get-popular-people
 */
export const popular = async (options = {}) => {
  const { language, page } = options;

  return await makeHttpRequest(urls.v3.PEOPLE_POPULAR, {
    language,
    page,
  });
};

/**
 * Get the images that this person has been tagged in.
 * @param {number} personId - Required
 * @param {Object} options
 * @param {string} options.language
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/3/people/get-tagged-images
 */
export const taggedImages = async (personId, options = {}) => {
  const { language, page } = options;
  if (!personId && personId !== 0) {
    return Promise.reject('A personId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.PEOPLE_TAGGED_IMAGES.replace(':id', personId),
    { language, page }
  );
};

/**
 * Get a list of the translations that exist for a person.
 * @param {number} personId - Required
 * @param {Object} options
 * @param {string} options.language
 * @returns Promise
 * @see https://developers.themoviedb.org/3/people/get-person-translations
 */
export const translations = async (personId, options = {}) => {
  const { language } = options;

  if (!personId && personId !== 0) {
    return Promise.reject('A personId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.PEOPLE_TRANSLATIONS.replace(':id', personId),
    {
      language,
    }
  );
};

/**
 * Get the TV show credits for a person.
 * You can query for some extra details about the credit with the credit.details method.
 * @param {number} personId - Required
 * @param {Object} options
 * @param {string} options.language
 * @returns Promise
 * @see https://developers.themoviedb.org/3/people/get-person-tv-credits
 */
export const tvCredits = async (personId, options = {}) => {
  const { language } = options;

  if (!personId && personId !== 0) {
    return Promise.reject('A personId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.PEOPLE_TV_CREDITS.replace(':id', personId),
    {
      language,
    }
  );
};
