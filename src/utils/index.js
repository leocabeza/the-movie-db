/**
 * Returns a camelcase word from a snakecase
 * @param {string} word
 */
export const snakeToCamelCase = word =>
  word.toLowerCase().replace(/_(.)/g, (match, group1) => group1.toUpperCase());

/**
 * Returns a object with defined keys in paramsObject
 * @param {object} paramsObject
 */
export const buildNonEmptyParams = paramsObject => {
  const finalParams = {};

  Object.keys(paramsObject).forEach(paramKey => {
    if (typeof paramsObject[paramKey] !== 'undefined') {
      finalParams[paramKey] = paramsObject[paramKey];
    }
  });

  return finalParams;
};
