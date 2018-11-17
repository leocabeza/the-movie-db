import entities from './';

describe('entities', () => {
  it('must have all entities exposed', () => {
    expect(entities).toHaveProperty('configuration');
    expect(entities).toHaveProperty('movies');
  });
});
