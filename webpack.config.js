const webpack = require("webpack");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const REPORT_DIR = "" + Date.now();

module.exports = {
  entry: {
    main: path.join(__dirname, "src/index.js"),
    vendor: ["react", "react-dom"]
  },
  output: {
    chunkFilename: "[id].chunk.js",
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify("production") }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor" // Specify the common bundle's name.
    }),
    new webpack.optimize.CommonsChunkPlugin({
      async: true
    }),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,

      reportFilename: path.join(
        __dirname,
        "reports",
        REPORT_DIR,
        "bundle-analyzer-report.html"
      ),

      generateStatsFile: true,
      statsFilename: path.join(__dirname, "reports", REPORT_DIR, "stats.json"),
      statsOptions: {
        chunkModules: true
      }
    })
  ],
  stats: {
    colors: {
      green: "\u001b[32m"
    }
  }
};
