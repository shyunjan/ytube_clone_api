const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { RunScriptWebpackPlugin } = require("run-script-webpack-plugin");
const { swcDefaultsFactory } = require("@nestjs/cli/lib/compiler/defaults/swc-defaults");

const swcOptions = swcDefaultsFactory().swcOptions;

module.exports = {
  entry: ["webpack/hot/poll?100", "./src/main.ts"],
  target: "node",
  externals: [
    nodeExternals({
      allowlist: ["webpack/hot/poll?100"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: {
          loader: "swc-loader",
          options: swcOptions,
        },
        exclude: /node_modules/,
      },
    ],
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new RunScriptWebpackPlugin({ name: "server.js", autoRestart: false }),
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "server.js",
  },
  devtool: "source-map",
};
