const path = require('path');

module.exports = {
  mode: 'development',
  // the starting point of our app
  entry: path.resolve(__dirname, 'src/index.js'),
  // the built version of our app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
};
