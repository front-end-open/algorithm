/*
 * @Author: wangshan
 * @Date: 2021-11-20 23:18:00
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-28 22:49:09
 * @Description:串匹配算法测试-方法一
 */
import { index } from "../../dataStructure/string/StringSearch";

let tstr = "hello wolrd";

let needfindStr = "wo";

console.log(index(tstr, needfindStr, 3));
