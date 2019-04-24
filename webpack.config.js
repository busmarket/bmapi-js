<<<<<<< HEAD
const path = require('path');
const UglifyEsPlugin = require('uglify-es-webpack-plugin');

module.exports = {
  target: 'node',

  entry: './lib/bmapi.js',
  output: {
    filename: 'bmapi.js',
    library: 'BmApi',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          babelrc: true
        }
      }
    ]
  },
  plugins: [
    new UglifyEsPlugin({
      compress:{
        drop_console: true
      }
    })
  ]
};
=======
const path = require('path');
const UglifyEsPlugin = require('uglify-es-webpack-plugin');

module.exports = {
  target: 'node',

  entry: './lib/bmapi.js',
  output: {
    filename: 'bmapi.js',
    library: 'BmApi',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          babelrc: true
        }
      }
    ]
  },
  plugins: [
    new UglifyEsPlugin({
      compress:{
        drop_console: true
      }
    })
  ]
};
>>>>>>> d28ae96296b35dd379fcaf81c4b12d71d6c2df27
