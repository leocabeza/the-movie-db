import axios from 'axios';
import { HOST } from '../client';
import { success, error } from '../interceptors/parser';

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
      finalParams[paramKey] = paramsObject[paramKey];
    }
  });

  return finalParams;
};

// NOTE: Some v4 methods depend on an user access_token as an apiV4Key
export const makeHttpRequest = async (
  url,
  data = {},
  method = 'get',
  apiV4Key = ''
) => {
  try {
    const finalData = buildBodyOrParams(data, method.toLowerCase());
    const finalMethod = method.toLowerCase();
    if (apiV4Key) {
      const customAxiosInstance = axios.create({
        baseURL: `${HOST}4`,
        headers: {
          'content-type': 'application/json;charset=utf-8',
          authorization: `Bearer ${apiV4Key}`,
        },
      });

      customAxiosInstance.interceptors.response.use(success, error);

      return await customAxiosInstance[finalMethod](url, finalData);
    }
    return await axios[finalMethod](url, finalData);
  } catch (error) {
    return Promise.reject(error);
  }
};
