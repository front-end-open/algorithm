---
sidebar: auto
---

## 函数

> 函数作为一等公民，拥有对象行为。可以作为值使用，或保存于变量，或数组。同时函数也可以作为参数传给其他函数，或者作为其他函数的返回值。

### 函数对象:

函数创建时的附加属性

- 函数上下文
- 函数调用属性(调用函数时，等于调用该属性)

### 函数字面量

> 函数对象通过函数字面量来创建。

函数字面量包括四部分:

1. function 保留字
2. 函数名，可以在函数调用栈中，保留记录。方便调试。同时也可以，具名函数，也可以用于函数的自调用（recursive）
3. 形式参数声明部分
4. 函数体中的语句

### 闭包

> 函数字面量被定义在其他函数内部时，此时隐式的创建一个连接到外部父级函数的上下文的连接，称为闭包。此时内部函数对象可以自有访问外部上下文中的变量和参数。

### 函数调用

> 函数调用引用函数创建时的调用属性。实际在具有函数值的表达式后的一对圆括号。圆括号后可以包括零个或多个逗号分割的表达式。在传入参数部分，还分附加两个参数，分别是 `this`与`arguments`
> 其中的 this, 用于动态指向调用函数所在的上下文环境，具体的指向取决于，函数的调用方式.

js 中关于 this 指向的，应对的函数四种调用模式:

1. 方法调用，即作为对象字面量方法, 此时函数的 this 指向对象.
2. 普通函数调用模式，指向全局
3. 构造函数模式, 此时的 this，指向实体对象
4. apply 模式, 动态绑定 this 值。

### 返回

> 函数在调用时，从第一个语句开始执行，并在遇到关闭函数体`}`时，结束。然后把函数控制权交给调用函数的程序。return 语句用于提前使函数返回。并且此函数体后的语句不在执行。
> 函数如未返回值，默认`undefined`

```js
let a = function () {
  this.name = "global";

  return {
    name: "nest",
  };
};

let b = new a();

console.log(b); // { name: 'nest' }

// 注释函数内部返回
let a = function () {
  this.name = "global";

  return {
    name: "nest",
  };
};

let b = new a();
console.log(b); // { name: 'global' }
```

### 异常

> js 提供一套异常处理机制。异常干扰程序正常流程，当遇到异常时，应当及时抛出

异常捕获实践:

```js
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    //   throw new TypeError("add needs numbers");    // 也可以传入具体错误类型，或者基本的错误对象Error
    throw {
      name: "TypeError",
      messagse: "add needs numbers",
    };
  }

  return a + b;
}

// 执行add函数，并实际错误捕获
let catchError = function () {
  // add("1", 2); // 如果注释try-catch部分，那么在错误抛出时，这个程序也就在此处崩溃了. // Ucaught Error: { name: "TypeError",  messagse: "add needs numbers",};
  try {
    console.log("head line code of add"); // 执行

    add("1", 2);
    // 测试错误后面的语句是否执行

    console.log("new line code behind of add"); // 没有执行
  } catch (e) {
    console.log(e);
  }

  console.log("捕获语句体外部变量"); // 执行, 因为正常捕获了错误
};

catchError();
```


