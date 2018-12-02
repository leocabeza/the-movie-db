import * as network from './';

jest.mock('../../../utils', () => ({
  makeHttpRequest: jest.fn(() => Promise.resolve({})),
}));

describe('network entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof network.details).toEqual('function');
    expect(typeof network.alternativeNames).toEqual('function');
  });

  it('must resolve network.alternativeNames call', async () => {
    const promise = network.alternativeNames(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when network.alternativeNames is called without networkId', async () => {
    await expect(network.alternativeNames()).rejects.toBe(
      'A networkId has to be provided'
    );
  });

  it('must resolve network.details call', async () => {
    const promise = network.details(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when network.details is called without networkId', async () => {
    await expect(network.details()).rejects.toBe(
      'A networkId has to be provided'
    );
  });

  it('must resolve network.images call', async () => {
    const promise = network.images(1);

    await expect(promise).resolves.toEqual({});
  });

  it('must reject when network.images is called without networkId', async () => {
    await expect(network.images()).rejects.toBe(
      'A networkId has to be provided'
    );
  });
});
