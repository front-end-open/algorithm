/*
 * @Author: wangshan
 * @Date: 2021-07-04 18:52:28
 * @LastEditors: wangshan
 * @LastEditTime: 2021-07-05 09:35:29
 * @Description: 快速排序
 */
// 复杂排序, 复杂度分析 O(nlogn)
import { compareFn } from "../utils/index";

function partition(
  arr: number[],
  left: number,
  right: number,
  compare = compareFn
) {
  const pivot = arr[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;
  let temp = 0;
  while (i <= j) {
    while (!compare(arr[i], pivot)) {
      i++;
    }

    while (compare(arr[j], pivot)) {
      j--;
    }

    if (i <= j) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }

  return i;
}

function quick(
  arr: number[],
  left: number,
  right: number,
  compare: (a: number, b: number) => boolean
) {
  let index: number;
  if (arr.length > 1) {
    index = partition(arr, left, right, compare);
    if (left < index - 1) {
      quick(arr, left, index - 1, compare);
    }
    if (index < right) {
      quick(arr, index, right, compare);
    }
  }

  return arr;
}
// 执行
function quickSort(arr: number[], compare = compareFn) {
  return quick(arr, 0, arr.length - 1, compare);
}

let arr = [3, 5, 1, 6, 4, 7, 2];
let res = quickSort(arr);

console.log(res);
