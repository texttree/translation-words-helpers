const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'filter-translation-words',
    libraryTarget: 'commonjs2',
    library: {
      type: 'commonjs-static',
    },
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
}
