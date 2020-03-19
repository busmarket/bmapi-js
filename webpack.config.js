const path = require('path');
const UglifyEsPlugin = require('uglify-es-webpack-plugin');

module.exports = env => { 
  const isNode = env && env.target && env.target === 'node';

  return {
  ...(isNode ? {target: 'node'} : null),  

  node: { global: true, fs: 'empty' },

  entry: './lib/bmapi.js',
  output: {
    libraryTarget: 'umd',
    filename: isNode ? `bmapi.js` : `cdn.bmapi.js`,
    library: 'BmApi',
    path: path.resolve(__dirname, 'dist'),
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
}};
