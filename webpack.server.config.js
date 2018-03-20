const path = require('path');

const env = process.env.NODE_ENV;

console.log([
    '\x1b[34m',
    '================================',
    `Building server for: ${env}`,
    '================================',
    ''
].join('\n'));

module.exports = {
    context: path.resolve(__dirname, 'src/server/'),
    entry: './index.js',
    devtool: env === 'development' ? 'source-map' : undefined,
    output: {
        path: path.resolve(__dirname, 'build/server'),
        filename: 'index.js'
    },
    target: 'node',
    mode: env || 'development',
    externals: {
        express: 'commonjs express'
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
            }
        ]
    }
};
