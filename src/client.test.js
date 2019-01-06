import axios from 'axios';
import Client, { HOST } from './client';
import { success, error } from './interceptors/parser';

describe('client', () => {
  it('must throw if an api key is not passed in', () => {
    expect(() => {
      new Client();
    }).toThrow();
  });

  it('must not throw when an api key is passed and v3 version is used', () => {
    expect(() => {
      const client = new Client('API_KEY');
      expect(client).toBeInstanceOf(Object);
    }).not.toThrow();
  });

  it('must not throw when an api key is passed and v4 version is used', () => {
    expect(() => {
      const client = new Client('API_KEY', false);
      expect(client).toBeInstanceOf(Object);
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

  it('must have a valid HOST variable exposed', () => {
    expect(HOST).toEqual('https://api.themoviedb.org/');
  });
});
