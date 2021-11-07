/*
 * @Author: wangshan
 * @Date: 2021-11-07 23:24:30
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-08 01:38:05
 * @Description: 链表(单链表)
 */
import { defaultEquals } from "../../utils/compareFn";
import { LinkList, Node } from "../List/LinkedList";
import { ConstVariable } from "./Stack";

export class LinkStack extends LinkList {
  constructor() {
    super(defaultEquals);
  }
  pop() {
    if (!this.getLen()) {
      return ConstVariable.ERROR;
    }
    if (this.getLen() == 1) {
      this.head = null;
      this.count--;
      return ConstVariable.ERROR;
    }

    let current = this.head as Node.NodeE;
    let prenode: Node.NodeE | null = null;
    while (current.next != null) {
      prenode = current;
      current = current.next;
    }
    this.count--;
    (prenode as Node.NodeE).next = current.next;

    return ConstVariable.OK;
  }
  peek() {
    if (!this.getLen()) {
      return ConstVariable.ERROR;
    }
    // debugger;
    let current = this.head as Node.NodeE;

    while (current.next != null) {
      current = current.next;
    }

    return current;
  }
  getLen() {
    return this.count;
  }
}
