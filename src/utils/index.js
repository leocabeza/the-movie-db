import axios from 'axios';

/**
 * Returns an object to pass to an axios request body/params
 * @param {object} data
 * @param {string} method
 */
export const buildDataForMethod = (data, method = 'get') => {
  const builtData = buildDefinedParams(data);

  if (['get', 'delete'].includes(method.toLowerCase())) {
    return {
      params: builtData,
    };
  }

  return builtData;
};

//TODO: May be there is a better functional way to do this?
/**
 * Returns a object with non undefined keys in paramsObject
 * @param {object} paramsObject
 */
export const buildDefinedParams = paramsObject => {
  const finalParams = {};

  Object.keys(paramsObject).forEach(paramKey => {
    if (typeof paramsObject[paramKey] !== 'undefined') {
      const snakeCaseKey = camelToSnakeCase(paramKey);
      finalParams[snakeCaseKey] = paramsObject[paramKey];
    }
  });

  return finalParams;
};

/**
 * Build request for axios
 * @param {string} url
 * @param {object} data
 * @param {string} method
 */
export const makeRequest = async (url, data = {}, method = 'get') => {
  try {
    const builtData = buildDataForMethod(data, method.toLowerCase());
    return await axios[method.toLowerCase()](url, builtData);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * Returns a camelcase word from a snakecase
 * @param {string} word
 */
export const snakeToCamelCase = word =>
  word.toLowerCase().replace(/_(.)/g, (match, group1) => group1.toUpperCase());

/**
 * Returns a snakecase word from a camelcase
 * @param {string} word
 */
export const camelToSnakeCase = word =>
  word.replace(/([A-Z])/g, '_$1').toLowerCase();
