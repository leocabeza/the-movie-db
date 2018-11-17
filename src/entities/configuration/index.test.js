import axios from 'axios';
import * as configuration from './';

jest.mock('axios');

describe('configuration entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof configuration.api).toEqual('function');
    expect(typeof configuration.countries).toEqual('function');
  });

  it('must return a valid response from configuration.api call', async() => {
    const mockedResponse = { changeKeys: ['adult', 'airDate'] };
    axios.get.mockResolvedValue(mockedResponse);
    const response = await configuration.api();

    expect(response).toBe(mockedResponse);
  });

  it('must return a valid response from configuration.countries call', async() => {
    const mockedResponse = [{ 'iso-3166-1': 'AF', englishName: 'Afghanistan'}];
    axios.get.mockResolvedValue(mockedResponse);
    const response = await configuration.countries();

    expect(response).toBe(mockedResponse);
  });
});
