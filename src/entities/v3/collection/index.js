import { makeHttpRequest } from '../../../utils';
import urls from '../../../urls';

/**
 * @module collection
 */

/**
 * Get collection details by id.
 * @param {number} collectionId
 * @param {Object} options
 * @param {string} options.language
 * @returns Promise
 * @see https://developers.themoviedb.org/3/collections/get-collection-details
 */
export const details = async (collectionId, options = {}) => {
  const { language } = options;
  if (!collectionId && collectionId !== 0) {
    return Promise.reject('A collectionId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.COLLECTION_DETAILS.replace(':id', collectionId),
    {
      language,
    }
  );
};

/**
 * Get the images for a collection by id.
 * @param {number} collectionId
 * @param {Object} options
 * @param {string} options.language
 * @returns Promise
 * @see https://developers.themoviedb.org/3/collections/get-collection-images
 */
export const images = async (collectionId, options = {}) => {
  const { language } = options;
  if (!collectionId && collectionId !== 0) {
    return Promise.reject('A collectionId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.COLLECTION_IMAGES.replace(':id', collectionId),
    {
      language,
    }
  );
};

/**
 * Get the list translations for a collection by id.
 * @param {number} collectionId
 * @param {Object} options
 * @param {string} options.language
 * @returns Promise
 * @see https://developers.themoviedb.org/3/collections/get-collection-translations
 */
export const translations = async (collectionId, options = {}) => {
  const { language } = options;
  if (!collectionId && collectionId !== 0) {
    return Promise.reject('A collectionId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.COLLECTION_TRANSLATIONS.replace(':id', collectionId),
    {
      language,
    }
  );
};
