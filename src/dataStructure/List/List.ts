/*
 * @Author: wangshan
 * @Date: 2021-10-08 23:49:00
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-11 21:08:39
 * @Description:List-线性表
 */
// 线性存储结构的List，在js中可以用数组表示，数组就是一个线性存储结构的序列(List)
/**
 * 数组作为语言级别的数据结构
 * 在js这种语言中，是没有像高级语言数组所表现的特性，及使用数组时需要指定元素类型，和所用的数据长度
 *
 * 而在js中，如果需要对数组参数类型限制，需要使用ts约束; 而长度是无法约束的，他会根据元素的插入和删除自动扩充大小.
 */

/**
 * 线性表特点:
 * 1. 数据元素性质相同，比如描述人，那就只能是人这种数据类型，而不能是 禽兽类.
 * 2. 线性表长度有限。计算机所处理的数据对象的都是有限的，无线的概念只能出现在数学中.
 */
// 声明函数返回类型
export enum Status {
  OK = 1,
  Error = 0,
}

export const lineList: Array<number> = [];

// 获取指定位置元素
// 把泛型作用接口的函数签名参数
interface GeEle<T> {
  (S: { OK: T; Error: T }, lineList: T[], index: T): T;
}

export let getEle: GeEle<number> = (Status, lineList, index) => {
  // 错误处理
  let len = lineList.length;
  if (len < 0 || index < 1 || index > len) return Status.Error;

  // 返回指定位置元素值
  return lineList[index], Status.OK;
};
// 插入元素
interface InsertEle<T> {
  (List: Array<T>, S: { OK: T; Error: T }, MAXSIZE: T, v: T, i: T): T;
}

// 插入操作需要考虑的点:
/**
 * 1. 插入位置不合理，不再线性表范围
 * 2. 插入元素后，线性表长度超出数组长度
 * 3. 插入位置不在末尾时，需要将所有元素向后移动一个位置，然后加入新元素,
 *
 *
 */
export let insert: InsertEle<number> = (
  lineList: number[],
  Status: { OK: number; Error: number },
  Max: number,
  V: number,
  index: number
) => {
  let len = lineList.length;
  if (index > len + 1 || index < 1) return Status.Error; // 插入元素位置，不再线性表内部
  if (len === Max) return Status.Error; // 插入元素位置超过数组长度

  if (index < len) {
    // 不再末尾处插入
    // let nexV: number;
    for (let i = len - 1; i >= index - 1; i--) {
      lineList[i + 1] = lineList[i];
      //   nexV = lineList[i + 1];
      //   if ((i = index - 1)) lineList[i + 1] = lineList[i];
      //   lineList[i + 1] = nexV;
      //   nexV = lineList[i + 1];
      //   lineList[i + 1] = lineList[i];
    }

    lineList[index - 1] = V;

    return Status.OK;
  }

  // 尾部插入，直接push
  lineList.push(V);

  return Status.OK;
};

// 删除元素
interface DeleteEle<T> {
  (List: T[], S: { Error: T; OK: T }, index: T): T;
}

// 删除需要考虑的场景
/**
 *
 * 1. 删除元素位置超出存在线性表范围
 *
 *
 */
export let deleteEle: DeleteEle<number> = (
  lineList: number[],
  Status: { OK: number; Error: number },
  index: number
) => {
  //   debugger;
  let len = lineList.length;

  if (len === 0) return Status.Error;

  if (index > len || index < 1) return Status.Error;

  // 非末尾
  if (index < len) {
    //循环出len - 1， 去除不必要的循环, 因为当前i处的值，就是下一位的值，没必要再往后循环.
    for (let i = index - 1; i < len - 1; i++) {
      lineList[i] = lineList[i + 1];
    }
    lineList.pop();
    return Status.OK;
  }
  // 末尾
  lineList.pop();
  return Status.OK;
};
