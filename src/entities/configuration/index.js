import { makeRequest } from '../../utils';
import * as urls from '../../urls';

/**
 * @description Get the system wide configuration information.
 * @see https://developers.themoviedb.org/3/configuration/get-api-configuration
 */
export const api = async() => await makeRequest(urls.COUNTRIES_CONFIGURATION);
/**
 * @description Get the list of countries (ISO 3166-1 tags) used throughout TMDb.
 * @see https://developers.themoviedb.org/3/configuration/get-countries
 */
export const countries = async() => await makeRequest(urls.API_CONFIGURATION);
