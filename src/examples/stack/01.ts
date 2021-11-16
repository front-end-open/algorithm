/*
 * @Author: wangshan
 * @Date: 2021-10-31 23:02:54
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-31 23:32:54
 * @Description: 使用stack
 */
import { StackList } from "../../dataStructure/stack/Stack";

const stack = new StackList(10);

// 添加元素
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
stack.push(10);

// 访问成员
console.log(stack.item); // [1, 2, 3.......]
// 超出容量，再次插入元素，测试
stack.push(11); // 插入无效
// 删除元素
stack.pop();
console.log(stack.item);
console.log(stack.count, stack.top); // 9, 8

// 获取长度
console.log(stack.getLen()); // 9

// 测试为空
console.log(stack.isEmpty()); // false

// 获取栈顶元素
console.log(stack.peek()); // 9

// 重置
stack.clearStack();
console.log(stack.item);

// 重置之后，再次尝试删除，添加元素
stack.pop();
console.log(stack.count, stack.top); // 0, -1

stack.push(1);
console.log(stack.item);
