const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function root(...args) {
  return path.join(__dirname, ...args);
}

module.exports = {
  entry: {
    'jmd-editor': './src/index.js'
  },
  output: {
    path: root('dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    library: 'jmdEditor',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.less$/, use: ExtractTextPlugin.extract(['css-loader', 'less-loader']) },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('jmd-editor.css'),
  ],
  devServer: {
    host: 'localhost',
    port: 7777,
    open: true
  }
};
