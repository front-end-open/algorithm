/*
 * @Author: wangshan
 * @Date: 2021-11-17 23:25:55
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-17 23:37:14
 * @Description: 循环队列
 */
class CircleQueue<T> {
  private size: number;
  private head: number;
  private tail: number;
  private data: Array<T>;

  constructor(k: number) {
    this.size = k;
    this.head = -1;
    this.tail = -1;
    this.data = [];
  }
  /**
   * Insert an element into the circular queue. Return true if the operation is successful.
   * @param {number} value
   * @return {boolean}
   */
  endQueue(value: T) {
    if (this.isFull()) {
      return false;
    }
    if (this.isEmpty()) {
      this.head = 0;
    }
    this.tail = (this.tail + 1) % this.size;
    this.data[this.tail] = value;
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
        this.tail = -1;
        this.head = -1;
      } else {
        this.head = (this.head + 1) % this.size;
      }
      return true;
    }
    return false;
  }

  /**
   * Get the last item from the queue.
   * @return {number}
   */
  Rear() {
    return this.tail === -1 ? -1 : this.data[this.tail];
  }
  /**
   * Get the front item from the queue.
   * @return {number}
   */
  peek() {
    return this.head === -1 ? -1 : this.data[this.head];
  }

  isEmpty() {
    return this.tail === -1 && this.head === -1;
  }
  /**
   * Checks whether the circular queue is full or not.
   * @return {boolean}
   */
  isFull() {
    return (this.tail + 1) % this.size === this.head;
  }
}
