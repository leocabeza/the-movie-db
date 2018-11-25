import axios from 'axios';
import * as network from './';

jest.mock('axios');

describe('network entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof network.details).toEqual('function');
    expect(typeof network.alternativeNames).toEqual('function');
  });

  it('must return a valid response from network.alternativeNames call', async () => {
    const mockedResponse = {
      id: 174,
      results: [
        {
          name: 'American Movie Classics',
          type: '1984–2002',
        },
      ],
    };
    axios.get.mockResolvedValue(mockedResponse);
    const response = await network.alternativeNames(1);

    expect(response).toBe(mockedResponse);
  });

  it('must reject when network.alternativeNames is called without networkId', async () => {
    await expect(network.alternativeNames()).rejects.toBe(
      'A networkId has to be provided'
    );
  });

  it('must return a valid response from network.details call', async () => {
    const mockedResponse = {
      headquarters: 'Los Gatos, California, United States',
      homepage: 'http://www.netflix.com',
      id: 213,
      name: 'Netflix',
      originCountry: 'US',
    };
    axios.get.mockResolvedValue(mockedResponse);
    const response = await network.details(1);

    expect(response).toBe(mockedResponse);
  });

  it('must reject when network.details is called without networkId', async () => {
    await expect(network.details()).rejects.toBe(
      'A networkId has to be provided'
    );
  });

  it('must return a valid response from network.images call', async () => {
    const mockedResponse = {
      id: 213,
      logos: [
        {
          aspectRatio: 3.73134328358209,
          filePath: '/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
          height: 268,
          id: '5a7a61b5c3a36821980020ff',
          fileType: '.svg',
          voteAverage: 0,
          voteCount: 0,
          width: 1000,
        },
      ],
    };
    axios.get.mockResolvedValue(mockedResponse);
    const response = await network.images(1);

    expect(response).toBe(mockedResponse);
  });

  it('must reject when network.images is called without networkId', async () => {
    await expect(network.images()).rejects.toBe(
      'A networkId has to be provided'
    );
  });
});
