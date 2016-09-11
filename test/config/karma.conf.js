var webpackConf = require('../../webpack.config.test');

// Karma shared configuration
module.exports = function(config) {
  config.set({
    basePath: '../../',
    autoWatch: true,
    frameworks: [
      'mocha',
      'chai',
      'sinon',
      'chai-sinon',
      'source-map-support'
    ],
    plugins: [
      'karma-*'
    ],
    reporters: ['spec'],
    preprocessors: {
      'test/specs/unit/**/*.spec.ts': ['webpack']
    },
    webpack: webpackConf,
    files: [
      'node_modules/lodash/lodash.min.js',
      'node_modules/jquery/dist/jquery.min.js',
      // 'test/config/mocha-globals.ts',
      'test/specs/unit/**/*.spec.ts'
    ],
    exclude: [],
    logLevel: config.LOG_ERROR,
    port: 9876,
    colors: true,
    browsers: [
      'PhantomJS'
    ],
    singleRun: true
  });
};
