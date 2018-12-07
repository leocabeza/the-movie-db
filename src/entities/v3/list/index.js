import { makeHttpRequest } from '../../../utils';
import urls from '../../../urls';

/**
 * @module list
 */

/**
 * Add a movie to a list.
 * @param {(string|number)}  listId - Required
 * @param {string}  sessionId - Required
 * @param {Object}  body - Required
 * @param {number}  body.media_id - Required
 * @returns Promise
 * @see https://developers.themoviedb.org/3/lists/add-movie
 */
export const addMovie = async (listId, sessionId, body = {}) => {
  const { media_id } = body;
  if (!listId) {
    return Promise.reject('A listId has to be provided');
  }

  if (!sessionId) {
    return Promise.reject('A sessionId has to be provided');
  }

  if (!body || !Object.keys(body).length) {
    return Promise.reject('The body must have a media_id');
  }

  return await makeHttpRequest(
    urls.v3.LIST_ADD_MOVIE.replace(':id', listId).concat(
      `?session_id=${sessionId}`
    ),
    { media_id },
    'post'
  );
};

/**
 * Clear all of the items from a list.
 * @param {string}  listId - Required
 * @param {Object}  options - Required
 * @param {string}  options.session_id - Required
 * @param {boolean} options.confirm - Required
 * @returns Promise
 * @see https://developers.themoviedb.org/3/lists/clear-list
 */
export const clear = async (listId, options = {}) => {
  const { session_id, confirm } = options;
  if (!listId) {
    return Promise.reject('A listId has to be provided');
  }

  if (!session_id) {
    return Promise.reject('A session_id option has to be provided');
  }

  if (confirm === undefined) {
    return Promise.reject('A confirm option has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.LIST_CLEAR.replace(':id', listId).concat(
      `?session_id=${session_id}&confirm=${confirm}`
    ),
    {},
    'post'
  );
};

/**
 * Create a list.
 * @param {string}  sessionId - Required
 * @param {Object}  body
 * @param {string}  body.name
 * @param {string}  body.description
 * @param {string}  body.language
 * @returns Promise
 * @see https://developers.themoviedb.org/3/lists/create-list
 */
export const create = async (sessionId, body = {}) => {
  const { name, description, language } = body;
  if (!sessionId) {
    return Promise.reject('A sessionId has to be provided');
  }

  if (!body || !Object.keys(body).length) {
    return Promise.reject(
      'A body must have a name, description and language keys'
    );
  }

  return await makeHttpRequest(
    urls.v3.LIST_CREATE.concat(`?session_id=${sessionId}`),
    { name, description, language },
    'post'
  );
};

/**
 * Get the details of a list.
 * @param {(number|string)}  listId - Required
 * @param {Object}  options
 * @param {string}  options.language
 * @returns Promise
 * @see https://developers.themoviedb.org/3/lists/get-list-details
 */
export const details = async (listId, options = {}) => {
  const { language } = options;
  if (!listId) {
    return Promise.reject('A listId has to be provided');
  }

  return await makeHttpRequest(urls.v3.LIST_DETAILS.replace(':id', listId), {
    language,
  });
};

/**
 * You can use this method to check if a movie has already been added to the list.
 * @param {(number|string)}  listId - Required
 * @param {Object}  options
 * @param {string}  options.movieId - Required
 * @returns Promise
 * @see https://developers.themoviedb.org/3/lists/check-item-status
 */
export const itemStatus = async (listId, options = {}) => {
  const { movie_id } = options;
  if (!listId) {
    return Promise.reject('A listId has to be provided');
  }

  if (!movie_id) {
    return Promise.reject('A movie_id option has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.LIST_ITEM_STATUS.replace(':id', listId),
    { movie_id }
  );
};

/**
 * Delete a list.
 * @param {string}  listId - Required
 * @param {Object}  options - Required
 * @param {string}  options.session_id - Required
 * @returns Promise
 * @see https://developers.themoviedb.org/3/lists/delete-list
 */
export const remove = async (listId, options = {}) => {
  const { session_id } = options;
  if (!listId) {
    return Promise.reject('A listId has to be provided');
  }

  if (!session_id) {
    return Promise.reject('A session_id option has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.LIST_DELETE.replace(':id', listId).concat(
      `?session_id=${session_id}`
    ),
    {},
    'delete'
  );
};

/**
 * Remove a movie from a list.
 * @param {(string|number)}  listId - Required
 * @param {string}  sessionId - Required
 * @param {Object}  body - Required
 * @param {number}  body.media_id - Required
 * @returns Promise
 * @see https://developers.themoviedb.org/3/lists/remove-movie
 */
export const removeMovie = async (listId, sessionId, body = {}) => {
  const { media_id } = body;
  if (!listId) {
    return Promise.reject('A listId has to be provided');
  }

  if (!sessionId) {
    return Promise.reject('A sessionId has to be provided');
  }

  if (!body || !Object.keys(body).length) {
    return Promise.reject('The body must have a media_id');
  }

  return await makeHttpRequest(
    urls.v3.LIST_REMOVE_MOVIE.replace(':id', listId).concat(
      `?session_id=${sessionId}`
    ),
    { media_id },
    'post'
  );
};
