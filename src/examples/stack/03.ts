/*
 * @Author: wangshan
 * @Date: 2021-11-08 01:04:28
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-08 01:38:55
 * @Description:链栈测试
 */
import { LinkStack } from "../../dataStructure/stack/LinkStack";

let linkstack = new LinkStack();

// 插入元素
linkstack.push(1);
linkstack.push(2);

console.log(linkstack.head);

// 删除元素
linkstack.pop();
console.log(linkstack.head); // node { 1 }
linkstack.pop();
console.log(linkstack.head); // null

// 获取顶部元素
// 初始化
linkstack.push(1);
linkstack.push(2);
// 删除操作
console.log(linkstack.head);

console.log(linkstack.peek());
linkstack.pop();
console.log(linkstack.peek());

linkstack.pop();
console.log(linkstack.peek());

// 测试通过
