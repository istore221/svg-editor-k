const webpack = require('webpack'),
      merge = require('webpack-merge'),
      common = require('./webpack.common.js');

module.exports = merge(common, {

  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.HashedModuleIdsPlugin()
  ]

});
