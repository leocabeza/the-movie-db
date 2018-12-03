import { makeHttpRequest } from '../../../utils';
import urls from '../../../urls';

/**
 * @module changes
 */

/**
 * Get a list of all of the movie ids that have been changed in the past 24 hours.
 * You can query it for up to 14 days worth of changed IDs at a time with the startDate and endDate query parameters. 100 items are returned per page.
 * @param {Object} options
 * @param {string} options.startDate
 * @param {string} options.endDate
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/3/changes/get-movie-change-list
 */
export const movies = async (options = {}) => {
  const { startDate, endDate, page } = options;

  return await makeHttpRequest(urls.v3.CHANGE_MOVIES, {
    startDate,
    endDate,
    page,
  });
};

/**
 * Get a list of all of the person ids that have been changed in the past 24 hours.
 * You can query it for up to 14 days worth of changed IDs at a time with the startDate and endDate query parameters. 100 items are returned per page.
 * @param {Object} options
 * @param {string} options.startDate
 * @param {string} options.endDate
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/3/changes/get-person-change-list
 */
export const people = async (options = {}) => {
  const { startDate, endDate, page } = options;

  return await makeHttpRequest(urls.v3.CHANGE_PERSON, {
    startDate,
    endDate,
    page,
  });
};

/**
 * Get a list of all of the TV show ids that have been changed in the past 24 hours.
 * You can query it for up to 14 days worth of changed IDs at a time with the startDate and endDate query parameters. 100 items are returned per page.
 * @param {Object} options
 * @param {string} options.startDate
 * @param {string} options.endDate
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/3/changes/get-tv-change-list
 */
export const tvShows = async (options = {}) => {
  const { startDate, endDate, page } = options;

  return await makeHttpRequest(urls.v3.CHANGE_TV_SHOWS, {
    startDate,
    endDate,
    page,
  });
};
