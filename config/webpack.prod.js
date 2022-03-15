const path = require("path");
const { merge } = require("webpack-merge");
const { webpackCommonConfig } = require("./webpack.common");
const { outputPathDir, staticPathDir } = require("./utils");

//plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(webpackCommonConfig, {
    mode: "production",
    devtool: "hidden-source-map",
    target: "web",
    output: {
        path: outputPathDir,
        publicPath: "/",
        filename: "[name].[contenthash].js",
        chunkFilename: "[name].[contenthash].js",
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(staticPathDir, "index.html"), // шаблон для создания страницы
            inject: "body",
            scriptLoading: "blocking",
        }),
    ],
});
