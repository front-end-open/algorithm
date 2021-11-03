/*
 * @Author: wangshan
 * @Date: 2021-11-03 21:58:25
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-03 23:10:06
 * @Description:基于对象数组的实现
 */
import { ConstVariable } from "./Stack";

interface StackItem {
  [i: string]: globalType;
}

export abstract class Stack {
  protected _item: StackItem;
  protected constructor() {
    this._item = {};
  }

  abstract pop(): number;
  abstract push(element: globalType): number;
  abstract isEmpty(): boolean;
  abstract getLen(): number;
  abstract peek(): globalType;
  abstract clearStack(): void;
}

export class StackExtend extends Stack {
  // 利用ts类成员关键字 protected，对受保护成员处理
  // 并利用私有成员下划线约定，声明类成员
  protected _max: number;
  protected _count: number;
  protected _top: number;

  constructor(max = ConstVariable.MAXSIZE) {
    super();
    this._max = max;
    this._count = 0;
    this._top = -1;
  }

  pop() {
    // 移除栈顶元素，需要考虑的场景，主要是考虑空栈情况
    // 移除对象中的元素，使用delete关键字, 删除自身属性, 原形链上不可删除
    if (this.isEmpty()) {
      return ConstVariable.ERROR;
    }
    this._count--;
    delete this._item[this._top];
    this._top--;

    return ConstVariable.OK;
  }
  push(element: globalType) {
    this._item[this._count] = element;
    this._count++;
    this._top++;
    return ConstVariable.OK;
  }
  isEmpty() {
    return this._count === 0;
  }
  getLen() {
    return this._count;
  }
  peek() {
    // 空栈情况
    if (this.isEmpty()) {
      return ConstVariable.ERROR;
    }

    return this._item[this._top];
  }
  clearStack() {
    // 方法一
    this._count = 0;
    this._top = -1;
    this._item = {};

    // 根据LIFO原则，也可以依次移除元素
    /**
     * while(!this.isEmpty) {
     *     this.pop()
     * }
     */
  }
}
