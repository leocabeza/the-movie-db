import * as authentication from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('authentication entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof authentication.newGuestSession).toEqual('function');
    expect(typeof authentication.newSession).toEqual('function');
    expect(typeof authentication.newToken).toEqual('function');
  });

  it('must resolve authentication.newGuestSession call', async () => {
    const promise = authentication.newGuestSession();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve authentication.newSession call', async () => {
    const promise = authentication.newSession('REQUEST_TOKEN');

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when authentication.newSession is called without requestToken', async () => {
    await expect(authentication.newSession()).rejects.toBe(
      'A request token has to be provided'
    );
  });

  it('must resolve authentication.newToken call', async () => {
    const promise = authentication.newToken();

    await expect(promise).resolves.toEqual({});
  });

  it('must validate token with login', async () => {
    const promise = authentication.validateWithLogin({
      username: 'Th34sscr4ckb4nd1t',
      password: 'annie',
      requestToken: 'XXX',
    });

    expect(promise).resolves.toEqual({});
  });

  it('must reject when authentication.validateWithLogin is called without options', async () => {
    await expect(authentication.validateWithLogin()).rejects.toBe(
      'An username, password and a requestToken has to be provided'
    );
  });

  it('must convert session from v4 to v3', async () => {
    const promise = authentication.sessionConvert('V4_ACCESS_TOKEN');

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when authentication.sessionConvert is called without a v4 access token', async () => {
    await expect(authentication.sessionConvert()).rejects.toBe(
      'A v4 access token has to be provided'
    );
  });

  it('must resolve authentication.logout call', async () => {
    const response = authentication.logout('SESSION_ID');

    await expect(response).resolves.toEqual({});
  });

  it('must reject when authentication.logout is called without session id', async () => {
    await expect(authentication.logout()).rejects.toBe(
      'A session id has to be provided'
    );
  });
});
