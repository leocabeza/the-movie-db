import fetch from 'cross-fetch';
import { setV3Key, setV4Key, makeHttpRequest } from './utils';

jest.mock('cross-fetch');
fetch.mockImplementation(() =>
  Promise.resolve({ ok: true, json: () => 'dummy response' })
);

describe('utils', () => {
  afterEach(() => {
    fetch.mockClear();
  });

  it('must set v3 key in the url', async () => {
    setV3Key('V3 SECRET');

    await makeHttpRequest('');

    expect(fetch.mock.calls[0][0]).toEqual(
      'https://api.themoviedb.org/3?api_key=V3 SECRET&'
    );
  });

  it('must set v4 key in header and version in the url', async () => {
    setV4Key('V4 SECRET');

    await makeHttpRequest('', {}, 'get', { usev4: true });

    expect(fetch).toHaveBeenCalledWith('https://api.themoviedb.org/4?', {
      headers: {
        authorization: 'Bearer V4 SECRET',
        'content-type': 'application/json;charset=utf-8',
      },
      method: 'get',
    });
  });

  it('must set v4 access token in header and version in the url', async () => {
    setV4Key('V4 SECRET');

    await makeHttpRequest('', {}, 'get', {
      usev4: true,
      userAccessToken: 'SECRET_ACCESS_TOKEN',
    });

    expect(fetch).toHaveBeenCalledWith('https://api.themoviedb.org/4?', {
      headers: {
        authorization: 'Bearer SECRET_ACCESS_TOKEN',
        'content-type': 'application/json;charset=utf-8',
      },
      method: 'get',
    });
  });

  it('must set data as a querystring if method is get or delete', async () => {
    setV3Key('V3 SECRET');

    await makeHttpRequest('', { page: 1 });
    await makeHttpRequest('', { id: 1 }, 'delete');

    expect(fetch.mock.calls[0][0]).toEqual(
      'https://api.themoviedb.org/3?api_key=V3 SECRET&page=1'
    );
    expect(fetch.mock.calls[1][0]).toEqual(
      'https://api.themoviedb.org/3?api_key=V3 SECRET&id=1'
    );
  });

  it('must set data as a part of the body if method is post or put', async () => {
    setV3Key('V3 SECRET');

    await makeHttpRequest('', { name: 'Alias' }, 'post');
    await makeHttpRequest('', { id: 1, name: 'Alias', seasons: '6' }, 'put');

    expect(fetch.mock.calls[0][1]).toEqual({
      body: '{"name":"Alias"}',
      headers: {
        'content-type': 'application/json;charset=utf-8',
      },
      method: 'post',
    });
    expect(fetch.mock.calls[1][1]).toEqual({
      body: '{"id":1,"name":"Alias","seasons":"6"}',
      headers: {
        'content-type': 'application/json;charset=utf-8',
      },
      method: 'put',
    });
  });

  it('must return a successful promise', async () => {
    setV3Key('V3 SECRET');

    const response = await makeHttpRequest('');

    expect(response).toEqual('dummy response');
  });

  it('must return a failed promise if response is not ok', async () => {
    setV3Key('V3 SECRET');
    fetch.mockImplementationOnce(() =>
      Promise.reject('some server error happened')
    );

    try {
      await makeHttpRequest('');
    } catch (error) {
      expect(error).toEqual('some server error happened');
    }
  });
});
