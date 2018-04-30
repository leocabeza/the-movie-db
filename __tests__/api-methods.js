import MockAdapter from 'axios-mock-adapter';

import TheMovieDbClient from '../src';
import * as urls from '../src/urls';
import getConfigurationJson from '../__mocks__/get-configuration.json';
import getPopularMoviesJson from '../__mocks__/get-popular-movies.json';

describe('Client API responses', () => {
  const client = new TheMovieDbClient('MY_SECRET_API_KEY');
  const mock = new MockAdapter(client.httpInstance);

  it('should return valid keys when calling getConfiguration method', () => {
    mock.onGet(urls.getConfiguration).reply(200, getConfigurationJson);

    return client.getConfiguration()
      .then((response) => {
        expect(response.images).toBeDefined();
        expect(response.changeKeys).toBeDefined();
      });
  });

  it('should return valid keys when calling getPopularMovies method', () => {
    mock.onGet(urls.getPopularMovies).reply(200, getPopularMoviesJson);

    return client.getPopularMovies()
      .then((response) => {
        expect(response.paging).toBeDefined();
        expect(response.results).toBeDefined();
      });
  });
});
