import { makeHttpRequest } from '../../../utils';
import urls from '../../../urls';

/**
 * @module authentication
 */

/**
 * If you would like to delete (or "logout") from a session, call this method with a valid session ID.
 * @param {string} sessionId
 * @returns Promise
 * @see https://developers.themoviedb.org/3/authentication/delete-session
 */
export const logout = async sessionId => {
  if (!sessionId) {
    return Promise.reject('A session id has to be provided');
  }

  return makeHttpRequest(
    urls.v3.AUTHENTICATION_LOGOUT,
    { session_id: sessionId },
    'delete'
  );
};

/**
 * This method will let you create a new guest session. Guest sessions are a type of session that will let a user rate movies and TV shows but not require them to have a TMDb user account.
 * @returns Promise
 * @see https://developers.themoviedb.org/3/authentication/create-guest-session
 */
export const newGuestSession = async () =>
  await makeHttpRequest(urls.v3.AUTHENTICATION_NEW_GUEST_SESSION);

/**
 * You can use this method to create a fully valid session ID once a user has validated the request token.
 * @param {string} requestToken
 * @returns Promise
 * @see https://developers.themoviedb.org/3/authentication/create-session
 */
export const newSession = async requestToken => {
  if (!requestToken) {
    return Promise.reject('A request token has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.AUTHENTICATION_NEW_SESSION,
    { request_token: requestToken },
    'post'
  );
};

/**
 * Create a temporary request token that can be used to validate a TMDb user login.
 * @returns Promise
 * @see https://developers.themoviedb.org/3/authentication/create-request-token
 */
export const newToken = async () =>
  await makeHttpRequest(urls.v3.AUTHENTICATION_NEW_TOKEN);

/**
 * Use this method to create a v3 session ID if you already have a valid v4 access token.
 * The v4 token needs to be authenticated by the user. Your standard "read token" will not validate to create a session ID.
 * @param {string} v4AccessToken
 * @returns Promise
 * @see https://developers.themoviedb.org/3/authentication/create-session-from-v4-access-token
 */
export const sessionConvert = async v4AccessToken => {
  if (!v4AccessToken) {
    return Promise.reject('A v4 access token has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.AUTHENTICATION_SESSION_CONVERT,
    { access_token: v4AccessToken },
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
 * @param {string} options.request_token
 * @returns Promise
 * @see https://developers.themoviedb.org/3/authentication/validate-request-token
 */
export const validateWithLogin = async (options = {}) => {
  const { username, password, request_token } = options;

  if (!username || !password || !request_token) {
    return Promise.reject(
      'An username, password and a request_token has to be provided'
    );
  }

  return await makeHttpRequest(
    urls.v3.AUTHENTICATION_TOKEN_VALIDATE_LOGIN,
    { username, password, request_token },
    'post'
  );
};
