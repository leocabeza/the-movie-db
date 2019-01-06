import * as account from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('account entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof account.favoriteMovies).toEqual('function');
    expect(typeof account.favoriteTvShows).toEqual('function');
    expect(typeof account.lists).toEqual('function');
    expect(typeof account.movieRecommendations).toEqual('function');
    expect(typeof account.movieWatchlist).toEqual('function');
    expect(typeof account.ratedMovies).toEqual('function');
    expect(typeof account.ratedTvShows).toEqual('function');
    expect(typeof account.tvShowRecommendations).toEqual('function');
    expect(typeof account.tvShowWatchlist).toEqual('function');
  });

  it('must resolve account.favoriteMovies with options', async () => {
    const promise = account.favoriteMovies('XXX', {
      page: 1,
      sort_by: 'vote_average.desc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve account.favoriteMovies with no options', async () => {
    const promise = account.favoriteMovies('XXX');

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.favoriteMovies is called without accountId', async () => {
    await expect(account.favoriteMovies()).rejects.toBe(
      'An accountId has to be provided'
    );
  });

  it('must resolve account.favoriteTvShows with options', async () => {
    const promise = account.favoriteTvShows('XXX', {
      page: 1,
      sort_by: 'vote_average.desc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve account.favoriteTvShows with no options', async () => {
    const promise = account.favoriteTvShows('XXX');

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.favoriteTvShows is called without accountId', async () => {
    await expect(account.favoriteTvShows()).rejects.toBe(
      'An accountId has to be provided'
    );
  });

  it('must resolve account.lists with options', async () => {
    const promise = account.lists(1, {
      page: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve account.lists with no options', async () => {
    const promise = account.lists(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.lists is called without accountId', async () => {
    await expect(account.lists()).rejects.toBe(
      'An accountId has to be provided'
    );
  });

  it('must resolve account.movieRecommendations with options', async () => {
    const promise = account.movieRecommendations('XXX', {
      page: 1,
      sort_by: 'vote_average.desc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve account.movieRecommendations with no options', async () => {
    const promise = account.movieRecommendations('XXX');

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.movieRecommendations is called without accountId', async () => {
    await expect(account.movieRecommendations()).rejects.toBe(
      'An accountId has to be provided'
    );
  });

  it('must resolve account.movieWatchlist with options', async () => {
    const promise = account.movieWatchlist('XXX', {
      page: 1,
      sort_by: 'vote_average.desc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve account.movieWatchlist with no options', async () => {
    const promise = account.movieWatchlist('XXX');

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.movieWatchlist is called without accountId', async () => {
    await expect(account.movieWatchlist()).rejects.toBe(
      'An accountId has to be provided'
    );
  });

  it('must resolve account.ratedMovies with options', async () => {
    const promise = account.ratedMovies('XXX', {
      page: 1,
      sort_by: 'vote_average.desc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve account.ratedMovies with no options', async () => {
    const promise = account.ratedMovies('XXX');

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.ratedMovies is called without accountId', async () => {
    await expect(account.ratedMovies()).rejects.toBe(
      'An accountId has to be provided'
    );
  });

  it('must resolve account.ratedTvShows with options', async () => {
    const promise = account.ratedTvShows('XXX', {
      page: 1,
      sort_by: 'vote_average.desc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve account.ratedTvShows with no options', async () => {
    const promise = account.ratedTvShows('XXX');

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.ratedTvShows is called without accountId', async () => {
    await expect(account.ratedTvShows()).rejects.toBe(
      'An accountId has to be provided'
    );
  });

  it('must resolve account.tvShowRecommendations with options', async () => {
    const promise = account.tvShowRecommendations('XXX', {
      page: 1,
      sort_by: 'vote_average.desc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve account.tvShowRecommendations with no options', async () => {
    const promise = account.tvShowRecommendations('XXX');

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.tvShowRecommendations is called without accountId', async () => {
    await expect(account.tvShowRecommendations()).rejects.toBe(
      'An accountId has to be provided'
    );
  });

  it('must resolve account.tvShowWatchlist with options', async () => {
    const promise = account.tvShowWatchlist('XXX', {
      page: 1,
      sort_by: 'vote_average.desc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve account.tvShowWatchlist with no options', async () => {
    const promise = account.tvShowWatchlist('XXX');

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.tvShowWatchlist is called without accountId', async () => {
    await expect(account.tvShowWatchlist()).rejects.toBe(
      'An accountId has to be provided'
    );
  });
});
