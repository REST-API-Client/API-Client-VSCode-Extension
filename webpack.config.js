const path = require("path");

const extensionConfig = {
  entry: "./src/extension.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "extension.js",
    libraryTarget: "commonjs2",
    devtoolModuleFilenameTemplate: "../[resource-path]",
  },
  devtool: "source-map",
  externals: {
    vscode: "commonjs vscode",
  },
  resolve: {
    mainFields: ["browser", "module", "main"],
    extensions: [".js"],
    alias: {},
    fallback: {
      buffer: require.resolve("buffer"),
      path: require.resolve("path-browserify"),
      url: require.resolve("url"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

module.exports = [extensionConfig];
