import v3 from './';

describe('v3', () => {
  it('must have all v3 objects exposed', () => {
    expect(v3).toHaveProperty('account');
    expect(v3).toHaveProperty('authentication');
    expect(v3).toHaveProperty('certification');
    expect(v3).toHaveProperty('change');
    expect(v3).toHaveProperty('collection');
    expect(v3).toHaveProperty('company');
    expect(v3).toHaveProperty('configuration');
    expect(v3).toHaveProperty('credit');
    expect(v3).toHaveProperty('discover');
    expect(v3).toHaveProperty('find');
    expect(v3).toHaveProperty('genre');
    expect(v3).toHaveProperty('guestSession');
    expect(v3).toHaveProperty('keyword');
    expect(v3).toHaveProperty('list');
    expect(v3).toHaveProperty('movie');
    expect(v3).toHaveProperty('network');
    expect(v3).toHaveProperty('review');
    expect(v3).toHaveProperty('search');
    expect(v3).toHaveProperty('trending');
  });
});
