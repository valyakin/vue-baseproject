webpackMainConfig = require('../build/webpack.base.conf')

module.exports = {
  resolve: webpackMainConfig.resolve,
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.sass$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  }
}