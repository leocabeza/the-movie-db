const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

const webConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'the-movie-db.js',
    library: 'theMovieDb',
    libraryTarget: 'umd',
    libraryExport: 'default',
    // https://github.com/webpack/webpack/issues/6522
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)|(dist)/,
        use: {
          loader: 'babel-loader?cacheDirectory',
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
