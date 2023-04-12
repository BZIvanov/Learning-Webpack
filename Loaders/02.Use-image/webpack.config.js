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
        /*
          We don't need rules for .js or .json files, because webpack knows how to handle them, but for images we need to specify how they should be handled.
          But this is not the case if our .js files are including some latest javascript features. In that case we will need Babel loader. For simple javascript supported by all browsers we can rely on the defaults
        */
        test: /\.(png|jpe?g|gif)$/i,
        /*
          asset/resource will create new file/resource, but if we replace with asset/inline, instead of new file the image would be converted to base64 and added to the javascript bundle file
          asset types are included in webpack by default, but if we want to handle scss files for example, we will need to install additional loaders packages
        */
        type: 'asset/resource',
      },
    ],
  },
};
