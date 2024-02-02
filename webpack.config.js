const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const HtmlDisablePlugin = require("html-webpack-disable-plugin");
module.exports = {
  mode: "development",
  watch: true,
  devtool: "inline-source-map",

  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",

  plugins: [
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
};
