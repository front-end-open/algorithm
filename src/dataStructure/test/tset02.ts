/*
 * @Author: wangshan
 * @Date: 2021-11-20 23:29:28
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-20 23:29:29
 * @Description:
 */

afterEach(() => {
  jest.useRealTimers();
});

test("do something with fake timers", () => {
  jest.useFakeTimers();
  // ...
});

test("do something with real timers", () => {
  // ...
});
