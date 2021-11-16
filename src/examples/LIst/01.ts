/*
 * @Author: wangshan
 * @Date: 2021-10-16 16:03:29
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-16 23:09:45
 * @Description:链表
 */
import { defaultEqual } from "../../dataStructure/List/utils";
import { LinkList } from "../../dataStructure/List/LinkedList";

let link = new LinkList(defaultEqual);

let a = link.createListHead(5); // 头插法
console.log(link.toString()); // 5, 4, 3, 2, 1

// 错误测试测试
let reinitA = link.createListHead(7); // 再次初始化无效
reinitA = link.createListHead(0); // 初始化长度小于1

// 尾部插入
// 通过
let link2 = new LinkList(defaultEqual);
let b = link2.createListTail(5);
console.log(link2);

// 链表的整表删除
let link3 = new LinkList(defaultEqual);

// 初始化10个结点
let c = link3.createListTail(10);
console.log(link3);

// 置空
// one
let res = link3.clearList();
console.log(res); // Ok
// 查看链表结果
console.log("方法一:", link3);
// two
// 初始化 5个元素
c = link3.createListTail(5);

console.log(link3);
// 置空
res = link3.clearListCopy();
console.log(res, "方法二:", link3);
