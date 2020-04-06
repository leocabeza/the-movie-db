![npm bundle size](https://img.shields.io/bundlephobia/min/@leonardocabeza/the-movie-db?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@leonardocabeza/the-movie-db?style=flat-square)
[![GitHub license](https://img.shields.io/github/license/leocabeza/the-movie-db.svg?style=popout)](https://github.com/leocabeza/the-movie-db/blob/master/LICENSE)
![Travis (.org)](https://img.shields.io/travis/leocabeza/the-movie-db.svg?style=popout)

# @leonardocabeza/the-movie-db

Promised based Javascript API wrapper for [https://www.themoviedb.org/](https://www.themoviedb.org/) that works in the browser and node.js.

It works for versions 3 and 4 of TMDB.

## Table of Contents

- [Compatibility](#compatibility)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [CDN](#cdn)
- [Contributing](#contributing)
- [Promises](#promises)

## Compatibility

It works out of the box for modern browsers and node versions greater or equal to 10.13.0

## Installation

This package is distributed via npm:

```
npm install @leonardocabeza/the-movie-db
```

## Usage

First, get an API key here: [https://www.themoviedb.org/faq/api](https://www.themoviedb.org/faq/api)

You can read the [examples folder in this repo](examples) or you can also [try it out in a REPL](https://repl.it/@leonardocabeza/TheMovieDb-usage)

## API

For more methods exposed by v3 and v4 functions, you could refer to the api docs for a full list:
* [v3 api docs](docs/v3-api.md)
* [v4 api docs](docs/v4-api.md)

## CDN

`<script crossorigin src="https://unpkg.com/@leonardocabeza/the-movie-db@latest/dist/the-movie-db.umd.js"></script>`

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## Promises

`@leonardocabeza/the-movie-db` depends on a native ES6 Promise implementation to be [supported](http://caniuse.com/promises).
If your environment doesn't support ES6 Promises, you can [polyfill](https://github.com/jakearchibald/es6-promise).

## About

This product uses the TMDb API but is not endorsed or certified by TMDb.

![TMDb](https://www.themoviedb.org/assets/1/v4/logos/powered-by-rectangle-blue-61ce76f69ce1e4f68a6031d975df16cc184d5f04fa7f9f58ae6412646f2481c1.svg)
