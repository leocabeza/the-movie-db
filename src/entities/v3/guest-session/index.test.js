import * as guestSession from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('guestSession entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof guestSession.ratedMovies).toEqual('function');
    expect(typeof guestSession.ratedTvEpisodes).toEqual('function');
    expect(typeof guestSession.ratedTvShows).toEqual('function');
  });

  it('must resolve guestSession.ratedMovies with guestSessionId and no options', async () => {
    const promise = guestSession.ratedMovies('1');

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve guestSession.ratedMovies with guestSessionId and options', async () => {
    const promise = guestSession.ratedMovies('1', {
      language: 'en-US',
      sort_by: 'created_at.asc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when guestSession.ratedMovies is called without guestSessionId', async () => {
    await expect(guestSession.ratedMovies()).rejects.toBe(
      'A guestSessionId has to be provided'
    );
  });

  it('must resolve guestSession.ratedTvEpisodes with guestSessionId and no options', async () => {
    const promise = guestSession.ratedTvEpisodes('1');

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve guestSession.ratedTvEpisodes with guestSessionId and options', async () => {
    const promise = guestSession.ratedTvEpisodes('1', {
      language: 'en-US',
      sort_by: 'created_at.asc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when guestSession.ratedTvEpisodes is called without guestSessionId', async () => {
    await expect(guestSession.ratedTvEpisodes()).rejects.toBe(
      'A guestSessionId has to be provided'
    );
  });

  it('must resolve guestSession.ratedTvShows with guestSessionId and no options', async () => {
    const promise = guestSession.ratedTvShows('1');

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve guestSession.ratedTvShows with guestSessionId and options', async () => {
    const promise = guestSession.ratedTvShows('1', {
      language: 'en-US',
      sort_by: 'created_at.asc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when guestSession.ratedTvShows is called without guestSessionId', async () => {
    await expect(guestSession.ratedTvShows()).rejects.toBe(
      'A guestSessionId has to be provided'
    );
  });
});
