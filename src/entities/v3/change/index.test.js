import * as change from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('change entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof change.movies).toEqual('function');
    expect(typeof change.people).toEqual('function');
    expect(typeof change.tvShows).toEqual('function');
  });

  it('must resolve change.movies with options', async () => {
    const promise = change.movies({
      page: 1,
      startDate: '2018-11-29',
      endDate: '2018-11-30',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve change.movies without options', async () => {
    const promise = change.movies();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve change.tvShows with options', async () => {
    const promise = change.tvShows({
      page: 1,
      startDate: '2018-11-29',
      endDate: '2018-11-30',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve change.tvShows without options', async () => {
    const promise = change.tvShows();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve change.people with options', async () => {
    const promise = change.people({
      page: 1,
      startDate: '2018-11-29',
      endDate: '2018-11-30',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve change.people without options', async () => {
    const promise = change.people();

    await expect(promise).resolves.toEqual({});
  });
});
