/*
 * @Author: wangshan
 * @Date: 2021-11-20 23:20:49
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-20 23:20:50
 * @Description: 测试发布
 */
// 基于链表实现队列
import { LinkList } from "../List/LinkedList";
import { defaultEqual } from "../List/utils";
import { ResStatus as Status } from "../../utils/index";

export class LinkedQueue<T> extends LinkList {
  constructor() {
    super(defaultEqual);
  }

  // insert
  endQueue(value: T | number) {
    this.push(value as number);
  }
  deQueue() {
    if (this.isEmpty()) {
      return Status.ERROR;
    }

    this.removeAt(1);
  }
}
