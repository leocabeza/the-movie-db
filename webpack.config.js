const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

const webConfig = {
  entry: ['core-js/fn/promise', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'the-movie-db.js',
    library: 'theMovieDb',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new NodemonPlugin(),
  ],
};

const nodeConfig = Object.assign(
  {},
  webConfig, {
    target: 'node',
  },
);

module.exports = [nodeConfig, webConfig];
