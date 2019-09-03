import { makeHttpRequest } from 'utils/utils';
import urls from 'urls/urls';

/**
 * @module tvEpisodeGroup
 */

/**
 * Get the details of a TV episode group.
 * Groups support 7 different types which are enumerated as the following:
 * 1 - Original air date, 2- Absolute, 3 - DVD, 4 - Digital, 5 - Story arc, 6 - Production, 7 - TV
 * @param {string} id
 * @param {Object} options
 * @param {string} options.language
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/tv-episode-groups/get-tv-episode-group-details
 */
export const details = async (id, options = {}) => {
  const { language } = options;

  if (!id) {
    return Promise.reject('An id has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.TV_EPISODE_GROUP_DETAILS.replace(':id', id),
    { language }
  );
};
