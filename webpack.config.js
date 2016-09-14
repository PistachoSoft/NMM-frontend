var webpackConfig = require('./webpack.config.common');

webpackConfig.entry = {
  'index': './app/main.tsx'
};

module.exports = webpackConfig;
