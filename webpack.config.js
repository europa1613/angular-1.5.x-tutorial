var path = require('path');

module.exports = {
  entry: './app/app.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: '/node_modules',
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }]
  }
};