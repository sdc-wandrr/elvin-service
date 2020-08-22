const { merge } = require('webpack-merge');
const dev = require('./webpack.config.js');

module.exports = merge(dev, {
  mode: 'development',
});
