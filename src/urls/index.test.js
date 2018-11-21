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
    expect(urls.MOVIES_ACCOUNT_STATES).toEqual('/movie/:id/account_states');
    expect(urls.MOVIES_ALTERNATIVE_TITLES).toEqual(
      '/movie/:id/alternative_titles'
    );
    expect(urls.MOVIES_CHANGES).toEqual('/movie/:id/changes');
    expect(urls.MOVIES_CREDITS).toEqual('/movie/:id/credits');
    expect(urls.MOVIES_DETAILS).toEqual('/movie/:id');
    expect(urls.MOVIES_EXTERNAL_IDS).toEqual('/movie/:id/external_ids');
    expect(urls.MOVIES_IMAGES).toEqual('/movie/:id/images');
    expect(urls.MOVIES_KEYWORDS).toEqual('/movie/:id/keywords');
    expect(urls.MOVIES_POPULAR).toEqual('/movie/popular');
    expect(urls.MOVIES_RELEASE_DATES).toEqual('/movie/:id/release_dates');
    expect(urls.MOVIES_TRANSLATIONS).toEqual('/movie/:id/translations');
    expect(urls.MOVIES_VIDEOS).toEqual('/movie/:id/videos');
  });
});
