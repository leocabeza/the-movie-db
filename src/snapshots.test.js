import path from 'path';
import { Polly } from '@pollyjs/core';
import FSPersister from '@pollyjs/persister-fs';
import NodeHttpAdapter from '@pollyjs/adapter-node-http';
import { setupPolly } from 'setup-polly-jest';

import main from './main';
const v3ApiKey = process.env.V3_API_KEY;
const v4ApiKey = process.env.V4_READ_ACCESS_TOKEN;
const v4AccessToken = process.env.V4_ACCESS_TOKEN;
const v4AccountId = process.env.V4_ACCOUNT_ID;
const v3Client = main.v3(v3ApiKey);
const v4Client = main.v4(v4ApiKey);

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

describe('snapshots', () => {
  const context = setupPolly({
    adapters: ['node-http'],
    persister: 'fs',
    mode: 'replay',
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(__dirname, '../__recordings__'),
      },
    },
  });

  beforeEach(() => {
    const { server } = context.polly;

    server.any().on('beforePersist', (_, recording) => {
      /* present on v3 client */
      recording.request.queryString = recording.request.queryString.filter(
        ({ name }) => name !== 'api_key'
      );
      recording.request.url = recording.request.url.replace(v3ApiKey, 'SECRET');

      /* present on v4 client */
      recording.request.headers = recording.request.headers.filter(
        ({ name }) => name !== 'authorization'
      );
      recording.request.url = recording.request.url.replace(
        v4AccountId,
        'SECRET'
      );
    });
  });

  describe('v3', () => {
    it('should return a valid response from movie popular', async () => {
      const response = await v3Client.movie.popular({
        language: 'es',
        page: 1,
        region: 'CO',
      });

      expect(response).toMatchSnapshot();
    });
  });

  describe('v4', () => {
    it('should return a valid response from movie popular', async () => {
      const response = await v4Client.account.favoriteMovies(
        v4AccessToken,
        v4AccountId,
        {
          page: 1,
          sort_by: 'created_at.asc',
        }
      );

      expect(response).toMatchSnapshot();
    });
  });
});
