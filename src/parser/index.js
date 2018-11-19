import { snakeToCamelCase } from '../utils';
import { parse } from 'path';

/**
 * Format date keys as dates, otherwise return string
 * @param {object} data
 * @param {string} key
 */
export const formatDateIfApplicable = (data, key) => {
  const allegedlyNewDate = new Date(data);
  const isValidStringDate =
    (key.endsWith('_date') || key === 'expires_at') &&
    typeof data === 'string' &&
    allegedlyNewDate.toString() !== 'Invalid Date';

  return isValidStringDate ? allegedlyNewDate : data;
};

/**
 * Return same type of data with formatted keys
 * @param {object} data
 * @param {string} key
 */
export const setDataAccordingToValueType = (data, key) => {
  if (Array.isArray(data[key])) {
    return data[key].map(elem => parseData(elem));
  } else if (data[key] instanceof Object) {
    return parseData(data[key]);
  }

  return formatDateIfApplicable(data[key], key);
};

/**
 * Convert to camelCase with the iso_3166_1 exception
 * @param {string} keyName
 */
export const camelCaseIfApplicable = keyName =>
  keyName.startsWith('iso')
    ? keyName.replace(/_/g, '-')
    : snakeToCamelCase(keyName);

//TODO: May be there is a better functional way to do this?
/**
 * Parse data keys to camelCase and format dates
 * @param {object} data
 */
const parseData = data => {
  let newData = Array.isArray(data) ? [] : {};

  if (data instanceof Object) {
    Object.keys(data).forEach(key => {
      newData[camelCaseIfApplicable(key)] = setDataAccordingToValueType(
        data,
        key
      );
    });
  } else {
    newData = data;
  }

  return newData;
};

export default parseData;
