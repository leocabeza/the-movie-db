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
        expect(response.page).toBeDefined();
        expect(response.totalResults).toBeDefined();
        expect(response.totalPages).toBeDefined();
        expect(response.results).toBeDefined();
      });
  });

  it('should return an error object when calling with invalid api key', () => {
    mock.reset();
    mock.onAny().reply(401, {});

    return expect(client.getConfiguration())
      .rejects.toHaveProperty(
        'message',
        'Request failed with status code 401',
      );
  });

  it('should return an error object when calling a non-existent resource', () => {
    mock.reset();
    mock.onAny().reply(404, {});

    return expect(client.getConfiguration())
      .rejects.toHaveProperty(
        'message',
        'Request failed with status code 404',
      );
  });
});
