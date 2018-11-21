import { makeRequest } from '../../utils';
import * as urls from '../../urls';

/**
 * If you would like to delete (or "logout") from a session, call this method with a valid session ID.
 * @param {string} sessionId
 */
export const logout = async sessionId => {
  if (!sessionId) {
    return Promise.reject('A session id has to be provided');
  }

  return makeRequest(urls.AUTHENTICATION_LOGOUT, { sessionId }, 'delete');
};

/**
 * This method will let you create a new guest session. Guest sessions are a type of session that will let a user rate movies and TV shows but not require them to have a TMDb user account.
 * @see https://developers.themoviedb.org/3/authentication/create-guest-session
 */
export const newGuestSession = async () =>
  await makeRequest(urls.AUTHENTICATION_NEW_GUEST_SESSION);

/**
 * You can use this method to create a fully valid session ID once a user has validated the request token.
 * @param {string} requestToken
 * @see https://developers.themoviedb.org/3/authentication/create-session
 */
export const newSession = async requestToken => {
  if (!requestToken) {
    return Promise.reject('A request token has to be provided');
  }

  return await makeRequest(
    urls.AUTHENTICATION_NEW_SESSION,
    { requestToken },
    'post'
  );
};

/**
 * @description Create a temporary request token that can be used to validate a TMDb user login.
 * @see https://developers.themoviedb.org/3/authentication/create-request-token
 */
export const newToken = async () =>
  await makeRequest(urls.AUTHENTICATION_NEW_TOKEN);

/**
 * Use this method to create a v3 session ID if you already have a valid v4 access token.
 * The v4 token needs to be authenticated by the user. Your standard "read token" will not validate to create a session ID.
 * @param {string} v4AccessToken
 */
export const sessionConvert = async v4AccessToken => {
  if (!v4AccessToken) {
    return Promise.reject('A v4 access token has to be provided');
  }

  return await makeRequest(
    urls.AUTHENTICATION_SESSION_CONVERT,
    { accessToken: v4AccessToken },
    'post'
  );
};

/**
 * This method allows an application to validate a request token by entering a username and password.
 * Not all applications have access to a web view so this can be used as a substitute.
 * If you decide to use this method please use HTTPS.
 * @param {Object} options
 * @param {string} options.username
 * @param {string} options.password
 * @param {string} options.requestToken
 */
export const validateWithLogin = async (options = {}) => {
  const { username, password, requestToken } = options;

  if (!username || !password || !requestToken) {
    return Promise.reject(
      'An username, password and a requestToken has to be provided'
    );
  }

  return await makeRequest(
    urls.AUTHENTICATION_TOKEN_VALIDATE_LOGIN,
    { username, password, requestToken },
    'post'
  );
};
