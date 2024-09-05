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
    publicPath: '/',
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
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
      {
        test: /\.svg$/,
        type: 'asset/inline',
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
      '@shared': path.resolve(__dirname, '../../src/shared/'),
      '@/': path.resolve(__dirname, '../../src/modules'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'BackOffice',
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new NodePolyfillPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        REACT_APP_MSW: JSON.stringify('true'),
      },
    }),
  ],
};
