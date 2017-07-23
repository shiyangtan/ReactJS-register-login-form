let webpack = require('webpack')
let path = require('path')

const source_dir = path.resolve(__dirname, 'react')
const build_dir = path.resolve(__dirname, 'build')

const config = {
  entry: source_dir + '/App.js',

  output: {
    path: build_dir,
    filename: 'build.js'
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        include: source_dir,
        loader: 'babel-loader',
      }
    ]
  }

}

module.exports = config
