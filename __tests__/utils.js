import * as utils from '../src/utils';

describe('Utils', () => {
  it('must convert a snakecase string to camelcase', () => {
    const createdAt = 'created_at';
    const sixSeasonsAndAMovie = 'six_seasons_and_a_movie';
    const id = 'id';

    expect(utils.snakeToCamelCase(createdAt)).toBe('createdAt');
    expect(utils.snakeToCamelCase(sixSeasonsAndAMovie)).toBe('sixSeasonsAndAMovie');
    expect(utils.snakeToCamelCase(id)).toBe('id');
  });

  it('must build non undefined params', () => {
    const emptyObject = {};
    const objectWithNullValues = { foo: null, bar: null };
    const mixedObject = { foo: null, bar: false, baz: undefined };
    const objectWithValidValues = {
      foo: 4,
      bar: 'bar',
      baz: true,
      javascript: [],
    };

    expect(utils.buildDefinedParams(emptyObject)).toEqual(emptyObject);
    expect(utils.buildDefinedParams(objectWithNullValues)).toEqual(objectWithNullValues);
    expect(utils.buildDefinedParams(mixedObject)).toEqual({
      foo: null, bar: false,
    });
    expect(utils.buildDefinedParams(objectWithValidValues)).toEqual(objectWithValidValues);
  });
});
