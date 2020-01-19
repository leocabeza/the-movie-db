import { makeHttpRequest } from 'utils/utils';
import urls from 'urls/urls';

/**
 * @module list
 */

/**
 * This method will let you add items to a list.
 * We support essentially an unlimited number of items to be posted at a time.
 * Both movie and TV series are supported.
 * The results of this query will return a results array.
 * Each result includes a success field. If a result is false this will usually indicate
 * that the item already exists on the list. It may also indicate that the item could not be found.
 * You must be the owner of the list and therefore have a valid user access token in order to add items to a list.
 * @param {string}   accessToken - Required
 * @param {number}   listId - Required
 * @param {Object[]} items - Required
 * @param {('movie'|'tv')} items[].media_type - Allowed values: movie, tv
 * @param {number}   items[].media_id
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/list/add-items
 */
export const addItems = async (accessToken, listId, items = []) => {
  if (!accessToken) {
    return Promise.reject('An accessToken has to be provided');
  }

  if (!listId && listId !== 0) {
    return Promise.reject('A listId has to be provided');
  }

  if (items.length) {
    return await makeHttpRequest(
      urls.v4.ACCOUNT_LIST_ITEMS.replace(':id', listId),
      { items },
      'post',
      { usev4: true, userAccessToken: accessToken }
    );
  }

  return Promise.reject('At least an item has to be provided');
};

/**
 * This method lets you clear all of the items from a list in a single request. This action cannot be reversed so use it with caution.
 * You must be the owner of the list and therefore have a valid user access token in order to clear a list.
 * @param {string} accessToken - Required
 * @param {number} listId - Required
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/list/clear-list
 */
export const clearItems = async (accessToken, listId) => {
  if (!accessToken) {
    return Promise.reject('An accessToken has to be provided');
  }

  if (!listId && listId !== 0) {
    return Promise.reject('A listId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_LIST_CLEAR_ITEMS.replace(':id', listId),
    {},
    'get',
    { usev4: true, userAccessToken: accessToken }
  );
};

/**
 * This method will create a new list.
 * You will need to have valid user access token in order to create a new list.
 * @param {string}  accessToken - Required
 * @param {object}  options - Required
 * @param {string}  options.name - Required
 * @param {string}  options.iso_639_1 - Required
 * @param {string}  options.description
 * @param {boolean} options.public
 * @param {string}  options.iso_3166_1
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/list/create-list
 */
export const create = async (accessToken, options = {}) => {
  const { name, iso_639_1, ...rest } = options;
  if (!accessToken) {
    return Promise.reject('An accessToken has to be provided');
  }

  if (name && iso_639_1) {
    return await makeHttpRequest(
      urls.v4.ACCOUNT_LIST_CREATE,
      { name, iso_639_1, ...rest },
      'post',
      { usev4: true, userAccessToken: accessToken }
    );
  }

  return Promise.reject('A name and a iso_639_1 option has to be provided');
};

/**
 * This method will retrieve a list by id.
 * Private lists can only be accessed by their owners and therefore require a valid user access token.
 * @param {string} accessToken - Required
 * @param {number} listId - Required
 * @param {object} options
 * @param {string} options.language
 * @param {number} options.page
 * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by - Allowed values: created_at.asc, created_at.desc, release_date.asc,
 * release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/list/get-list
 */
export const details = async (accessToken, listId, options = {}) => {
  const { language, page, sort_by } = options;
  if (!accessToken) {
    return Promise.reject('An accessToken has to be provided');
  }

  if (!listId && listId !== 0) {
    return Promise.reject('A listId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_LIST_DETAILS.replace(':id', listId),
    { language, page, sort_by },
    'get',
    { usev4: true, userAccessToken: accessToken }
  );
};

/**
 * This method will let you remove items from a list. You can remove multiple items at a time.
 * You must be the owner of the list and therefore have a valid user access token in order to delete items from it.
 * @param {string}   accessToken - Required
 * @param {number}   listId - Required
 * @param {Object[]} items - Required
 * @param {('movie'|'tv')}   items[].media_type - Allowed values: movie, tv
 * @param {number}   items[].media_id
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/list/remove-items
 */
export const deleteItems = async (accessToken, listId, items = []) => {
  if (!accessToken) {
    return Promise.reject('An accessToken has to be provided');
  }

  if (!listId && listId !== 0) {
    return Promise.reject('A listId has to be provided');
  }

  if (items.length) {
    return await makeHttpRequest(
      urls.v4.ACCOUNT_LIST_ITEMS.replace(':id', listId),
      { items },
      'delete',
      { usev4: true, userAccessToken: accessToken }
    );
  }

  return Promise.reject('At least an item has to be provided');
};

/**
 * This method lets you quickly check if the item is already added to the list.
 * You must be the owner of the list and therefore have a valid user access token in order to check an item status.
 * @param {string} accessToken - Required
 * @param {number} listId - Required
 * @param {object} item
 * @param {('movie'|'tv')} item.media_type - Allowed values: movie, tv
 * @param {number} item.media_id
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/list/check-item-status
 */
export const itemStatus = async (accessToken, listId, item = {}) => {
  const { media_id, media_type } = item;
  if (!accessToken) {
    return Promise.reject('An accessToken has to be provided');
  }

  if (!listId && listId !== 0) {
    return Promise.reject('A listId has to be provided');
  }

  if (!item || !Object.keys(item).length) {
    return Promise.reject('At least an item has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_LIST_ITEMS.replace(':id', listId),
    { media_id, media_type },
    'get',
    { usev4: true, userAccessToken: accessToken }
  );
};

/**
 * This method will delete a list by id. This action is not reversible so take care when issuing it.
 * You must be the owner of the list and therefore have a valid user access token in order to delete it.
 * @param {string}   accessToken - Required
 * @param {number}   listId - Required
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/list/delete-list
 */
export const remove = async (accessToken, listId) => {
  if (!accessToken) {
    return Promise.reject('An accessToken has to be provided');
  }

  if (!listId && listId !== 0) {
    return Promise.reject('A listId has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_LIST_DETAILS.replace(':id', listId),
    {},
    'delete',
    { usev4: true, userAccessToken: accessToken }
  );
};

/**
 * This method will let you update the details of a list.
 * You must be the owner of the list and therefore have a valid user access token in order to edit it.
 * @param {string}  accessToken - Required
 * @param {number}  listId - Required
 * @param {object}  options - Required
 * @param {string}  options.name - Required
 * @param {string}  options.description
 * @param {boolean} options.public
 * @param {('original_order.asc'|'original_order.desc'|'primary_release_date.asc'|'primary_release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')}  options.sort_by - Allowed values: original_order.asc, original_order.desc, vote_average.asc, vote_average.desc, primary_release_date.asc, primary_release_date.desc, title.asc, title.desc
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/list/update-list
 */
export const update = async (accessToken, listId, body = {}) => {
  const { sort_by, ...rest } = body;
  const toUpdate = { ...rest };
  if (!accessToken) {
    return Promise.reject('An accessToken has to be provided');
  }

  if (!listId && listId !== 0) {
    return Promise.reject('A listId has to be provided');
  }

  if (!toUpdate || !Object.keys(toUpdate).length) {
    return Promise.reject('Nothing to update');
  }

  return await makeHttpRequest(
    urls.v4.ACCOUNT_LIST_DETAILS.replace(':id', listId),
    toUpdate,
    'put',
    { usev4: true, userAccessToken: accessToken }
  );
};

/**
 * This method will let you update an individual item on a list. Currently, only adding a comment is suported.
 * You must be the owner of the list and therefore have a valid user access token in order to edit items.
 * @param {string}   accessToken - Required
 * @param {number}   listId - Required
 * @param {Object[]} items - Required
 * @param {('movie'|'tv')}   items[].media_type - Allowed values: movie, tv
 * @param {number}   items[].media_id
 * @param {string}   items[].comment
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/list/update-items
 */
export const updateItems = async (accessToken, listId, items = []) => {
  if (!accessToken) {
    return Promise.reject('An accessToken has to be provided');
  }

  if (!listId && listId !== 0) {
    return Promise.reject('A listId has to be provided');
  }

  if (items.length) {
    return await makeHttpRequest(
      urls.v4.ACCOUNT_LIST_ITEMS.replace(':id', listId),
      { items },
      'put',
      { usev4: true, userAccessToken: accessToken }
    );
  }

  return Promise.reject('At least an item has to be provided');
};
