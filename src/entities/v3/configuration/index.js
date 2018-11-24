import { makeHttpRequest } from '../../../utils';
import urls from '../../../urls';

/**
 * @module configuration
 */

/**
 * Get the system wide configuration information.
 * @returns Promise
 * @see https://developers.themoviedb.org/3/configuration/get-api-configuration
 */
export const api = async () =>
  await makeHttpRequest(urls.v3.CONFIGURATION_COUNTRIES);
/**
 * Get the list of countries (ISO 3166-1 tags) used throughout TMDb.
 * @returns Promise
 * @see https://developers.themoviedb.org/3/configuration/get-countries
 */
export const countries = async () =>
  await makeHttpRequest(urls.v3.CONFIGURATION_API);

/**
 * Get a list of the jobs and departments we use on TMDb.
 * @returns Promise
 * @see https://developers.themoviedb.org/3/configuration/get-jobs
 */
export const jobs = async () =>
  await makeHttpRequest(urls.v3.CONFIGURATION_JOBS);

/**
 * Get the list of languages (ISO 639-1 tags) used throughout TMDb.
 * @returns Promise
 * @see https://developers.themoviedb.org/3/configuration/get-languages
 */
export const languages = async () =>
  await makeHttpRequest(urls.v3.CONFIGURATION_LANGUAGES);

/**
 * Get a list of the officially supported translations on TMDb.
 * @returns Promise
 * @see https://developers.themoviedb.org/3/configuration/get-primary-translations
 */
export const primaryTranslations = async () =>
  await makeHttpRequest(urls.v3.CONFIGURATION_PRIMARY_TRANSLATIONS);

/**
 * Get the list of timezones used throughout TMDb.
 * @returns Promise
 * @see https://developers.themoviedb.org/3/configuration/get-timezones
 */
export const timezones = async () =>
  await makeHttpRequest(urls.v3.CONFIGURATION_TIMEZONES);
