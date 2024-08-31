const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[fullhash].js',
  },
  devServer: {
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@components': path.resolve(__dirname, '../../src/components/'),
      '@pages': path.resolve(__dirname, '../../src/pages/'),
      '@i18n': path.resolve(__dirname, '../../src/i18n/'),
      '@interfaces': path.resolve(__dirname, '../../src/interfaces/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'BackOffice',
      template: './public/index.html',
    }),
    new NodePolyfillPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        REACT_APP_MSW: JSON.stringify('true'),
      },
    }),
  ],
};
