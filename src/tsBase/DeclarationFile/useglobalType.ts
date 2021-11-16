/*
 * @Author: wangshan
 * @Date: 2021-10-13 21:27:30
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-13 21:33:22
 * @Description: 全局库声明文件测试
 */
// 使用全局库声明下的 CatSetting声明
let a: myLib.CatSettings = {
  weight: 10,
  name: "jimi",
};

// 使用库下的类型别名
let b: myLib.VetID = "uuid";

// 使用库的变量
myLib.timeout = 1;
