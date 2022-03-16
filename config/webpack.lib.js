const path = require("path");
const webpack = require("webpack");
const { dependencies } = require("../package.json");
const { rootPathDir } = require("./utils");

module.exports = {
    mode: "development",
    devtool: "eval",
    context: rootPathDir,
    resolve: {
        extensions: [".js", ".jsx", ".json", ".less", ".css"],
    },
    entry: {
        library: Object.keys(dependencies),
    },
    output: {
        filename: "[name].dll.js",
        path: path.join(rootPathDir, "build/library"),
        library: "[name]",
    },
    plugins: [
        new webpack.DllPlugin({
            context: rootPathDir,
            name: "[name]",
            path: path.join(
                rootPathDir,
                "build/library/[name].dll.manifest.json"
            ),
            entryOnly: true,
        }),
    ],
};
