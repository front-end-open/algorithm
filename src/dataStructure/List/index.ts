/*
 * @Author: wangshan
 * @Date: 2021-10-08 23:49:00
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-11 11:09:09
 * @Description:List-线性表
 */
// 线性表顺序存储结构-插入元素
import { insert, Status, lineList, deleteEle } from "./utils/List";
import { removeDuplicates } from "./utils/LinkedList";
// 正常插入元素
// 末尾插入元素
insert(lineList, Status, 8, 1, 1);
insert(lineList, Status, 8, 3, 2);
insert(lineList, Status, 8, 4, 3);
insert(lineList, Status, 8, 5, 4);
insert(lineList, Status, 8, 6, 5);
insert(lineList, Status, 8, 7, 6);
insert(lineList, Status, 8, 8, 7);
// 非末尾插入元素
insert(lineList, Status, 8, 2, 2);
// 异常数据插入，测试
insert(lineList, Status, 8, 6, 8);
insert(lineList, Status, 8, 10, 0);
insert(lineList, Status, 8, 20, 10);

// 移除元素
// 正常移除元素
deleteEle(lineList, Status, 1); // 中间移除
deleteEle(lineList, Status, 7); // 尾部移除

// 异常数据测试
deleteEle(lineList, Status, 0);
deleteEle(lineList, Status, 7);
console.log(lineList);

let num = [1, 1, 2];
let num1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(num));

console.log(removeDuplicates(num1));
