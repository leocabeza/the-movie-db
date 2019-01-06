import entities from './';

describe('entities entry point', () => {
  it('must have all versions exposed', () => {
    expect(entities).toHaveProperty('v3');
    expect(entities).toHaveProperty('v4');
  });
});
