import { makeHttpRequest } from 'utils/utils';
import urls from 'urls/urls';

/**
 * @module trending
 */

/**
 * Get the daily or weekly trending items. The daily trending list tracks items over the period of a day while items have a 24 hour half life. The weekly list tracks items over a 7 day period, with a 7 day half life.
 * @param {Object} options
 * @param {('all'|'movie'|'tv'|'person')} options.media_type - Allowed values: all, movie, tv, person
 * @param {('day'|'week')} options.time_window - Allowed values: day, week
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/trending/get-trending
 */
export const items = async (options = {}) => {
  const { media_type, time_window } = options;

  if (!media_type) {
    return Promise.reject('A media_type has to be provided');
  }

  if (!time_window) {
    return Promise.reject('A time_window has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TRENDING_ITEMS.replace(':mediaType', media_type).replace(
      ':timeWindow',
      time_window
    )
  );
};
