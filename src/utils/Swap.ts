/*
 * @Author: wangshan
 * @Date: 2021-07-07 23:35:17
 * @LastEditors: wangshan
 * @LastEditTime: 2021-07-07 23:36:33
 * @Description: 交换工具函数
 */
export default function swap(array: any[], a: number, b: number) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}
