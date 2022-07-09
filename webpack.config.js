const path = require("path");
const nodeExternals = require("webpack-node-externals");

const extensionConfig = {
  target: "node",
  entry: "./src/extension.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "extension.js",
    libraryTarget: "commonjs2",
  },
  devtool: "source-map",
  externals: [
    {
      vscode: "commonjs vscode",
    },
    nodeExternals(),
  ],
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
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};

const webviewConfig = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    mainFields: ["browser", "module", "main"],
    extensions: [".js", "jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};

module.exports = [extensionConfig, webviewConfig];
