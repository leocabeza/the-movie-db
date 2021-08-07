import { v3, v4 } from './main';

describe('main api', () => {
  it('returns a function', () => {
    expect(typeof v3).toEqual('function');
    expect(typeof v4).toEqual('function');
  });

  it('returns an object with methods', () => {
    expect(v3('v3 api key')).toMatchSnapshot();
    expect(v4('v4 api key')).toMatchSnapshot();
  });
});
