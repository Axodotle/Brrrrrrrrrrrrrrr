const path = require('path');
// const HTMLWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    src: './client/index.js',
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', //What does this do?
  },
  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
    // new MiniCssExtractPlugin({
    //   filename: 'bundle.css',
    // }),
  ],

  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          /*MiniCssExtractPlugin.loader,*/
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    ],
    port: 3000,
    hot: true,
  },
};
