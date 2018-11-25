import axios from 'axios';
import * as authentication from './';

jest.mock('axios');

describe('authentication entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof authentication.newGuestSession).toEqual('function');
    expect(typeof authentication.newSession).toEqual('function');
    expect(typeof authentication.newToken).toEqual('function');
  });

  it('must return a valid response from authentication.newGuestSession call', async () => {
    const mockedResponse = {
      success: true,
      guestSession_id: 'XXX',
      expiresAt: '2018-11-19 19:32:40 UTC',
    };
    axios.get.mockResolvedValue(mockedResponse);
    const response = await authentication.newGuestSession();

    expect(response).toBe(mockedResponse);
  });

  it('must return a valid response from authentication.newSession call', async () => {
    const mockedResponse = {
      success: true,
      session_id: 'XXX',
    };
    axios.post.mockResolvedValue(mockedResponse);
    const response = await authentication.newSession('REQUEST_TOKEN');

    expect(response).toBe(mockedResponse);
  });

  it('must reject when authentication.newSession is called without requestToken', async () => {
    await expect(authentication.newSession()).rejects.toBe(
      'A request token has to be provided'
    );
  });

  it('must return a valid response from authentication.newToken call', async () => {
    const mockedResponse = {
      success: true,
      expiresAt: '2018-11-19T02:41:58.000Z',
      requestToken: 'XXX',
    };
    axios.get.mockResolvedValue(mockedResponse);
    const response = await authentication.newToken();

    expect(response).toBe(mockedResponse);
  });

  it('must validate token with login', async () => {
    const mockedResponse = {
      success: true,
      expiresAt: '2018-11-19T02:41:58.000Z',
      requestToken: 'XXX',
    };

    axios.post.mockResolvedValue(mockedResponse);
    const response = await authentication.validateWithLogin({
      username: 'Th34sscr4ckb4nd1t',
      password: 'annie',
      requestToken: 'XXX',
    });

    expect(response).toBe(mockedResponse);
  });

  it('must reject when authentication.validateWithLogin is called without options', async () => {
    await expect(authentication.validateWithLogin()).rejects.toBe(
      'An username, password and a requestToken has to be provided'
    );
  });

  it('must convert session from v4 to v3', async () => {
    const mockedResponse = {
      success: true,
      session_id: 'XXX',
    };

    axios.post.mockResolvedValue(mockedResponse);
    const response = await authentication.sessionConvert('V4_ACCESS_TOKEN');

    expect(response).toBe(mockedResponse);
  });

  it('must reject when authentication.sessionConvert is called without a v4 access token', async () => {
    await expect(authentication.sessionConvert()).rejects.toBe(
      'A v4 access token has to be provided'
    );
  });

  it('must return a valid response from authentication.logout call', async () => {
    const mockedResponse = {
      success: true,
    };
    axios.delete.mockResolvedValue(mockedResponse);
    const response = await authentication.logout('SESSION_ID');

    expect(response).toBe(mockedResponse);
  });

  it('must reject when authentication.logout is called without session id', async () => {
    await expect(authentication.logout()).rejects.toBe(
      'A session id has to be provided'
    );
  });
});
