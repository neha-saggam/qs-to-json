const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'queryStringToJson',
    libraryTarget: "umd"
  },
  target: 'web',
  resolve: {
    extensions: ['.js'],
    modules: ['src', 'node_modules'],
  },
};
