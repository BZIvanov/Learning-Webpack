const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'first-page': path.resolve(__dirname, 'src/first-page.js'),
    'second-page': path.resolve(__dirname, 'src/second-page.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', // name will be the key from entry prop, for example for the first entry it will be first-page
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'primary-page.html', // this is how the output file will be named
      chunks: ['first-page'], // this key matches the key from the 'entry' prop. This way we tell Webpack which chunk to be added to this page and which to other pages we have
      template: './page-template.html',
      title: 'My Primary Page',
    }),
    new HtmlWebpackPlugin({
      filename: 'secondary-page.html',
      chunks: ['second-page'],
      template: './page-template.html',
      title: 'My Secondary Page',
    }),
  ],
  /*
    With the optimization of the chunks lodash import will be extracted in separate chunk, otherwise it will be included in both javascript chunks for the 2 pages
    This will also increase the performance, because the browser will be able to cache the separate chunk with lodash library instead of downloading it everytime
    You can comment out the optimization to compare the results in the output folder and observe how we can have lodash as a separate chunk if optimization is provided
  */
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 3 * 1024, // if the chunk is going to be bigger than 3kbs, the import will be extracted in separate chunk, otherwise it will be included in the main js bundle file. By default this value is 30kbs
    },
  },
  devServer: {
    port: 3000,
    hot: true,
  },
};
