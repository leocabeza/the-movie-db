import axios from 'axios';
import * as utils from './';

jest.mock('axios');
const GAS_LEAK = { name: 'Community', season: 4 };

describe('utils', () => {
  it('must build a data object depending on method', () => {
    const data = { quote: "I hope this doesn't awaken anything in me" };

    expect(utils.buildBodyOrParams(data)).toEqual({ params: data });
    expect(utils.buildBodyOrParams(data, 'DELETE')).toEqual({ params: data });
    expect(utils.buildBodyOrParams(data, 'POST')).toEqual(data);
    expect(utils.buildBodyOrParams(data, 'PUT')).toEqual(data);
  });

  it('must resolve a get request', async () => {
    axios.get.mockResolvedValue(GAS_LEAK);
    const response = await utils.makeHttpRequest('/url', GAS_LEAK, 'get');

    expect(response).toBe(GAS_LEAK);
  });

  it('must resolve a post request', async () => {
    const successfulResponse = { status: 201, data: {} };
    axios.post.mockResolvedValue(successfulResponse);
    const response = await utils.makeHttpRequest('/url', GAS_LEAK, 'post');

    expect(response).toBe(successfulResponse);
  });

  it('must resolve a put request', async () => {
    const successfulResponse = { status: 200, data: GAS_LEAK };
    axios.put.mockResolvedValue(successfulResponse);
    const response = await utils.makeHttpRequest('/url', GAS_LEAK, 'put');

    expect(response).toBe(successfulResponse);
  });

  it('must resolve a delete request', async () => {
    const successfulResponse = { status: 200, data: GAS_LEAK };
    axios.delete.mockResolvedValue(successfulResponse);
    const response = await utils.makeHttpRequest('/url', GAS_LEAK, 'delete');

    expect(response).toBe(successfulResponse);
  });

  it('must resolve a request with a different api key', async () => {
    const successfulResponse = { status: 200, data: GAS_LEAK };
    axios.create.mockImplementation(() => ({
      interceptors: {
        response: {
          use: () => {},
        },
      },
      get: () => successfulResponse,
    }));
    axios.get.mockResolvedValue(successfulResponse);
    const response = await utils.makeHttpRequest(
      '/url',
      GAS_LEAK,
      'get',
      'XXX'
    );

    expect(response).toBe(successfulResponse);
  });

  it('must reject when a request fails', async () => {
    const failingMessage = 'Network Error';
    axios.get.mockImplementationOnce(() => Promise.reject(failingMessage));

    try {
      await utils.makeHttpRequest('/url');
    } catch (error) {
      expect(error).toBe(failingMessage);
    }
  });

  it('must build non undefined params', () => {
    const emptyObject = {};
    const objectWithNullValues = { foo: null, bar: null };
    const mixedObject = { foo: null, bar: false, baz: undefined };
    const objectWithValidValues = {
      foo: 4,
      bar: 'bar',
      baz: true,
      javascript: [],
    };

    expect(utils.removeUndefinedValues(emptyObject)).toEqual(emptyObject);
    expect(utils.removeUndefinedValues(objectWithNullValues)).toEqual(
      objectWithNullValues
    );
    expect(utils.removeUndefinedValues(mixedObject)).toEqual({
      foo: null,
      bar: false,
    });
    expect(utils.removeUndefinedValues(objectWithValidValues)).toEqual(
      objectWithValidValues
    );
  });
});
