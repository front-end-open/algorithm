/*
 * @Author: wangshan
 * @Date: 2021-10-17 22:02:16
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-17 22:37:16
 * @Description: 插入
 */

import { defaultEqual } from "../../dataStructure/List/utils";
import { CircleLinkList } from "../../dataStructure/List/LinkedList";

let clink = new CircleLinkList(defaultEqual);

clink.createCircleListTail(5);
console.log(clink);
// 尾部插入
// 相比单线表而言, 循环链表的尾部插入，api设计变化不大
clink.push(6);
clink.push(7);

// 索引插入
clink.insert(0, 1); // 头部, end(尾部结点) p -> head(element: 0)

clink.insert("new Node", 2); // 中间
console.log(clink.size());
clink.insert("new Node", clink.size()); // 测试通过
