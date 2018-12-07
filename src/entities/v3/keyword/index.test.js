import * as keyword from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('keyword entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof keyword.details).toEqual('function');
    expect(typeof keyword.movies).toEqual('function');
  });

  it('must resolve keyword.details with keywordId', async () => {
    const promise = keyword.details(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when keyword.details is called without keywordId', async () => {
    await expect(keyword.details()).rejects.toBe(
      'A keywordId has to be provided'
    );
  });

  it('must resolve keyword.movies with keywordId and no options', async () => {
    const promise = keyword.movies(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve keyword.movies with keywordId and options', async () => {
    const promise = keyword.movies(1, {
      language: 'en-US',
      include_adult: true,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when keyword.movies is called without keywordId', async () => {
    await expect(keyword.movies()).rejects.toBe(
      'A keywordId has to be provided'
    );
  });
});
