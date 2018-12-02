import * as trending from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('trending entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof trending.items).toEqual('function');
  });

  it('must resolve trending.items with options', async () => {
    const promise = trending.items({
      mediaType: 'all',
      timeWindow: 'week',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when trending.items is called without mediaType', async () => {
    await expect(trending.items()).rejects.toBe(
      'A mediaType has to be provided'
    );
  });

  it('must reject when trending.items is called without timeWindow', async () => {
    await expect(trending.items({ mediaType: 'all' })).rejects.toBe(
      'A timeWindow has to be provided'
    );
  });
});
