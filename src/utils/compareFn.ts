/*
 * @Author: wangshan
 * @Date: 2021-06-27 23:57:07
 * @LastEditors: wangshan
 * @LastEditTime: 2021-07-15 22:57:35
 * @Description: 比较函数
 */

export enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUALS = 0,
}

export const DOES_NOT_EXIST = -1;

export function defaultCompare<T>(a: T, b: T): number {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
export default function compareFn(a: number, b: number): boolean {
  return a > b ? true : false;
}

export function defaultEquals<T>(a: T, b: T): boolean {
  return a === b;
}
