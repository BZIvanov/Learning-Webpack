const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // if the file extension matches this regex, use the below loaders
        use: ['style-loader', 'css-loader', 'sass-loader'], // loaders are processed from right to left, which means sass-loader will be the first running
      },
    ],
  },
};
