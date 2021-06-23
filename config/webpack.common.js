/*
 * @Author: wangshan
 * @Date: 2021-06-22 01:31:05
 * @LastEditors: wangshan
 * @LastEditTime: 2021-06-24 01:00:15
 * @Description:
 */
// import "@babel/polyfill"; // 所有模块项导入前导入babel/polyfill

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin; // 分析打包后包体积
const currdir = __dirname;
module.exports = {
  entry: path.resolve(currdir, "../src/index.ts"),
  output: {
    path: path.resolve(currdir, "../dist"),
    filename: "js/[name].[hash:8].js",
    chunkFilename: "js/[name].[hash:8].js", // 入口文件内懒加载模块文件推断打包
  },
  module: {
    // loader配置
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", { modules: false }], // 设置modules完全开启tree-shaeking
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      // 模块查询路径配置
      "@": "../src",
    },
    extensions: ["*", ".ts", ".js", ".json"], // 模块文件解析顺序;能够在引入模块时不带扩展
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      // 使用插件，使用自定义插件
      template: path.resolve(currdir, "../public/index.html"),
    }),
  ],
};
