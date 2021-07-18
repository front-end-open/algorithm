/*
 * @Author: wangshan
 * @Date: 2021-06-27 23:57:07
 * @LastEditors: wangshan
 * @LastEditTime: 2021-07-18 23:44:33
 * @Description: 比较函数
 */

// 比较函数类型
// 高级类型声明，自定义类型
export type ICompareFunction<T> = (a: T, b: T) => number;

// !枚举比较值
export enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUALS = 0,
}

export const DOES_NOT_EXIST = -1;

// *值比较
export function defaultCompare<T>(a: T, b: T): number {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
// *值大小比较
export default function compareFn(a: number, b: number): boolean {
  return a > b ? true : false;
}
// *值相等比较
export function defaultEquals<T>(a: T, b: T): boolean {
  return a === b;
}
// *小于或等于比较
export function lesserOrEquals<T>(a: T, b: T, compareFn: ICompareFunction<T>) {
  let compare = compareFn(a, b);

  return compare === Compare.LESS_THAN || compare === Compare.BIGGER_THAN;
}
