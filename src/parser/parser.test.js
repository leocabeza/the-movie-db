import parseData, { setDataAccordingToValueType } from './parser';
import popularMoviesMockResponse from './mock.json';

describe('parser', () => {
  it('must parse correctly a mocked response', () => {
    const parsedResponse = parseData(popularMoviesMockResponse);

    expect(parsedResponse).toMatchSnapshot();
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
