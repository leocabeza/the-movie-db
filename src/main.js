import v3Import from 'entities/v3/v3';
import v4Import from 'entities/v4/v4';
import { setV3Key, setV4Key } from 'utils/utils';

/**
 * Get all of v3 methods available
 * @param {string} v3apiKey - Required
 * @returns All of v3 methods available
 * @see https://developers.themoviedb.org/3/getting-started/introduction
 */
export const v3 = (apiKey) => {
  setV3Key(apiKey);

  return v3Import;
};

/**
 * Get all of v4 methods available
 * @param {string} v4apiKey - Required
 * @returns All of v4 methods available
 * @see https://developers.themoviedb.org/4/getting-started
 */
export const v4 = (apiKey) => {
  setV4Key(apiKey);

  return v4Import;
};
