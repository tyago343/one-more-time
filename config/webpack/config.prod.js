const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index',
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../../dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules|\.test\.tsx?$|\.spec\.tsx?$/,
      },
      {
        test: /\.js$/,
        loader: 'webpack-preprocessor-loader',
        options: {
          params: {
            ENV: process.env.NODE_ENV || 'development', // Pasamos la variable de entorno
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        loader: 'webpack-preprocessor-loader',
        options: {
          params: {
            ENV: process.env.NODE_ENV || 'development',
          },
        },
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
    }),
    new BundleAnalyzerPlugin(),
    new CompressionWebpackPlugin({
      algorithm: 'gzip',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        REACT_APP_MSW: JSON.stringify(process.env.REACT_APP_MSW),
      },
    }),
  ],
};
