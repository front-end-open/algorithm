/*
 * @Author: wangshan
 * @Date: 2021-10-17 22:39:21
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-17 23:17:58
 * @Description: 删除
 */
import { defaultEqual } from "../../dataStructure/List/utils";
import { CircleLinkList } from "../../dataStructure/List/LinkedList";

// 移除第一个元素
// size: 1
let clink: CircleLinkList = new CircleLinkList(defaultEqual);
clink.createCircleListTail(1);
clink.removeAt(1);
console.log(clink); // 测试通过
// size: > 1
clink = new CircleLinkList(defaultEqual);
clink.createCircleListTail(5);
clink.removeAt(1);
console.log(clink);

// 中间或者尾部移除

clink = new CircleLinkList(defaultEqual);
clink.createCircleListTail(5);
clink.removeAt(3); // 中间移除
console.log(clink);
clink.removeAt(4); // 尾部移除

// 测试结果, 均通过
