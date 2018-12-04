import { makeHttpRequest } from '../../../utils';
import urls from '../../../urls';

/**
 * @module credit
 */

/**
 * Get a movie or TV credit details by id.
 * @returns Promise
 * @see https://developers.themoviedb.org/3/credits/get-credit-details
 */
export const details = async creditId => {
  if (!creditId) {
    return Promise.reject('A creditId has to be provided');
  }

  return await makeHttpRequest(urls.v3.CREDIT_DETAILS.replace(':id', creditId));
};
