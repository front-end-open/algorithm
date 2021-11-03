/*
 * @Author: wangshan
 * @Date: 2021-10-31 20:12:48
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-03 23:18:12
 * @Description: 栈(基于数组栈的实现)
 */
// 使用数组实现栈
export enum ConstVariable {
  MAXSIZE = 5,
  ERROR = -1,
  OK = 0,
}

abstract class Stack {
  protected item: Array<number | string | object | boolean>;
  protected constructor() {
    this.item = [];
  }
  abstract pop(): number;
  abstract push(element: number | string | boolean | object): number;
  abstract isEmpty(): boolean;
  abstract getLen(): number;
  abstract peek(): number | string | object | boolean;
  abstract clearStack(): void;
}

export class StackList extends Stack {
  protected max: number;
  protected top: number;
  protected count = 0;
  constructor(max = ConstVariable.MAXSIZE) {
    // 初始化限制栈长度
    super();
    this.max = max;
    this.top = -1; // 记录栈定元素位置
  }
  pop() {
    if (this.top === -1) {
      return ConstVariable.ERROR;
    }
    this.item.pop();
    this.top--;
    this.count--;
    return ConstVariable.OK;
  }
  push(element: number | string | boolean | object) {
    // 插入元素只考虑是否满栈情况
    if (this.top === this.max - 1) {
      return ConstVariable.ERROR;
    }
    this.item.push(element);
    this.count++;
    this.top++;

    return ConstVariable.OK;
  }
  isEmpty() {
    if (this.top === -1) {
      return true;
    }
    return false;
  }
  getLen() {
    return this.count;
  }
  peek() {
    if (this.count > 0) {
      return this.item[this.top];
    }
    return ConstVariable.ERROR;
  }
  clearStack() {
    this.item = [];
    this.top = -1;
    this.count = 0;
  }
}
