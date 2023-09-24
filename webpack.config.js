const path = require("path");
const webpack = require("webpack");

const babelCommonRules = {
  loader: "babel-loader",
  options: {
    presets: ["@babel/preset-env", "@babel/preset-react"],
  },
};

const tsLoader = {
  loader: "ts-loader",
  options: {
    transpileOnly: true,
  },
};

const extensionConfig = {
  target: "node",
  entry: "./src/extension.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "extension.js",
    libraryTarget: "commonjs2",
  },
  devtool: "source-map",
  externals: {
    vscode: "commonjs vscode",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
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
        test: /\.tsx?$/,
        use: [tsLoader],
        exclude: path.resolve(__dirname, "node_modules"),
      },
    ],
  },
};

const mainWebViewConfig = {
  entry: "./webview/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    }),
  ],
  resolve: {
    mainFields: ["browser", "module", "main"],
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [tsLoader],
        exclude: path.resolve(__dirname, "node_modules"),
      },
      {
        test: /\.(png|svg)$/,
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
        test: /\.(js)$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: babelCommonRules,
      },
    ],
  },
};

const sidebarWebViewConfig = {
  entry: "./webview/sidebar.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "sidebar.js",
  },
  resolve: {
    mainFields: ["browser", "module", "main"],
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [tsLoader],
        exclude: path.resolve(__dirname, "node_modules"),
      },
      {
        test: /\.(js)$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: babelCommonRules,
      },
    ],
  },
};

module.exports = [extensionConfig, mainWebViewConfig, sidebarWebViewConfig];
