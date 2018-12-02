import * as review from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('review entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof review.details).toEqual('function');
  });

  it('must resolve review.details with reviewId', async () => {
    const promise = review.details('1');

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when review.details is called without reviewId', async () => {
    await expect(review.details()).rejects.toBe(
      'A reviewId has to be provided'
    );
  });
});
