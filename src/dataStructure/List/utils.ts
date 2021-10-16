/*
 * @Author: wangshan
 * @Date: 2021-10-14 00:17:25
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-14 00:29:23
 * @Description: 工具库
 */
export interface Equal<T> {
  (a: T, b: T): boolean;
}

export let defaultEqual: Equal<number> = (a, b) => {
  return a === b;
};
