/*
 * @Author: wangshan
 * @Date: 2021-07-09 11:02:34
 * @LastEditors: wangshan
 * @LastEditTime: 2021-07-18 23:14:30
 * @Description: 桶排序
 */
// 创建桶
import { insertionSort } from "./day_3"; // 使用插入排序

export function createBukets(array: number[], bucketsSize: number): number[][] {
  // 初始化最大最小值，用于桶的size计算
  let minxValue = array[0];
  let maxValue = array[0];

  // 计算最大最小值
  for (let i: number = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    } else if (array[i] < minxValue) {
      minxValue = array[i];
    }
  }

  // 根据最大最小值差计算桶的个数
  const buketCount: number =
    Math.floor((maxValue - minxValue) / bucketsSize) + 1;
  const bukets: number[][] = [];
  for (let i: number = 0; i < buketCount; i++) {
    bukets[i] = [];
  }

  // 将元素放入桶中
  for (let i: number = 0; i < array.length; i++) {
    let buketIndex: number = Math.floor((array[i] - minxValue) / bucketsSize);
    bukets[buketIndex].push(array[i]);
  }

  return bukets;
}

// 对已经分配的桶，进行排序
function sortBukets(bukets: number[][]) {
  const sortedArray: number[] = [];
  for (let i: number = 0; i < bukets.length; i++) {
    if (bukets[i] != null) {
      insertionSort(bukets[i]); // 对每个桶进行插入排序
      sortedArray.push(...bukets[i]);
    }
  }

  return sortedArray;
}

// 测试
export function buketSort(array: number[], bucketsSize = 5) {
  if (array.length < 2) {
    return array;
  }
  const bukets = createBukets(array, bucketsSize);
  console.log(bukets);
  return sortBukets(bukets);
}

let arr = [5, 4, 3, 2, 6, 1, 7, 10, 9, 8];

console.log(buketSort(arr));

// 官方写法
// function createBuckets(array: number[], bucketSize: number): number[][] {
//   let minValue = array[0];
//   let maxValue = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < minValue) {
//       minValue = array[i];
//     } else if (array[i] > maxValue) {
//       maxValue = array[i];
//     }
//   }

//   const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
//   const buckets: number[][] = [];
//   for (let i = 0; i < bucketCount; i++) {
//     buckets[i] = [];
//   }

//   for (let i = 0; i < array.length; i++) {
//     buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
//   }

//   return buckets;
// }

// function sortBuckets(buckets: number[][]) {
//   const sortedArray = [];
//   for (let i = 0; i < buckets.length; i++) {
//     if (buckets[i] != null) {
//       insertionSort(buckets[i]);

//       sortedArray.push(...buckets[i]);
//     }
//   }

//   return sortedArray;
// }

// export function bucketSort(array: number[], bucketSize = 5) {
//   if (array.length < 2) {
//     return array;
//   }

//   const buckets = createBuckets(array, bucketSize);

//   return sortBuckets(buckets);
// }

// let arr = [5, 4, 3, 2, 6, 1, 7, 10, 9, 8];

// console.log(bucketSort(arr));
