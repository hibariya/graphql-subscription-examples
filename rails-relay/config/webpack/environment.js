const { environment } = require('@rails/webpacker')

// https://github.com/rails/webpacker/issues/371
environment.loaders.set('typescript', {
  test: /.(ts|tsx)$/,
  loaders: ['babel-loader','ts-loader'],
  exclude:  /node_modules/,
});

module.exports = environment
