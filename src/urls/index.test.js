import urls from './';

describe('urls', () => {
  it('must have all versions exposed', () => {
    expect(urls).toHaveProperty('v3');
  });
});
