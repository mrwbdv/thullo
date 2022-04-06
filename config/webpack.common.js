const path = require("path");
const webpack = require("webpack");
const { sourcePathDir, rootPathDir } = require("./utils");
// const Dotenv = require("dotenv-webpack");
const dotenv = require("dotenv");

const folderAliasesCommon = {
    "@features": path.join(sourcePathDir, "features"),
    "@entities": path.join(sourcePathDir, "entities"),
    "@shared": path.join(sourcePathDir, "shared"),
};

const { parsed: parsedVars } = dotenv.config({
    path: path.join(process.cwd(), ".env"),
});

const envVars = {
    env: {},
};

Object.keys(parsedVars).forEach((key) => {
    envVars.env[key] = JSON.stringify(parsedVars[key]);
});

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
        new webpack.DefinePlugin({
            process: envVars,
        }),
        // new Dotenv({}),
    ],
};
