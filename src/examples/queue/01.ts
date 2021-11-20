/*
 * @Author: wangshan
 * @Date: 2021-11-20 19:20:57
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-20 19:57:58
 * @Description: 循环队列测试
 */

import { CircleQueue } from "../../dataStructure/queue/circleQueue";

const queue = new CircleQueue(5);

// 插入元素, 顺序插入 1-5
queue.endQueue(1);
queue.endQueue(2);
queue.endQueue(3);
queue.endQueue(4);
queue.endQueue(5); // {1,2,3,4,5}
queue.endQueue(6); // {1,2,3,4,5}
console.log(queue.data, queue.head, queue.tail); // data -> {1,2,3,4,5}, head -> 0, tail -> 4

// 删除元素
queue.deQueue();
console.log(queue.data, queue.head, queue.tail); // {2,3,4,5}, 1, 4

queue.deQueue();
console.log(queue.data, queue.head, queue.tail); // {2: 3, 3: 4, 4: 5} 2 4

queue.deQueue();
console.log(queue.data, queue.head, queue.tail); // {3: 4, 4: 5} 3 4

// 删除部分头部元素, 测试再次插入元素结果

queue.endQueue(1);
console.log(queue.data, queue.head, queue.tail); // {0: 1, 3: 4, 4: 5} 3 0
// 再次插入元素 2
queue.endQueue(2);
console.log(queue.data, queue.head, queue.tail); // {0: 1, 1: 2, 3: 4, 4: 5} 3 1

//  插入元素 3
queue.endQueue(3);
console.log(queue.data, queue.head, queue.tail); // {0: 1, 1: 2, 2: 3, 3: 4, 4: 5} 3 2, 此时head, tail 相差 1

// 队满，再次插入元素 4
// 插入无效
queue.endQueue(4);
console.log(queue.data, queue.head, queue.tail); // {0: 1, 1: 2, 2: 3, 3: 4, 4: 5} 3 2

// 获取队列长度
console.log(queue.QueueLength());
