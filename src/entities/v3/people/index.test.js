import * as people from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('people entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof people.changes).toEqual('function');
    expect(typeof people.combinedCredits).toEqual('function');
    expect(typeof people.details).toEqual('function');
    expect(typeof people.externalIds).toEqual('function');
    expect(typeof people.images).toEqual('function');
    expect(typeof people.latest).toEqual('function');
    expect(typeof people.movieCredits).toEqual('function');
    expect(typeof people.popular).toEqual('function');
    expect(typeof people.taggedImages).toEqual('function');
    expect(typeof people.translations).toEqual('function');
    expect(typeof people.tvCredits).toEqual('function');
  });

  it('must resolve people.changes with required params and options', async () => {
    const promise = people.changes(1, {
      start_date: '2018-12-28',
      end_date: '2018-12-29',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve people.changes with required params with no options', async () => {
    const promise = people.changes(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when people.changes is called without personId', async () => {
    await expect(people.changes()).rejects.toBe(
      'A personId has to be provided'
    );
  });

  it('must resolve people.combinedCredits with required params and options', async () => {
    const promise = people.combinedCredits(1, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve people.combinedCredits with required params with no options', async () => {
    const promise = people.combinedCredits(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when people.combinedCredits is called without personId', async () => {
    await expect(people.combinedCredits()).rejects.toBe(
      'A personId has to be provided'
    );
  });

  it('must resolve people.details with required params and options', async () => {
    const promise = people.details(1, {
      language: 'en-US',
      append_to_response: 'videos',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve people.details with required params with no options', async () => {
    const promise = people.details(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when people.details is called without personId', async () => {
    await expect(people.details()).rejects.toBe(
      'A personId has to be provided'
    );
  });

  it('must resolve people.externalIds with required params and options', async () => {
    const promise = people.externalIds(1, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve people.externalIds with required params with no options', async () => {
    const promise = people.externalIds(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when people.externalIds is called without personId', async () => {
    await expect(people.externalIds()).rejects.toBe(
      'A personId has to be provided'
    );
  });

  it('must resolve people.images with required params with no options', async () => {
    const promise = people.images(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when people.images is called without personId', async () => {
    await expect(people.images()).rejects.toBe('A personId has to be provided');
  });

  it('must resolve people.latest call without options', async () => {
    const promise = people.latest();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve people.latest call with options', async () => {
    const promise = people.latest({ language: 'es' });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve people.movieCredits with required params and options', async () => {
    const promise = people.movieCredits(1, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve people.movieCredits with required params with no options', async () => {
    const promise = people.movieCredits(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when people.movieCredits is called without personId', async () => {
    await expect(people.movieCredits()).rejects.toBe(
      'A personId has to be provided'
    );
  });

  it('must resolve people.popular call with no options', async () => {
    const promise = people.popular();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve people.popular call with options', async () => {
    const promise = people.popular({ language: 'es', page: 1 });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve people.taggedImages with required params and options', async () => {
    const promise = people.taggedImages(1, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve people.taggedImages with required params with no options', async () => {
    const promise = people.taggedImages(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when people.taggedImages is called without personId', async () => {
    await expect(people.taggedImages()).rejects.toBe(
      'A personId has to be provided'
    );
  });

  it('must resolve people.translations with required params and options', async () => {
    const promise = people.translations(1, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve people.translations with required params with no options', async () => {
    const promise = people.translations(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when people.translations is called without personId', async () => {
    await expect(people.translations()).rejects.toBe(
      'A personId has to be provided'
    );
  });

  it('must resolve people.tvCredits with required params and options', async () => {
    const promise = people.tvCredits(1, {
      language: 'en-US',
    });

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve people.tvCredits with required params with no options', async () => {
    const promise = people.tvCredits(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when people.tvCredits is called without personId', async () => {
    await expect(people.tvCredits()).rejects.toBe(
      'A personId has to be provided'
    );
  });
});
