import * as list from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('list entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof list.addItems).toEqual('function');
    expect(typeof list.clearItems).toEqual('function');
    expect(typeof list.create).toEqual('function');
    expect(typeof list.deleteItems).toEqual('function');
    expect(typeof list.details).toEqual('function');
    expect(typeof list.itemStatus).toEqual('function');
    expect(typeof list.remove).toEqual('function');
    expect(typeof list.update).toEqual('function');
    expect(typeof list.updateItems).toEqual('function');
  });

  it('must resolve list.addItems with just required params', async () => {
    const promise = list.addItems('XXX', 1, [
      {
        media_type: 'movie',
        media_id: 550,
      },
    ]);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when list.addItems is called without items', async () => {
    await expect(list.addItems('XXX', 1)).rejects.toBe(
      'At least an item has to be provided'
    );
  });

  it('must reject when list.addItems is called without accessToken', async () => {
    await expect(list.addItems()).rejects.toBe(
      'An accessToken has to be provided'
    );
  });

  it('must reject when list.addItems is called without listId', async () => {
    await expect(list.addItems('XXX')).rejects.toBe(
      'A listId has to be provided'
    );
  });

  it('must resolve list.clearItems with just required params', async () => {
    const promise = list.clearItems('XXX', 1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when list.clearItems is called without accessToken', async () => {
    await expect(list.clearItems()).rejects.toBe(
      'An accessToken has to be provided'
    );
  });

  it('must reject when list.clearItems is called without listId', async () => {
    await expect(list.clearItems('XXX')).rejects.toBe(
      'A listId has to be provided'
    );
  });

  it('must resolve list.create with just required params', async () => {
    const promise = list.create('XXX', {
      name: 'Streets ahead',
      iso_639_1: 'en',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when list.create is called without accessToken', async () => {
    await expect(list.create()).rejects.toBe(
      'An accessToken has to be provided'
    );
  });

  it('must reject when list.create is called without options', async () => {
    await expect(list.create('XXX')).rejects.toBe(
      'A name and a iso_639_1 option has to be provided'
    );
  });

  it('must reject when list.create is called without iso_639_1 option', async () => {
    await expect(list.create('XXX', { name: 'Streets ahead' })).rejects.toBe(
      'A name and a iso_639_1 option has to be provided'
    );
  });

  it('must reject when list.create is called without name option', async () => {
    await expect(list.create('XXX', { iso_639_1: 'en' })).rejects.toBe(
      'A name and a iso_639_1 option has to be provided'
    );
  });

  it('must resolve list.deleteItems with just required params', async () => {
    const promise = list.deleteItems('XXX', 1, [
      {
        media_type: 'movie',
        media_id: 550,
        comment: 'Cool cool cool',
      },
    ]);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when list.deleteItems is called without items', async () => {
    await expect(list.deleteItems('XXX', 1)).rejects.toBe(
      'At least an item has to be provided'
    );
  });

  it('must reject when list.deleteItems is called without accessToken', async () => {
    await expect(list.deleteItems()).rejects.toBe(
      'An accessToken has to be provided'
    );
  });

  it('must reject when list.deleteItems is called without listId', async () => {
    await expect(list.deleteItems('XXX')).rejects.toBe(
      'A listId has to be provided'
    );
  });

  it('must resolve list.details with listId and options', async () => {
    const promise = list.details('XXX', {
      page: 1,
      sort_by: 'vote_average.desc',
      language: 'es',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve list.details with listId and no options', async () => {
    const promise = list.details('XXX');

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when list.details is called without listId', async () => {
    await expect(list.details()).rejects.toBe('A listId has to be provided');
  });

  it('must resolve list.itemStatus with just required params', async () => {
    const promise = list.itemStatus('XXX', 1, {
      media_type: 'movie',
      media_id: 550,
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when list.itemStatus is called without items', async () => {
    await expect(list.itemStatus('XXX', 1)).rejects.toBe(
      'At least an item has to be provided'
    );
  });

  it('must reject when list.itemStatus is called without accessToken', async () => {
    await expect(list.itemStatus()).rejects.toBe(
      'An accessToken has to be provided'
    );
  });

  it('must reject when list.itemStatus is called without listId', async () => {
    await expect(list.itemStatus('XXX')).rejects.toBe(
      'A listId has to be provided'
    );
  });

  it('must resolve list.remove with just required params', async () => {
    const promise = list.remove('XXX', 1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when list.remove is called without accessToken', async () => {
    await expect(list.remove()).rejects.toBe(
      'An accessToken has to be provided'
    );
  });

  it('must reject when list.remove is called without listId', async () => {
    await expect(list.remove('XXX')).rejects.toBe(
      'A listId has to be provided'
    );
  });

  it('must resolve list.update with just required params', async () => {
    const promise = list.update('XXX', 1, {
      description: 'If you have to ask, you are streets behind',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when list.update is called without body', async () => {
    await expect(list.update('XXX', 1)).rejects.toBe('Nothing to update');
  });

  it('must reject when list.update is called without body besides sort_by', async () => {
    await expect(
      list.update('XXX', 1, { sort_by: 'vote_average.desc' })
    ).rejects.toBe('Nothing to update');
  });

  it('must reject when list.update is called without accessToken', async () => {
    await expect(list.update()).rejects.toBe(
      'An accessToken has to be provided'
    );
  });

  it('must reject when list.update is called without listId', async () => {
    await expect(list.update('XXX')).rejects.toBe(
      'A listId has to be provided'
    );
  });

  it('must resolve list.updateItems with just required params', async () => {
    const promise = list.updateItems('XXX', 1, [
      {
        media_type: 'movie',
        media_id: 550,
        comment: 'Cool cool cool',
      },
    ]);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when list.updateItems is called without items', async () => {
    await expect(list.updateItems('XXX', 1)).rejects.toBe(
      'At least an item has to be provided'
    );
  });

  it('must reject when list.updateItems is called without accessToken', async () => {
    await expect(list.updateItems()).rejects.toBe(
      'An accessToken has to be provided'
    );
  });

  it('must reject when list.updateItems is called without listId', async () => {
    await expect(list.updateItems('XXX')).rejects.toBe(
      'A listId has to be provided'
    );
  });
});
