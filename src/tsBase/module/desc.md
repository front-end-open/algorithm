## 模块

> ts 1.5 之后，内部模块称为‘命名空间’, 外部模块现在简称为模块. 对应 es2015 的模块概念

### 导出

> 任何声明（函数，类，接口，变量等）都能通过 export 导出

接口声明:

```javascript
export interface StringValidator {
  isAcceptable(s: string): boolean;
}
```

类声明:

```javascript
export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
```

重新导出:

> 在当前模块，蹈入其他模块，然后再通过导出关键字 export，重新到处当前模块；并且从新到处的模块并不会在当前模块做导入，或者从新定义变量

看下面例子:

```javascript
export class ParseIntBasedZipCodeValidator {
  isAcceptable(s: string) {
    return s.length === 5 && parseInt(s).toString() === s;
  }
}

// 导出原先的验证器但做了重命名
export { ZipCodeValidator as RegExpBasedZipCodeValidator } from "./ZipCodeValidator";
```

或，一个模块包含多个模块从新导出

```javascript
export * from "./StringValidator"; // exports interface StringValidator
export * from "./LettersOnlyValidator"; // exports class LettersOnlyValidator
export * from "./ZipCodeValidator"; // exports class ZipCodeValidator
```

### 导入

> 和导出一样，导入其他模块导出内容，供其他模块使用

### 默认导出

> 每个模块都可以有一个 default 导出。 默认导出使用 default 关键字标记；并且一个模块只能够有一个 default 导出。 需要使用一种特殊的导入形式来导入 default 导出

默认导出例子:
关于 jquery 类库，默认的 Jquery 或 $导出

```javascript
declare let $: JQuery;
export default $;
```

或

```javascript
import $ from "JQuery";

$("button.continue").html("Next Step...");
```

TIPS:

> 默认导出的模块，其名字可以省略，包括在模块内导入省略或者导出模块

```javascript
export default class ZipCodeValidator {
  static numberRegexp = /^[0-9]+$/;
  isAcceptable(s: string) {
    return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
  }
}

import validator from "./ZipCodeValidator";

let myValidator = new validator();
```

或

```javascript
const numberRegexp = /^[0-9]+$/;

export default function (s: string) {
  return s.length === 5 && numberRegexp.test(s);
}

import validate from "./StaticZipCodeValidator";

let strings = ["Hello", "98052", "101"];

// Use function validate
strings.forEach((s) => {
  console.log(`"${s}" ${validate(s) ? " matches" : " does not match"}`);
});
```

### export = 和 import = require()

> CommonJS 和 AMD 的环境里都有一个 exports 变量，这个变量包含了一个模块的所有导出内容。
>
> > CommonJS 和 AMD 的 exports 都可以被赋值为一个对象, 这种情况下其作用就类似于 es6 语法里的默认导出，即 export default 语法了。虽然作用相似，但是 export default 语法并不能兼容 CommonJS 和 AMD 的 exports。

使用 export = 定义一个模块导出对象

```javascript
let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export = ZipCodeValidator;
```

此时，必须使用 import module = require(module)导入此模块

```javascript
import zip = require("./ZipCodeValidator");

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validator = new zip();

// Show whether each string passed each validator
strings.forEach(s => {
  console.log(`"${ s }" - ${ validator.isAcceptable(s) ? "matches" : "does not match" }`);
});
```

### 模块代码生成

> 导入导出语句转化为对应模块加载器平台的代码
> 这种模式的核心是 import id = require("...")语句可以让我们访问模块导出的类型。

## 使用其他 js 类库

> 非 TypeScript 编写的类库的类型，我们需要声明类库所暴露出的 API。
> 我们叫它声明因为它不是“外部程序”的具体实现。 它们通常是在 .d.ts 文件里定义的。

### 外部模块

> 在 Node.js 里大部分工作是通过加载一个或多个模块实现的。 我们可以使用顶级的 export 声明来为每个模块都定义一个.d.ts 文件，但最好还是写在一个大的.d.ts 文件里。 我们使用与构造一个外部命名空间相似的方法，但是这里使用 module 关键字并且把名字用引号括起来，方便之后 import。

```javascript

declare module "url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
}

declare module "path" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export let sep: string;
}
```

模块加载:

1. '// <reference> node.d.ts 并且使用 import url = require("url")';
2. import \* as URL from "url"加载模块。

```javascript
/// <reference path="node.d.ts"/>
import * as URL from "url";
let myUrl = URL.parse("http://www.typescriptlang.org");
```

### 可选模块加载和高级加载场景

- 模块在作为类型声明时，被导入不会编译 require()导入内容

## 使用其他 js 类库

外部模块

> 在 Node.js 里大部分工作是通过加载一个或多个模块实现的。 我们可以使用顶级的 export 声明来为每个模块都定义一个.d.ts 文件，但最好还是写在一个大的.d.ts 文件里。 我们使用与构造一个外部命名空间相似的方法，但是这里使用 module 关键字并且把名字用引号括起来，方便之后 import。 例如：

如下为 nodejs 的各个工具模块 声明类型文件:
如下是为 url，path 两个模块声明类型文件

```javascript
declare module "url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
}

declare module "path" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export let sep: string;
}
```

使用上面定义的外部模块

```javascript
/// <reference path="node.d.ts"/>
import * as URL from "url";
let myUrl = URL.parse("http://www.typescriptlang.org");
```

### 外部模块简写

> 通常为了节省时间，省略模块内部详细的 api 声明

```javascript
declare module "test"
```

### 模块声明通配符

> 某些模块加载器如 SystemJS 和 AMD 支持导入非 JavaScript 内容。 它们通常会使用一个前缀或后缀来表示特殊的加载语法。 模块声明通配符可以用来表示这些情况。

```javascript
declare module "*!text" {
    const content: string;
    export default content;
}
// Some do it the other way around.
declare module "json!*" {
    const value: any;
    export default value;
}
```

使用外部声明

```javascript
import fileContent from "./xyz.txt!text";
import data from "json!http://example.com/data.json";
console.log(data, fileContent);
```

UMD 模块:

> 有些模块被设计成兼容多个模块加载器，或者不使用模块加载器（全局变量）

```javascript
export function isPrime(x: number): boolean;
export as namespace mathLib;
```

使用:

```javascript
import { isPrime } from "math-lib";
isPrime(2);
mathLib.isPrime(2); // 错误: 不能在模块内使用全局定义。
```

全局使用:

```javascript
mathLib.isPrime(2);
```

_总结： 这种 umd 格式的声明，在模块使用时，全局的顶层导出是会作为单独的 api，导入到模块内部使用的，而不是通过模块对象，类似 exports,或 export default 那种，通过导出对像属性访问；而对于全局使用，也就是不带模块导出或导入内使用，是有顶层的 api 导出都是作为命名模块的属性访问的._

## 创建模块结构导出

### 尽可能在顶层导入(即是 export 方式导出)

> 避免不必要的导出嵌套,增加使用难度

### 如果仅导出单个 class 或 function，使用 export default

```javascript
// Class.ts
export default class SomeType {
  constructor() { ... }
}
// FUNC.ts
export default function getThing() { return 'thing'; }

// 使用上面的默认导出
// 可以看出，默认导出，不需要为查找某个导出对象使用 .访问模块暴露内容
import t from "./MyClass";
import f from "./MyFunc";
let x = new t();
console.log(f());
```

### 如果要导出多个对象，把它们放在顶层里导出

> 这通常是在一个模块文件内部需要导出多个模块文件

```javascript
// MyThings.ts
export class SomeType {
  /* ... */
}
export function someFunc() {
  /* ... */
}
// 使用
// Test.ts
import { SomeType, someFunc } from "./MyThings";
let x = new SomeType();
let y = someFunc();
```

### 使用命名空间导入模式当你要导出大量内容的时候

```javascript
// MyLargeModule.ts
export class Dog { ... }
export class Cat { ... }
export class Tree { ... }
export class Flower { ... }
// 使用
// Test.ts
import * as myLargeModule from "./MyLargeModule.ts";
let x = new myLargeModule.Dog();
```
