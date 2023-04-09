const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    assetModuleFilename: 'images/[name][ext]', // this way the image will go to images folder and then we specify how the file name should be constructed
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i, // we don't need rules for .js or .json files, because webpack knows how to handle them, but for images we need to specify how they should be handled
        type: 'asset/resource',
      },
    ],
  },
};
