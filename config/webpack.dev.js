const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
const { rootPathDir } = require("./utils");
const { webpackCommonConfig } = require("./webpack.common");
const { outputPathDir, staticPathDir, sourcePathDir } = require("./utils");

//plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = merge(webpackCommonConfig, {
    mode: "development",
    devtool: "eval",
    devServer: {
        hot: true,
        port: 3000,
        open: true,
        client: {
            logging: "none",
            progress: true,
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
    output: {
        path: outputPathDir,
        filename: "[name].bundle.js",
        publicPath: "/",
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
                exclude: /\.inline.svg$/,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
            {
                test: /\.inline.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ["@svgr/webpack", "file-loader"],
            },
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                mode: "write-references",
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
            },
            eslint: {
                enabled: true,
                files: path.join(sourcePathDir, "**/*.{ts,tsx}"),
            },
        }),
        new HtmlWebpackPlugin({
            template: path.join(staticPathDir, "index.html"), // шаблон для создания страницы
        }),
        new webpack.DllReferencePlugin({
            context: rootPathDir,
            manifest: require(path.join(
                rootPathDir,
                "build/library/library.dll.manifest.json"
            )),
        }),
        new AddAssetHtmlPlugin({
            filepath: require.resolve(
                path.join(rootPathDir, "build/library/library.dll.js")
            ),
        }),
    ],
});
