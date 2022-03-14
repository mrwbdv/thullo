const path = require("path");
const { merge } = require("webpack-merge");
const { webpackCommonConfig } = require("./webpack.common");
const { outputPathDir, staticPathDir } = require("./utils");

//plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(webpackCommonConfig, {
    mode: "development",
    devtool: "eval",
    devServer: {
        hot: true,
        port: 3000,
        open: true,
    },
    output: {
        path: outputPathDir,
        filename: "[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    // {
                    //     loader: "cache-loader",
                    //     options: {
                    //         cacheDirectory: path.resolve(
                    //             rootDir,
                    //             "node_modules/.cache/cache-loader"
                    //         ),
                    //     },
                    // // },
                    // "thread-loader",
                    {
                        loader: "babel-loader",
                        // options: {
                        //     plugins: ["react-refresh/babel"],
                        // },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(staticPathDir, "index.html"), // шаблон для создания страницы
        }),
    ],
});
