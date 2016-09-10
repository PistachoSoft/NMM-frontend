module.exports = {
  entry: {
    'index': './app/main.tsx'
  },
  output: {
    path: './dist/',
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '']
  },
  devtool: 'inline-source-map',
  ts: {
    compilerOptions: {
      declaration: false
    }
  }
};
