import Client from './client';

describe('client', () => {
  it('must throw if an api key is not passed in', () => {
    expect(() => {
      new Client();
    }).toThrow();
  });

  it('must not throw when an api key is passed', () => {
    expect(() => {
      new Client('API_KEY');
    }).not.toThrow();
  });
});
