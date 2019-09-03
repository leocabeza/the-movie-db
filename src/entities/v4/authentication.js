import { makeHttpRequest } from 'utils/utils';
import urls from 'urls/urls';

/**
 * @module authentication
 */

/**
 * This method will finish the user authentication flow and issue an official user access token.
 * The requesToken in this request is sent along as part of the POST body.
 * @param {string} requestToken
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/auth/create-access-token
 */
export const createAccessToken = async requestToken => {
  if (!requestToken) {
    return Promise.reject('A requestToken has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.AUTH_ACCESS_TOKEN,
    { request_token: requestToken },
    'post',
    { usev4: true }
  );
};

/**
 * This method generates a new request token that you can ask a user to approve.
 * This is the first step in getting permission from a user to read and write data on their behalf.
 * Note that there is an optional body you can post alongside this request to set a redirect URL
 * or callback that will be executed once a request token has been approved on TMDb.

 * @param {string} redirectTo
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/auth/create-request-token
 */
export const createRequestToken = async redirectTo => {
  return await makeHttpRequest(
    urls.v4.AUTH_REQUEST_TOKEN,
    { redirect_to: redirectTo },
    'post',
    { usev4: true }
  );
};

/**
 * This method gives your users the ability to log out of a session.
 * @param {string} accessToken
 * @returns {Promise}
 * @see https://developers.themoviedb.org/4/auth/delete-access-token
 */
export const deleteAccessToken = async accessToken => {
  if (!accessToken) {
    return Promise.reject('An accessToken has to be provided');
  }

  return await makeHttpRequest(
    urls.v4.AUTH_ACCESS_TOKEN,
    { access_token: accessToken },
    'delete',
    { usev4: true }
  );
};
