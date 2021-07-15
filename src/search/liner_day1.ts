/*
 * @Author: wangshan
 * @Date: 2021-07-15 22:30:48
 * @LastEditors: wangshan
 * @LastEditTime: 2021-07-16 00:31:10
 * @Description:   搜索算法-线性搜索
 */
/*
    顺序搜索，含义是将列表中的元素和我们需要查找的元素做比较。从其特点来看，算法性能是比较低的。
*/

import { DOES_NOT_EXIST, defaultEquals } from "../utils/compareFn";

// 算法实现
function sequentialSearch(
  arr: number[],
  value: number,
  equalsFn = defaultEquals
) {
  let { length } = arr;
  for (let i: number = 0; i < length; i++) {
    if (equalsFn<number>(value, arr[i])) {
      return i;
    }
  }
  return DOES_NOT_EXIST;
}

// 测试
let arr = [5, 4, 3, 2, 1];
let res = sequentialSearch(arr, 3);
console.log(res, arr[res]); // i --> 2, arr[i] ---> 3

// 枚举使用

// 数值

// 在编译是进行初始化，作为运行时真是存在的对象
// enum Direction {
//   Up = 1, // 第一位置带初始化成员, 其余位置均根据首个位置的成员值，累加初始化
//   Down,
//   Left,
//   Right,
// }

// console.log(
//   "访问枚举成员: ",
//   "Up:" + Direction.Up,
//   "Down:" + Direction.Down,
//   "Left:" + Direction.Left,
//   "Right:" + Direction.Right
// );   // 1, 2, 3, 4

// 成员不带初始化
// 默认从零开始初始化
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
console.log(
  "访问枚举成员: ",
  "Up:" + Direction.Up,
  "Down:" + Direction.Down,
  "Left:" + Direction.Left,
  "Right:" + Direction.Right
); // 0, 1, 2, 3
//不管是计算求值还是字面初始化成员，都是在编译阶段处理的。对于一些非操作运算符，或字面量的初始化。只会导致赋值失败。
// 例如，通过函数调用初始化成员值。

// 联合枚举和枚举成员类型

// 枚举成员类型
// enum ShapeKind {
//   Circle,
//   Square,
// }

// interface Circle {
//   kind: ShapeKind.Circle;
//   radius: number;
// }

// 枚举成员作为类型。换句话说，某些成员只能是枚举成员的值。相对枚举来说的
// let c: Circle = {
//   kind: ShapeKind.Square,
//   radius: 100,
// };

// 枚举类型成员枚举成员的联合类型
// enum E {
//   Foo,
//   Bar,
// }

// function f(x: E) {
//   if (x !== E.Foo || x !== E.Bar) {
//     //             ~~~~~~~~~~~
//     // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
//   }
// }

// 运行时对象
enum E {
  X,
  Y,
  Z,
}
function f(obj: { X: number }) {
  return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
f(E);

//数字枚举--- 反向映射
// enum Enum {
//   X,
// }
// let a = Enum.X;
// let nameOfA = Enum[a];

// console.log(Enum); // {0: X, X: 0}

// 反向映射,编译实现
// var Enum: any;
// (function (Enum) {
//   Enum[(Enum["A"] = 0)] = "A";
// })(Enum || (Enum = {}));
// var a = Enum.A;
// var nameOfA = Enum[a]; //
// console.log(Enum, nameOfA);  // { 0: "A", A: 0}

// 常量枚举 const
// const enum Enum {
//   A = 1,
//   B = A * 2,
// }

const enum Directions {
  Up,
  Down,
  Left,
  Right,
}

let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
];

console.log(directions, Direction);

// 外部枚举
//外部枚举用来描述已经存在的枚举类型的形状。
// 外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。
//

declare enum Enum {
  A = 1,
  B,
  C = 2,
}
