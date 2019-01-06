import * as urls from './';

describe('urls', () => {
  it('must list account constants', () => {
    expect(urls.ACCOUNT_FAVORITE_MOVIES).toEqual(
      '/account/:id/movie/favorites'
    );
    expect(urls.ACCOUNT_FAVORITE_TV_SHOWS).toEqual('/account/:id/tv/favorites');
    expect(urls.ACCOUNT_LISTS).toEqual('/account/:id/lists');
    expect(urls.ACCOUNT_MOVIE_RECOMMENDATIONS).toEqual(
      '/account/:id/movie/recommendations'
    );
    expect(urls.ACCOUNT_MOVIE_WATCHLIST).toEqual(
      '/account/:id/movie/watchlist'
    );
    expect(urls.ACCOUNT_RATED_MOVIES).toEqual('/account/:id/movie/rated');
    expect(urls.ACCOUNT_RATED_TV_SHOWS).toEqual('/account/:id/tv/rated');
    expect(urls.ACCOUNT_TV_SHOW_RECOMMENDATIONS).toEqual(
      '/account/:id/tv/recommendations'
    );
    expect(urls.ACCOUNT_TV_SHOW_WATCHLIST).toEqual('/account/:id/tv/watchlist');
  });

  it('must list authentication constants', () => {
    expect(urls.AUTH_ACCESS_TOKEN).toEqual('/auth/access_token');
    expect(urls.AUTH_REQUEST_TOKEN).toEqual('/auth/request_token');
  });

  it('must list "list" constants', () => {
    expect(urls.ACCOUNT_LIST_CLEAR_ITEMS).toEqual('/list/:id/clear');
    expect(urls.ACCOUNT_LIST_CREATE).toEqual('/list');
    expect(urls.ACCOUNT_LIST_DETAILS).toEqual('/list/:id');
    expect(urls.ACCOUNT_LIST_ITEM_STATUS).toEqual('/list/:id/item_status');
    expect(urls.ACCOUNT_LIST_ITEMS).toEqual('/list/:id/items');
  });
});
