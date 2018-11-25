import * as urls from './';

describe('urls', () => {
  it('must list authentication constants correctly', () => {
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
  });

  it('must list configuration constants correcty', () => {
    expect(urls.CONFIGURATION_API).toEqual('/configuration');
    expect(urls.CONFIGURATION_COUNTRIES).toEqual('/configuration/countries');
    expect(urls.CONFIGURATION_JOBS).toEqual('/configuration/jobs');
    expect(urls.CONFIGURATION_LANGUAGES).toEqual('/configuration/languages');
    expect(urls.CONFIGURATION_PRIMARY_TRANSLATIONS).toEqual(
      '/configuration/primary_translations'
    );
    expect(urls.CONFIGURATION_TIMEZONES).toEqual('/configuration/timezones');
  });

  it('must list find constants correctly', () => {
    expect(urls.FIND_EXTERNAL_ID).toEqual('/find/:externalId');
  });

  it('must list movies constants correctly', () => {
    expect(urls.MOVIE_ACCOUNT_STATES).toEqual('/movie/:id/account_states');
    expect(urls.MOVIE_ALTERNATIVE_TITLES).toEqual(
      '/movie/:id/alternative_titles'
    );
    expect(urls.MOVIE_CHANGES).toEqual('/movie/:id/changes');
    expect(urls.MOVIE_CREDITS).toEqual('/movie/:id/credits');
    expect(urls.MOVIE_DELETE_RATING).toEqual('/movie/:id/rating');
    expect(urls.MOVIE_DETAILS).toEqual('/movie/:id');
    expect(urls.MOVIE_EXTERNAL_IDS).toEqual('/movie/:id/external_ids');
    expect(urls.MOVIE_IMAGES).toEqual('/movie/:id/images');
    expect(urls.MOVIE_KEYWORDS).toEqual('/movie/:id/keywords');
    expect(urls.MOVIE_LATEST).toEqual('/movie/latest');
    expect(urls.MOVIE_LISTS).toEqual('/movie/:id/lists');
    expect(urls.MOVIE_NOW_PLAYING).toEqual('/movie/now_playing');
    expect(urls.MOVIE_POPULAR).toEqual('/movie/popular');
    expect(urls.MOVIE_RATING).toEqual('/movie/:id/rating');
    expect(urls.MOVIE_RECOMMENDATIONS).toEqual('/movie/:id/recommendations');
    expect(urls.MOVIE_RELEASE_DATES).toEqual('/movie/:id/release_dates');
    expect(urls.MOVIE_REVIEWS).toEqual('/movie/:id/reviews');
    expect(urls.MOVIE_SIMILAR).toEqual('/movie/:id/similar');
    expect(urls.MOVIE_TOP_RATED).toEqual('/movie/top_rated');
    expect(urls.MOVIE_TRANSLATIONS).toEqual('/movie/:id/translations');
    expect(urls.MOVIE_UPCOMING).toEqual('/movie/upcoming');
    expect(urls.MOVIE_VIDEOS).toEqual('/movie/:id/videos');
  });

  it('must list network constants correcty', () => {
    expect(urls.NETWORK_ALTERNATIVE_NAMES).toEqual(
      '/network/:id/alternative_names'
    );
    expect(urls.NETWORK_DETAILS).toEqual('/network/:id');
    expect(urls.NETWORK_IMAGES).toEqual('/network/:id/images');
  });

  it('must list review constants correctly', () => {
    expect(urls.REVIEW_DETAILS).toEqual('/review/:id');
  });

  it('must list search constants correctly', () => {
    expect(urls.SEARCH_TV).toEqual('/search/tv');
  });

  it('must list trending constants correctly', () => {
    expect(urls.TRENDING_ITEMS).toEqual('/trending/:mediaType/:timeWindow');
  });
});
