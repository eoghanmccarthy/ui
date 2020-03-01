var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src/"),
      packages: path.resolve(__dirname, "src/packages/")
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  externals: {
    react: "commonjs react"
  }
};
