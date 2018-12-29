import * as tvEpisodeGroup from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('tvEpisodeGroup entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof tvEpisodeGroup.details).toEqual('function');
  });

  it('must resolve tvEpisodeGroup.details with options', async () => {
    const promise = tvEpisodeGroup.details('1', {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tvEpisodeGroup.details is called without id', async () => {
    await expect(tvEpisodeGroup.details()).rejects.toBe(
      'An id has to be provided'
    );
  });
});
