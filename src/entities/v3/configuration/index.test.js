import * as configuration from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('configuration entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof configuration.api).toEqual('function');
    expect(typeof configuration.countries).toEqual('function');
    expect(typeof configuration.jobs).toEqual('function');
    expect(typeof configuration.languages).toEqual('function');
    expect(typeof configuration.primaryTranslations).toEqual('function');
    expect(typeof configuration.timezones).toEqual('function');
  });

  it('must resolve configuration.api call', async () => {
    const promise = configuration.api();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve configuration.countries call', async () => {
    const promise = configuration.countries();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve configuration.jobs call', async () => {
    const promise = configuration.jobs();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve configuration.languages call', async () => {
    const promise = configuration.languages();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve configuration.primaryTranslations call', async () => {
    const promise = configuration.primaryTranslations();

    await expect(promise).resolves.toEqual({});
  });

  it('must resolve configuration.timezones call', async () => {
    const promise = configuration.timezones();

    await expect(promise).resolves.toEqual({});
  });
});
