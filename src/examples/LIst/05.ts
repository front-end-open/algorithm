/*
 * @Author: wangshan
 * @Date: 2021-10-17 21:17:14
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-17 21:30:26
 * @Description:循环链表
 */

import { defaultEqual } from "../../dataStructure/List/utils";
import { CircleLinkList } from "../../dataStructure/List/LinkedList";

let clink = new CircleLinkList(defaultEqual);
let clink2 = new CircleLinkList(defaultEqual);
clink.createCircleListTail(5);
clink2.createCircleListHead(5);
console.log("头插入", clink2);
console.log("尾插入", clink);
