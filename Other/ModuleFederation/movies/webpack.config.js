const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/movies-module.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: 'http://localhost:3002/',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
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
      filename: 'movies.html', // the name of the output file based on the template
      template: 'page-template.html',
      title: 'The Movies Page',
    }),
    new ModuleFederationPlugin({
      name: 'MoviesApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Movies': './src/components/Movies/Movies.js',
      },
      remotes: {
        DescriptionApp: 'DescriptionApp@http://localhost:3003/remoteEntry.js',
      },
    }),
  ],
  devServer: {
    port: 3002,
    hot: true,
    devMiddleware: {
      index: 'movies.html',
      writeToDisk: true,
    },
  },
};
