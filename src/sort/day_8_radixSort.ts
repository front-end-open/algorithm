/*
 * @Author: wangshan
 * @Date: 2021-07-11 23:53:04
 * @LastEditors: wangshan
 * @LastEditTime: 2021-07-13 00:00:44
 * @Description: 基数排序
 */
// import { findMaxValue, findMinValue } from "../utils/index";
// function countingSortForRadix(
//   array: number[],
//   redixBase: number,
//   signficantDigit: number,
//   minValue: number
// ) {
//   let buketsIndex: number;
//   let bukets: number[] = [];
//   const aux: number[] = [];
//   for (let i = 0; i < redixBase; i++) {
//     bukets[i] = 0;
//   }
//   for (let i: number = 0; array.length; i++) {
//     buketsIndex =
//       Math.floor((array[i] - minValue) / signficantDigit) % redixBase;
//     bukets[buketsIndex]++;
//   }
//   for (let i = 1; i < redixBase; i++) {
//     bukets[i] += bukets[i - 1];
//   }
//   for (let i = array.length - 1; i >= 0; i--) {
//     buketsIndex = Math.floor(
//       ((array[i] - minValue) / signficantDigit) % redixBase
//     );
//     aux[--bukets[buketsIndex]] = array[i];
//   }
//   for (let i = 0; i < array.length; i++) {
//     array[i] = aux[i];
//   }

//   return array;
// }

// // 测试
// function radixSort(array: number[], radixBase = 10) {
//   if (array.length < 2) {
//     return array;
//   }
//   const maxValue = findMaxValue(array);
//   const minValue = findMinValue(array);

//   let significantDigit = 1;
//   while (
//     ((maxValue as number) - (minValue as number)) / significantDigit >=
//     1
//   ) {
//     array = countingSortForRadix(
//       array,
//       radixBase,
//       significantDigit,
//       minValue as number
//     );
//     significantDigit *= radixBase;
//   }
//   return array;
// }

// let res = [5, 2, 3, 6, 4, 8, 19, 30];

// console.log(radixSort(res));

import { findMaxValue, findMinValue } from "../utils/index";

const countingSortForRadix = (
  array: number[],
  radixBase: number,
  significantDigit: number,
  minValue: any
) => {
  let bucketsIndex;
  const buckets: number[] = [];
  const aux: number[] = [];

  for (let i = 0; i < radixBase; i++) {
    // 基于计数计算桶
    buckets[i] = 0;
  }

  for (let i = 0; i < array.length; i++) {
    bucketsIndex = Math.floor(
      // 计数排序
      ((array[i] - minValue) / significantDigit) % radixBase
    );
    buckets[bucketsIndex]++;
  }

  for (let i = 1; i < radixBase; i++) {
    buckets[i] += buckets[i - 1];
  }

  for (let i = array.length - 1; i >= 0; i--) {
    bucketsIndex = Math.floor(
      ((array[i] - minValue) / significantDigit) % radixBase
    );
    aux[--buckets[bucketsIndex]] = array[i];
  }

  // array = [];
  // array.push(...aux);
  for (let i = 0; i < array.length; i++) {
    array[i] = aux[i];
  }

  return array;
};

export function radixSort(array: number[], radixBase = 10) {
  if (array.length < 2) {
    return array;
  }

  const minValue = findMinValue(array) as number;
  const maxValue = findMaxValue(array) as number;

  // Perform counting sort for each significant digit, starting at 1
  let significantDigit = 1;
  while ((maxValue - minValue) / significantDigit >= 1) {
    // console.log('radix sort for digit ' + significantDigit);
    array = countingSortForRadix(array, radixBase, significantDigit, minValue);
    // console.log(array.join());
    significantDigit *= radixBase;
  }

  return array;
}

let res = [5, 2, 3, 6, 4, 8, 19, 30];

console.log(radixSort(res));

// 基数排序原则
// 算法实现逻辑
