/*
 * @Author: wangshan
 * @Date: 2021-11-09 00:17:28
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-16 22:36:45
 * @Description: 栈的应用
 */

// 求斐波拉契数列
/**
 * 1. 递归
 * 2. 迭代
 */
export function fibonacciIterative(n: number) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = n;
  for (let i = 2; i < n; i++) {
    fibN = fibNMinus1 + fibNMinus2;
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
    console.log(fibN);
  }
  return fibN;
}

// 递归实现

export function fibonacci(n: number, fn?: any): number {
  const arr = [0, 1];
  if (n < 2) {
    return n === 0 ? arr[0] : arr[1];
  }
  let r = fibonacci(n - 1) + fibonacci(n - 2);

  return r;
}
