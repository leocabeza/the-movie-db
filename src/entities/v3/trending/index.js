import { makeHttpRequest } from '../../../utils';
import urls from '../../../urls';

/**
 * @module trending
 */

/**
 * Get the daily or weekly trending items. The daily trending list tracks items over the period of a day while items have a 24 hour half life. The weekly list tracks items over a 7 day period, with a 7 day half life.
 * @param {Object} options
 * @param {string} options.mediaType - Allowed values: all, movie, tv, person
 * @param {string} options.timeWindow - Allowed values: day, week
 * @returns Promise
 * @see https://developers.themoviedb.org/3/trending/get-trending
 */
export const items = async (options = {}) => {
  const { mediaType, timeWindow } = options;

  if (!mediaType) {
    return Promise.reject('A mediaType has to be provided');
  }

  if (!timeWindow) {
    return Promise.reject('A timeWindow has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TRENDING_ITEMS.replace(':mediaType', mediaType).replace(
      ':timeWindow',
      timeWindow
    )
  );
};
