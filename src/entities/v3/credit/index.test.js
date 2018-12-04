import * as credit from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('credit entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof credit.details).toEqual('function');
  });

  it('must resolve credit.details', async () => {
    const promise = credit.details('1');

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when credit.details is called without creditId', async () => {
    await expect(credit.details()).rejects.toBe(
      'A creditId has to be provided'
    );
  });
});
