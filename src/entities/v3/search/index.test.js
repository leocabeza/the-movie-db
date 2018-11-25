import axios from 'axios';
import * as search from './';

jest.mock('axios');

describe('search entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof search.tv).toEqual('function');
  });

  it('must return a valid response from search.tv with options', async () => {
    const mockResponse = {
      page: 1,
      results: [
        {
          posterPath: '/jIhL6mlT7AblhbHJgEoiBIOUVl1.jpg',
          popularity: 29.780826,
          id: 1399,
          backdropPath: '/mUkuc2wyV9dHLG0D0Loaw5pO2s8.jpg',
          voteAverage: 7.91,
          overview:
            "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
          firstAirDate: new Date('2011-04-17'),
          originCountry: ['US'],
          genreIds: [10765, 10759, 18],
          originalLanguage: 'en',
          voteCount: 1172,
          name: 'Game of Thrones',
          originalName: 'Game of Thrones',
        },
      ],
      totalResults: 1,
      totalPages: 1,
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await search.tv({
      query: 'game of thrones',
      language: 'en-US',
      page: 1,
      firstAirDateYear: 2010,
    });

    expect(response).toBe(mockResponse);
  });

  it('must reject when search.tv is called without query option', async () => {
    await expect(search.tv()).rejects.toBe('A query has to be provided');
  });
});
