## 声明文件

> 根据库的类型不同，在 ts 编译环境下，为这些库存声明不同类型文件，作为库的 API 的描述

目前主流的 js 库形式:

- 全局库，不做任何包装，库中所有变量，函数声明都在全局作用域暴露(现在主流的库，都不会以这种方式封装)。
- UMD：通用模块处理，兼容全局库，amd, commonjs 模块处理格式。不单独一种模块格式，仅仅 amd, commonjs 等结合体.

### Examples

> 为不同模块模式，声明类型文件例子

#### 全局库

```javascript
// [类型文件头部描述格式]
// Type definitions for [库的名字] [当前版本]  // 为声明库声明的类型文件, 名字， 当前版本
// Project: [项目名字]    // 项目名字
// Definitions by: [姓名] <[仓库地址]>    // 其他信息, 类型声明文件，作者名字，仓库地址等

/*
 * 如果库导出名，可以作为函数调用，比如 myLib(3), 直接作为全局函数签名声明
 * 否则，删除下面的签名声明
 */
// 可选:
declare function myLib(a: string): string;
declare function myLib(a: number): number;

/*~
 *~ 希望，库作为类型声明使用，可以使用的下面的interface声明方式. 如果不需要，就添加命名空间中，作为interface 声明.
 */
interface myLib {
    name: string;
    length: number;
    extras?: string[];
}

/*~
 *~ 库的属性，作为全局变量引用被暴露; 一些interface或者类的声明也可以都放到命名空间声明.
 *~
 */
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
```

### 模块

> 针对模块有三种可用的模块， module.d.ts, module-class.d.ts and module-function.d.ts.

1. 作为函数调用

```javascript
var x = require("foo");
// Note: calling 'x' as a function
var y = x(42);
```

2. 使用 module-class.d.ts 如果模块能够使用 new 来构造：

```javascript
var x = require("bar");
// Note: using 'new' operator on the imported variable
var y = new x("hello");
```

3. 上面两种情况的例外，模块不能被调用或构造，使用 module.d.ts 文件。
