import { Polly } from '@pollyjs/core';
import FSPersister from '@pollyjs/persister-fs';
import NodeHttpAdapter from '@pollyjs/adapter-node-http';

import main from './main';
const v3ApiKey = process.env.V3_API_KEY;
const v3Client = main.v3(v3ApiKey);

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

describe('v3', () => {
  const polly = new Polly('v3', {
    adapters: ['node-http'],
    persister: 'fs',
  });

  afterEach(() => {
    polly.stop();
  });

  const { server } = polly;
  server.any().on('beforePersist', (_, recording) => {
    recording.request.headers = recording.request.headers.filter(
      ({ name }) => name !== 'authorization'
    );
    recording.request.queryString = recording.request.queryString.filter(
      ({ name }) => name !== 'api_key'
    );
    recording.request.url = recording.request.url.replace(v3ApiKey, 'XXX');
  });

  it('should return a valid response from movie popular', async () => {
    const response = await v3Client.movie.popular();
    expect(typeof response.page).toEqual('number');
    expect(typeof response.total_results).toEqual('number');
    expect(typeof response.total_pages).toEqual('number');
    expect(Array.isArray(response.results)).toBe(true);
  });
});
