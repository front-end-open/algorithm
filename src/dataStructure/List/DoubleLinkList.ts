/*
 * @Author: wangshan
 * @Date: 2021-10-17 23:59:56
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-18 00:52:42
 * @Description:双向列表
 */
import { defaultEqual } from "./utils";
import { Node, LinkList } from "./LinkedList";

export class DoublyNode extends Node {
  public element: Node.Evalue;
  public next: Node.NodeE | any;
  public prev: Node.NodeE;
  constructor(element: Node.Evalue, next?: Node.NodeE, prev?: Node.NodeE) {
    super(element, next);
    this.prev = prev as Node.NodeE;
    this.next = next as Node.NodeE;
  }
}

class DoublyLinkList extends LinkList {
  public tail: Node.NodeE | null;
  constructor(equalsFn = defaultEqual) {
    super(equalsFn); // 头指针
    this.tail = null; // 尾指针
  }
  push(element: Node.Evalue) {
    const node = new DoublyNode(element) as Node.NodeE;
    if (this.head == null) {
      this.head = node;
      this.tail = node; // NEW
    } else {
      // attach to the tail node // NEW
      (this.tail as Node.NodeE).next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
  }
  insert(element: Node.Evalue, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element) as Node.NodeE;
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          (current as Node.NodeE).prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        current = this.tail;
        (current as Node.NodeE).next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        current = (previous as Node.NodeE).next as Node.NodeE;
        node.next = current;
        (previous as Node.NodeE).next = node;
        current.prev = node;
        node.prev = previous;
      }
      this.count++;
      return true;
    }
    return false;
  }
  removeAt(index: number) {
    // 头部，尾部，中间
    if (index >= 0 && index < this.count) {
      let current: Node.NodeE = this.head as Node.NodeE;
      if (index === 0) {
        this.head = current.next as Node.NodeE;
        if (this.count === 1) {
          this.tail = null;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) {
        current = this.tail as Node.NodeE;
        this.tail = current.prev as Node.NodeE;
        this.tail.next = null;
      } else {
        current = this.getElementAt(index) as Node.NodeE;
        const previous = current.prev;
        (previous as Node.NodeE).next = current.next;
        (current.next as Node.NodeE).prev = previous;
      }
      this.count--;
      return current;
    }
    return null;
  }
  indexOf(element: Node.Evalue) {
    let current: Node.NodeE = this.head as Node.NodeE;
    let index = 0;
    while (current != null) {
      if (this.Equal(element as number, current.element)) {
        return index;
      }
      index++;
      current = current.next as Node.NodeE;
    }
    return -1;
  }
  clear() {
    super.clearList(); // super -> LinkList.prototype.clear();
    this.tail = null;
  }
  inverseToString() {
    if (this.tail == null) {
      return "";
    }
    let objString = `${this.tail.element}`;
    let previous = this.tail.prev;
    while (previous != null) {
      objString = `${objString},${previous.element}`;
      previous = previous.prev;
    }
    return objString;
  }
}
