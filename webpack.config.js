'use strict';
var webpack = require('webpack');
var path = require('path');

// Builds bundle usable inside <script>.
module.exports = {
  context: __dirname,
  mode: 'production',
  entry: {
    'app': './app.js'
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js",
    libraryTarget: "umd",
    library: "app",
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        }
      },
      {
        test: /\.(txt|html|css)$/,
        type: 'asset/source'
      }
    ]
  },
  resolve: {
    fallback: {
      util: require.resolve('util/')
    }
  },
  devServer: {
    static: {
      directory: __dirname,
    },
    devMiddleware: {
      publicPath: '/dist'
    },
    compress: true,
    port: 4004,
    open: '/index-dev.html'
  },
  optimization: {
    minimize: true
  },
};
