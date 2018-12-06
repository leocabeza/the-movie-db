import { makeHttpRequest } from '../../../utils';
import urls from '../../../urls';

/**
 * @module changes
 */

/**
 * Get a list of all of the movie ids that have been changed in the past 24 hours.
 * You can query it for up to 14 days worth of changed IDs at a time with the start_date and end_date query parameters. 100 items are returned per page.
 * @param {Object} options
 * @param {string} options.start_date
 * @param {string} options.end_date
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/3/changes/get-movie-change-list
 */
export const movies = async (options = {}) => {
  const { start_date, end_date, page } = options;

  return await makeHttpRequest(urls.v3.CHANGE_MOVIES, {
    start_date,
    end_date,
    page,
  });
};

/**
 * Get a list of all of the person ids that have been changed in the past 24 hours.
 * You can query it for up to 14 days worth of changed IDs at a time with the start_date and end_date query parameters. 100 items are returned per page.
 * @param {Object} options
 * @param {string} options.start_date
 * @param {string} options.end_date
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/3/changes/get-person-change-list
 */
export const people = async (options = {}) => {
  const { start_date, end_date, page } = options;

  return await makeHttpRequest(urls.v3.CHANGE_PERSON, {
    start_date,
    end_date,
    page,
  });
};

/**
 * Get a list of all of the TV show ids that have been changed in the past 24 hours.
 * You can query it for up to 14 days worth of changed IDs at a time with the start_date and end_date query parameters. 100 items are returned per page.
 * @param {Object} options
 * @param {string} options.start_date
 * @param {string} options.end_date
 * @param {number} options.page
 * @returns Promise
 * @see https://developers.themoviedb.org/3/changes/get-tv-change-list
 */
export const tvShows = async (options = {}) => {
  const { start_date, end_date, page } = options;

  return await makeHttpRequest(urls.v3.CHANGE_TV_SHOWS, {
    start_date,
    end_date,
    page,
  });
};
