import axios from 'axios';
import * as review from './';

jest.mock('axios');

describe('review entity', () => {
  it('must have all methods exposed', () => {
    expect(typeof review.details).toEqual('function');
  });

  it('must return a valid response from review.details with reviewId', async () => {
    const mockResponse = {
      id: '5488c29bc3a3686f4a00004a',
      author: 'Travis Bell',
      content:
        'Like most of the reviews here, I agree that Guardians of the Galaxy was an absolute hoot. Guardians never takes itself too seriously which makes this movie a whole lot of fun.\r\n\r\nThe cast was perfectly chosen and even though two of the main five were CG, knowing who voiced and acted alongside them completely filled out these characters.\r\n\r\nGuardians of the Galaxy is one of those rare complete audience pleasers. Good fun for everyone!',
      'iso-639-1': 'en',
      mediaId: 118340,
      mediaTitle: 'Guardians of the Galaxy',
      mediaType: 'Movie',
      url: 'https://www.themoviedb.org/review/5488c29bc3a3686f4a00004a',
    };
    axios.get.mockResolvedValue(mockResponse);
    const response = await review.details('1');

    expect(response).toBe(mockResponse);
  });

  it('must reject when review.details is called without reviewId', async () => {
    await expect(review.details()).rejects.toBe(
      'A reviewId has to be provided'
    );
  });
});
