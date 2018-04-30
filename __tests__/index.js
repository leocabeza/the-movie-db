import TheMovieDbClient from '../src';

describe('Client API', () => {
  const client = new TheMovieDbClient('MY_SECRET_API_KEY');

  it('should throw when no api key is provided', () => {
    expect(() => {
      TheMovieDbClient();
    }).toThrow();
  });

  it('should implement getConfiguration method', () => {
    expect(client.getConfiguration).toBeTruthy();
  });

  it('should implement getPopularMovies method', () => {
    expect(client.getPopularMovies).toBeTruthy();
  });
});
