import path from 'path';
import { setupPolly } from 'setup-polly-jest';

import { v3, v4 } from './main';
const v3ApiKey = process.env.V3_API_KEY;
const v4ApiKey = process.env.V4_READ_ACCESS_TOKEN;
const v4AccessToken = process.env.V4_ACCESS_TOKEN;
const v4AccountId = process.env.V4_ACCOUNT_ID;
const v3Client = v3(v3ApiKey);
const v4Client = v4(v4ApiKey);

describe('snapshots', () => {
  const context = setupPolly({
    // https://github.com/gribnoysup/setup-polly-jest/issues/23
    adapters: [require('@pollyjs/adapter-node-http')],
    persister: require('@pollyjs/persister-fs'),
    mode: 'record',
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(__dirname, '../__recordings__'),
      },
    },
  });

  beforeEach(() => {
    const { server } = context.polly;

    server.any().on('beforePersist', (_, recording) => {
      /* filtering secrets on v3 client */
      recording.request.queryString = recording.request.queryString.filter(
        ({ name }) => name !== 'api_key'
      );
      recording.request.url = recording.request.url.replace(v3ApiKey, 'SECRET');

      /* filtering secrets on v4 client */
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

  describe.skip('v4', () => {
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
