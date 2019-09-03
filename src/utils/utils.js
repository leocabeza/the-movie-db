import fetch from 'cross-fetch';
import omitBy from 'lodash.omitby';
import qs from 'qs';

const HOST = 'https://api.themoviedb.org/';
let v3Key;
let v4Key;

export const removeUndefinedValues = paramsObject => {
  return omitBy(
    Object.keys(paramsObject).reduce((prev, current) => {
      prev[current] = paramsObject[current];

      return prev;
    }, {}),
    value => typeof value === 'undefined'
  );
};

const prepareData = data => {
  return JSON.stringify(removeUndefinedValues(data));
};

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
    let finalUrl = usev4 ? originalUrl : originalUrl.concat(`api_key=${v3Key}`);
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
      finalUrl = finalUrl.concat(qs.stringify(data));
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
