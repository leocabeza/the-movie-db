import { success, error } from './parser';

describe('parser interceptors', () => {
  it('must have a success and an error function defined', () => {
    expect(typeof success).toBe('function');
    expect(typeof error).toBe('function');
  });

  it('must return a successful parsed data', async () => {
    const mockedData = { season: 7, name: 'Community' };
    const data = await success({ data: mockedData });

    expect(data).toEqual(mockedData);
  });

  it('must reject with response data message', async () => {
    await expect(
      error({ response: { data: { status_message: 'error' } } })
    ).rejects.toEqual('error');
  });

  it('must reject with response string', async () => {
    await expect(error('error')).rejects.toEqual('error');
  });
});
