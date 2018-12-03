import axios from 'axios';
import Client from './client';
import { success, error } from './interceptors/parser';

describe('client', () => {
  it('must throw if an api key is not passed in', () => {
    expect(() => {
      new Client();
    }).toThrow();
  });

  it('must not throw when an api key is passed', () => {
    expect(() => {
      new Client('API_KEY');
    }).not.toThrow();
  });

  // Thanks to @jdaviderb for the help
  it('must intercept the response', async () => {
    axios.interceptors.response.use = jest.fn();
    new Client('API_KEY');
    expect(axios.interceptors.response.use).toHaveBeenCalledWith(
      success,
      error
    );
  });
});
