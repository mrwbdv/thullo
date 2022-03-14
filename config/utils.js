const path = require("path");

const rootPathDir = path.resolve(process.cwd());

module.exports.rootPathDir = rootPathDir;

const outputPathDir = path.resolve(rootPathDir, "dist");

module.exports.outputPathDir = outputPathDir;

const staticPathDir = path.resolve(rootPathDir, "public");

module.exports.staticPathDir = staticPathDir;
