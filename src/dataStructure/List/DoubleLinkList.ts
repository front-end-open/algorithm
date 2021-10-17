/*
 * @Author: wangshan
 * @Date: 2021-10-17 23:59:56
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-18 00:22:35
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
    const node = new DoublyNode(element);
    if (this.head == null) {
      this.head = node as Node.NodeE;
      this.tail = node; // NEW
    } else {
      // attach to the tail node // NEW
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      this.count++;
      return true;
    }
    return false;
  }
  removeAt(index) {
    // 头部，尾部，中间
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
  indexOf(element) {
    let current = this.head;
    let index = 0;
    while (current != null) {
      if (this.equalsFn(element, current.element)) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  clear() {
    super.clear(); // super -> LinkList.prototype.clear();
    this.tail = undefined;
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
