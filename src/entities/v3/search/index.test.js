import axios from 'axios';
import * as search from './';

jest.mock('axios');

describe('search entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof search.companies).toEqual('function');
    expect(typeof search.collections).toEqual('function');
    expect(typeof search.keywords).toEqual('function');
    expect(typeof search.movies).toEqual('function');
    expect(typeof search.multi).toEqual('function');
    expect(typeof search.people).toEqual('function');
    expect(typeof search.tv).toEqual('function');
  });

  it('must return a valid response from search.collections with options', async () => {
    const mockResponse = {
      page: 1,
      results: [
        {
          id: 9485,
          backdropPath: '/z5A5W3WYJc3UVEWljSGwdjDgQ0j.jpg',
          name: 'The Fast and the Furious Collection',
          posterPath: '/uv63yAGg1zETAs1XQsOQpava87l.jpg',
        },
      ],
      totalResults: 1,
      totalPages: 1,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await search.collections({
      query: 'fast and furious',
      language: 'en-US',
      page: 1,
    });

    expect(response).toBe(mockResponse);
  });

  it('must reject when search.collections is called without query option', async () => {
    await expect(search.collections()).rejects.toBe(
      'A query has to be provided'
    );
  });

  it('must return a valid response from search.companies with options', async () => {
    const mockResponse = {
      page: 1,
      results: [
        {
          id: 34,
          logoPath: '/GagSvqWlyPdkFHMfQ3pNq6ix9P.png',
          name: 'Sony Pictures',
        },
      ],
      totalResults: 1,
      totalPages: 1,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await search.companies({
      query: 'sony',
      page: 1,
    });

    expect(response).toBe(mockResponse);
  });

  it('must reject when search.companies is called without query option', async () => {
    await expect(search.companies()).rejects.toBe('A query has to be provided');
  });

  it('must return a valid response from search.keywords with options', async () => {
    const mockResponse = {
      page: 1,
      results: [
        {
          id: 9951,
          name: 'alien',
        },
      ],
      totalResults: 1,
      totalPages: 1,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await search.keywords({
      query: 'alien',
      page: 1,
    });

    expect(response).toBe(mockResponse);
  });

  it('must reject when search.keywords is called without query option', async () => {
    await expect(search.keywords()).rejects.toBe('A query has to be provided');
  });

  it('must return a valid response from search.movies with options', async () => {
    const mockResponse = {
      page: 1,
      results: [
        {
          posterPath: '/cezWGskPY5x7GaglTTRN4Fugfb8.jpg',
          adult: false,
          overview:
            'When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!',
          releaseDate: '2012-04-25',
          genreIds: [878, 28, 12],
          id: 24428,
          originalTitle: 'The Avengers',
          originalLanguage: 'en',
          title: 'The Avengers',
          backdropPath: '/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg',
          popularity: 7.353212,
          voteCount: 8503,
          video: false,
          voteAverage: 7.33,
        },
      ],
      totalResults: 1,
      totalPages: 1,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await search.movies({
      query: 'the avengers',
      language: 'en-US',
      page: 1,
      includeAdult: true,
      year: 2012,
      primaryReleaseYear: 2012,
    });

    expect(response).toBe(mockResponse);
  });

  it('must reject when search.movies is called without query option', async () => {
    await expect(search.movies()).rejects.toBe('A query has to be provided');
  });

  it('must return a valid response from search.multi with options', async () => {
    const mockResponse = {
      page: 1,
      results: [
        {
          posterPath: null,
          popularity: 1,
          id: 24511,
          overview: '',
          backdropPath: null,
          voteAverage: 0,
          mediaType: 'tv',
          firstAirDate: '',
          originCountry: ['GB'],
          genreIds: [],
          originalLanguage: 'en',
          voteCount: 0,
          name: 'Bradley',
          originalName: 'Bradley',
        },
      ],
      totalResults: 1,
      totalPages: 1,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await search.multi({
      query: 'jerry seinfeld',
      language: 'en-US',
      page: 1,
      includeAdult: true,
    });

    expect(response).toBe(mockResponse);
  });

  it('must reject when search.multi is called without query option', async () => {
    await expect(search.multi()).rejects.toBe('A query has to be provided');
  });

  it('must return a valid response from search.people with options', async () => {
    const mockResponse = {
      page: 1,
      results: [
        {
          profilePath: '/2daC5DeXqwkFND0xxutbnSVKN6c.jpg',
          adult: false,
          id: 51329,
          knownFor: [
            {
              posterPath: '/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg',
              adult: false,
              overview:
                'Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.',
              releaseDate: '2014-07-30',
              originalTitle: 'Guardians of the Galaxy',
              genreIds: [28, 878, 12],
              id: 118340,
              mediaType: 'movie',
              originalLanguage: 'en',
              title: 'Guardians of the Galaxy',
              backdropPath: '/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg',
              popularity: 9.267731,
              voteCount: 5002,
              video: false,
              voteAverage: 7.97,
            },
          ],
        },
      ],
      totalResults: 1,
      totalPages: 1,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await search.people({
      query: 'jerry seinfeld',
      language: 'en-US',
      page: 1,
      includeAdult: true,
    });

    expect(response).toBe(mockResponse);
  });

  it('must reject when search.people is called without query option', async () => {
    await expect(search.people()).rejects.toBe('A query has to be provided');
  });

  it('must return a valid response from search.tv with options', async () => {
    const mockResponse = {
      page: 1,
      results: [
        {
          posterPath: '/jIhL6mlT7AblhbHJgEoiBIOUVl1.jpg',
          popularity: 29.780826,
          id: 1399,
          backdropPath: '/mUkuc2wyV9dHLG0D0Loaw5pO2s8.jpg',
          voteAverage: 7.91,
          overview:
            "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
          firstAirDate: '2011-04-17',
          originCountry: ['US'],
          genreIds: [10765, 10759, 18],
          originalLanguage: 'en',
          voteCount: 1172,
          name: 'Game of Thrones',
          originalName: 'Game of Thrones',
        },
      ],
      totalResults: 1,
      totalPages: 1,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await search.tv({
      query: 'game of thrones',
      language: 'en-US',
      page: 1,
      firstAirDateYear: 2010,
    });

    expect(response).toBe(mockResponse);
  });

  it('must reject when search.tv is called without query option', async () => {
    await expect(search.tv()).rejects.toBe('A query has to be provided');
  });
});
