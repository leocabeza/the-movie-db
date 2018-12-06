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
      external_id: '1',
      external_source: 'imdb_id',
      language: 'en',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when find.byId is called without external_id', async () => {
    await expect(find.byId()).rejects.toBe('An external_id has to be provided');
  });

  it('must reject when find.byId is called without external_source', async () => {
    await expect(find.byId({ external_id: '1' })).rejects.toBe(
      'An external_source has to be provided'
    );
  });
});
