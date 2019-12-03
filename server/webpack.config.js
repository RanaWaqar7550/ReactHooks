const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: {
    server: './index.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },
  devtool: 'inline-source-map',
  target: 'node',
  resolve: {
    alias: {
      Routes$: path.resolve(__dirname, 'src/Routes/index.js'),
      Controllers$: path.resolve(__dirname, 'src/Controllers/index.js'),
      Models$: path.resolve(__dirname, 'src/Models/index.js'),
      Middlewares$: path.resolve(__dirname, 'src/Middlewares/index.js'),
      Utils$: path.resolve(__dirname, 'src/Utils/index.js'),
    },
  },
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false, // if you don't put this is, __dirname
    __filename: false, // and __filename return blank or /
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: true,
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};
