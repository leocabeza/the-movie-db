import entryPoint from './main';

describe('main api', () => {
  it('returns a function', () => {
    expect(typeof entryPoint.v3).toEqual('function');
    expect(typeof entryPoint.v4).toEqual('function');
  });

  it('returns an object with methods', () => {
    expect(entryPoint.v3('v3 api key')).toMatchSnapshot();
    expect(entryPoint.v4('v4 api key')).toMatchSnapshot();
  });
});
