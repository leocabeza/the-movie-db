import * as parsers from '../src/parsers';
import getConfigurationJson from '../__mocks__/get-configuration.json';
import getPopularMoviesJson from '../__mocks__/get-popular-movies.json';

describe('Client API parsers', () => {
  it('must parse response from getConfiguration method', () => {
    const parsedResponse = parsers.getConfiguration(getConfigurationJson);

    expect(Array.isArray(parsedResponse.changeKeys)).toBeTruthy();
    const allchangeKeysAreString =
      parsedResponse.changeKeys.every(changeKey => typeof changeKey === 'string');
    expect(allchangeKeysAreString).toBeTruthy();

    expect(typeof parsedResponse.images.baseUrl === 'string');
    expect(typeof parsedResponse.images.secureBaseUrl === 'string');
    expect(Array.isArray(parsedResponse.images.backdropSizes)).toBeTruthy();
    expect(Array.isArray(parsedResponse.images.logoSizes)).toBeTruthy();
    expect(Array.isArray(parsedResponse.images.profileSizes)).toBeTruthy();
    expect(Array.isArray(parsedResponse.images.stillSizes)).toBeTruthy();
  });

  it('must parse response from getPopularMovies method', () => {
    const parsedResponse = parsers.getPopularMovies(getPopularMoviesJson);

    expect(parsedResponse.paging).toBeDefined();
    expect(typeof parsedResponse.paging.page === 'number').toBeTruthy();
    expect(typeof parsedResponse.paging.totalPages === 'number').toBeTruthy();
    expect(typeof parsedResponse.paging.totalResults === 'number').toBeTruthy();

    expect(Array.isArray(parsedResponse.results)).toBeTruthy();
    const firstResult = parsedResponse.results[0];

    expect(typeof firstResult.voteCount === 'number').toBeTruthy();
    expect(typeof firstResult.id === 'number').toBeTruthy();
    expect(typeof firstResult.video === 'boolean').toBeTruthy();
    expect(typeof firstResult.voteAverage === 'number').toBeTruthy();
    expect(typeof firstResult.title === 'string').toBeTruthy();
    expect(typeof firstResult.popularity === 'number').toBeTruthy();
    expect(typeof firstResult.posterPath === 'string').toBeTruthy();
    expect(typeof firstResult.originalLanguage === 'string').toBeTruthy();
    expect(typeof firstResult.originalTitle === 'string').toBeTruthy();
    expect(Array.isArray(firstResult.genreIds)).toBeTruthy();
    expect(firstResult.genreIds.every(genreId => typeof genreId === 'number')).toBeTruthy();
    expect(typeof firstResult.backdropPath === 'string').toBeTruthy();
    expect(typeof firstResult.adult === 'boolean').toBeTruthy();
    expect(typeof firstResult.overview === 'string').toBeTruthy();
    expect(firstResult.releaseDate).toBeDefined();
  });
});
