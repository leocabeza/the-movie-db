import Client from './client';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { success, error } from './interceptors/parser';

describe('client', () => {
  it('must throw if an api key is not passed in', () => {
    expect(() => {
      new Client();
    }).toThrow();
  });

  it('interceptor', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet('/success').reply(200, { test_param: 1 });
    mock.onGet('/error').reply(422, { status_message: 'test' });

    new Client('API_KEY');

    const data = await axios.get('/success');
    expect(data.testParam).toBe(1);
    try {
      await axios.get('/error');
    } catch (error) {
      expect(error).toBe('test');
    }
  });

  it('must blabla', () => {
    axios.interceptors.response.use = jest.fn();
    new Client('API_KEY');
    expect(axios.interceptors.response.use).toHaveBeenCalledWith(
      success,
      error
    );
  });

  it('must not throw when an api key is passed', () => {
    expect(() => {
      new Client('API_KEY');
    }).not.toThrow();
  });
});
