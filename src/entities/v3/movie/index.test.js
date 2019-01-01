import * as movie from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('movie entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof movie.accountStates).toEqual('function');
    expect(typeof movie.alternativeTitles).toEqual('function');
    expect(typeof movie.changes).toEqual('function');
    expect(typeof movie.credits).toEqual('function');
    expect(typeof movie.deleteRating).toEqual('function');
    expect(typeof movie.details).toEqual('function');
    expect(typeof movie.externalIds).toEqual('function');
    expect(typeof movie.images).toEqual('function');
    expect(typeof movie.keywords).toEqual('function');
    expect(typeof movie.lists).toEqual('function');
    expect(typeof movie.nowPlaying).toEqual('function');
    expect(typeof movie.popular).toEqual('function');
    expect(typeof movie.rate).toEqual('function');
    expect(typeof movie.recommendations).toEqual('function');
    expect(typeof movie.releaseDates).toEqual('function');
    expect(typeof movie.reviews).toEqual('function');
    expect(typeof movie.similar).toEqual('function');
    expect(typeof movie.topRated).toEqual('function');
    expect(typeof movie.translations).toEqual('function');
    expect(typeof movie.upcoming).toEqual('function');
    expect(typeof movie.videos).toEqual('function');
  });

  it('must resolve movie.accountStates call with movieId and session_id option', async () => {
    const promise = movie.accountStates(123, { session_id: 'XXX' });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.accountStates call with movieId and guest_session_id option', async () => {
    const promise = movie.accountStates(123, { guest_session_id: 'XXX' });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movie.accountStates is called without movieId', async () => {
    await expect(movie.accountStates()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must reject when movie.accountStates is called without options', async () => {
    await expect(movie.accountStates(123)).rejects.toBe(
      'A session_id or a guest_session_id has to be provided'
    );
  });

  it('must resolve movie.alternativeTitles call with movieId and no options', async () => {
    const promise = movie.alternativeTitles(123);

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.alternativeTitles call with movieId and country option', async () => {
    const promise = movie.alternativeTitles(123, { country: 'ES' });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movie.alternativeTitles is called without movieId', async () => {
    await expect(movie.alternativeTitles()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must resolve movie.changes call with movieId and no options', async () => {
    const promise = movie.changes(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.changes call with movieId and options', async () => {
    const promise = movie.changes(1, {
      startDate: '2018-11-18',
      endDate: '2018-11-20',
      page: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movie.changes is called without movieId', async () => {
    await expect(movie.changes()).rejects.toBe('A movieId has to be provided');
  });

  it('must resolve movie.credits with movieId', async () => {
    const promise = movie.credits(1);

    await await expect(promise).resolves.toEqual({});
  });

  it('must reject when movie.credits is called without movieId', async () => {
    await expect(movie.credits()).rejects.toBe('A movieId has to be provided');
  });

  it('must resolve movie.deleteRating call with movieId and session_id option', async () => {
    const promise = movie.deleteRating(123, { session_id: 'XXX' });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.deleteRating call with movieId and guest_session_id option', async () => {
    const promise = movie.deleteRating(123, { guest_session_id: 'XXX' });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movie.deleteRating is called without movieId', async () => {
    await expect(movie.deleteRating()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must reject when movie.deleteRating is called without options', async () => {
    await expect(movie.deleteRating(123)).rejects.toBe(
      'A session_id or a guest_session_id has to be provided'
    );
  });

  it('must resolve movie.details call without options', async () => {
    const promise = movie.details(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.details call with options', async () => {
    const promise = movie.details(1, {
      appendToResponse: 'videos',
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movie.details is called without movieId', async () => {
    await expect(movie.details()).rejects.toBe('A movieId has to be provided');
  });

  it('must resolve movie.externalIds with movieId', async () => {
    const promise = movie.externalIds(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movie.externalIds is called without movieId', async () => {
    await expect(movie.externalIds()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must resolve movie.images with movieId and no options', async () => {
    const promise = movie.images(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.images with movieId and options', async () => {
    const promise = movie.images(1, {
      language: 'es',
      includeImageLanguage: 'es',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movie.images is called without movieId', async () => {
    await expect(movie.images()).rejects.toBe('A movieId has to be provided');
  });

  it('must resolve movie.keywords with movieId', async () => {
    const promise = movie.keywords(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movie.keywords is called without movieId', async () => {
    await expect(movie.keywords()).rejects.toBe('A movieId has to be provided');
  });

  it('must resolve movie.latest call without options', async () => {
    const promise = movie.latest();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.latest call with options', async () => {
    const promise = movie.latest({ language: 'es' });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.lists with movieId', async () => {
    const promise = movie.lists(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.lists with movieId and options', async () => {
    const promise = movie.lists(1, {
      language: 'es',
      page: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movie.lists is called without movieId', async () => {
    await expect(movie.lists()).rejects.toBe('A movieId has to be provided');
  });

  it('must resolve movie.nowPlaying call with options', async () => {
    const promise = movie.nowPlaying({
      language: 'en',
      page: 1,
      region: 'CO',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.nowPlaying call with no options', async () => {
    const promise = movie.nowPlaying();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.popular call with no options', async () => {
    const promise = movie.popular();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.popular call with options', async () => {
    const promise = movie.popular({ language: 'es', page: 1 });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.rate call with movieId, rating, and session_id option', async () => {
    const promise = movie.rate(123, 2, { session_id: 'XXX' });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.rate call with movieId, rating and guest_session_id option', async () => {
    const promise = movie.rate(123, 4.4, { guest_session_id: 'XXX' });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movie.rate is called without movieId', async () => {
    await expect(movie.rate()).rejects.toBe('A movieId has to be provided');
  });

  it('must reject when movie.rate is called with movieId and without rating', async () => {
    await expect(movie.rate(1)).rejects.toBe('A rating has to be provided');
  });

  it('must reject when movie.rate is called without session options', async () => {
    await expect(movie.rate(123, 1)).rejects.toBe(
      'A session_id or a guest_session_id has to be provided'
    );
  });

  it('must resolve movie.recommendations with movieId', async () => {
    const promise = movie.recommendations(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.recommendations with movieId and options', async () => {
    const promise = movie.recommendations(1, {
      language: 'es',
      page: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movie.recommendations is called without movieId', async () => {
    await expect(movie.recommendations()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must resolve movie.releaseDates with movieId', async () => {
    const promise = movie.releaseDates(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movie.releaseDates is called without movieId', async () => {
    await expect(movie.releaseDates()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must resolve movie.reviews with movieId', async () => {
    const promise = movie.reviews(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.reviews with movieId and options', async () => {
    const promise = movie.reviews(1, {
      language: 'es',
      page: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movie.reviews is called without movieId', async () => {
    await expect(movie.reviews()).rejects.toBe('A movieId has to be provided');
  });

  it('must resolve movie.similar with movieId', async () => {
    const promise = movie.similar(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.similar with movieId and options', async () => {
    const promise = movie.similar(1, {
      language: 'es',
      page: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movie.similar is called without movieId', async () => {
    await expect(movie.similar()).rejects.toBe('A movieId has to be provided');
  });

  it('must resolve movie.topRated call with options', async () => {
    const promise = movie.topRated({
      language: 'en',
      page: 1,
      region: 'CO',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.topRated call with no options', async () => {
    const promise = movie.topRated();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.translations with movieId', async () => {
    const promise = movie.translations(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movie.translations is called without movieId', async () => {
    await expect(movie.translations()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must resolve movie.upcoming call with options', async () => {
    const promise = movie.upcoming({
      language: 'en',
      page: 1,
      region: 'CO',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.upcoming call with no options', async () => {
    const promise = movie.upcoming();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve movie.videos with movieId', async () => {
    const promise = movie.videos(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when movie.videos is called without movieId', async () => {
    await expect(movie.videos()).rejects.toBe('A movieId has to be provided');
  });
});
