/*
 * @Author: wangshan
 * @Date: 2021-10-17 18:08:06
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-17 20:20:34
 * @Description: 链表移除元素
 */
import { defaultEqual } from "../../dataStructure/List/utils";
import { LinkList } from "../../dataStructure/List/LinkedList";

let link = new LinkList(defaultEqual);

let a = link.createListTail(5);

console.log(link);

// 查找指定位置元素

console.log("f1", link.getElementAt(1));
console.log("f2", link.getElementAt(2));
console.log("f3", link.getElementAt(3));
console.log("f4", link.getElementAt(4));
console.log("f5", link.getElementAt(5));

// 查找元素索引
// console.log("idx01", link.indexOf(1));
// console.log("idx02", link.indexOf(2));
// console.log("idx03", link.indexOf(3));
// console.log("idx04", link.indexOf(4));
// console.log("idx05", link.indexOf(5));
// console.log("idx06", link.indexOf(6));

// 末尾插入元素
// link.push(6);
// console.log(link); // 通过测试
