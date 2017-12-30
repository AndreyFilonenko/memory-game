const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require("autoprefixer");
const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
    context: path.resolve(__dirname, "./src/js"),
    entry: {
        app: ["./app.js"]
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[name].bundle.js",
        sourceMapFilename: "[name].bundle.js.map",
    },
    devServer: {
        contentBase: __dirname + "/build",
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                include: path.resolve(__dirname, "./src/js"),
                use: "eslint-loader"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: "babel-loader",
                    options: { presets: ["env"] }
                }]
            },
            {
                test: /\.sc?ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader", "sass-loader"]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css"),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer()]
            }
        })
    ],
    watch: NODE_ENV === "development",
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV === "development" ? "cheap-inline-module-source-map" : null
};