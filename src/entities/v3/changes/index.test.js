import * as changes from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('changes entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof changes.movies).toEqual('function');
    expect(typeof changes.people).toEqual('function');
    expect(typeof changes.tvShows).toEqual('function');
  });

  it('must resolve changes.movies with options', async () => {
    const promise = changes.movies({
      page: 1,
      startDate: '2018-11-29',
      endDate: '2018-11-30',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve changes.movies without options', async () => {
    const promise = changes.movies();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve changes.tvShows with options', async () => {
    const promise = changes.tvShows({
      page: 1,
      startDate: '2018-11-29',
      endDate: '2018-11-30',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve changes.tvShows without options', async () => {
    const promise = changes.tvShows();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve changes.people with options', async () => {
    const promise = changes.people({
      page: 1,
      startDate: '2018-11-29',
      endDate: '2018-11-30',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve changes.people without options', async () => {
    const promise = changes.people();

    await expect(promise).resolves.toEqual({});
  });

  /* it('must reject when account.addToWatchlist is called without accountId', async () => {
    await expect(account.addToWatchlist()).rejects.toBe(
      'An accountId has to be provided'
    );
  }); */
});
