/*
 * @Author: wangshan
 * @Date: 2021-07-04 16:55:25
 * @LastEditors: wangshan
 * @LastEditTime: 2021-07-04 18:11:30
 * @Description: 合并数组
 */

// 声明接口，定义函数类型
import { compareFn } from "../utils/index";

// 定义比较函数
interface Compare {
  (a: number, b: number): boolean;
}

interface Merge {
  (a: number[], b: number[], compare: Compare): number[];
}

const merge: Merge = (left: number[], right: number[], compare = compareFn) => {
  let i = 0;
  let j = 0;
  let result: number[] = [];
  while (i < left.length && j < right.length) {
    result.push(!compare(left[i], right[j]) ? left[i++] : right[j++]);
  }

  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
};

export default merge;
