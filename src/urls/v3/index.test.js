import * as urls from './';

describe('urls', () => {
  it('must list account constants correctly', () => {
    expect(urls.ACCOUNT_ADD_TO_WATCHLIST).toEqual('/account/:id/watchlist');
    expect(urls.ACCOUNT_DETAILS).toEqual('/account');
    expect(urls.ACCOUNT_FAVORITE_MOVIES).toEqual(
      '/account/:id/favorite/movies'
    );
    expect(urls.ACCOUNT_FAVORITE_TV_SHOWS).toEqual('/account/:id/favorite/tv');
    expect(urls.ACCOUNT_LISTS).toEqual('/account/:id/lists');
    expect(urls.ACCOUNT_MARK_AS_FAVORITE).toEqual('/account/:id/favorite');
    expect(urls.ACCOUNT_MOVIE_WATCHLIST).toEqual(
      '/account/:id/watchlist/movies'
    );
    expect(urls.ACCOUNT_RATED_MOVIES).toEqual('/account/:id/rated/movies');
    expect(urls.ACCOUNT_RATED_TV_SHOWS).toEqual('/account/:id/rated/tv');
    expect(urls.ACCOUNT_RATED_TV_SHOWS_EPISODES).toEqual(
      '/account/:id/rated/tv/episodes'
    );
    expect(urls.ACCOUNT_TV_SHOW_WATCHLIST).toEqual('/account/:id/watchlist/tv');
  });

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

  it('must list certification constants correctly', () => {
    expect(urls.CERTIFICATION_MOVIES).toEqual('/certification/movie/list');
    expect(urls.CERTIFICATION_TV_SHOWS).toEqual('/certification/tv/list');
  });

  it('must list change constants correctly', () => {
    expect(urls.CHANGE_MOVIES).toEqual('/movie/changes');
    expect(urls.CHANGE_PERSON).toEqual('/person/changes');
    expect(urls.CHANGE_TV_SHOWS).toEqual('/tv/changes');
  });

  it('must list collection constants correctly', () => {
    expect(urls.COLLECTION_DETAILS).toEqual('/collection/:id');
    expect(urls.COLLECTION_IMAGES).toEqual('/collection/:id/images');
    expect(urls.COLLECTION_TRANSLATIONS).toEqual(
      '/collection/:id/translations'
    );
  });

  it('must list company constants correctly', () => {
    expect(urls.COMPANY_ALTERNATIVE_NAMES).toEqual(
      '/company/:id/alternative_names'
    );
    expect(urls.COMPANY_DETAILS).toEqual('/company/:id');
    expect(urls.COMPANY_IMAGES).toEqual('/company/:id/images');
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

  it('must list credit constants correctly', () => {
    expect(urls.CREDIT_DETAILS).toEqual('/credit/:id');
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
    expect(urls.SEARCH_COLLECTION).toEqual('/search/collection');
    expect(urls.SEARCH_COMPANY).toEqual('/search/company');
    expect(urls.SEARCH_KEYWORD).toEqual('/search/keyword');
    expect(urls.SEARCH_MOVIE).toEqual('/search/movie');
    expect(urls.SEARCH_MULTI).toEqual('/search/multi');
    expect(urls.SEARCH_PEOPLE).toEqual('/search/person');
    expect(urls.SEARCH_TV).toEqual('/search/tv');
  });

  it('must list trending constants correctly', () => {
    expect(urls.TRENDING_ITEMS).toEqual('/trending/:mediaType/:timeWindow');
  });
});
