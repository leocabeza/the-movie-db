
[![GitHub license](https://img.shields.io/github/license/leocabeza/the-movie-db.svg?style=popout)](https://github.com/leocabeza/the-movie-db/blob/master/LICENSE)
![Travis (.org)](https://img.shields.io/travis/leocabeza/the-movie-db.svg?style=popout)
![Codecov](https://img.shields.io/codecov/c/github/leocabeza/the-movie-db.svg?style=popout)

# @leonardocabeza/the-movie-db

Promised based Javascript API wrapper for [https://www.themoviedb.org/](https://www.themoviedb.org/) that works in the browser and node.js.

For now, it only works with the version 3 of the api.

## Compatibility

It works out of the box for modern browsers and node versions greater than 10.

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

client.movie.popular()
  .then((data) => {
    // handle data
    // data keys are camelCased
  })
  .catch((error) => {
    // handle error
  });
```

## API

For more methods exposed by TheMovieDbClient, you could refer to the api docs for a full list: [api docs](docs/v3-api.md)

## CDN

`<script crossorigin src="https://unpkg.com/@leonardocabeza/the-movie-db@latest/dist/the-movie-db.js"></script>`

## Contributing Guide

See [CONTRIBUTING.md](CONTRIBUTING.md)

## Disclaimer

This is a work in progress, DO NOT USE in production just yet.

# Entities missing so far:

## V3
* Certifications
* Changes
* Collections
* Companies
* Credits
* Discover
* Genres
* Guest sessions
* Keywords
* Lists
* People
* TV
* TV episodes
* TV episode groups
* TV seasons

## V4
* Account
* Auth
* List

## Promises

`@leonardocabeza/the-movie-db` depends on a native ES6 Promise implementation to be [supported](http://caniuse.com/promises).
If your environment doesn't support ES6 Promises, you can [polyfill](https://github.com/jakearchibald/es6-promise).

## About

This product uses the TMDb API but is not endorsed or certified by TMDb.

![TMDb](https://www.themoviedb.org/assets/1/v4/logos/powered-by-rectangle-blue-61ce76f69ce1e4f68a6031d975df16cc184d5f04fa7f9f58ae6412646f2481c1.svg)
