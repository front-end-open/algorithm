/*
 * @Author: wangshan
 * @Date: 2021-10-17 20:21:15
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-17 21:11:47
 * @Description: 移除元素
 */
import { defaultEqual } from "../../dataStructure/List/utils";
import { LinkList } from "../../dataStructure/List/LinkedList";

let link = new LinkList(defaultEqual);

link.createListTail(5);
console.log("初始化", link);

// 移除中间元素
link.removeAt(4);
console.log("移除idx: 4", link);
// 移除末尾元素
link.removeAt(4);
console.log("移除末尾元素idx: 4", link);
