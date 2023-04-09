const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    /*
      this way the image will go to images folder and then we specify how the file name should be constructed
      we could also replace assetModuleFilename with publicPath which is more appropriate for working with CDN
    */
    assetModuleFilename: 'images/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i, // we don't need rules for .js or .json files, because webpack knows how to handle them, but for images we need to specify how they should be handled
        type: 'asset/resource', // asset/resource will create new file/resource, but if we replace with asset/inline, instead of new file the image would be converted to base64 and added to the javascript bundle file
      },
    ],
  },
};
