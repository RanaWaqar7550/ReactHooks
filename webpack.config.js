const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = ({
    entry: {
        mainApp: './src/app.js',
        vendors: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash].js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, './src'),
        port: '8000'
    },
    resolve: {
        alias: {
          Src: './'
        },
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', 'src']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template: path.resolve(__dirname, 'public/index.html')
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    }
});