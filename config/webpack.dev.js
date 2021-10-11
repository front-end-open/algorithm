/*
 * @Author: wangshan
 * @Date: 2021-06-22 01:31:57
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-10 14:33:36
 * @Description:
 */

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const Webpack = require("webpack");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin"); // 错误预览插件
const path = require("path");

// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");   // 混淆js

module.exports = merge(common, {
  mode: "development",
  // 开发工具
  //   devtool: "eval-cheap-module-source-map", // 开发环境下特定source-map
  // 对 webpack-dev-server 进行配置

  devServer: {
    contentBase: "../dist",
    compress: true,
    hot: true, //热更新
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new Webpack.HotModuleReplacementPlugin(), // 配置热更新
  ],
});
