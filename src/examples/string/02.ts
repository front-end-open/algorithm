/*
 * @Author: wangshan
 * @Date: 2021-11-28 22:49:23
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-28 23:01:18
 * @Description: 字串模式匹配算法二
 */

import { Index } from "../../dataStructure/string/StringSearch";

// 测试数据
let target = "hello world, lo";

// console.log(Index(target, "wo", 3)); // 7
// console.log(Index(target, "lo", 1)); // 4
//空白串
console.log(Index(target, " ", 2)); // 6
// 测试查找不存在的子串
console.log(Index(target, "cd", 4)); // -1

// 测试成功
