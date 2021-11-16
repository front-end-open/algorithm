/*
 * @Author: wangshan
 * @Date: 2021-10-13 00:44:28
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-13 00:46:47
 * @Description: 可选的模块加载和其它高级加载场景
 */
export interface StringValidator {
  isAcceptable(s: string): boolean;
}
