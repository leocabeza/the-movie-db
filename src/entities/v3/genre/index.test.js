import * as genre from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('genre entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof genre.movieList).toEqual('function');
    expect(typeof genre.tvList).toEqual('function');
  });

  it('must resolve genre.movieList with options', async () => {
    const promise = genre.movieList({ language: 'en-US' });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve genre.movieList without options', async () => {
    const promise = genre.movieList();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve genre.tvList with options', async () => {
    const promise = genre.tvList({ language: 'en-US' });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve genre.tvList without options', async () => {
    const promise = genre.tvList();

    await expect(promise).resolves.toEqual({});
  });
});
