import axios from 'axios';
import * as movies from './';

jest.mock('axios');

const mockedResponse = {
  page: 1,
  totalResults: 1,
  totalPages: 1,
  results: [
    {
      voteCount: 2113,
      id: 335983,
      video: false,
      voteAverage: 6.6,
      title: 'Venom',
      popularity: 240.47,
      posterPath: '/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
      originalLanguage: 'en',
      originalTitle: 'Venom',
      genreIds: [878],
      backdropPath: '/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg',
      adult: false,
      overview:
        'When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego "Venom" to save his life.',
      releaseDate: new Date('2018-10-03'),
    },
  ],
};

describe('movies entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof movies.details).toEqual('function');
    expect(typeof movies.popular).toEqual('function');
  });

  it('must throw when movies.details is called without movieId', async () => {
    await expect(movies.details()).rejects.toBe('A movieId has to be provided');
  });

  it('must return a valid response from movies.details call without options', async () => {
    axios.get.mockResolvedValue(mockedResponse);
    const response = await movies.details(1);

    expect(response).toBe(mockedResponse);
  });

  it('must return a valid response from movies.details call with options', async () => {
    const responseWithAppendToResponse = {
      ...mockedResponse,
      results: {
        ...mockedResponse.results,
        videos: [],
      },
    };
    axios.get.mockResolvedValue(responseWithAppendToResponse);
    const response = await movies.details(1, {
      appendToResponse: 'videos',
      language: 'en-US',
    });

    expect(response).toBe(responseWithAppendToResponse);
  });

  it('must return a valid response from movies.popular call', async () => {
    axios.get.mockResolvedValue(mockedResponse);
    const response = await movies.popular();

    expect(response).toBe(mockedResponse);
  });
});
