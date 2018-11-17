import * as urls from './';

describe('urls', () => {
  it('must list constants correctly', () => {
    expect(urls.API_CONFIGURATION).toEqual('/configuration');
    expect(urls.COUNTRIES_CONFIGURATION).toEqual('/configuration/countries');
    expect(urls.POPULAR_MOVIES).toEqual('/movie/popular');
  });
});
