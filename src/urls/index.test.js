import * as urls from './';

describe('urls', () => {
  it('must list constants correctly', () => {
    expect(urls.AUTHENTICATION_LOGOUT).toEqual('/authentication/session');
    expect(urls.AUTHENTICATION_NEW_GUEST_SESSION).toEqual(
      '/authentication/guest_session/new'
    );
    expect(urls.AUTHENTICATION_NEW_SESSION).toEqual(
      '/authentication/session/new'
    );
    expect(urls.AUTHENTICATION_NEW_TOKEN).toEqual('/authentication/token/new');
    expect(urls.AUTHENTICATION_SESSION_CONVERT).toEqual(
      '/authentication/session/convert/4'
    );
    expect(urls.AUTHENTICATION_TOKEN_VALIDATE_LOGIN).toEqual(
      '/authentication/token/validate_with_login'
    );
    expect(urls.CONFIGURATION_API).toEqual('/configuration');
    expect(urls.CONFIGURATION_COUNTRIES).toEqual('/configuration/countries');
    expect(urls.CONFIGURATION_JOBS).toEqual('/configuration/jobs');
    expect(urls.CONFIGURATION_LANGUAGES).toEqual('/configuration/languages');
    expect(urls.CONFIGURATION_PRIMARY_TRANSLATIONS).toEqual(
      '/configuration/primary_translations'
    );
    expect(urls.CONFIGURATION_TIMEZONES).toEqual('/configuration/timezones');
    expect(urls.MOVIES_DETAILS).toEqual('/movie/:id');
    expect(urls.MOVIES_POPULAR).toEqual('/movie/popular');
  });
});
