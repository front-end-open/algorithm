/*
 * @Author: wangshan
 * @Date: 2021-06-22 01:31:05
 * @LastEditors: wangshan
 * @LastEditTime: 2021-06-23 00:42:08
 * @Description:
 */
// import "@babel/polyfill"; // 所有模块项导入前导入babel/polyfill

const path = require("path");

module.exports = {
  entry: [path.resolve(__dirname, "../src/index.ts")],
  resolve: {
    extensions: [".ts", ".js", ".json"], // 模块文件解析顺序
  },
};
