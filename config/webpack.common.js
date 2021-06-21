/*
 * @Author: wangshan
 * @Date: 2021-06-22 01:31:05
 * @LastEditors: wangshan
 * @LastEditTime: 2021-06-22 02:10:04
 * @Description:
 */
const path = require("path");

module.exports = {
  entry: ["babel-polyfill", path.resolve(__dirname, "../src/index.ts")],
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
};
