import * as collection from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('collection entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof collection.details).toEqual('function');
    expect(typeof collection.images).toEqual('function');
    expect(typeof collection.translations).toEqual('function');
  });

  it('must resolve collection.details with collectionId and options', async () => {
    const promise = collection.details(1, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve collection.details without options', async () => {
    const promise = collection.details(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when collection.details is called without collectionId', async () => {
    await expect(collection.details()).rejects.toBe(
      'A collectionId has to be provided'
    );
  });

  it('must resolve collection.images with collectionId and options', async () => {
    const promise = collection.images(1, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve collection.images without options', async () => {
    const promise = collection.images(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when collection.images is called without collectionId', async () => {
    await expect(collection.images()).rejects.toBe(
      'A collectionId has to be provided'
    );
  });

  it('must resolve collection.translations with collectionId and options', async () => {
    const promise = collection.translations(1, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve collection.translations without options', async () => {
    const promise = collection.translations(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when collection.translations is called without collectionId', async () => {
    await expect(collection.translations()).rejects.toBe(
      'A collectionId has to be provided'
    );
  });
});
