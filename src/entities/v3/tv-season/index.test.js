import * as tvSeason from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('tvSeason entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof tvSeason.accountStates).toEqual('function');
    expect(typeof tvSeason.changes).toEqual('function');
    expect(typeof tvSeason.credits).toEqual('function');
    expect(typeof tvSeason.details).toEqual('function');
    expect(typeof tvSeason.externalIds).toEqual('function');
    expect(typeof tvSeason.images).toEqual('function');
    expect(typeof tvSeason.videos).toEqual('function');
  });

  it('must resolve tvSeason.accountStates with required params and options', async () => {
    const promise = tvSeason.accountStates(1, 1, {
      session_id: 'XXX',
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tvSeason.accountStates is called without tvId', async () => {
    await expect(tvSeason.accountStates()).rejects.toBe(
      'A tvId has to be provided'
    );
  });

  it('must reject when tvSeason.accountStates is called without seasonNumber', async () => {
    await expect(tvSeason.accountStates(1)).rejects.toBe(
      'A seasonNumber has to be provided'
    );
  });

  it('must reject when tvSeason.accountStates is called with required params but no session option', async () => {
    await expect(tvSeason.accountStates(1, 2)).rejects.toBe(
      'A session_id or a guest_session_id has to be provided'
    );
  });

  it('must resolve tvSeason.changes with required params and options', async () => {
    const promise = tvSeason.changes(1, {
      start_date: '2018-12-28',
      end_date: '2018-12-30',
      page: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tvSeason.changes with required params with no options', async () => {
    const promise = tvSeason.changes(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tvSeason.changes is called without seasonId', async () => {
    await expect(tvSeason.changes()).rejects.toBe(
      'A seasonId has to be provided'
    );
  });

  it('must resolve tvSeason.credits with required params and options', async () => {
    const promise = tvSeason.credits(1, 2, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tvSeason.credits with required params with no options', async () => {
    const promise = tvSeason.credits(1, 2);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tvSeason.credits is called without tvId', async () => {
    await expect(tvSeason.credits()).rejects.toBe('A tvId has to be provided');
  });

  it('must reject when tvSeason.credits is called without seasonNumber', async () => {
    await expect(tvSeason.credits(1)).rejects.toBe(
      'A seasonNumber has to be provided'
    );
  });

  it('must resolve tvSeason.details with required params and options', async () => {
    const promise = tvSeason.details(1, 2, {
      language: 'en-US',
      append_to_response: 'videos',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tvSeason.details with required params with no options', async () => {
    const promise = tvSeason.details(1, 2);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tvSeason.details is called without tvId', async () => {
    await expect(tvSeason.details()).rejects.toBe('A tvId has to be provided');
  });

  it('must reject when tvSeason.details is called without seasonNumber', async () => {
    await expect(tvSeason.details(1)).rejects.toBe(
      'A seasonNumber has to be provided'
    );
  });

  it('must resolve tvSeason.externalIds with required params and options', async () => {
    const promise = tvSeason.externalIds(1, 2, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tvSeason.externalIds with required params with no options', async () => {
    const promise = tvSeason.externalIds(1, 2);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tvSeason.externalIds is called without tvId', async () => {
    await expect(tvSeason.externalIds()).rejects.toBe(
      'A tvId has to be provided'
    );
  });

  it('must reject when tvSeason.externalIds is called without seasonNumber', async () => {
    await expect(tvSeason.externalIds(1)).rejects.toBe(
      'A seasonNumber has to be provided'
    );
  });

  it('must resolve tvSeason.images with required params and options', async () => {
    const promise = tvSeason.images(1, 2, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tvSeason.images with required params with no options', async () => {
    const promise = tvSeason.images(1, 2);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tvSeason.images is called without tvId', async () => {
    await expect(tvSeason.images()).rejects.toBe('A tvId has to be provided');
  });

  it('must reject when tvSeason.images is called without seasonNumber', async () => {
    await expect(tvSeason.images(1)).rejects.toBe(
      'A seasonNumber has to be provided'
    );
  });

  it('must resolve tvSeason.videos with required params and options', async () => {
    const promise = tvSeason.videos(1, 2, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve tvSeason.videos with required params with no options', async () => {
    const promise = tvSeason.videos(1, 2);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when tvSeason.videos is called without tvId', async () => {
    await expect(tvSeason.videos()).rejects.toBe('A tvId has to be provided');
  });

  it('must reject when tvSeason.videos is called without seasonNumber', async () => {
    await expect(tvSeason.videos(1)).rejects.toBe(
      'A seasonNumber has to be provided'
    );
  });
});
