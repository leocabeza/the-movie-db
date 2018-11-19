
[![GitHub license](https://img.shields.io/github/license/leocabeza/the-movie-db.svg?style=popout)](https://github.com/leocabeza/the-movie-db/blob/master/LICENSE)
![Travis (.org)](https://img.shields.io/travis/leocabeza/the-movie-db.svg?style=popout)
![Codecov](https://img.shields.io/codecov/c/github/leocabeza/the-movie-db.svg?style=popout)

# @leonardocabeza/the-movie-db

Promised based Javascript API wrapper for [https://www.themoviedb.org/](https://www.themoviedb.org/) that works in the browser and node.js.

For now, it only works with the version 3 of the api.

## Installation

This package is distributed via npm:

```
npm install @leonardocabeza/the-movie-db
```

## Usage

First, get an API key here: [https://www.themoviedb.org/faq/api](https://www.themoviedb.org/faq/api)

```javascript
const TheMovieDb = require('@leonardocabeza/the-movie-db');

const client = new TheMovieDb('HERE_GOES_YOUR_API_KEY');

client.movies.popular()
  .then((data) => {
    // handle data
  })
  .catch((error) => {
    // handle error
  });
```

or if you prefer async/await

```javascript
const TheMovieDb = require('@leonardocabeza/the-movie-db');

const client = new TheMovieDb('HERE_GOES_YOUR_API_KEY');

cont fetchData = async() => {
  try {
    const data = await client.movies.popular();
    // handle data
  } catch(error) {
    // handle error
  }
}
```

## To use it in a web browser

`<script crossorigin src="https://unpkg.com/@leonardocabeza/the-movie-db@latest/dist/the-movie-db.js"></script>`

## Disclaimer

This is a work in progress, DO NOT USE in production just yet.

## Promises

`@leonardocabeza/the-movie-db` depends on a native ES6 Promise implementation to be [supported](http://caniuse.com/promises).
If your environment doesn't support ES6 Promises, you can [polyfill](https://github.com/jakearchibald/es6-promise).

## About

This product uses the TMDb API but is not endorsed or certified by TMDb.

![TMDb](https://www.themoviedb.org/assets/1/v4/logos/powered-by-rectangle-blue-61ce76f69ce1e4f68a6031d975df16cc184d5f04fa7f9f58ae6412646f2481c1.svg)