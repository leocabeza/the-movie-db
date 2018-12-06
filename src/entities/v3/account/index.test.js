import * as account from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('account entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof account.addToWatchlist).toEqual('function');
    expect(typeof account.details).toEqual('function');
    expect(typeof account.favoriteMovies).toEqual('function');
    expect(typeof account.favoriteTvShows).toEqual('function');
    expect(typeof account.lists).toEqual('function');
    expect(typeof account.markAsFavorite).toEqual('function');
    expect(typeof account.movieWatchlist).toEqual('function');
    expect(typeof account.ratedMovies).toEqual('function');
    expect(typeof account.ratedTvShows).toEqual('function');
    expect(typeof account.ratedTvEpisodes).toEqual('function');
    expect(typeof account.tvShowWatchlist).toEqual('function');
  });

  it('must resolve account.addToWatchlist with options', async () => {
    const promise = account.addToWatchlist(1, 'XXX', {
      media_id: 1,
      media_type: 'movie',
      favorite: true,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.addToWatchlist is called without accountId', async () => {
    await expect(account.addToWatchlist()).rejects.toBe(
      'An accountId has to be provided'
    );
  });

  it('must reject when account.addToWatchlist is called without session_id', async () => {
    await expect(account.addToWatchlist(1)).rejects.toBe(
      'A sessionId has to be provided'
    );
  });

  it('must reject when account.addToWatchlist is called without body option', async () => {
    await expect(account.addToWatchlist(1, 'XXX')).rejects.toBe(
      'A body must have a media_type, media_id and watchlist keys'
    );
  });

  it('must resolve account.details with sessionId', async () => {
    const promise = account.details('XXX');

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.details is called without sessionId', async () => {
    await expect(account.details()).rejects.toBe(
      'A sessionId has to be provided'
    );
  });

  it('must resolve account.favoriteMovies with options', async () => {
    const promise = account.favoriteMovies(1, {
      session_id: 'XXX',
      language: 'en-US',
      page: 1,
      sort_by: 'created_at.asc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.favoriteMovies is called without accountId option', async () => {
    await expect(account.favoriteMovies()).rejects.toBe(
      'An accountId has to be provided'
    );
  });

  it('must reject when account.favoriteMovies is called without session_id option', async () => {
    await expect(account.favoriteMovies(1)).rejects.toBe(
      'A session_id option has to be provided'
    );
  });

  it('must resolve account.favoriteTvShows with options', async () => {
    const promise = account.favoriteTvShows(1, {
      session_id: 'XXX',
      language: 'en-US',
      page: 1,
      sort_by: 'created_at.asc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.favoriteTvShows is called without accountId option', async () => {
    await expect(account.favoriteTvShows()).rejects.toBe(
      'An accountId has to be provided'
    );
  });

  it('must reject when account.favoriteTvShows is called without session_id option', async () => {
    await expect(account.favoriteTvShows(1)).rejects.toBe(
      'A session_id option has to be provided'
    );
  });

  it('must resolve account.lists with options', async () => {
    const promise = account.lists(1, {
      session_id: 'XXX',
      language: 'en-US',
      page: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.lists is called without accountId option', async () => {
    await expect(account.lists()).rejects.toBe(
      'An accountId has to be provided'
    );
  });

  it('must reject when account.lists is called without session_id option', async () => {
    await expect(account.lists(1)).rejects.toBe(
      'A session_id option has to be provided'
    );
  });

  it('must resolve account.markAsFavorite with options', async () => {
    const promise = account.markAsFavorite(1, 'XXX', {
      media_id: 1,
      media_type: 'movie',
      favorite: true,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.markAsFavorite is called without accountId', async () => {
    await expect(account.markAsFavorite()).rejects.toBe(
      'An accountId has to be provided'
    );
  });

  it('must reject when account.markAsFavorite is called without session_id', async () => {
    await expect(account.markAsFavorite(1)).rejects.toBe(
      'A sessionId has to be provided'
    );
  });

  it('must reject when account.markAsFavorite is called without body option', async () => {
    await expect(account.markAsFavorite(1, 'XXX')).rejects.toBe(
      'A body must have a media_type, media_id and favorite keys'
    );
  });

  it('must resolve account.movieWatchlist with options', async () => {
    const promise = account.movieWatchlist(1, {
      session_id: 'XXX',
      language: 'en-US',
      page: 1,
      sort_by: 'created_at.asc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.movieWatchlist is called without accountId option', async () => {
    await expect(account.movieWatchlist()).rejects.toBe(
      'An accountId has to be provided'
    );
  });

  it('must reject when account.movieWatchlist is called without session_id option', async () => {
    await expect(account.movieWatchlist(1)).rejects.toBe(
      'A session_id option has to be provided'
    );
  });

  it('must resolve account.ratedMovies with options', async () => {
    const promise = account.ratedMovies(1, {
      session_id: 'XXX',
      language: 'en-US',
      page: 1,
      sort_by: 'created_at.asc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.ratedMovies is called without accountId option', async () => {
    await expect(account.ratedMovies()).rejects.toBe(
      'An accountId has to be provided'
    );
  });

  it('must reject when account.ratedMovies is called without session_id option', async () => {
    await expect(account.ratedMovies(1)).rejects.toBe(
      'A session_id option has to be provided'
    );
  });

  it('must resolve account.ratedTvShows with options', async () => {
    const promise = account.ratedTvShows(1, {
      session_id: 'XXX',
      language: 'en-US',
      page: 1,
      sort_by: 'created_at.asc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.ratedTvShows is called without accountId option', async () => {
    await expect(account.ratedTvShows()).rejects.toBe(
      'An accountId has to be provided'
    );
  });

  it('must reject when account.ratedTvShows is called without session_id option', async () => {
    await expect(account.ratedTvShows(1)).rejects.toBe(
      'A session_id option has to be provided'
    );
  });

  it('must resolve account.ratedTvEpisodes with options', async () => {
    const promise = account.ratedTvEpisodes(1, {
      session_id: 'XXX',
      language: 'en-US',
      page: 1,
      sort_by: 'created_at.asc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.ratedTvEpisodes is called without accountId option', async () => {
    await expect(account.ratedTvEpisodes()).rejects.toBe(
      'An accountId has to be provided'
    );
  });

  it('must reject when account.ratedTvEpisodes is called without session_id option', async () => {
    await expect(account.ratedTvEpisodes(1)).rejects.toBe(
      'A session_id option has to be provided'
    );
  });

  it('must resolve account.tvShowWatchlist with options', async () => {
    const promise = account.tvShowWatchlist(1, {
      session_id: 'XXX',
      language: 'en-US',
      page: 1,
      sort_by: 'created_at.asc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when account.tvShowWatchlist is called without accountId option', async () => {
    await expect(account.tvShowWatchlist()).rejects.toBe(
      'An accountId has to be provided'
    );
  });

  it('must reject when account.tvShowWatchlist is called without session_id option', async () => {
    await expect(account.tvShowWatchlist(1)).rejects.toBe(
      'A session_id option has to be provided'
    );
  });
});
