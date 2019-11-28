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
        historyApiFallback: true,
        port: '8000'
    },
    resolve: {
        alias: {
          Components: path.resolve(__dirname, 'src/Components'),
          Containers: path.resolve(__dirname, 'src/Containers'),
          Images: path.resolve(__dirname, 'public/images'),
        },
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', 'src']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template: path.resolve(__dirname, 'public/index.html'),
            favicon: 'public/favicon.png'
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
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: '[contenthash].[ext]'
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    }
});