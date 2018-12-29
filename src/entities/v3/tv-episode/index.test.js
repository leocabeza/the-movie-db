import * as tvEpisode from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('tvEpisode entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof tvEpisode.accountStates).toEqual('function');
    expect(typeof tvEpisode.changes).toEqual('function');
    expect(typeof tvEpisode.credits).toEqual('function');
    expect(typeof tvEpisode.deleteRating).toEqual('function');
    expect(typeof tvEpisode.details).toEqual('function');
    expect(typeof tvEpisode.externalIds).toEqual('function');
    expect(typeof tvEpisode.images).toEqual('function');
    expect(typeof tvEpisode.rating).toEqual('function');
    expect(typeof tvEpisode.translations).toEqual('function');
    expect(typeof tvEpisode.videos).toEqual('function');
  });

  it('must resolve tvEpisode.accountStates with required params and options', async () => {
    const promise = tvEpisode.accountStates(1, 1, 1, {
      session_id: 'XXX',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tvEpisode.accountStates is called without tvId', async () => {
    await expect(tvEpisode.accountStates()).rejects.toBe(
      'A tvId has to be provided'
    );
  });

  it('must reject when tvEpisode.accountStates is called without seasonNumber', async () => {
    await expect(tvEpisode.accountStates(1)).rejects.toBe(
      'A seasonNumber has to be provided'
    );
  });

  it('must reject when tvEpisode.accountStates is called without episodeNumber', async () => {
    await expect(tvEpisode.accountStates(1, 2)).rejects.toBe(
      'An episodeNumber has to be provided'
    );
  });

  it('must reject when tvEpisode.accountStates is called with required params but no session option', async () => {
    await expect(tvEpisode.accountStates(1, 2, 3)).rejects.toBe(
      'A session_id or a guest_session_id has to be provided'
    );
  });

  it('must resolve tvEpisode.changes with required params and options', async () => {
    const promise = tvEpisode.changes(1, {
      page: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tvEpisode.changes with required params with no options', async () => {
    const promise = tvEpisode.changes(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tvEpisode.changes is called without episodeId', async () => {
    await expect(tvEpisode.changes()).rejects.toBe(
      'An episodeId has to be provided'
    );
  });

  it('must resolve tvEpisode.credits with required params', async () => {
    const promise = tvEpisode.credits(1, 2, 3);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tvEpisode.credits is called without tvId', async () => {
    await expect(tvEpisode.credits()).rejects.toBe('A tvId has to be provided');
  });

  it('must reject when tvEpisode.credits is called without seasonNumber', async () => {
    await expect(tvEpisode.credits(1)).rejects.toBe(
      'A seasonNumber has to be provided'
    );
  });

  it('must reject when tvEpisode.credits is called without episodeNumber', async () => {
    await expect(tvEpisode.credits(1, 2)).rejects.toBe(
      'An episodeNumber has to be provided'
    );
  });

  it('must resolve tvEpisode.deleteRating with required params and options', async () => {
    const promise = tvEpisode.deleteRating(1, 1, 1, {
      session_id: 'XXX',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tvEpisode.deleteRating is called without tvId', async () => {
    await expect(tvEpisode.deleteRating()).rejects.toBe(
      'A tvId has to be provided'
    );
  });

  it('must reject when tvEpisode.deleteRating is called without seasonNumber', async () => {
    await expect(tvEpisode.deleteRating(1)).rejects.toBe(
      'A seasonNumber has to be provided'
    );
  });

  it('must reject when tvEpisode.deleteRating is called without episodeNumber', async () => {
    await expect(tvEpisode.deleteRating(1, 2)).rejects.toBe(
      'An episodeNumber has to be provided'
    );
  });

  it('must reject when tvEpisode.deleteRating is called with required params but no session option', async () => {
    await expect(tvEpisode.deleteRating(1, 2, 3)).rejects.toBe(
      'A session_id or a guest_session_id has to be provided'
    );
  });

  it('must resolve tvEpisode.details with required params and options', async () => {
    const promise = tvEpisode.details(1, 2, 3, {
      language: 'en-US',
      append_to_response: 'videos',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tvEpisode.details with required params with no options', async () => {
    const promise = tvEpisode.details(1, 2, 3);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tvEpisode.details is called without tvId', async () => {
    await expect(tvEpisode.details()).rejects.toBe('A tvId has to be provided');
  });

  it('must reject when tvEpisode.details is called without seasonNumber', async () => {
    await expect(tvEpisode.details(1)).rejects.toBe(
      'A seasonNumber has to be provided'
    );
  });

  it('must reject when tvEpisode.details is called without episodeNumber', async () => {
    await expect(tvEpisode.details(1, 2)).rejects.toBe(
      'An episodeNumber has to be provided'
    );
  });

  it('must resolve tvEpisode.externalIds with required params', async () => {
    const promise = tvEpisode.externalIds(1, 2, 3);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tvEpisode.externalIds is called without tvId', async () => {
    await expect(tvEpisode.externalIds()).rejects.toBe(
      'A tvId has to be provided'
    );
  });

  it('must reject when tvEpisode.externalIds is called without seasonNumber', async () => {
    await expect(tvEpisode.externalIds(1)).rejects.toBe(
      'A seasonNumber has to be provided'
    );
  });

  it('must reject when tvEpisode.externalIds is called without episodeNumber', async () => {
    await expect(tvEpisode.externalIds(1, 2)).rejects.toBe(
      'An episodeNumber has to be provided'
    );
  });

  it('must resolve tvEpisode.images with required params', async () => {
    const promise = tvEpisode.images(1, 2, 3);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tvEpisode.images is called without tvId', async () => {
    await expect(tvEpisode.images()).rejects.toBe('A tvId has to be provided');
  });

  it('must reject when tvEpisode.images is called without seasonNumber', async () => {
    await expect(tvEpisode.images(1)).rejects.toBe(
      'A seasonNumber has to be provided'
    );
  });

  it('must reject when tvEpisode.images is called without episodeNumber', async () => {
    await expect(tvEpisode.images(1, 2)).rejects.toBe(
      'An episodeNumber has to be provided'
    );
  });

  it('must resolve tvEpisode.rating with required params and options', async () => {
    const promise = tvEpisode.rating(1, 1, 1, 1, {
      session_id: 'XXX',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tvEpisode.rating is called without tvId', async () => {
    await expect(tvEpisode.rating()).rejects.toBe('A tvId has to be provided');
  });

  it('must reject when tvEpisode.rating is called without seasonNumber', async () => {
    await expect(tvEpisode.rating(1)).rejects.toBe(
      'A seasonNumber has to be provided'
    );
  });

  it('must reject when tvEpisode.rating is called without episodeNumber', async () => {
    await expect(tvEpisode.rating(1, 2)).rejects.toBe(
      'An episodeNumber has to be provided'
    );
  });

  it('must reject when tvEpisode.rating is called without rating', async () => {
    await expect(tvEpisode.rating(1, 2, 3)).rejects.toBe(
      'A rating has to be provided'
    );
  });

  it('must reject when tvEpisode.rating is called with required params but no session option', async () => {
    await expect(tvEpisode.rating(1, 2, 3, 4)).rejects.toBe(
      'A session_id or a guest_session_id has to be provided'
    );
  });

  it('must resolve tvEpisode.translations with required params', async () => {
    const promise = tvEpisode.translations(1, 2, 3);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tvEpisode.translations is called without tvId', async () => {
    await expect(tvEpisode.translations()).rejects.toBe(
      'A tvId has to be provided'
    );
  });

  it('must reject when tvEpisode.translations is called without seasonNumber', async () => {
    await expect(tvEpisode.translations(1)).rejects.toBe(
      'A seasonNumber has to be provided'
    );
  });

  it('must reject when tvEpisode.translations is called without episodeNumber', async () => {
    await expect(tvEpisode.translations(1, 2)).rejects.toBe(
      'An episodeNumber has to be provided'
    );
  });

  it('must resolve tvEpisode.videos with required params', async () => {
    const promise = tvEpisode.videos(1, 2, 3, { language: 'en-US' });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tvEpisode.videos with required params and no options', async () => {
    const promise = tvEpisode.videos(1, 2, 3);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tvEpisode.videos is called without tvId', async () => {
    await expect(tvEpisode.videos()).rejects.toBe('A tvId has to be provided');
  });

  it('must reject when tvEpisode.videos is called without seasonNumber', async () => {
    await expect(tvEpisode.videos(1)).rejects.toBe(
      'A seasonNumber has to be provided'
    );
  });

  it('must reject when tvEpisode.videos is called without episodeNumber', async () => {
    await expect(tvEpisode.videos(1, 2)).rejects.toBe(
      'An episodeNumber has to be provided'
    );
  });
});
