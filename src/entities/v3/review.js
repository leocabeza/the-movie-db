import { makeHttpRequest } from 'utils/utils';
import urls from 'urls/urls';

/**
 * @module review
 */

/**
 * Get details of a review.
 * @param {string} reviewId
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/reviews/get-review-details
 */
export const details = async reviewId => {
  if (!reviewId) {
    return Promise.reject('A reviewId has to be provided');
  }

  return await makeHttpRequest(urls.v3.REVIEW_DETAILS.replace(':id', reviewId));
};
