/*
 * @Author: wangshan
 * @Date: 2021-07-08 22:46:45
 * @LastEditors: wangshan
 * @LastEditTime: 2021-07-12 23:26:47
 * @Description: 工具函数-查找最小值
 */

import { Compare, defaultCompare } from "./index";

// 定义用于比较的泛型函数, 其中<T>用于声明类型参数

//类型参数T,当做类型一部分使用
// 如下面的 array类型可以定义为: T[] | Array<T>

// 接口定义泛型函数类型
// 优化： 将泛型参数，当做接口一部分，而不是仅仅是声明泛型函数参数

// 为泛型定义约束
// T适用范围是任意类型，但是当需要对一些类型，做特别操作时，就需要特别小心。比如如果对一个数值类型，进行属性访问。就会导致错误
//为此，为类型参数，定义一个范围约束

// 接口内，义定T类型约束
interface TRange {}

interface GeneriFindMaxValue<T extends TRange> {
  (array: Array<T>, compareFn?: <T>(a: T, b: T) => number): T | undefined;
}
// 或者是在类型约束之间，在使用另外一个类型

export const findMaxValue: GeneriFindMaxValue<number> = <T>(
  array: Array<T>,
  compareFn = defaultCompare
) => {
  if (array && array.length > 0) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (compareFn(max, array[i]) === Compare.LESS_THAN) {
        max = array[i];
      }
    }
    return max;
  }

  return undefined;
};

// 高级类型，指定以泛型函数类型，定义泛型函数类型
// 泛型，严格控制输入到输出的一致

type TypeFindMinValue = <T>(
  array: Array<T>,
  compareFn?: <U>(a: U, b: U) => number
) => T | undefined;

export const findMinValue: TypeFindMinValue = <T>(
  array: Array<T>,
  compareFn = defaultCompare
) => {
  if (array && array.length > 0) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
      if (compareFn(min, array[i]) === Compare.BIGGER_THAN) {
        min = array[i];
      }
    }
    return min;
  }

  return undefined;
};
