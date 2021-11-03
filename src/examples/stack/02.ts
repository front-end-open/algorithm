/*
 * @Author: wangshan
 * @Date: 2021-11-03 23:12:40
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-03 23:31:13
 * @Description: 测试（基于对象的栈）
 */

import { StackExtend } from "../../dataStructure/stack/StackExtend";

const stack = new StackExtend(5);

// 插入
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack._item); // {0: 1, 1: 2, 2: 3, 3: 4, 4: 5}
// 对于限制长度的栈，插入额外的元素
stack.push(6);
stack.push(7);
stack.push(8);

// 通过测试
console.log(stack._item); // {0: 1, 1: 2, 2: 3, 3: 4, 4: 5}

// 出栈
stack.pop();
console.log(stack._item); // {0: 1, 1: 2, 2: 3, 3: 4}

stack.pop();
console.log(stack._item); // {0: 1, 1: 2, 2: 3}

stack.pop();
console.log(stack._item); // {0: 1, 1: 2}

stack.pop();
console.log(stack._item); // {0: 1}

stack.pop();
console.log(stack._item); // {}

// 通过测试
stack.pop();
console.log(stack._item); // {}

// 获取长度
console.log(stack.getLen()); // 0
stack.push(2);
console.log(stack.getLen()); // 1
stack.clearStack();

// 是否为空
console.log(stack.isEmpty()); // true
stack.push(1);
console.log(stack.isEmpty()); // false
// 清空栈

console.log(stack._item); // {0: 1}
stack.clearStack();
console.log(stack._item); // {}
