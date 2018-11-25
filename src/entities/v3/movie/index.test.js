import axios from 'axios';
import * as movies from './';

jest.mock('axios');

describe('movies entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof movies.accountStates).toEqual('function');
    expect(typeof movies.alternativeTitles).toEqual('function');
    expect(typeof movies.changes).toEqual('function');
    expect(typeof movies.credits).toEqual('function');
    expect(typeof movies.deleteRating).toEqual('function');
    expect(typeof movies.details).toEqual('function');
    expect(typeof movies.externalIds).toEqual('function');
    expect(typeof movies.images).toEqual('function');
    expect(typeof movies.keywords).toEqual('function');
    expect(typeof movies.lists).toEqual('function');
    expect(typeof movies.nowPlaying).toEqual('function');
    expect(typeof movies.popular).toEqual('function');
    expect(typeof movies.rating).toEqual('function');
    expect(typeof movies.recommendations).toEqual('function');
    expect(typeof movies.releaseDates).toEqual('function');
    expect(typeof movies.reviews).toEqual('function');
    expect(typeof movies.similar).toEqual('function');
    expect(typeof movies.topRated).toEqual('function');
    expect(typeof movies.translations).toEqual('function');
    expect(typeof movies.upcoming).toEqual('function');
    expect(typeof movies.videos).toEqual('function');
  });

  it('must return a valid response from movies.accountStates call with movieId and sessionId option', async () => {
    const mockResponse = {
      id: 335983,
      favorite: false,
      rated: false,
      watchlist: false,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.accountStates(123, { sessionId: 'XXX' });

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.accountStates call with movieId and guestSessionId option', async () => {
    const mockResponse = {
      id: 335983,
      favorite: false,
      rated: false,
      watchlist: false,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.accountStates(123, { guestSessionId: 'XXX' });

    expect(response).toBe(mockResponse);
  });

  it('must reject when movies.accountStates is called without movieId', async () => {
    await expect(movies.accountStates()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must reject when movies.accountStates is called without options', async () => {
    await expect(movies.accountStates(123)).rejects.toBe(
      'A sessionId or a guestSessionId has to be provided'
    );
  });

  it('must return a valid response from movies.alternativeTitles call with movieId and no options', async () => {
    const mockResponse = {
      id: 335983,
      titles: [],
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.alternativeTitles(123);

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.alternativeTitles call with movieId and country option', async () => {
    const country = 'ES';
    const mockResponse = {
      id: 335983,
      titles: [],
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.alternativeTitles(123, { country });

    expect(response).toBe(mockResponse);
  });

  it('must reject when movies.alternativeTitles is called without movieId', async () => {
    await expect(movies.alternativeTitles()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must return a valid response from movies.changes call with movieId and no options', async () => {
    const mockResponse = {
      changes: [
        {
          key: 'releaseDates',
          items: [],
        },
      ],
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.changes(1);

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.changes call with movieId and options', async () => {
    const mockResponse = {
      changes: [
        {
          key: 'releaseDates',
          items: [],
        },
      ],
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.changes(1, {
      startDate: '2018-11-18',
      endDate: '2018-11-20',
      page: 1,
    });

    expect(response).toBe(mockResponse);
  });

  it('must reject when movies.changes is called without movieId', async () => {
    await expect(movies.changes()).rejects.toBe('A movieId has to be provided');
  });

  it('must return a valid response from movies.credits with movieId', async () => {
    const mockResponse = {
      id: 335983,
      cast: [],
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.credits(1);

    await expect(response).toBe(mockResponse);
  });

  it('must reject when movies.credits is called without movieId', async () => {
    await expect(movies.credits()).rejects.toBe('A movieId has to be provided');
  });

  it('must return a valid response from movies.deleteRating call with movieId and sessionId option', async () => {
    const mockResponse = {
      statusCode: 13,
      statusMessage: 'The item/record was deleted successfully.',
    };
    axios.delete.mockResolvedValue(mockResponse);
    const response = await movies.deleteRating(123, { sessionId: 'XXX' });

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.deleteRating call with movieId and guestSessionId option', async () => {
    const mockResponse = {
      statusCode: 13,
      statusMessage: 'The item/record was deleted successfully.',
    };
    axios.delete.mockResolvedValue(mockResponse);
    const response = await movies.deleteRating(123, { guestSessionId: 'XXX' });

    expect(response).toBe(mockResponse);
  });

  it('must reject when movies.deleteRating is called without movieId', async () => {
    await expect(movies.deleteRating()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must reject when movies.deleteRating is called without options', async () => {
    await expect(movies.deleteRating(123)).rejects.toBe(
      'A sessionId or a guestSessionId has to be provided'
    );
  });

  it('must return a valid response from movies.details call without options', async () => {
    const mockResponse = {
      adult: false,
      backdropPath: '/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg',
      belongsToCollection: null,
      budget: 116000000,
      genres: [],
      homepage: 'http://www.venom.movie/site/',
      id: 335983,
      imdbId: 'tt1270797',
      originalLanguage: 'en',
      originalTitle: 'Venom',
      overview:
        "When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego 'Venom' to save his life.",
      popularity: 170.803,
      posterPath: '/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
      productionCompanies: [],
      productionCountries: [],
      releaseDate: '2018-10-03T00:00:00.000Z',
      revenue: 508400000,
      runtime: 112,
      spokenLanguages: [{ 'iso-639-1': 'en', name: 'English' }],
      status: 'Released',
      tagline: 'The world has enough Superheroes.',
      title: 'Venom',
      video: false,
      voteAverage: 6.5,
      voteCount: 2265,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.details(1);

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.details call with options', async () => {
    const mockResponse = {
      adult: false,
      backdropPath: '/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg',
      belongsToCollection: null,
      budget: 116000000,
      genres: [],
      homepage: 'http://www.venom.movie/site/',
      id: 335983,
      imdbId: 'tt1270797',
      originalLanguage: 'en',
      originalTitle: 'Venom',
      overview:
        "When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego 'Venom' to save his life.",
      popularity: 170.803,
      posterPath: '/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
      productionCompanies: [],
      productionCountries: [],
      releaseDate: '2018-10-03T00:00:00.000Z',
      revenue: 508400000,
      runtime: 112,
      spokenLanguages: [{ 'iso-639-1': 'en', name: 'English' }],
      status: 'Released',
      tagline: 'The world has enough Superheroes.',
      title: 'Venom',
      video: false,
      voteAverage: 6.5,
      voteCount: 2265,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.details(1, {
      appendToResponse: 'videos',
      language: 'en-US',
    });

    expect(response).toBe(mockResponse);
  });

  it('must reject when movies.details is called without movieId', async () => {
    await expect(movies.details()).rejects.toBe('A movieId has to be provided');
  });

  it('must return a valid response from movies.externalIds with movieId', async () => {
    const mockResponse = {
      id: 335983,
      imdbId: 'tt1270797',
      facebookId: 'VenomMovie',
      instagramId: 'venommovie',
      twitterId: 'VenomMovie',
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.externalIds(1);

    expect(response).toBe(mockResponse);
  });

  it('must reject when movies.externalIds is called without movieId', async () => {
    await expect(movies.externalIds()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must return a valid response from movies.images with movieId and no options', async () => {
    const mockResponse = {
      id: 335983,
      backdrops: [],
      posters: [],
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.images(1);

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.images with movieId and options', async () => {
    const mockResponse = {
      id: 335983,
      backdrops: [],
      posters: [],
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.images(1, {
      language: 'es',
      includeImageLanguage: 'es',
    });

    expect(response).toBe(mockResponse);
  });

  it('must reject when movies.images is called without movieId', async () => {
    await expect(movies.images()).rejects.toBe('A movieId has to be provided');
  });

  it('must return a valid response from movies.keywords with movieId', async () => {
    const mockResponse = {
      id: 335983,
      keywords: [],
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.keywords(1);

    expect(response).toBe(mockResponse);
  });

  it('must reject when movies.keywords is called without movieId', async () => {
    await expect(movies.keywords()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must return a valid response from movies.latest call without options', async () => {
    const mockResponse = {};
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.latest();

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.latest call with options', async () => {
    const mockResponse = {};
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.latest({ language: 'es' });

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.lists with movieId', async () => {
    const mockResponse = {
      id: 335983,
      page: 1,
      results: [],
      totalPages: 21,
      totalResults: 414,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.lists(1);

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.lists with movieId and options', async () => {
    const mockResponse = {
      id: 335983,
      page: 1,
      results: [],
      totalPages: 21,
      totalResults: 414,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.lists(1, {
      language: 'es',
      page: 1,
    });

    expect(response).toBe(mockResponse);
  });

  it('must reject when movies.lists is called without movieId', async () => {
    await expect(movies.lists()).rejects.toBe('A movieId has to be provided');
  });

  it('must return a valid response from movies.nowPlaying call with options', async () => {
    const mockResponse = {
      page: 1,
      results: [],
      dates: {
        maximum: '2016-09-01',
        minimum: '2016-07-21',
      },
      totalPages: 1,
      totalResults: 1,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.nowPlaying({
      language: 'en',
      page: 1,
      region: 'CO',
    });

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.nowPlaying call with no options', async () => {
    const mockResponse = {
      page: 1,
      results: [],
      dates: {
        maximum: '2016-09-01',
        minimum: '2016-07-21',
      },
      totalPages: 1,
      totalResults: 1,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.nowPlaying();

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.popular call with no options', async () => {
    const mockResponse = {
      page: 1,
      totalResults: 1,
      totalPages: 1,
      results: [],
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.popular();

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.popular call with options', async () => {
    const mockResponse = {
      page: 1,
      results: [],
      totalResults: 0,
      totalPages: 1,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.popular({ language: 'es', page: 1 });

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.rating call with movieId, rating, and sessionId option', async () => {
    const mockResponse = {
      statusCode: 1,
      statusMessage: 'Success.',
    };
    axios.post.mockResolvedValue(mockResponse);
    const response = await movies.rating(123, 2, { sessionId: 'XXX' });

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.rating call with movieId, rating and guestSessionId option', async () => {
    const mockResponse = {
      statusCode: 1,
      statusMessage: 'Success.',
    };
    axios.post.mockResolvedValue(mockResponse);
    const response = await movies.rating(123, 4.4, { guestSessionId: 'XXX' });

    expect(response).toBe(mockResponse);
  });

  it('must reject when movies.rating is called without movieId', async () => {
    await expect(movies.rating()).rejects.toBe('A movieId has to be provided');
  });

  it('must reject when movies.rating is called with movieId and without rating', async () => {
    await expect(movies.rating(1)).rejects.toBe('A rating has to be provided');
  });

  it('must reject when movies.rating is called without session options', async () => {
    await expect(movies.rating(123, 1)).rejects.toBe(
      'A sessionId or a guestSessionId has to be provided'
    );
  });

  it('must return a valid response from movies.recommendations with movieId', async () => {
    const mockResponse = {
      page: 1,
      results: [],
      totalPages: 1,
      totalResults: 0,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.recommendations(1);

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.recommendations with movieId and options', async () => {
    const mockResponse = {
      page: 1,
      results: [],
      totalPages: 1,
      totalResults: 0,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.recommendations(1, {
      language: 'es',
      page: 1,
    });

    expect(response).toBe(mockResponse);
  });

  it('must reject when movies.recommendations is called without movieId', async () => {
    await expect(movies.recommendations()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must return a valid response from movies.releaseDates with movieId', async () => {
    const mockResponse = {
      id: 335983,
      results: [],
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.releaseDates(1);

    expect(response).toBe(mockResponse);
  });

  it('must reject when movies.releaseDates is called without movieId', async () => {
    await expect(movies.releaseDates()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must return a valid response from movies.reviews with movieId', async () => {
    const mockResponse = {
      id: 335983,
      page: 1,
      results: [],
      totalPages: 1,
      totalResults: 0,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.reviews(1);

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.reviews with movieId and options', async () => {
    const mockResponse = {
      id: 335983,
      page: 1,
      results: [],
      totalPages: 1,
      totalResults: 0,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.reviews(1, {
      language: 'es',
      page: 1,
    });

    expect(response).toBe(mockResponse);
  });

  it('must reject when movies.reviews is called without movieId', async () => {
    await expect(movies.reviews()).rejects.toBe('A movieId has to be provided');
  });

  it('must return a valid response from movies.similar with movieId', async () => {
    const mockResponse = {
      page: 1,
      results: [],
      totalPages: 1,
      totalResults: 0,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.similar(1);

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.similar with movieId and options', async () => {
    const mockResponse = {
      page: 1,
      results: [],
      totalPages: 1,
      totalResults: 0,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.similar(1, {
      language: 'es',
      page: 1,
    });

    expect(response).toBe(mockResponse);
  });

  it('must reject when movies.similar is called without movieId', async () => {
    await expect(movies.similar()).rejects.toBe('A movieId has to be provided');
  });

  it('must return a valid response from movies.topRated call with options', async () => {
    const mockResponse = {
      page: 1,
      results: [],
      totalResults: 0,
      totalPages: 1,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.topRated({
      language: 'en',
      page: 1,
      region: 'CO',
    });

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.topRated call with no options', async () => {
    const mockResponse = {
      page: 1,
      results: [],
      totalResults: 0,
      totalPages: 1,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.topRated();

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.translations with movieId', async () => {
    const mockResponse = {
      id: 335983,
      translations: [],
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.translations(1);

    expect(response).toBe(mockResponse);
  });

  it('must reject when movies.translations is called without movieId', async () => {
    await expect(movies.translations()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must return a valid response from movies.upcoming call with options', async () => {
    const mockResponse = {
      page: 1,
      results: [],
      dates: {
        maximum: '2016-09-22',
        minimum: '2016-09-01',
      },
      totalPages: 1,
      totalResults: 0,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.upcoming({
      language: 'en',
      page: 1,
      region: 'CO',
    });

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.upcoming call with no options', async () => {
    const mockResponse = {
      page: 1,
      results: [],
      dates: {
        maximum: '2016-09-22',
        minimum: '2016-09-01',
      },
      totalPages: 1,
      totalResults: 0,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.upcoming();

    expect(response).toBe(mockResponse);
  });

  it('must return a valid response from movies.videos with movieId', async () => {
    const mockResponse = {
      id: 335983,
      results: [],
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await movies.videos(1);

    expect(response).toBe(mockResponse);
  });

  it('must reject when movies.videos is called without movieId', async () => {
    await expect(movies.videos()).rejects.toBe('A movieId has to be provided');
  });
});
