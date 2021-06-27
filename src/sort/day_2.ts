/*
 * @Author: wangshan
 * @Date: 2021-06-27 23:35:02
 * @LastEditors: wangshan
 * @LastEditTime: 2021-06-28 00:08:49
 * @Description: 选择排序
 */
import { compareFn } from "../utils/index";

function selectionSort(arr: number[], compare = compareFn) {
  const { length } = arr;
  let indexMin;
  let temp: number;
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (compare(arr[indexMin], arr[j])) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      temp = arr[indexMin];
      arr[indexMin] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}
let arr = [5, 4, 3, 2, 1];
let res = selectionSort(arr);

console.log(res); // [1, 2, 3, 4, 5]
