/*
 * @Author: wangshan
 * @Date: 2021-10-10 21:21:55
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-15 01:18:57
 * @Description:  链表(链式线性表）
 */
import { defaultEqual, Equal } from "@/dataStructure/List/utils/utils";
declare namespace Node {
  type Evalue = number | string | undefined | boolean;

  interface NodeE {
    element: Evalue;
    next: Node.NodeE | null;
  }
}

class Node {
  public element: Node.Evalue;
  public next: Node;
  constructor(element: Node.Evalue, next?: Node) {
    this.element = element;
    this.next = next as Node;
  }
}
class LinkList {
  public count: number;
  private head: null | Node;
  private Equal: Equal<number>;
  constructor(equalsFn: Equal<number>) {
    this.count = 0;
    this.head = null; // 头节点
    this.Equal = equalsFn;
  }

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
  // 指定位置插入元素
  /**
   * 这里考虑两点
   * 1. 头部
   * 2. 中间尾部插入.
   * 总的来说，情况都一样，符合标准的插入表达式, p-next = s, s-> next = p-next
   *
   */
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
}
