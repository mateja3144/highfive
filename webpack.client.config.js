const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const env = process.env.NODE_ENV || 'development';

console.log([
    '\x1b[34m',
    '================================',
    `Building client for: ${env}`,
    '================================',
    '\x1b[0m'
].join('\n'));

module.exports = {
    context: path.resolve(__dirname, 'src/client/'),
    entry: './index.js',
    devtool: env === 'development' ? 'source-map' : undefined,
    output: {
        path: path.resolve(__dirname, 'build/client'),
        filename: 'index.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'assets/'),
        hot: true,
        hotOnly: true,
        inline: true,
        clientLogLevel: 'warning'
    },
    mode: env,
    resolve: {
        modules: [ path.resolve(__dirname, './src/client'), 'node_modules' ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'build')
                ],
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'eslint-loader' }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { modules: true } },
                    { loader: 'postcss-loader' }
                ]
            },
            {
                test: /\.woff2$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '/fonts/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(svg|png)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '/image/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '../../assets/index.html',
            inject: 'head'
        }),
        new ScriptExtHtmlWebpackPlugin({
            defer: 'index.js'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
