/*
 * @Author: wangshan
 * @Date: 2021-10-10 21:21:55
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-11 11:29:09
 * @Description:  链表(链式线性表）
 */
export let removeDuplicates = function (nums: Array<number>) {
  let index = 1; // 记录去重元素后的数组的长度
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    else nums[index++] = nums[i];
  }

  return nums;
};
