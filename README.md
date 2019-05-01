
[![GitHub license](https://img.shields.io/github/license/leocabeza/the-movie-db.svg?style=popout)](https://github.com/leocabeza/the-movie-db/blob/master/LICENSE)
![Travis (.org)](https://img.shields.io/travis/leocabeza/the-movie-db.svg?style=popout)

# @leonardocabeza/the-movie-db

Promised based Javascript API wrapper for [https://www.themoviedb.org/](https://www.themoviedb.org/) that works in the browser and node.js.

It works for versions 3 and 4 of TMDB.

## Compatibility

It works out of the box for modern browsers and node versions greater or equal to v8.6.0 (`lint-staged`'s minimum node version support).

## Installation

This package is distributed via npm:

```
npm install @leonardocabeza/the-movie-db
```

## Usage

First, get an API key here: [https://www.themoviedb.org/faq/api](https://www.themoviedb.org/faq/api)

```javascript
// Version 3
const TheMovieDb = require("@leonardocabeza/the-movie-db");

const client = new TheMovieDb("HERE_GOES_YOUR_API_KEY");

client.movie.popular()
  .then((data) => {
    // handle data
  })
  .catch((error) => {
    // handle error
  });
```

```javascript
// Version 4
const TheMovieDb = require("@leonardocabeza/the-movie-db");

const client = new TheMovieDb("HERE_GOES_YOUR_API_KEY", false);

client.list.details(210)
  .then((data) => {
    // handle data
  })
  .catch((error) => {
    // handle error
  });
```

## API

For more methods exposed by TheMovieDbClient, you could refer to the api docs for a full list:
* [v3 api docs](docs/v3-api.md)
* [v4 api docs](docs/v4-api.md)

## CDN

`<script crossorigin src="https://unpkg.com/@leonardocabeza/the-movie-db@latest/dist/the-movie-db.js"></script>`

## Contributing Guide

See [CONTRIBUTING.md](CONTRIBUTING.md)

## Promises

`@leonardocabeza/the-movie-db` depends on a native ES6 Promise implementation to be [supported](http://caniuse.com/promises).
If your environment doesn't support ES6 Promises, you can [polyfill](https://github.com/jakearchibald/es6-promise).

## About

This product uses the TMDb API but is not endorsed or certified by TMDb.

![TMDb](https://www.themoviedb.org/assets/1/v4/logos/powered-by-rectangle-blue-61ce76f69ce1e4f68a6031d975df16cc184d5f04fa7f9f58ae6412646f2481c1.svg)
