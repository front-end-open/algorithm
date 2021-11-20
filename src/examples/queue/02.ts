/*
 * @Author: wangshan
 * @Date: 2021-11-20 21:05:01
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-20 21:17:47
 * @Description: 链队列
 */

import { LinkedQueue } from "../../dataStructure/queue/LinkedQueue";

const linkq = new LinkedQueue();

// 插入元素
linkq.endQueue(1);
linkq.endQueue(2);
linkq.endQueue(3);
linkq.endQueue(4);
linkq.endQueue(5);

console.log(linkq.head);

// 删除元素
linkq.deQueue();
console.log(linkq.head); // {ele: 2, -> ele: 5}

linkq.deQueue();
console.log(linkq.head); // {ele: 3, -> ele: 5}

linkq.deQueue();
console.log(linkq.head); // {ele: 4, -> ele: 5}

linkq.deQueue();
console.log(linkq.head); // {ele: 5, -> ele: undefind}

linkq.deQueue();
console.log(linkq.head); // null
