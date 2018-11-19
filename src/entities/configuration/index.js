import { makeRequest } from '../../utils';
import * as urls from '../../urls';

/**
 * @description Get the system wide configuration information.
 * @see https://developers.themoviedb.org/3/configuration/get-api-configuration
 */
export const api = async () => await makeRequest(urls.CONFIGURATION_COUNTRIES);
/**
 * @description Get the list of countries (ISO 3166-1 tags) used throughout TMDb.
 * @see https://developers.themoviedb.org/3/configuration/get-countries
 */
export const countries = async () => await makeRequest(urls.CONFIGURATION_API);

/**
 * @description Get a list of the jobs and departments we use on TMDb.
 * @see https://developers.themoviedb.org/3/configuration/get-jobs
 */
export const jobs = async () => await makeRequest(urls.CONFIGURATION_JOBS);

/**
 * @description Get the list of languages (ISO 639-1 tags) used throughout TMDb.
 * @see https://developers.themoviedb.org/3/configuration/get-languages
 */
export const languages = async () =>
  await makeRequest(urls.CONFIGURATION_LANGUAGES);

/**
 * @description Get a list of the officially supported translations on TMDb.
 * @see https://developers.themoviedb.org/3/configuration/get-primary-translations
 */
export const primaryTranslations = async () =>
  await makeRequest(urls.CONFIGURATION_PRIMARY_TRANSLATIONS);

/**
 * @description Get the list of timezones used throughout TMDb.
 * @see https://developers.themoviedb.org/3/configuration/get-timezones
 */
export const timezones = async () =>
  await makeRequest(urls.CONFIGURATION_TIMEZONES);
