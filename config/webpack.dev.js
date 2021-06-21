/*
 * @Author: wangshan
 * @Date: 2021-06-22 01:31:57
 * @LastEditors: wangshan
 * @LastEditTime: 2021-06-22 02:05:41
 * @Description:
 */

const path = require("path");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 引入通用webpack配置文件
const common = require("./webpack.common.js");

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
      },
    ],
  },
  // 使用 source-map
  devtool: "source-map",
  // 对 webpack-dev-server 进行配置
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    // 设置localhost端口
    port: 9000,
    // 自动打开浏览器
    open: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "ts",
    }),
  ],
  // 设置出口文件地址与文件名

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash:8].js",
  },
});
