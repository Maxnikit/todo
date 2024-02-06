const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const HtmlDisablePlugin = require("html-webpack-disable-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  mode: "development",
  // watch: true,
  devtool: "inline-source-map",

  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    open: { app: { name: "chrome" } },
  },
  plugins: [
    new NodePolyfillPlugin(),
    // new HtmlWebpackPlugin({
    //   title: "To Do",
    //   cache: false,
    // }),
    // new HtmlDisablePlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
};
