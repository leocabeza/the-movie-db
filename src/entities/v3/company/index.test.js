import * as company from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('company entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof company.alternativeNames).toEqual('function');
    expect(typeof company.details).toEqual('function');
    expect(typeof company.images).toEqual('function');
  });

  it('must resolve company.alternativeNames with companyId', async () => {
    const promise = company.alternativeNames(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when company.alternativeNames is called without companyId', async () => {
    await expect(company.alternativeNames()).rejects.toBe(
      'A companyId has to be provided'
    );
  });

  it('must resolve company.details with companyId', async () => {
    const promise = company.details(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when company.details is called without companyId', async () => {
    await expect(company.details()).rejects.toBe(
      'A companyId has to be provided'
    );
  });

  it('must resolve company.images with companyId', async () => {
    const promise = company.images(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when company.images is called without companyId', async () => {
    await expect(company.images()).rejects.toBe(
      'A companyId has to be provided'
    );
  });
});
