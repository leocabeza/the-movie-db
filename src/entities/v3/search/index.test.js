import * as search from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('search entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof search.companies).toEqual('function');
    expect(typeof search.collections).toEqual('function');
    expect(typeof search.keywords).toEqual('function');
    expect(typeof search.movies).toEqual('function');
    expect(typeof search.multi).toEqual('function');
    expect(typeof search.people).toEqual('function');
    expect(typeof search.tv).toEqual('function');
  });

  it('must resolve search.collections with options', async () => {
    const promise = search.collections({
      query: 'fast and furious',
      language: 'en-US',
      page: 1,
    });

    expect(promise).resolves.toEqual({});
  });

  it('must reject when search.collections is called without query option', async () => {
    await expect(search.collections()).rejects.toBe(
      'A query has to be provided'
    );
  });

  it('must resolve search.companies with options', async () => {
    const promise = search.companies({
      query: 'sony',
      page: 1,
    });

    expect(promise).resolves.toEqual({});
  });

  it('must reject when search.companies is called without query option', async () => {
    await expect(search.companies()).rejects.toBe('A query has to be provided');
  });

  it('must resolve search.keywords with options', async () => {
    const promise = search.keywords({
      query: 'alien',
      page: 1,
    });

    expect(promise).resolves.toEqual({});
  });

  it('must reject when search.keywords is called without query option', async () => {
    await expect(search.keywords()).rejects.toBe('A query has to be provided');
  });

  it('must resolve search.movies with options', async () => {
    const promise = search.movies({
      query: 'the avengers',
      language: 'en-US',
      page: 1,
      includeAdult: true,
      year: 2012,
      primaryReleaseYear: 2012,
    });

    expect(promise).resolves.toEqual({});
  });

  it('must reject when search.movies is called without query option', async () => {
    await expect(search.movies()).rejects.toBe('A query has to be provided');
  });

  it('must resolve search.multi with options', async () => {
    const promise = search.multi({
      query: 'jerry seinfeld',
      language: 'en-US',
      page: 1,
      includeAdult: true,
    });

    expect(promise).resolves.toEqual({});
  });

  it('must reject when search.multi is called without query option', async () => {
    await expect(search.multi()).rejects.toBe('A query has to be provided');
  });

  it('must resolve search.people with options', async () => {
    const promise = search.people({
      query: 'jerry seinfeld',
      language: 'en-US',
      page: 1,
      includeAdult: true,
    });

    expect(promise).resolves.toEqual({});
  });

  it('must reject when search.people is called without query option', async () => {
    await expect(search.people()).rejects.toBe('A query has to be provided');
  });

  it('must resolve search.tv with options', async () => {
    const promise = search.tv({
      query: 'game of thrones',
      language: 'en-US',
      page: 1,
      firstAirDateYear: 2010,
    });

    expect(promise).resolves.toEqual({});
  });

  it('must reject when search.tv is called without query option', async () => {
    await expect(search.tv()).rejects.toBe('A query has to be provided');
  });
});
