/*
 * @Author: wangshan
 * @Date: 2021-10-14 00:17:25
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-16 23:02:19
 * @Description: 工具库
 */

import { Node } from "../List/LinkedList";

export interface Equal<T> {
  (a: T, b: T): boolean;
}

export let defaultEqual: Equal<number> = (a, b) => {
  return a === b;
};

// 结点释放
export let free: (p: Node | null) => void = () => {
  return null;
};
