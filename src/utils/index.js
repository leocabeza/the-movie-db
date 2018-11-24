import axios from 'axios';

export const buildBodyOrParams = (data, method = 'get') => {
  const valuesWithData = removeUndefinedValues(data);

  if (['get', 'delete'].includes(method.toLowerCase())) {
    return {
      params: valuesWithData,
    };
  }

  return valuesWithData;
};

//TODO: May be there is a better declarative way to do this?
export const removeUndefinedValues = paramsObject => {
  const finalParams = {};

  Object.keys(paramsObject).forEach(paramKey => {
    if (typeof paramsObject[paramKey] !== 'undefined') {
      const snakeCaseKey = camelToSnakeCase(paramKey);
      finalParams[snakeCaseKey] = paramsObject[paramKey];
    }
  });

  return finalParams;
};

export const makeHttpRequest = async (url, data = {}, method = 'get') => {
  try {
    const finalData = buildBodyOrParams(data, method.toLowerCase());
    const finalMethod = method.toLowerCase();
    return await axios[finalMethod](url, finalData);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const snakeToCamelCase = word =>
  word.toLowerCase().replace(/_(.)/g, (match, group1) => group1.toUpperCase());

export const camelToSnakeCase = word =>
  word.replace(/([A-Z])/g, '_$1').toLowerCase();
