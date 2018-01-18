const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: path.resolve(__dirname, "./src/"),
  entry: {
    app: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "app.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.join(__dirname, "src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react", "stage-1"],
            plugins: [
              ["transform-runtime", { "polyfill": false }],
              "transform-regenerator",
            ],
            env: {
              start: {
              }
            }
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      '__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })'
    })
  ]
};
