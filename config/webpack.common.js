const path = require("path");
const { sourcePathDir, rootPathDir } = require("./utils");
const Dotenv = require("dotenv-webpack");

const folderAliasesCommon = {
    "@features": path.join(sourcePathDir, "features"),
    "@shared": path.join(sourcePathDir, "shared"),
};

module.exports.webpackCommonConfig = {
    // context: rootPathDir,
    entry: {
        app: ["./src/main.tsx"],
    },
    target: "web",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
        alias: folderAliasesCommon,
    },
    plugins: [
        new Dotenv({
            path: path.join(rootPathDir, ".env"),
        }),
    ],
};
