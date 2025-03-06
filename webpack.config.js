const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
    alias: {
      App: path.resolve(__dirname, 'src/App.js'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@style': path.resolve(__dirname, 'src/style'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
};
