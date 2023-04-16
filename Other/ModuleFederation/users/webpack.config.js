const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/users-module.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: 'http://localhost:3001/',
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
      filename: 'users.html', // the name of the output file based on the template
      template: 'page-template.html',
      title: 'The Users Page',
    }),
    new ModuleFederationPlugin({
      name: 'UsersApp',
      filename: 'remoteEntry.js',
      exposes: {
        './List': './src/components/List/List.js',
        './Users': './src/components/Users/Users.js',
      },
    }),
  ],
  devServer: {
    port: 3001,
    hot: true,
    devMiddleware: {
      index: 'users.html',
      writeToDisk: true, // so we can preview the files in the dist folder, otherwise everything will be in memory
    },
  },
};
