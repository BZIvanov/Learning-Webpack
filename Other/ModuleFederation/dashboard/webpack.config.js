const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/dashboard-module.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
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
      filename: 'dashboard.html',
      template: 'page-template.html',
      title: 'The Dashoboard',
    }),
    new ModuleFederationPlugin({
      name: 'DashboardApp',
      filename: 'remoteEntry.js',
      remotes: {
        UsersApp: 'UsersApp@http://localhost:3001/remoteEntry.js',
        MoviesApp: 'MoviesApp@http://localhost:3002/remoteEntry.js',
      },
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    hot: true,
    historyApiFallback: {
      index: 'dashboard.html',
    },
  },
};
