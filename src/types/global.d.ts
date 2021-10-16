/*
 * @Author: wangshan
 * @Date: 2021-10-13 01:16:39
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-16 19:32:25
 * @Description: 全局库声明文件
 */
// 库类型：作为全局库存在时，使用此默模版作为类型声明文件
// declare interface console {
//   [s: any]: [s: any];
//   log;
// }

declare let console;

declare interface Console {
  log(): any;
}
declare namespace myLib {
  //~ We can write 'myLib.timeout = 50;'
  let timeout: number;

  //~ We can access 'myLib.version', but not change it
  const version: string;

  //~ 下面的class Cat 声明也可以作为 类调用，赋值给变量;
  // 或者，作为变量的作为变量，参数的类型使用，如,'function f(c: myLib.Cat) { ... }
  class Cat {
    constructor(n: number);
    readonly age: number;
    purr(): void;
  }

  //~ 变量声明时，使用下面的 CatSettings作为类型声明
  //~   'var s: myLib.CatSettings = { weight: 5, name: "Maru" };'
  interface CatSettings {
    weight: number;
    name: string;
    tailLength?: number;
  }

  // 类型别名
  //~ We can write 'const v: myLib.VetID = 42;'
  //~  or 'const v: myLib.VetID = "bob";'
  type VetID = string | number;
  //~ We can invoke 'myLib.checkCat(c)' or 'myLib.checkCat(c, v);'
  function checkCat(c: Cat, s?: VetID);
}
