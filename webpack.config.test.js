var webpack = require('./webpack.config.common');

webpack.devtool = 'inline-source-map';

webpack.module.postLoaders = [
  {
    test: /\.tsx?$/,
    loader: 'istanbul-instrumenter-loader',
    exclude: /test|node_modules|\.spec\.ts$/
  }
];

webpack.ts = {
  compilerOptions: {
    sourceMap: false,
    inlineSourceMap: true,
    outDir: '.'
  }
};

module.exports = webpack;
