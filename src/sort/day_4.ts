/*
 * @Author: wangshan
 * @Date: 2021-07-04 16:36:13
 * @LastEditors: wangshan
 * @LastEditTime: 2021-07-04 18:15:23
 * @Description: 归并排序
 */

// 归并排序: 分而治之
// 本质： 递归思想，将带排序序列细化，分割成小数组，然后合并成最终的排序后的数组
import { compareFn, merge } from "../utils/index";

function mergeSort(arr: number[], compare = compareFn) {
  if (arr.length > 1) {
    const { length } = arr;
    const mid = Math.floor(length / 2);
    const left = mergeSort(arr.slice(0, mid), compare);
    const right = mergeSort(arr.slice(mid, length), compare);

    arr = merge(left, right, compare); // 归并比较
  }

  return arr;
}
wq;
let arr = [5, 4, 3, 2, 1];
let res = mergeSort(arr);

console.log(res); // [1, 2, 3, 4, 5]

/**
 * 思路:
 * 1. 首先分解数组为单个小数组
 * 2. 然后归并比较分解后的，left, right数组。
 * 3. 最后输出输出归并后的数组
 */
