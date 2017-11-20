const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src/js'),
    entry: {
        app: ['./app.js']
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['env'] }
                    }
                ]
            }
        ]
    }
};