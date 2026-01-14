// webpack-hmr.config.js
const nodeExternals = require("webpack-node-externals");
const { RunScriptWebpackPlugin } = require("run-script-webpack-plugin");
const { swcDefaultsFactory } = require("@nestjs/cli/lib/compiler/defaults/swc-defaults");

module.exports = function (options, webpack) {
  const swcOptions = swcDefaultsFactory().swcOptions;

  return {
    ...options,
    entry: ["webpack/hot/poll?100", options.entry],
    externals: [
      nodeExternals({
        allowlist: ["webpack/hot/poll?100"],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.ts|\.tsx$/i,
          use: {
            loader: "swc-loader",
            options: swcOptions,
          },
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),
      new RunScriptWebpackPlugin({ name: options.output.filename }),
    ],
    devtool: "source-map",
  };
};
