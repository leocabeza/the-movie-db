import * as movies from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('movies entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof movies.accountStates).toEqual('function');
    expect(typeof movies.alternativeTitles).toEqual('function');
    expect(typeof movies.changes).toEqual('function');
    expect(typeof movies.credits).toEqual('function');
    expect(typeof movies.deleteRating).toEqual('function');
    expect(typeof movies.details).toEqual('function');
    expect(typeof movies.externalIds).toEqual('function');
    expect(typeof movies.images).toEqual('function');
    expect(typeof movies.keywords).toEqual('function');
    expect(typeof movies.lists).toEqual('function');
    expect(typeof movies.nowPlaying).toEqual('function');
    expect(typeof movies.popular).toEqual('function');
    expect(typeof movies.rating).toEqual('function');
    expect(typeof movies.recommendations).toEqual('function');
    expect(typeof movies.releaseDates).toEqual('function');
    expect(typeof movies.reviews).toEqual('function');
    expect(typeof movies.similar).toEqual('function');
    expect(typeof movies.topRated).toEqual('function');
    expect(typeof movies.translations).toEqual('function');
    expect(typeof movies.upcoming).toEqual('function');
    expect(typeof movies.videos).toEqual('function');
  });

  it('must resolve movies.accountStates call with movieId and sessionId option', async () => {
    const promise = movies.accountStates(123, { sessionId: 'XXX' });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.accountStates call with movieId and guestSessionId option', async () => {
    const promise = movies.accountStates(123, { guestSessionId: 'XXX' });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movies.accountStates is called without movieId', async () => {
    await expect(movies.accountStates()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must reject when movies.accountStates is called without options', async () => {
    await expect(movies.accountStates(123)).rejects.toBe(
      'A sessionId or a guestSessionId has to be provided'
    );
  });

  it('must resolve movies.alternativeTitles call with movieId and no options', async () => {
    const promise = movies.alternativeTitles(123);

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.alternativeTitles call with movieId and country option', async () => {
    const promise = movies.alternativeTitles(123, { country: 'ES' });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movies.alternativeTitles is called without movieId', async () => {
    await expect(movies.alternativeTitles()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must resolve movies.changes call with movieId and no options', async () => {
    const promise = movies.changes(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.changes call with movieId and options', async () => {
    const promise = movies.changes(1, {
      startDate: '2018-11-18',
      endDate: '2018-11-20',
      page: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movies.changes is called without movieId', async () => {
    await expect(movies.changes()).rejects.toBe('A movieId has to be provided');
  });

  it('must resolve movies.credits with movieId', async () => {
    const promise = movies.credits(1);

    await await expect(promise).resolves.toEqual({});
  });

  it('must reject when movies.credits is called without movieId', async () => {
    await expect(movies.credits()).rejects.toBe('A movieId has to be provided');
  });

  it('must resolve movies.deleteRating call with movieId and sessionId option', async () => {
    const promise = movies.deleteRating(123, { sessionId: 'XXX' });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.deleteRating call with movieId and guestSessionId option', async () => {
    const promise = movies.deleteRating(123, { guestSessionId: 'XXX' });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movies.deleteRating is called without movieId', async () => {
    await expect(movies.deleteRating()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must reject when movies.deleteRating is called without options', async () => {
    await expect(movies.deleteRating(123)).rejects.toBe(
      'A sessionId or a guestSessionId has to be provided'
    );
  });

  it('must resolve movies.details call without options', async () => {
    const promise = movies.details(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.details call with options', async () => {
    const promise = movies.details(1, {
      appendToResponse: 'videos',
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movies.details is called without movieId', async () => {
    await expect(movies.details()).rejects.toBe('A movieId has to be provided');
  });

  it('must resolve movies.externalIds with movieId', async () => {
    const promise = movies.externalIds(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movies.externalIds is called without movieId', async () => {
    await expect(movies.externalIds()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must resolve movies.images with movieId and no options', async () => {
    const promise = movies.images(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.images with movieId and options', async () => {
    const promise = movies.images(1, {
      language: 'es',
      includeImageLanguage: 'es',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movies.images is called without movieId', async () => {
    await expect(movies.images()).rejects.toBe('A movieId has to be provided');
  });

  it('must resolve movies.keywords with movieId', async () => {
    const promise = movies.keywords(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movies.keywords is called without movieId', async () => {
    await expect(movies.keywords()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must resolve movies.latest call without options', async () => {
    const promise = movies.latest();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.latest call with options', async () => {
    const promise = movies.latest({ language: 'es' });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.lists with movieId', async () => {
    const promise = movies.lists(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.lists with movieId and options', async () => {
    const promise = movies.lists(1, {
      language: 'es',
      page: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movies.lists is called without movieId', async () => {
    await expect(movies.lists()).rejects.toBe('A movieId has to be provided');
  });

  it('must resolve movies.nowPlaying call with options', async () => {
    const promise = movies.nowPlaying({
      language: 'en',
      page: 1,
      region: 'CO',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.nowPlaying call with no options', async () => {
    const promise = movies.nowPlaying();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.popular call with no options', async () => {
    const promise = movies.popular();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.popular call with options', async () => {
    const promise = movies.popular({ language: 'es', page: 1 });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.rating call with movieId, rating, and sessionId option', async () => {
    const promise = movies.rating(123, 2, { sessionId: 'XXX' });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.rating call with movieId, rating and guestSessionId option', async () => {
    const promise = movies.rating(123, 4.4, { guestSessionId: 'XXX' });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movies.rating is called without movieId', async () => {
    await expect(movies.rating()).rejects.toBe('A movieId has to be provided');
  });

  it('must reject when movies.rating is called with movieId and without rating', async () => {
    await expect(movies.rating(1)).rejects.toBe('A rating has to be provided');
  });

  it('must reject when movies.rating is called without session options', async () => {
    await expect(movies.rating(123, 1)).rejects.toBe(
      'A sessionId or a guestSessionId has to be provided'
    );
  });

  it('must resolve movies.recommendations with movieId', async () => {
    const promise = movies.recommendations(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.recommendations with movieId and options', async () => {
    const promise = movies.recommendations(1, {
      language: 'es',
      page: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movies.recommendations is called without movieId', async () => {
    await expect(movies.recommendations()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must resolve movies.releaseDates with movieId', async () => {
    const promise = movies.releaseDates(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movies.releaseDates is called without movieId', async () => {
    await expect(movies.releaseDates()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must resolve movies.reviews with movieId', async () => {
    const promise = movies.reviews(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.reviews with movieId and options', async () => {
    const promise = movies.reviews(1, {
      language: 'es',
      page: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movies.reviews is called without movieId', async () => {
    await expect(movies.reviews()).rejects.toBe('A movieId has to be provided');
  });

  it('must resolve movies.similar with movieId', async () => {
    const promise = movies.similar(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.similar with movieId and options', async () => {
    const promise = movies.similar(1, {
      language: 'es',
      page: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movies.similar is called without movieId', async () => {
    await expect(movies.similar()).rejects.toBe('A movieId has to be provided');
  });

  it('must resolve movies.topRated call with options', async () => {
    const promise = movies.topRated({
      language: 'en',
      page: 1,
      region: 'CO',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.topRated call with no options', async () => {
    const promise = movies.topRated();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.translations with movieId', async () => {
    const promise = movies.translations(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movies.translations is called without movieId', async () => {
    await expect(movies.translations()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must resolve movies.upcoming call with options', async () => {
    const promise = movies.upcoming({
      language: 'en',
      page: 1,
      region: 'CO',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.upcoming call with no options', async () => {
    const promise = movies.upcoming();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movies.videos with movieId', async () => {
    const promise = movies.videos(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movies.videos is called without movieId', async () => {
    await expect(movies.videos()).rejects.toBe('A movieId has to be provided');
  });
});
