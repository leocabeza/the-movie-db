import * as tv from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('tv entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof tv.accountStates).toEqual('function');
    expect(typeof tv.airingToday).toEqual('function');
    expect(typeof tv.alternativeTitles).toEqual('function');
    expect(typeof tv.changes).toEqual('function');
    expect(typeof tv.contentRatings).toEqual('function');
    expect(typeof tv.credits).toEqual('function');
    expect(typeof tv.deleteRating).toEqual('function');
    expect(typeof tv.details).toEqual('function');
    expect(typeof tv.episodeGroups).toEqual('function');
    expect(typeof tv.externalIds).toEqual('function');
    expect(typeof tv.images).toEqual('function');
    expect(typeof tv.keywords).toEqual('function');
    expect(typeof tv.latest).toEqual('function');
    expect(typeof tv.onTheAir).toEqual('function');
    expect(typeof tv.popular).toEqual('function');
    expect(typeof tv.rate).toEqual('function');
    expect(typeof tv.recommendations).toEqual('function');
    expect(typeof tv.reviews).toEqual('function');
    expect(typeof tv.screenedTheatrically).toEqual('function');
    expect(typeof tv.similar).toEqual('function');
    expect(typeof tv.topRated).toEqual('function');
    expect(typeof tv.translations).toEqual('function');
    expect(typeof tv.videos).toEqual('function');
  });

  it('must resolve tv.accountStates with required params and options', async () => {
    const promise = tv.accountStates(1, {
      session_id: 'XXX',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tv.accountStates is called without tvId', async () => {
    await expect(tv.accountStates()).rejects.toBe('A tvId has to be provided');
  });

  it('must reject when tv.accountStates is called with required params but no session option', async () => {
    await expect(tv.accountStates(1)).rejects.toBe(
      'A session_id or a guest_session_id has to be provided'
    );
  });

  it('must resolve tv.airingToday call without options', async () => {
    const promise = tv.airingToday();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.airingToday call with options', async () => {
    const promise = tv.airingToday({ language: 'es', page: 1 });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.alternativeTitles with required params and options', async () => {
    const promise = tv.alternativeTitles(1, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.alternativeTitles with required params with no options', async () => {
    const promise = tv.alternativeTitles(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tv.alternativeTitles is called without tvId', async () => {
    await expect(tv.alternativeTitles()).rejects.toBe(
      'A tvId has to be provided'
    );
  });

  it('must resolve tv.changes with required params and options', async () => {
    const promise = tv.changes(1, {
      start_date: '2018-12-28',
      end_date: '2018-12-29',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.changes with required params with no options', async () => {
    const promise = tv.changes(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tv.changes is called without tvId', async () => {
    await expect(tv.changes()).rejects.toBe('A tvId has to be provided');
  });

  it('must resolve tv.contentRatings with required params and options', async () => {
    const promise = tv.contentRatings(1, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.contentRatings with required params with no options', async () => {
    const promise = tv.contentRatings(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tv.contentRatings is called without tvId', async () => {
    await expect(tv.contentRatings()).rejects.toBe('A tvId has to be provided');
  });

  it('must resolve tv.credits with required params and options', async () => {
    const promise = tv.credits(1, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.credits with required params with no options', async () => {
    const promise = tv.credits(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tv.credits is called without tvId', async () => {
    await expect(tv.credits()).rejects.toBe('A tvId has to be provided');
  });

  it('must resolve tv.deleteRating call with tvId and session_id option', async () => {
    const promise = tv.deleteRating(123, { session_id: 'XXX' });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.deleteRating call with tvId and guest_session_id option', async () => {
    const promise = tv.deleteRating(123, { guest_session_id: 'XXX' });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tv.deleteRating is called without tvId', async () => {
    await expect(tv.deleteRating()).rejects.toBe('A tvId has to be provided');
  });

  it('must reject when tv.deleteRating is called without options', async () => {
    await expect(tv.deleteRating(123)).rejects.toBe(
      'A session_id or a guest_session_id has to be provided'
    );
  });

  it('must resolve tv.details with required params and options', async () => {
    const promise = tv.details(1, {
      language: 'en-US',
      append_to_response: 'videos',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.details with required params with no options', async () => {
    const promise = tv.details(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tv.details is called without tvId', async () => {
    await expect(tv.details()).rejects.toBe('A tvId has to be provided');
  });

  it('must resolve tv.episodeGroups with required params and options', async () => {
    const promise = tv.episodeGroups(1, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.episodeGroups with required params with no options', async () => {
    const promise = tv.episodeGroups(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tv.episodeGroups is called without tvId', async () => {
    await expect(tv.episodeGroups()).rejects.toBe('A tvId has to be provided');
  });

  it('must resolve tv.externalIds with required params and options', async () => {
    const promise = tv.externalIds(1, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.externalIds with required params with no options', async () => {
    const promise = tv.externalIds(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tv.externalIds is called without tvId', async () => {
    await expect(tv.externalIds()).rejects.toBe('A tvId has to be provided');
  });

  it('must resolve tv.images with required params and options', async () => {
    const promise = tv.images(1, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.images with required params with no options', async () => {
    const promise = tv.images(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tv.images is called without tvId', async () => {
    await expect(tv.images()).rejects.toBe('A tvId has to be provided');
  });

  it('must resolve tv.keywords with required params', async () => {
    const promise = tv.keywords(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tv.keywords is called without tvId', async () => {
    await expect(tv.keywords()).rejects.toBe('A tvId has to be provided');
  });

  it('must resolve tv.latest call without options', async () => {
    const promise = tv.latest();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.latest call with options', async () => {
    const promise = tv.latest({ language: 'es' });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.onTheAir call without options', async () => {
    const promise = tv.onTheAir();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.onTheAir call with options', async () => {
    const promise = tv.onTheAir({ language: 'es', page: 1 });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.popular call with no options', async () => {
    const promise = tv.popular();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.popular call with options', async () => {
    const promise = tv.popular({ language: 'es', page: 1 });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.rate with required params, session_id and options', async () => {
    const promise = tv.rate(1, 1, {
      session_id: 'XXX',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.rate with required params, guest_session_id and options', async () => {
    const promise = tv.rate(1, 1, {
      guest_session_id: 'XXX',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tv.rate is called without tvId', async () => {
    await expect(tv.rate()).rejects.toBe('A tvId has to be provided');
  });

  it('must reject when tv.rate is called without rating', async () => {
    await expect(tv.rate(1)).rejects.toBe('A rating has to be provided');
  });

  it('must reject when tv.rate is called with required params but no session option', async () => {
    await expect(tv.rate(1, 2)).rejects.toBe(
      'A session_id or a guest_session_id has to be provided'
    );
  });

  it('must resolve tv.recommendations with required params and options', async () => {
    const promise = tv.recommendations(1, {
      language: 'en-US',
      page: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.recommendations with required params with no options', async () => {
    const promise = tv.recommendations(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tv.recommendations is called without tvId', async () => {
    await expect(tv.recommendations()).rejects.toBe(
      'A tvId has to be provided'
    );
  });

  it('must resolve tv.reviews with required params and options', async () => {
    const promise = tv.reviews(1, {
      language: 'en-US',
      page: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.reviews with required params with no options', async () => {
    const promise = tv.reviews(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tv.reviews is called without tvId', async () => {
    await expect(tv.reviews()).rejects.toBe('A tvId has to be provided');
  });

  it('must resolve tv.screenedTheatrically with required params', async () => {
    const promise = tv.screenedTheatrically(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tv.screenedTheatrically is called without tvId', async () => {
    await expect(tv.screenedTheatrically()).rejects.toBe(
      'A tvId has to be provided'
    );
  });

  it('must resolve tv.similar with required params and options', async () => {
    const promise = tv.similar(1, {
      language: 'en-US',
      page: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.similar with required params with no options', async () => {
    const promise = tv.similar(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tv.similar is called without tvId', async () => {
    await expect(tv.similar()).rejects.toBe('A tvId has to be provided');
  });

  it('must resolve tv.topRated call with options', async () => {
    const promise = tv.topRated({
      language: 'en',
      page: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.topRated call with no options', async () => {
    const promise = tv.topRated();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.translations with required params and options', async () => {
    const promise = tv.translations(1, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.translations with required params with no options', async () => {
    const promise = tv.translations(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tv.translations is called without tvId', async () => {
    await expect(tv.translations()).rejects.toBe('A tvId has to be provided');
  });

  it('must resolve tv.videos with required params and options', async () => {
    const promise = tv.videos(1, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tv.videos with required params with no options', async () => {
    const promise = tv.videos(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tv.videos is called without tvId', async () => {
    await expect(tv.videos()).rejects.toBe('A tvId has to be provided');
  });
});
