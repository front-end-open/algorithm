/*
 * @Author: wangshan
 * @Date: 2021-06-27 23:35:02
 * @LastEditors: wangshan
 * @LastEditTime: 2021-07-04 14:13:41
 * @Description: 选择排序
 */
// import { compareFn } from "../utils/index";
function compareFns(a: number, b: number) {
  return a > b ? true : false;
}

function selectionSort(arr: number[], compare = compareFns) {
  const { length } = arr;
  let indexMin;
  let temp: number;
  for (let i = 0; i < length; i++) {
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
let arrs = [5, 4, 3, 2, 1];
let ress = selectionSort(arrs);

console.log(ress); // [1, 2, 3, 4, 5]

/**
 * 思路分析：
 * 1. 外循环，假设最小值，控制迭代轮数
 * 2. 内部循环，控制循环比较当前j的值是否比最小值小，如果是更新最小值索引。
 * 3. 最后，查询。当前最小值的索引是否变化。变化则更新交换前后变化处的值。
 * 疑惑：
 * 外层循环为什么需要减一?
 * 思考：查找范围控制，每次查找都是从原数组中，假设最小值，而查找时则排除了最小值的查找范围。硬刺需要减一.
 */
