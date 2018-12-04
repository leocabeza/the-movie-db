import * as certification from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('certification entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof certification.movies).toEqual('function');
  });

  it('must resolve certification.movies', async () => {
    const promise = certification.movies(1);

    await expect(promise).resolves.toEqual({});
  });
});
