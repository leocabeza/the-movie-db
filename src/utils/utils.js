import fetch from 'cross-fetch';
import queryString from 'query-string';

const HOST = 'https://api.themoviedb.org/';
let v3Key;
let v4Key;

export const removeUndefinedValues = paramsObject => {
  const finalParams = {};

  Object.keys(paramsObject).forEach(paramKey => {
    if (typeof paramsObject[paramKey] !== 'undefined') {
      finalParams[paramKey] = paramsObject[paramKey];
    }
  });

  return finalParams;
};

const prepareData = data => JSON.stringify(removeUndefinedValues(data));

export const setV3Key = key => {
  v3Key = key;
};

export const setV4Key = key => {
  v4Key = key;
};

export const makeHttpRequest = async (
  url,
  data = {},
  httpMethod = 'get',
  v4Options = {}
) => {
  try {
    // NOTE: Some v4 methods depend on an user access token as an apiV4Key
    const { usev4, userAccessToken } = v4Options;
    const finalVersion = usev4 ? 4 : 3;
    const originalUrl = `${HOST}${finalVersion}${url}?`;
    const originalHeaders = {
      'content-type': 'application/json;charset=utf-8',
    };
    let finalUrl = usev4 ? originalUrl : `${originalUrl}api_key=${v3Key}&`;
    const method = httpMethod.toLowerCase();
    const v4Token = userAccessToken ? userAccessToken : v4Key;
    const headers = usev4
      ? { ...originalHeaders, authorization: `Bearer ${v4Token}` }
      : originalHeaders;

    const fetchOptions = {
      method,
      headers,
    };

    if (['get', 'delete'].includes(method)) {
      finalUrl = finalUrl.concat(queryString.stringify(data));
    } else {
      fetchOptions.body = prepareData(data);
    }

    const response = await fetch(finalUrl, fetchOptions);

    if (response.ok) {
      return await response.json();
    }

    throw new Error(response.statusText);
  } catch (error) {
    return Promise.reject(error);
  }
};
