/*
 * @Author: wangshan
 * @Date: 2021-10-17 21:44:35
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-17 22:05:03
 * @Description: 循环链表
 */

import { defaultEqual } from "../../dataStructure/List/utils";
import { CircleLinkList } from "../../dataStructure/List/LinkedList";

let clink = new CircleLinkList(defaultEqual);

clink.createCircleListTail(5);

console.log(clink);

// 查询
// 索引查询
console.log("c1", clink.getElementAt(1)); // node
console.log("c2", clink.getElementAt(2)); // node
console.log("c3", clink.getElementAt(3)); // node
console.log("c4", clink.getElementAt(4)); // node
console.log("c5", clink.getElementAt(5)); // node
console.log("c6", clink.getElementAt(6)); // undefined

// 元素查询
console.log("v1", clink.indexOf(1)); // 1
console.log("v2", clink.indexOf(2)); // 2
console.log("v3", clink.indexOf(3)); // 3
console.log("v4", clink.indexOf(4)); // 4
console.log("v5", clink.indexOf(5)); // 5
console.log("v6", clink.indexOf(6)); // - 1
