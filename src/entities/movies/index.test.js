import axios from 'axios';
import * as movies from './';

jest.mock('axios');

describe('movies entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof movies.popular).toEqual('function');
  });

  it('must return a valid response from movies.popular call', async() => {
    const mockedResponse = {
      page: 1,
      totalResults: 1,
      totalPages: 1,
      results: [{
        "voteCount": 2113,
        "id": 335983,
        "video": false,
        "voteAverage": 6.6,
        "title": "Venom",
        "popularity": 240.47,
        "posterPath": "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
        "originalLanguage": "en",
        "originalTitle": "Venom",
        "genreIds": [
          878
        ],
        "backdropPath": "/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
        "adult": false,
        "overview": "When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego \"Venom\" to save his life.",
        "releaseDate": new Date("2018-10-03")
      }]
    };
    axios.get.mockResolvedValue(mockedResponse);
    const response = await movies.popular();

    expect(response).toBe(mockedResponse);
  });
});
