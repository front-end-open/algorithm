/*
 * @Author: wangshan
 * @Date: 2021-10-17 18:08:06
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-17 18:13:24
 * @Description: 链表移除元素
 */
import { defaultEqual } from "../../dataStructure/List/utils";
import { LinkList } from "../../dataStructure/List/LinkedList";

let link = new LinkList(defaultEqual);

let a = link.createListTail(5);

console.log(link);

// 移除元素

link.removeAt(1);
console.log(link);
