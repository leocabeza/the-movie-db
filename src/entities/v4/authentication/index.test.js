import * as authentication from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('authentication entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof authentication.createAccessToken).toEqual('function');
    expect(typeof authentication.createRequestToken).toEqual('function');
    expect(typeof authentication.deleteAccessToken).toEqual('function');
  });

  it('must resolve authentication.createAccessToken with requestToken param', async () => {
    const promise = authentication.createAccessToken('XXX');

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when authentication.createAccessToken is called without requestToken', async () => {
    await expect(authentication.createAccessToken()).rejects.toBe(
      'A requestToken has to be provided'
    );
  });

  it('must resolve authentication.createRequestToken with redirectTo param', async () => {
    const promise = authentication.createRequestToken(
      'https://github.com/leocabeza'
    );

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve authentication.createRequestToken with no redirectTo param', async () => {
    const promise = authentication.createRequestToken();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve authentication.deleteAccessToken with requestToken param', async () => {
    const promise = authentication.deleteAccessToken('XXX');

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when authentication.deleteAccessToken is called without requestToken', async () => {
    await expect(authentication.deleteAccessToken()).rejects.toBe(
      'An accessToken has to be provided'
    );
  });
});
