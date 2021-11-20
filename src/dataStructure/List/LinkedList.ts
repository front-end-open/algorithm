/*
 * @Author: wangshan
 * @Date: 2021-10-10 21:21:55
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-20 21:16:38
 * @Description:  链表(链式线性表）
 */
import { Equal, free } from "../List/utils";

export declare namespace Node {
  export type Evalue = number | string | undefined | boolean;

  export interface NodeE {
    element: number;
    prev?: Node.NodeE | null;
    next?: Node.NodeE | null;
  }
}

export class Node {
  element: Node.Evalue;
  next: Node.NodeE;
  constructor(element: Node.Evalue, next?: Node.NodeE | null) {
    this.element = element;
    this.next = next as Node.NodeE;
  }
}

export class LinkList {
  public count: number;
  protected head: null | Node.NodeE;
  public Equal: Equal<number>;
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
   * 总的来说，情况都一样，符合标准的插入表达式,
   * p-next = s, s-> next = p-next
   */
  // 指定位置插入元素
  insert(element: Node.Evalue, index: number) {
    if (index > 0 && index <= this.count) {
      const node = new Node(element) as Node.NodeE;
      // 头部插入
      if (index == 1) {
        const current = this.head as Node.NodeE;
        node.next = current;
        this.head = node;
      } else {
        // 中间插入
        const previous = this.getElementAt(index - 1) as Node; // 或组插入位置，前一个元素
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
    const node = new Node(element, null);
    // let current: Node.NodeE;
    let current;
    // debugger;
    if (!this.head) {
      this.head = node as Node.NodeE;
    } else {
      // current = this.head;
      //   while (current.next !== null) {
      //     current = current.next as Node.NodeE;
      //   }
      //   (node as Node.NodeE).next = (current as Node.NodeE).next;
      //   current.next = node as Node.NodeE;
      current = this.getElementAt(this.size()) as Node;

      current.next = node as Node.NodeE;
    }
    this.count++;
  }

  // 获取指定位置元素
  //
  getElementAt(index: number) {
    if (index >= 1 && index <= this.count) {
      let node = this.head; // p --> a1
      //   debugger;
      for (let i = 1; i < index; ++i) {
        node = (node as Node).next; //
      }

      return node;
    }

    return;
  }
  // 查找元素索引
  indexOf(element: Node.Evalue) {
    let current = this.head as Node.NodeE;
    // debugger;
    for (let i = 1; i <= this.count; ++i) {
      if (this.Equal(element as number, current.element as number)) {
        return i;
      }
      current = current.next as Node.NodeE;
    }
    return -1;
  }

  // 删除元素
  remove(element: Node.Evalue) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  removeAt(index: number) {
    // 空列表处理
    if (index >= 1 && index <= this.count) {
      let current = this.head as Node.NodeE;
      let previous: Node.NodeE | null = null;

      if (index == 1) {
        // 移除头部
        this.head = current.next as Node.NodeE;
      } else {
        // 查找 i - 1
        for (let i = 1; i < index; ++i) {
          previous = current; // 获取前一个节点
          current = current.next as Node.NodeE; // 获取最后index位置的元素
        }
        (previous as Node).next = current.next as Node.NodeE;
      }
      this.count--;
      return current;
    }
    return null;
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
      node.next = current as Node.NodeE;
      this.head = node as Node.NodeE;
      current = node as Node.NodeE;
      this.count++;
    }
  }
  // 尾部插入
  public createListTail(r: number) {
    if (r < 0 || this.count > 0) return false;
    let end = this.head;
    let node: Node.NodeE;
    for (let i = 1; i <= r; i++) {
      node = new Node(i) as Node.NodeE;

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
  //链表的整表删除
  /**
   * 特点： 每次删除当前结点，保存下一个结点的快照
   */
  public clearList() {
    if (!(this.head as Node)) return "Error";
    // debugger;
    let p: Node.NodeE = this.head as Node.NodeE,
      q: Node.NodeE;

    // 是否尾部
    while (p) {
      q = p.next as Node.NodeE;
      //   free(p);
      (p as any) = free(p);
      p = q;
    }
    this.head = p;
    this.count = 0;

    return "OK";
  }
  // 简便的一种方法就是，直接，从链表头部直接释放，因为结点是通过指针关联的。删除头部指针引用，自然而然其余结点内存也会被一起释放.
  public clearListCopy() {
    if (this.head) {
      this.head = null;
      this.count = 0;
      return "Ok";
    }
    return "Error";
  }
}

export class CircleLinkList extends LinkList {
  constructor(equalsFn: Equal<number | any>) {
    super(equalsFn);
  }
  push(element: Node.Evalue) {
    // 变化不大
    const node = new Node(element) as Node.NodeE;
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.getElementAt(this.size());

      (current as Node).next = node;
    }
    node.next = this.head;
    this.count++;
  }

  public insert(element: Node.Evalue, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element) as Node.NodeE;
      let current = this.head;
      // 头部插入
      if (index === 1) {
        // 判断空表的情况
        if (this.head == null) {
          this.head = node;
          node.next = this.head; // +
        } else {
          // 非空表头部插入时，头尾部结点的指针域需要从新定位
          node.next = current as Node.NodeE;
          current = this.getElementAt(this.size()) as Node.NodeE; // +
          this.head = node;
          current.next = this.head; // +
        }
      } else {
        // 中间或者尾部插入
        const previous = this.getElementAt(index - 1) as Node;
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;

      return true;
    }
    return false;
  }

  public removeAt(index: number) {
    if (index >= 1 && index <= this.count) {
      let current = this.head;

      if (index == 1) {
        // 只有一个元素的链表
        if (this.size() === 1) {
          this.head = null;
        } else {
          // 长度> 1
          const removed = this.head;
          current = this.getElementAt(this.size()) as Node.NodeE;
          this.head = (this.head as Node).next;
          current.next = this.head;

          current = removed; // 保留移除元素的值, 供返回
        }
      } else {
        let previous: Node | null = null;
        for (let i = 1; i < index; ++i) {
          previous = current as Node;
          current = (current as Node).next;
        }
        (previous as Node).next = (current as Node).next;
      }
      this.count--;
      return current as Node.NodeE;
    }
    return null;
  }
  // 头插入初始化
  public createCircleListHead(r: number) {
    if (r < 0 || this.count > 0) return false;
    let current = this.head;
    let node: Node.NodeE | null;

    for (let i = 1; i <= r; i++) {
      node = new Node(i) as Node.NodeE;

      node.next = current;
      this.head = node;
      current = node;

      this.count++;
    }
    // 通过外部API, 对末尾结点到头部结点的引用, 来实现循环链表
    let end = this.getElementAt(this.size()) as Node.NodeE;
    end.next = this.head;
  }

  // 尾插入初始化
  public createCircleListTail(r: number) {
    if (r < 0 || this.count > 0) return false;
    let end = this.head;
    let node: Node.NodeE;
    for (let i = 1; i <= r; i++) {
      node = new Node(i) as Node.NodeE;

      if (this.count === 0) {
        this.head = node;
        end = node;
      }

      (end as Node).next = node;
      end = node;

      if (i === r) (node as any).next = this.head; // 保证对头部的引用

      this.count++;
    }
  }
}
/*
task: 
    1. 循环列表尾指针
*/
