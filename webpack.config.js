const base = require('./webpack.config.base');
const dev = require('./webpack.config.dev');
const prod = require('./webpack.config.prod');
const merge = require('webpack-merge');

module.exports = (mode) => {
  if (mode === 'production') {
    return merge(base, prod, { mode });
  }
  return merge(base, dev, { mode });
};
