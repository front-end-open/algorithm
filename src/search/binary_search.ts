/*
 * @Author: wangshan
 * @Date: 2021-07-18 22:59:15
 * @LastEditors: wangshan
 * @LastEditTime: 2021-07-19 00:25:41
 * @Description: 搜索算法-二分搜搜
 */
// 算法要求，数据结构的数据已经排序
// 二分，划分搜索对象
// 搜索值和待查找值

import {
  defaultCompare,
  lesserOrEquals,
  Compare,
  DOES_NOT_EXIST,
} from "../utils";
import { selectionSort } from "../sort/day_2";

function binarySearch(arr: number[], value: number, compare = defaultCompare) {
  let sortedArray = selectionSort(arr); // 排序数组
  console.log(sortedArray, 111);
  // 定义查找的区间范围
  let low = 0;
  let heigh = sortedArray.length - 1;
  while (lesserOrEquals(low, heigh, defaultCompare)) {
    let mid: number = Math.floor((low + heigh) / 2);
    let element: number = sortedArray[mid];
    if (compare(element, value) === Compare.LESS_THAN) {
      low = mid + 1;
    } else if (compare(element, value) === Compare.BIGGER_THAN) {
      heigh = mid - 1;
    } else {
      return mid;
    }
  } //#ccc

  return DOES_NOT_EXIST;
}

// *测试
// // 搜索值 7
let arr: Array<number> = [5, 3, 4, 2, 1, 6, 8];
// binarySearch(arr, 7); // ---> -1

// 查找存在的值
let res = binarySearch(arr, 8);
console.log(res);
