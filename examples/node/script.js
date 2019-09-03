const { v3, v4 } = require('@leonardocabeza/the-movie-db');

// You can read the FAQ on how to get a token at:
// https://www.themoviedb.org/faq/api?language=en-US 

// For v3 endpoints (https://developers.themoviedb.org/3):
const v3ApiKey = 'YOUR_V3_API_KEY';
// For v4 endpoints (https://developers.themoviedb.org/4):
const v4ApiKey = 'YOUR_V4_API_KEY';
const userToken = 'AN_USER_ACCESS_TOKEN';
const accountId = 'AN_ACCOUNT_ID';

const v3Client = v3(v3ApiKey);
const v4Client = v4(v4ApiKey);

v3Client.movie.popular()
  .then((data) => {
    console.log('popular movies: ', data);
  })
  .catch((error) => {
    console.log('error: ', error);
  });

v4Client.account.favoriteMovies(userToken, accountId)
  .then((data) => {
    console.log('favorite movies: ', data);
  })
  .catch((error) => {
    console.log('error: ', error);
  });
