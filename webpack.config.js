const { CheckerPlugin } = require("awesome-typescript-loader");
const { optimize, DefinePlugin } = require("webpack");
const { join } = require("path");
require("dotenv").config();
let prodPlugins = [];
if (process.env.NODE_ENV === "production") {
  prodPlugins.push(
    new optimize.AggressiveMergingPlugin(),
    new optimize.OccurrenceOrderPlugin(),
    new DefinePlugin({
      "process.env": {
        API_URL: JSON.stringify(process.env.API_URL)
      }
    })
  );
}
module.exports = {
  mode: process.env.NODE_ENV,
  devtool: "inline-source-map",
  entry: {
    background: join(__dirname, "src/background.ts")
  },
  output: {
    path: join(__dirname, "build"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts?$/,
        use: 'awesome-typescript-loader?{configFileName: "tsconfig.json"}'
      }
    ]
  },
  plugins: [new CheckerPlugin(), ...prodPlugins],
  resolve: {
    extensions: [".ts", ".js"]
  }
};
