/*
 * @Author: wangshan
 * @Date: 2021-06-22 01:33:57
 * @LastEditors: wangshan
 * @LastEditTime: 2021-06-23 23:47:36
 * @Description:
 */
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CopyPlugin = require("copy-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  mode: "production", // 启用特定模式，用于资源打包时的优化.
  plugins: [
    new CopyPlugin([
      {
        pattherns: [
          {
            from: path.resolve(__dirname, "../public"),
            to: path.resolve(__dirname, "../dist"),
          },
        ],
      },
    ]),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        //压缩js
        cache: true, // 启用特定模式，用于资源打包时的优化
        parallel: true, //多线程构建
        sourceMap: true, // 启用sourceMap
      }),
      new OptimizeCssAssetsPlugin({}),
    ],
    splitChunks: {
      //  SplitChunksPlugin  通用分块策略, webpack v4+新提供的开箱即用功能
      chunks: "all",
      cacheGroups: {
        libs: {
          name: "chunk-libs",
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: "initial", // 只打包初始时依赖的第三方
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  devtool: "source-map", // 源码使用source-map, 用于调试追踪
  //   plugins: [uglifyJSPlugin],
  // 设置出口文件地址与文件名
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash:8].js",
  },
});
