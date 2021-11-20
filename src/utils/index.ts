/*
 * @Author: wangshan
 * @Date: 2021-06-24 21:58:10
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-20 18:30:00
 * @Description:
 */
import compareFn, { lesserOrEquals, DOES_NOT_EXIST } from "./compareFn";
import merge from "./merge";
import swap from "./Swap";
import { findMaxValue, findMinValue } from "./min-max-search";

import { IEqualsFunction } from "./ICCompareFunction";
import { Compare, defaultCompare } from "./compareFn";
import { ResStatus } from "./Res";
export {
  compareFn,
  merge,
  swap,
  IEqualsFunction,
  Compare,
  defaultCompare,
  findMaxValue,
  findMinValue,
  lesserOrEquals,
  DOES_NOT_EXIST,
  ResStatus,
};
