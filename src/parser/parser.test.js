import parseData, { setDataAccordingToValueType } from './parser';
import popularMoviesMockResponse from './mock.json';

describe('parser', () => {
  it('must parse correctly a mocked response', () => {
    const parsedResponse = parseData(popularMoviesMockResponse);
    const parsedResponseData = parsedResponse;

    expect(typeof parsedResponseData.page === 'number').toBeTruthy();
    expect(typeof parsedResponseData.total_pages === 'number').toBeTruthy();
    expect(typeof parsedResponseData.total_results === 'number').toBeTruthy();

    expect(Array.isArray(parsedResponseData.results)).toBeTruthy();
    const firstResult = parsedResponseData.results[0];

    expect(typeof firstResult.vote_count === 'number').toBeTruthy();
    expect(typeof firstResult.id === 'number').toBeTruthy();
    expect(typeof firstResult.video === 'boolean').toBeTruthy();
    expect(typeof firstResult.vote_average === 'number').toBeTruthy();
    expect(typeof firstResult.title === 'string').toBeTruthy();
    expect(typeof firstResult.popularity === 'number').toBeTruthy();
    expect(typeof firstResult.poster_path === 'string').toBeTruthy();
    expect(typeof firstResult.original_language === 'string').toBeTruthy();
    expect(typeof firstResult.original_title === 'string').toBeTruthy();
    expect(Array.isArray(firstResult.genre_ids)).toBeTruthy();
    expect(
      firstResult.genre_ids.every(genreId => typeof genreId === 'number')
    ).toBeTruthy();
    expect(typeof firstResult.backdrop_path === 'string').toBeTruthy();
    expect(typeof firstResult.adult === 'boolean').toBeTruthy();
    expect(typeof firstResult.overview === 'string').toBeTruthy();
    expect(typeof firstResult.release_date === 'string').toBeTruthy();
  });

  it('must set the same data type that it was passed in key', () => {
    const stringData = { name: 'Community' };
    const arrayData = { ids: [1, 2] };
    const objectData = { metadata: { producer: 'Abed Nadir' } };

    expect(typeof setDataAccordingToValueType(stringData, 'name')).toEqual(
      typeof stringData['name']
    );
    expect(
      Array.isArray(setDataAccordingToValueType(arrayData, 'ids'))
    ).toBeTruthy();
    expect(setDataAccordingToValueType(objectData, 'metadata')).toBeInstanceOf(
      Object
    );
  });

  it('must parse data correcty', () => {
    const emptyData = [];
    const dataWithKey = {
      writer_producer: 'Dan Harmon',
      seasons: [{ name: 'Season 1' }],
    };

    expect(parseData(emptyData)).toEqual([]);
    expect(parseData(dataWithKey)).toEqual(dataWithKey);
  });
});
