import axios from 'axios';
import * as configuration from './';

jest.mock('axios');

describe('configuration entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof configuration.api).toEqual('function');
    expect(typeof configuration.countries).toEqual('function');
    expect(typeof configuration.jobs).toEqual('function');
    expect(typeof configuration.languages).toEqual('function');
    expect(typeof configuration.primaryTranslations).toEqual('function');
    expect(typeof configuration.timezones).toEqual('function');
  });

  it('must return a valid response from configuration.api call', async () => {
    const mockedResponse = { changeKeys: ['adult', 'airDate'] };
    axios.get.mockResolvedValue(mockedResponse);
    const response = await configuration.api();

    expect(response).toBe(mockedResponse);
  });

  it('must return a valid response from configuration.countries call', async () => {
    const mockedResponse = [{ 'iso-3166-1': 'AF', englishName: 'Afghanistan' }];
    axios.get.mockResolvedValue(mockedResponse);
    const response = await configuration.countries();

    expect(response).toBe(mockedResponse);
  });

  it('must return a valid response from configuration.jobs call', async () => {
    const mockedResponse = [{ deparment: 'Crew', jobs: ['Special Effects'] }];
    axios.get.mockResolvedValue(mockedResponse);
    const response = await configuration.jobs();

    expect(response).toBe(mockedResponse);
  });

  it('must return a valid response from configuration.languages call', async () => {
    const mockedResponse = [
      { 'iso-639-1': 'xx', englishName: 'No Language', name: 'No Language' },
    ];
    axios.get.mockResolvedValue(mockedResponse);
    const response = await configuration.languages();

    expect(response).toBe(mockedResponse);
  });

  it('must return a valid response from configuration.primaryTranslations call', async () => {
    const mockedResponse = ['ar-AE', 'ar-SA'];
    axios.get.mockResolvedValue(mockedResponse);
    const response = await configuration.primaryTranslations();

    expect(response).toBe(mockedResponse);
  });

  it('must return a valid response from configuration.timezones call', async () => {
    const mockedResponse = [{ 'iso-3166-1': 'AD', zones: ['Europe/Andorra'] }];
    axios.get.mockResolvedValue(mockedResponse);
    const response = await configuration.timezones();

    expect(response).toBe(mockedResponse);
  });
});
