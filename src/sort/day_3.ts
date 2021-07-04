/*
 * @Author: wangshan
 * @Date: 2021-07-04 14:14:24
 * @LastEditors: wangshan
 * @LastEditTime: 2021-07-04 16:31:30
 * @Description: 插入排序
 */

// import compareFn from "../utils/compareFn";
import { compareFn } from "../utils/index";
// 基础类型
// 函数类型
let arr: number[] = [5, 4, 3, 2, 1];
function insertionSort(arr: number[], compare = compareFn) {
  const { length } = arr;
  let temp: number;

  for (let i = 1; i < length; i++) {
    let j = i;
    temp = arr[j];
    while (j > 0 && compare(arr[j - 1], temp)) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}

let res = insertionSort(arr);
console.log(res); // [1, 2, 3, 4, 5]
/**
 * 待排序项,和之前的每个项目比较。并将大值往后移.最终待插入值移动到最终位置上,
 */
