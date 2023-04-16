const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/description-module.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: 'http://localhost:3003/',
  },
  module: {
    rules: [
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
      filename: 'description.html',
      template: 'page-template.html',
      title: 'The Description Partial',
    }),
    new ModuleFederationPlugin({
      name: 'DescriptionApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Description': './src/components/Description/Description.js',
      },
    }),
  ],
  devServer: {
    port: 3003,
    hot: true,
    devMiddleware: {
      index: 'description.html',
      writeToDisk: true,
    },
  },
};
