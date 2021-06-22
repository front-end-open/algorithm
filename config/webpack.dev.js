/*
 * @Author: wangshan
 * @Date: 2021-06-22 01:31:57
 * @LastEditors: wangshan
 * @LastEditTime: 2021-06-23 00:52:08
 * @Description:
 */

const path = require("path");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清空上次打包文件遗留文件
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 设置html模板
// 引入通用webpack配置文件
const common = require("./webpack.common.js");
const Webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  // 使用 source-map
  devtool: "source-map",
  // 对 webpack-dev-server 进行配置
  devServer: {
    contentBase: "../dist",
    // 设置localhost端口
    port: 9000,
    hot: true, //热更新
    // 自动打开浏览器
    open: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // 使用插件，使用自定义插件
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new Webpack.HotModuleReplacementPlugin(), // 配置热更新
  ],
});
