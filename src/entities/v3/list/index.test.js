import * as list from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('list entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof list.addMovie).toEqual('function');
    expect(typeof list.clear).toEqual('function');
    expect(typeof list.create).toEqual('function');
    expect(typeof list.details).toEqual('function');
    expect(typeof list.itemStatus).toEqual('function');
    expect(typeof list.removeMovie).toEqual('function');
  });

  it('must resolve list.addMovie with listId, sessionId and body', async () => {
    const promise = list.addMovie('1', '1', {
      media_id: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when list.addMovie is called without listId', async () => {
    await expect(list.addMovie()).rejects.toBe('A listId has to be provided');
  });

  it('must reject when list.addMovie is called with listId and without sessionId', async () => {
    await expect(list.addMovie('1')).rejects.toBe(
      'A sessionId has to be provided'
    );
  });

  it('must reject when list.addMovie is called with listId, sessionId and no body', async () => {
    await expect(list.addMovie('1', '1')).rejects.toBe(
      'The body must have a media_id'
    );
  });

  it('must resolve list.clear with listId, and options', async () => {
    const promise = list.clear('1', {
      session_id: 'XXX',
      confirm: true,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when list.clear is called without listId', async () => {
    await expect(list.clear()).rejects.toBe('A listId has to be provided');
  });

  it('must reject when list.clear is called with listId and without session_id option', async () => {
    await expect(list.clear('1')).rejects.toBe(
      'A session_id option has to be provided'
    );
  });

  it('must reject when list.clear is called with listId and without confirm option', async () => {
    await expect(list.clear('1', { session_id: 'XXX' })).rejects.toBe(
      'A confirm option has to be provided'
    );
  });

  it('must resolve list.create with sessionId and body', async () => {
    const promise = list.create('1', {
      name: 'list name',
      description: 'list description',
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when list.create is called without sessionId', async () => {
    await expect(list.create()).rejects.toBe('A sessionId has to be provided');
  });

  it('must reject when list.create is called with sessionId and no body', async () => {
    await expect(list.create(1)).rejects.toBe(
      'A body must have a name, description and language keys'
    );
  });

  it('must resolve list.details with listId and no options', async () => {
    const promise = list.details(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve list.details with listId and options', async () => {
    const promise = list.details(1, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when list.details is called without listId', async () => {
    await expect(list.details()).rejects.toBe('A listId has to be provided');
  });

  it('must resolve list.itemStatus with listId and options', async () => {
    const promise = list.itemStatus(1, {
      movie_id: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when list.itemStatus is called without listId', async () => {
    await expect(list.itemStatus()).rejects.toBe('A listId has to be provided');
  });

  it('must reject when list.itemStatus is called with listId and no movie_id options', async () => {
    await expect(list.itemStatus(1)).rejects.toBe(
      'A movie_id option has to be provided'
    );
  });

  it('must resolve list.remove with listId, and options', async () => {
    const promise = list.remove('1', {
      session_id: 'XXX',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when list.remove is called without listId', async () => {
    await expect(list.remove()).rejects.toBe('A listId has to be provided');
  });

  it('must reject when list.remove is called with listId and without session_id option', async () => {
    await expect(list.remove('1')).rejects.toBe(
      'A session_id option has to be provided'
    );
  });

  it('must resolve list.removeMovie with listId, sessionId and body', async () => {
    const promise = list.removeMovie('1', '1', {
      media_id: 1,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when list.removeMovie is called without listId', async () => {
    await expect(list.removeMovie()).rejects.toBe(
      'A listId has to be provided'
    );
  });

  it('must reject when list.removeMovie is called with listId and without sessionId', async () => {
    await expect(list.removeMovie('1')).rejects.toBe(
      'A sessionId has to be provided'
    );
  });

  it('must reject when list.removeMovie is called with listId, sessionId and no body', async () => {
    await expect(list.removeMovie('1', '1')).rejects.toBe(
      'The body must have a media_id'
    );
  });
});
