import axios from 'axios';
import * as trending from './';

jest.mock('axios');

describe('trending entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof trending.items).toEqual('function');
  });

  it('must return a valid response from trending.items with options', async () => {
    const mockResponse = {
      page: 1,
      results: [
        {
          adult: false,
          backdropPath: '/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
          genreIds: [28, 12, 14, 878],
          id: 299536,
          originalLanguage: 'en',
          originalTitle: 'Avengers: Infinity War',
          overview:
            'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
          posterPath: '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
          releaseDate: '2018-04-25',
          title: 'Avengers: Infinity War',
          video: false,
          voteAverage: 8.3,
          voteCount: 6937,
          popularity: 358.799,
        },
      ],
      total_pages: 792,
      total_results: 15831,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await trending.items({
      mediaType: 'all',
      timeWindow: 'week',
    });

    expect(response).toBe(mockResponse);
  });

  it('must reject when trending.items is called without mediaType', async () => {
    await expect(trending.items()).rejects.toBe(
      'A mediaType has to be provided'
    );
  });

  it('must reject when trending.items is called without timeWindow', async () => {
    await expect(trending.items({ mediaType: 'all' })).rejects.toBe(
      'A timeWindow has to be provided'
    );
  });
});
