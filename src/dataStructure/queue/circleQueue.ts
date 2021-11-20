/*
 * @Author: wangshan
 * @Date: 2021-11-17 23:25:55
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-20 20:41:56
 * @Description: 循环队列
 */
import { ResStatus as Status } from "../../utils/index";
interface QueueElement<T> {
  [idx: number]: T;
}

export class CircleQueue<T> {
  private size: number; // 记录栈的长度
  private head: number; // 记录指向队列队首的指针
  private tail: number; // 记录指向队列尾部的指针
  private data: QueueElement<T>;

  constructor(k: number) {
    this.size = k;
    this.head = 0;
    this.tail = 0;
    this.data = {};
  }
  /**
   * Insert an element into the circular queue. Return true if the operation is successful.
   * @param {number} value
   * @return {boolean}
   */
  endQueue(value: T) {
    if (this.isFull()) {
      return Status.ERROR;
    }
    this.data[this.tail] = value;
    this.tail = (this.tail + 1) % this.size;
    return true;
  }
  /**
   * init new Queue
   * @param {number} k
   * @returns Circle
   */
  createNew(k: number) {
    return new CircleQueue(k);
  }

  /**
   * Delete an element from the circular queue. Return true if the operation is successful.
   * @return {boolean}
   */

  deQueue() {
    if (!this.isEmpty()) {
      if (this.tail === this.head) {
        this.tail = 0;
        this.head = 0;
        this.data = {};
      } else {
        delete this.data[this.head];
        this.head = (this.head + 1) % this.size;
      }
      return Status.OK;
    }
    return Status.ERROR;
  }
  /**
   * 获取队列长度
   * @return {number}
   */
  QueueLength() {
    return (this.tail - this.head + this.size) % this.size;
  }
  /**
   * Get the last item from the queue.
   * @return {number}
   */
  Rear() {
    return this.tail === -1 ? Status.ERROR : this.data[this.tail];
  }
  /**
   * Get the front item from the queue.
   * @return {number}
   */
  peek() {
    return this.head === -1 ? Status.ERROR : this.data[this.head];
  }

  isEmpty() {
    return this.tail === this.head;
  }
  /**
   * Checks whether the circular queue is full or not.
   * @return {boolean}
   */
  isFull() {
    return (this.tail + 1) % this.size === this.head;
  }
}
