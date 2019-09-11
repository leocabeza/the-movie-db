const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

const commonConfig = {
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)|(dist)|(examples)/,
        use: {
          loader: 'babel-loader?cacheDirectory',
        },
      },
    ],
  },
  plugins: [
    new NodemonPlugin(),
  ],
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryExport: 'default',
  },
};

const nodeConfig = {
  ...commonConfig,
  target: 'node',
  output: {
    ...commonConfig.output,
    filename: 'the-movie-db.js',
    libraryTarget: 'commonjs'
  },
};

const webConfig = {
  ...commonConfig,
  target: 'web',
  devtool: 'source-map',
  output: {
    ...commonConfig.output,
    library: 'theMovieDb',
    filename: 'the-movie-db.umd.js'
  },
};

module.exports = [nodeConfig, webConfig];
