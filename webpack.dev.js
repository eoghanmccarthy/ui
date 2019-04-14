const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    publicPath: "/",
    contentBase: path.resolve(__dirname, "dist/"),
    watchContentBase: true,
    historyApiFallback: true
  }
});
