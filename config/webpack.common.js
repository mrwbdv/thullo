const path = require("path");
const { rootPathDir } = require("./utils");

module.exports.webpackCommonConfig = {
    // context: rootPathDir,
    entry: {
        app: ["./src/main.tsx"],
    },
    target: "web",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
    },
};
