import v4 from './';

describe('v4', () => {
  it('must have all v4 objects exposed', () => {
    expect(v4).toHaveProperty('account');
    expect(v4).toHaveProperty('authentication');
  });
});
