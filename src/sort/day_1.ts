/*
 * @Author: wangshan
 * @Date: 2021-06-24 22:17:22
 * @LastEditors: wangshan
 * @LastEditTime: 2021-06-27 23:34:43
 * @Description: 排序
 */
// 冒泡
// console.clear(); // 控制台清空
// 实现同样效果, 但是程序的可读性很差。
const arr = [3, 2, 5, 4];
function sort(arr: number[]) {
  let a: number;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        a = arr[i];
        (arr[i] as number) = arr[j];
        (arr[j] as number) = a;
      }
    }
  }

  return arr;
}
let res = sort(arr);

console.log(res);

// 方式二, 同样使用双层循环

// 接口-函数类型
interface ComePare {
  (a: number, b: number): boolean;
}

// 实现比较函数

let compareFn: ComePare = (a, b) => {
  return a > b ? true : false;
};
const arr1 = [4, 3, 6, 7];
function bubbleSort(arr: number[], compare = compareFn) {
  let { length } = arr;
  let m = 0;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (!compare(arr[j], arr[j + 1])) {
        m = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = m;
      }
    }
  }

  return arr;
}
res = bubbleSort(arr1);
console.log(res);

// 改进上面排序算法
function modifiedBubbleSort(arr: number[], compare = compareFn) {
  let { length } = arr;
  let m = 0;
  for (let i = 0; i < length; i++) {
    // 内存循环减去外层循环已经走过的轮数，避免再次循环已经排序的。
    for (let j = 0; j < length - 1 - i; j++) {
      if (!compare(arr[i], arr[j])) {
        m = arr[i];
        arr[j] = arr[j + 1];
        arr[j + 1] = m;
      }
    }
  }

  return arr;
}

res = modifiedBubbleSort(arr);
console.log(res); // [2, 3, 4, 5]

// 总结：
// 未经过优化复杂度为，O(n^3)
// 优化过的排序复杂度, O(n^2)
//
