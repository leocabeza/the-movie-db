import { makeHttpRequest } from '../../utils';
import urls from '../../urls';

/**
 * @module company
 */

/**
 * Get the alternative names of a company.
 * @param {number} companyId
 * @returns Promise
 * @see https://developers.themoviedb.org/3/companies/get-company-alternative-names
 */
export const alternativeNames = async companyId => {
  if (!companyId && companyId !== 0) {
    return Promise.reject('A companyId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.COMPANY_ALTERNATIVE_NAMES.replace(':id', companyId)
  );
};

/**
 * Get a companies details by id.
 * @param {number} companyId
 * @returns Promise
 * @see https://developers.themoviedb.org/3/companies/get-company-details
 */
export const details = async companyId => {
  if (!companyId && companyId !== 0) {
    return Promise.reject('A companyId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.COMPANY_DETAILS.replace(':id', companyId)
  );
};

/**
 * Get a companies logos by id.
 * There are two image formats that are supported for companies, PNG"s and SVG"s.
 * You can see which type the original file is by looking at the file_type field.
 * We prefer SVG"s as they are resolution independent and as such, the width and height are only
 * there to reflect the original asset that was uploaded.
 * An SVG can be scaled properly beyond those dimensions if you call them as a PNG.
 * @param {number} companyId
 * @returns Promise
 * @see https://developers.themoviedb.org/3/companies/get-company-images
 */
export const images = async companyId => {
  if (!companyId && companyId !== 0) {
    return Promise.reject('A companyId has to be provided');
  }

  return await makeHttpRequest(
    urls.v3.COMPANY_IMAGES.replace(':id', companyId)
  );
};
