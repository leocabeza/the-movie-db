import axios from 'axios';
import * as movies from './';
import mocks from './mocks';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

jest.mock('axios');

describe('movies entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof movies.accountStates).toEqual('function');
    expect(typeof movies.alternativeTitles).toEqual('function');
    expect(typeof movies.changes).toEqual('function');
    expect(typeof movies.credits).toEqual('function');
    expect(typeof movies.details).toEqual('function');
    expect(typeof movies.externalIds).toEqual('function');
    expect(typeof movies.images).toEqual('function');
    expect(typeof movies.keywords).toEqual('function');
    expect(typeof movies.popular).toEqual('function');
    expect(typeof movies.releaseDates).toEqual('function');
    expect(typeof movies.translations).toEqual('function');
    expect(typeof movies.videos).toEqual('function');
  });

  it('must return a valid response from movies.accountStates call with movieId and sessionId option', async () => {
    axios.get.mockResolvedValue(mocks.accountStates);
    const response = await movies.accountStates(123, { sessionId: 'XXX' });

    expect(response).toBe(mocks.accountStates);
  });

  it('must return a valid response from movies.accountStates call with movieId and guestSessionId option', async () => {
    axios.get.mockResolvedValue(mocks.accountStates);
    const response = await movies.accountStates(123, { guestSessionId: 'XXX' });

    expect(response).toBe(mocks.accountStates);
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

  it('must return a valid response from movies.alternativeTitles call with movieId and no options', async () => {
    axios.get.mockResolvedValue(mocks.alternativeTitles);
    const response = await movies.alternativeTitles(123);

    expect(response).toBe(mocks.alternativeTitles);
  });

  it('must return a valid response from movies.alternativeTitles call with movieId and country option', async () => {
    const country = 'ES';
    const filteredTitles = {
      ...mocks.alternativeTitles,
      titles: mocks.alternativeTitles.titles.filter(
        title => title['iso-3166-1'] === country
      ),
    };
    axios.get.mockResolvedValue(filteredTitles);
    const response = await movies.alternativeTitles(123, { country });

    expect(response).toBe(filteredTitles);
  });

  it('must reject when movies.alternativeTitles is called without movieId', async () => {
    await expect(movies.alternativeTitles()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must return a valid response from movies.changes call with movieId and no options', async () => {
    axios.get.mockResolvedValue(mocks.changes);
    const response = await movies.changes(1);

    expect(response).toBe(mocks.changes);
  });

  it('must return a valid response from movies.changes call with movieId and options', async () => {
    axios.get.mockResolvedValue(mocks.changes);
    const response = await movies.changes(1, {
      startDate: '2018-11-18',
      endDate: '2018-11-20',
      page: 1,
    });

    expect(response).toBe(mocks.changes);
  });

  it('must reject when movies.changes is called without movieId', async () => {
    await expect(movies.changes()).rejects.toBe('A movieId has to be provided');
  });

  it('must return a valid response from movies.credits with movieId', async () => {
    axios.get.mockResolvedValue(mocks.credits);
    const response = await movies.credits(1);

    await expect(response).toBe(mocks.credits);
  });

  it('must reject when movies.credits is called without movieId', async () => {
    await expect(movies.credits()).rejects.toBe('A movieId has to be provided');
  });

  it('must reject when movies.details is called without movieId', async () => {
    await expect(movies.details()).rejects.toBe('A movieId has to be provided');
  });

  it('must return a valid response from movies.details call without options', async () => {
    axios.get.mockResolvedValue(mocks.details);
    const response = await movies.details(1);

    expect(response).toBe(mocks.details);
  });

  it('must return a valid response from movies.details call with options', async () => {
    const responseWithAppendToResponse = {
      ...mocks.popular,
      results: {
        ...mocks.popular.results,
        videos: [],
      },
    };
    axios.get.mockResolvedValue(responseWithAppendToResponse);
    const response = await movies.details(1, {
      appendToResponse: 'videos',
      language: 'en-US',
    });

    expect(response).toBe(responseWithAppendToResponse);
  });

  it('must return a valid response from movies.externalIds with movieId', async () => {
    axios.get.mockResolvedValue(mocks.externalIds);
    const response = await movies.externalIds(1);

    expect(response).toBe(mocks.externalIds);
  });

  it('must reject when movies.externalIds is called without movieId', async () => {
    await expect(movies.externalIds()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must return a valid response from movies.images with movieId and no options', async () => {
    axios.get.mockResolvedValue(mocks.images);
    const response = await movies.images(1);

    expect(response).toBe(mocks.images);
  });

  it('must return a valid response from movies.images with movieId and options', async () => {
    axios.get.mockResolvedValue(mocks.images);
    const response = await movies.images(1, {
      language: 'es',
      includeImageLanguage: 'es',
    });

    expect(response).toBe(mocks.images);
  });

  it('must reject when movies.images is called without movieId', async () => {
    await expect(movies.images()).rejects.toBe('A movieId has to be provided');
  });

  it('must return a valid response from movies.keywords with movieId', async () => {
    axios.get.mockResolvedValue(mocks.keywords);
    const response = await movies.keywords(1);

    expect(response).toBe(mocks.keywords);
  });

  it('must reject when movies.keywords is called without movieId', async () => {
    await expect(movies.keywords()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must return a valid response from movies.releaseDates with movieId', async () => {
    axios.get.mockResolvedValue(mocks.releaseDates);
    const response = await movies.releaseDates(1);

    expect(response).toBe(mocks.releaseDates);
  });

  it('must reject when movies.releaseDates is called without movieId', async () => {
    await expect(movies.releaseDates()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must return a valid response from movies.translations with movieId', async () => {
    axios.get.mockResolvedValue(mocks.translations);
    const response = await movies.translations(1);

    expect(response).toBe(mocks.translations);
  });

  it('must reject when movies.translations is called without movieId', async () => {
    await expect(movies.translations()).rejects.toBe(
      'A movieId has to be provided'
    );
  });

  it('must return a valid response from movies.videos with movieId', async () => {
    axios.get.mockResolvedValue(mocks.videos);
    const response = await movies.videos(1);

    expect(response).toBe(mocks.videos);
  });

  it('must reject when movies.videos is called without movieId', async () => {
    await expect(movies.videos()).rejects.toBe('A movieId has to be provided');
  });

  it('must return a valid response from movies.popular call', async () => {
    axios.get.mockResolvedValue(mocks.popular);
    const response = await movies.popular();

    expect(response).toBe(mocks.popular);
  });
});
