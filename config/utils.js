const path = require("path");

const rootPathDir = path.resolve(process.cwd());

module.exports.rootPathDir = rootPathDir;

const sourcePathDir = path.resolve(rootPathDir, "src");

module.exports.sourcePathDir = sourcePathDir;

const outputPathDir = path.resolve(rootPathDir, "dist");

module.exports.outputPathDir = outputPathDir;

const staticPathDir = path.resolve(rootPathDir, "public");

module.exports.staticPathDir = staticPathDir;
