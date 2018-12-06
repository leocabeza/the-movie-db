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
      media_type: 'all',
      time_window: 'week',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when trending.items is called without media_type', async () => {
    await expect(trending.items()).rejects.toBe(
      'A media_type has to be provided'
    );
  });

  it('must reject when trending.items is called without time_window', async () => {
    await expect(trending.items({ media_type: 'all' })).rejects.toBe(
      'A time_window has to be provided'
    );
  });
});
