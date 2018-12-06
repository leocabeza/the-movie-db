import * as discover from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('movies entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof discover.movie).toEqual('function');
    expect(typeof discover.tvShows).toEqual('function');
  });

  it('must resolve discover.movie call with options', async () => {
    const promise = discover.movie({
      language: 'en-US',
      page: 1,
      include_adult: false,
      include_video: false,
      sort_by: 'popularity.desc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve discover.movie call with no options', async () => {
    const promise = discover.movie();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve discover.tvShows call with options', async () => {
    const promise = discover.tvShows({
      language: 'en-US',
      page: 1,
      include_adult: false,
      include_video: false,
      sort_by: 'popularity.desc',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve discover.tvShows call with no options', async () => {
    const promise = discover.tvShows();

    await expect(promise).resolves.toEqual({});
  });
});
