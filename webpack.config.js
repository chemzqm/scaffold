var autoprefixer = require('autoprefixer')

module.exports = {
  entry: './example/index.js',
  output: {
    path: 'example',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /(node_modules|dist)/, loader: 'babel', query: { presets: ['es2015']}},
      {test: /\.scss/, loader: 'style!css!sass!postcss'},
      {test: /\.css$/, loader: 'style!css!postcss'},
      {test: /\.png$/, loader: 'url-loader?mimetype=image/png'},
      {test: /\.json$/, loader: 'json' },
      {test: /\.html$/, loader: 'html'}
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: []
}
