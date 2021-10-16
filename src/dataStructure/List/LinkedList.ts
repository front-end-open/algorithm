/*
 * @Author: wangshan
 * @Date: 2021-10-10 21:21:55
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-16 19:28:17
 * @Description:  链表(链式线性表）
 */
import { Equal } from "../List/utils";

namespace Node {
  export type Evalue = number | string | undefined | boolean;

  export interface NodeE {
    element: number;
    next: Node.NodeE | null;
  }
}

class Node {
  element: Node.Evalue;
  next: Node;
  constructor(element: Node.Evalue, next?: Node) {
    this.element = element;
    this.next = next as Node;
  }
}

export class LinkList {
  public count: number;
  private head: null | Node;
  private Equal: Equal<number>;
  constructor(equalsFn: Equal<number>) {
    // 头结点
    this.count = 0; // 头节点数据域
    this.head = null; // 头结点指针域
    this.Equal = equalsFn;
  }
  // 指定位置插入元素
  /**
   * 这里考虑两点
   * 1. 头部
   * 2. 中间尾部插入.
   * 总的来说，情况都一样，符合标准的插入表达式, p-next = s, s-> next = p-next
   *
   */
  // 指定位置插入元素
  insert(element: Node.Evalue, index: number) {
    if (index >= 1 && index <= this.count) {
      const node = new Node(element);
      if (index == 1) {
        // 空表情况
        const current = this.head as Node;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index) as Node;
        const current = previous.next;
        previous.next = node;
        node.next = current;
      }
      this.count++;
    }
    return false;
  }
  // 尾部添加元素
  push(element: Node.Evalue) {
    const node = new Node(element);
    let current: Node;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  // 获取指定位置元素
  getElementAt(index: number) {
    if (index >= 1 && index <= this.count) {
      let node = this.head; // p --> a1

      for (let i = 1; i <= index && node != null; ++i) {
        node = node.next; //
      }

      return node;
    }

    return;
  }
  // 查找元素索引
  indexOf(element: Node.Evalue) {
    let current = this.head as Node;
    for (let i = 0; i < this.count && current != null; ++i) {
      if (this.Equal(element as number, current.element as number)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  // 删除元素
  remove(element: Node.Evalue) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  removeAt(index: number) {
    if (index >= 1 && index < this.count) {
      let current = this.head as Node;
      let previous: Node | null = null;
      if (index == 1) {
        // 移除头部
        this.head = current.next;
      } else {
        for (let i = 1; i <= index; ++i) {
          previous = current; // 获取前一个节点
          current = current.next; // 获取最后index位置的元素
        }
        (previous as Node).next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  isEmpty() {
    //     // 判断链表是否为空
    return this.size() === 0;
  }

  size() {
    // 返回连标中元素个数
    return this.count;
  }

  toString() {
    // 返回链表中元素字符串
    if (this.head == null) {
      return "";
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; ++i) {
      objString = `${objString}, ${current.element}`;
      current = current.next;
    }
    return objString;
  }

  getHead() {
    // 获取head
    return this.head;
  }
  // 单链表的整表初始化
  // 指定数据范围
  // 数据类型 number
  // 头插入
  public createListHead(r: number) {
    if (r < 0 || this.count > 0) return false;
    let current = this.head;
    let node: Node | null;

    for (let i = 1; i <= r; i++) {
      node = new Node(i);
      node.next = current as Node;
      this.head = node;
      current = node;
      this.count++;
    }
  }
  // 尾部插入
  public createListTail(r: number) {
    if (r < 0 || this.count > 0) return false;
    let end = this.head;
    let node: Node;
    for (let i = 1; i <= r; i++) {
      node = new Node(i);

      if (this.count === 0) {
        this.head = node;
        end = node;
      }

      (end as Node).next = node;
      end = node;

      if (i === r) (node as any).next = null;

      this.count++;
    }
  }
}
