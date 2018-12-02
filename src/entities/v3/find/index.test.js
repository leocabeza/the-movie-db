import * as find from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('find entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof find.byId).toEqual('function');
  });

  it('must resolve find.byId with options', async () => {
    const promise = find.byId({
      externalId: '1',
      externalSource: 'imdb_id',
      language: 'en',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when find.byId is called without externalId', async () => {
    await expect(find.byId()).rejects.toBe('An externalId has to be provided');
  });

  it('must reject when find.byId is called without externalSource', async () => {
    await expect(find.byId({ externalId: '1' })).rejects.toBe(
      'An externalSource has to be provided'
    );
  });
});
