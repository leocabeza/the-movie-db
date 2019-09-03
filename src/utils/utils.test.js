import { removeUndefinedValues } from './utils';

describe('utils', () => {
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

    expect(removeUndefinedValues(emptyObject)).toEqual(emptyObject);
    expect(removeUndefinedValues(objectWithNullValues)).toEqual(
      objectWithNullValues
    );
    expect(removeUndefinedValues(mixedObject)).toEqual({
      foo: null,
      bar: false,
    });
    expect(removeUndefinedValues(objectWithValidValues)).toEqual(
      objectWithValidValues
    );
  });
});
