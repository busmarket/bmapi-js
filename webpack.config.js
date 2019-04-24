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
