import { makeHttpRequest } from 'utils/utils';
import urls from 'urls/urls';

/**
 * @module network
 */

/**
 * Get the details of a network.
 * @param {number} networkId
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/networks/get-network-details
 */
export const details = async networkId => {
  if (!networkId && networkId !== 0) {
    return Promise.reject('A networkId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.NETWORK_DETAILS.replace(':id', networkId)
  );
};

/**
 * Get the alternative names of a network.
 * @param {number} networkId
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/networks/get-network-alternative-names
 */
export const alternativeNames = async networkId => {
  if (!networkId && networkId !== 0) {
    return Promise.reject('A networkId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.NETWORK_ALTERNATIVE_NAMES.replace(':id', networkId)
  );
};

/**
 * Get the TV network logos by id.
 * There are two image formats that are supported for networks, PNG"s and SVG"s.
 * You can see which type the original file is by looking at the fileType field.
 * We prefer SVG"s as they are resolution independent and as such, the width and height are only
 * there to reflect the original asset that was uploaded.
 * An SVG can be scaled properly beyond those dimensions if you call them as a PNG.
 * @param {number} networkId
 * @returns {Promise}
 * @see https://developers.themoviedb.org/3/networks/get-network-images
 */
export const images = async networkId => {
  if (!networkId && networkId !== 0) {
    return Promise.reject('A networkId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.NETWORK_IMAGES.replace(':id', networkId)
  );
};
