const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // the output file will be named bundle.js, because for the 'entry' prop we provided 'bundle' as a key
  },
};
