/**
 * Created by invader on 27.03.16.
 */

'use strict';

var NODE_ENV = process.env.NODE_ENV || 'development';
var webpack = require('webpack');

module.exports = {
    entry: {
        js: "./src/index.js"
    },
    output : {
        path: __dirname + "/lib",
        filename : "index.js",
        library: "index"
    },
    devtool: NODE_ENV == 'development' ? "cheap-eval-source-map":null,

    watch: NODE_ENV == 'development',

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG: JSON.stringify('ru')
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js$/|/\.jsx/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query:
                {
                    presets:['react', 'es2015']
                }
            }
        ]
    }

};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}