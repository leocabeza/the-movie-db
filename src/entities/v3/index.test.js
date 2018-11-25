import v3 from './';

describe('v3', () => {
  it('must have all v3 objects exposed', () => {
    expect(v3).toHaveProperty('authentication');
    expect(v3).toHaveProperty('configuration');
    expect(v3).toHaveProperty('find');
    expect(v3).toHaveProperty('movie');
    expect(v3).toHaveProperty('network');
  });
});
