import axios from 'axios';
import * as find from './';

jest.mock('axios');

describe('find entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof find.byId).toEqual('function');
  });

  it('must return a valid response from find.byId with options', async () => {
    const mockResponse = {
      movieResults: [
        {
          adult: false,
          backdropPath: null,
          genreIds: [35],
          id: 12,
          originalLanguage: 'en',
          originalTitle: 'Finding Nemo',
          overview:
            "A tale which follows the comedic and eventful journeys of two fish, the fretful Marlin and his young son Nemo, who are separated from each other in the Great Barrier Reef when Nemo is unexpectedly taken from his home and thrust into a fish tank in a dentist's office overlooking Sydney Harbor. Buoyed by the companionship of a friendly but forgetful fish named Dory, the overly cautious Marlin embarks on a dangerous trek and finds himself the unlikely hero of an epic journey to rescue his son.",
          releaseDate: new Date('2003-05-30'),
          posterPath: null,
          popularity: 1.256412,
          title: 'Finding Nemo',
          video: false,
          voteAverage: 7.2,
          voteCount: 2317,
        },
      ],
      personResults: [],
      tvResults: [],
      tvEpisodeResults: [],
      tvSeasonResults: [],
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await find.byId({
      externalId: '1',
      externalSource: 'imdb_id',
      language: 'en',
    });

    expect(response).toBe(mockResponse);
  });

  it('must reject when find.byId is called without externalId', async () => {
    await expect(find.byId()).rejects.toBe('An externalId has to be provided');
  });

  it('must reject when find.byId is called without externalSource', async () => {
    await expect(find.byId({ externalId: '1' })).rejects.toBe(
      'An externalSource has to be provided'
    );
  });
});
