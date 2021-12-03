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

> 函数字面量被定义在其他函数内部时，此时隐式的创建一个连接到外部父级函数的上下文的连接，称为闭包。此时内部函数对象可以自有访问外部上下文中的变量和参数。常见的函数嵌套声明，内部函数拥有比外部函数更长的生命周期。

使用函数声明一个维护着私有属性的对象

```js
// 此时value, 相对于外部作用域是不可见的，仅对返回的对象方法可见.
// 此处的testobj, 并没有存储函数，而是存储了立即执行函数返回的一个对象。 即使函数执行完毕，返回对象的方法仍然保持有对内部变量value 访问权限.
let testobj = (function () {
  let value = 0;

  return {
      increment(inc) {
          value += typeof inc ==== 'number' ? inc : 1;
      },
      getValue() {
          return value
      }
  }
})();

console.log(testobj, testobj.getValue()) // {increment: func.. , getValue: func}, 0
```

::: tip 注意

js 面向对象编程，并不存在一种私有属性一说，最多也是人为约定，或者对实例对象的键做特殊处理，这种方式，最多也是规避用户通过键访问私有属性。

:::

另外建议中私有属性实现:

```js
// 声明一个quo构造, 实际并不真正作为构造使用
// 此构造的特点就是，外部数据，并不作与实例this绑定，而是作为函数内部变量声明，来维护数据不被修改，也就达到了保护私有状态的目的。
s;
```

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

### 基本类型扩充

> js 允许对基本类型进行属性扩充。扩充方式是在基本对象包装器的原型对象上，添加属性。即`Object.prototype`, Object 是 js 中，所有对象的基本构造器，所有对象都是此构造器的实列.
> 由于基本类型构造器，本身也是函数，而函数既可以作为函数本身，也同时在 js 中，作为对象存在。所以扩充基本类型方法的时候，可以选择 Object.prototype,或者 Function.prototype

```js
// 扩充为所有函数实例添加方法的简便方式,
Function.prototype.methods = function (name, func) {
  this.prototype[name] = func;

  return this;
};

// 现在使用此方法，为数字基本类型添加一个通用的取整方法，并且需要根据数字正负来取整
Number.methods("integer", () => {
  return Math[this > 0 ? "floor" : "cell"](this);
});

// 测试
console.log((3.14).integer()); // 3
console.log((-3.14).integer()); // -4
```

::: warning 注意
基本类型的原型是共有结构，使用类库混合时，切记防止冲突，覆盖。稳当的处理方式，便是在扩充原型方法时，确保该方法不存在时，在添加。
:::

```js
// 改进上面的原型扩充
Function.prototype.methods = function (name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }

  return this;
};
```

### 递归

> 函数的自调用，实际体现的思想是，将实际问题，分解为若干个相似的子问题，然后逐一解决.

#### 经典递归问题

##### 汉诺塔

```js
/*
@param disc, 圆盘个数，用于递归给圆盘编号
@param src, 源柱子
@param aux 辅助柱子
@param dst 目标柱子
*/
let hanoi = function (disc, src, aux, dst) {
  debugger;
  if (disc > 0) {
    hanoi(disc - 1, src, dst, aux);
    document.writeln(
      "Move disc " + disc + " from " + src + " to " + dst + "<div></div>"
    );
    hanoi(disc - 1, aux, src, dst);
  }
};
hanoi(3, "Src", "Aux", "Dst");

/*

Move disc 1 from Src to Dst
Move disc 2 from Src to Aux
Move disc 1 from Dst to Aux
Move disc 3 from Src to Dst
Move disc 1 from Aux to Src
Move disc 2 from Aux to Dst
Move disc 1 from Src to Dst
*/
```

##### Dom 树操作

```js
// 定义walk_Dom函数用于访问指定父节点下的所有子节点
let walk_the_DOM = function walk(node, func) {
  func(node);
  node = node.firstChild;
  while (node) {
    walk(node, func);
    node = node.nextSibling;
  }
};

// 定义调用walk-The_dom函数，来获取每一个节点熟悉的函数
let getElementByAttributes = function (att, value) {
  let results = [];

  walk_the_DOM(document.body, function (node) {
    let actual = node.nodeType === 1 && node.getAttribute(att);
    if (
      typeof actual === "string" &&
      (value === actual || typeof value !== "string")
    ) {
      results.push(node);
    }
  });

  return results;
};
```

##### 阶乘

> 阶乘就是一种尾递归

```js
let factorial = function (i, a) {
  let a = a || 1;
  if (i < 2) {
    return a;
  }

  return factorial(i - 1, a);
};
```

##### 斐波拉契数列

```js

```

### 尾递归优化

> 尾递归: 一种在函数结尾递归调用自己，并返回自调用的方式.
>
> > 一些语言提供尾递归优化, 即是将尾递归转化为一个循环，以提高速度。

::: tip 注意

js 并未提供尾递归转换，但是在程序中，能够实现尾递归。_阶乘就是尾递归一种实现_

:::

### 作用域

> 作用域控制变量和参数的可见性和生命周期. 生命周期在维护变量和参数的可见性和生命周期的同时，也减少了程序命名冲突，并提供自动的内存管理。

### 回调

> 异步编程中，应对同步代码的对立情况。目的在于解决，对于客户端的异步代码，如果采用同步方式，就会导致客户端假死状态，即阻塞。采用回调，异步的方式，当结果返回时，才做响应，即非阻塞。

### 模块

> js 中，使用函数和闭包来构造模块。通过函数来创建模块，可完全摒弃全局变量的使用。缓解 js 全局变量的糟糕特性。

模块实现作用:

- 提供接口，隐藏状态
- 实现函数或对象。

例如实现匹配一个字符串中，html 字符实体并替换对应的标记。

分析:

1. 首先我们需要一个对象保存字符实体和对应字符。
2. 这个字符实体保存地方，首先不能是在全局，否则会污染全局。也不能直接保存在业务函数内部，不然会导致函数执行时，每次计算此对象。
3. 此字符模板对象，保存在闭包中。使用闭包去维护。免去了全局污染，同时提升业务函数性能。

```js
// 使用之前原型扩展添加的methods方法，添加deentityfy

String.methods("deentityfy", () => {
  // 此处维护模板对象
  let entity = {
      quot: '"',
      lt: "<",
      gt: ">"
  }
    // 此处实现业务函数
  return function() {
      this.replace(/&([^&;]+)/g, (a, b) => {
          let r = entity[b];

          return typeof r === "string" ? r : a;
      })
  }
}());

/**
 * methods，回调使用立即执行函数，函数在方法添加后，即被销毁，但是内部的业务函数通过闭包，可以再次访问模板对象。
 *
 *
*/
```

::: tip 提示

模板的一般模式: 一个定义了私有变量和函数的函数，利用闭包创建可以访问私有变量的函数的特权函数。最后返回业务函数，或者保存可以访问的地方，此特权函数通常就是具体业务的实现函数。

:::

模块作用:

- 促进信息隐藏和其他优秀设计实践.
- 应用程序封装
- 构建**单列**对象。

::: tip 提示
单列模式，在 js 中就是通过对象字面量方式表示对象，对象的属性值可以时函数或数值。并且属性值在该对象生命周期中不会变化。通常为工具和程序提供功能支持。
:::

模块模式结合单列模式,实践:

```js
// 返回一个用来生成唯一字符串的对象
// 对象方法: 设前缀， 设置序列号, 产生唯一字符串方法。
// 唯一字符串：前缀(prefix) + 序列号(seq)
let serial_maker = function () {
  let prefix = " ";
  let seq = 0;

  return {
    set_prefix() {
      prefix = String(p);
    },
    set_seq(s) {
      seq = s;
    },
    gensym() {
      let result = prefix + seq;
      seq += 1;
      return result;
    },
  };
};

// 测试
let seqer = serial_maker();
seqer.set_prefix("Q");
seqer.set_seq(1000);
let unique = seqer.gensym(); // Q1000
```

### 级联

> 级联的表现就是，一些方法的执行没有实际的运算返回值，而是返回该方法实体`this`（比较常见的就是这种手法）。从而达到一条龙的方式实现操作。常见的就是 jquery 类库的 dom 操作，就是这种实现。此为级联。

级联技术作用:

- 构造比较语义化的接口
- 引导接口单一功能实践。

### 柯里化

> 函数也是值，柯里化允许把函数和传递给他的参数结合，产生新函数

```js
// 创建 curry
Function.methods("curry", function () {
  let slice = Array.prototype.slice,
    args = slice.apply(arguments),
    that = this;

  return function () {
    return that.apply(null, args.concat(slice.apply(arguments)));
  };
});
// todo: 实现 add 函数
```

### 记忆

> 函数可以将每次的计算值保存在对象中，以避免重复复的计算.这种优化被称为`记忆`

反面列子

```js
// 实现求斐波拉契数列

let fibonacci = function (n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

// 打印
for (let i = 0; i <= 10; i++) {
  console.log(`// ${i}: fibonacci(i)`);
}
// 输出
/**
 * 0 : 0
 * 1 : 1
 * 2 : 1
 * 3 : 2
 * 4 : 3
 * 5 : 5
 * 6 : 8
 * 7 : 13
 * 8 : 21
 * 9 : 34
 * 10 : 55
 */
```

分析上面的原始实现:

1. 程序正常实现
2. feibonacci 函数被调用了 453 次，其中初始调用 11 次，而自调用 442. 自调用是其中，包括之前已经运算的值。
3. 重复计算

优化: 保存函数每次运算结果(即记忆)

```js
let feibonacci = function (n) {
  let memo = [0, 1];    // 存储每次运算结果.
  let fib = function (n) {
    let result = memo[n];
    if(typeof !== 'number') {
        result = fib(n -1) + fib(n -2);
        memo[n] = result;
    }
  };
};
```

分析: 经过重构 feibonacci 函数后

- 函数调用次数由原来的 453，变为 40. 其中自调用 29, 初始调用还是 11 次. 性能明显得到提升。

归纳: 声明一个实现构造记忆函数的接口

```js
let memoizer = function (memo, formula) {
  let recur = function (n) {
    let result = memo[n];
    if (typeof result !== "number") {
      result = formula(recur, n);
      memo[n] = result;
    }
    return result;
  };
  return recur;
};

// 现在使用此api，来构造我们的刚刚的feibonacci函数
let fibonacci = memoizer([0, 1], function (recur, i) {
  return recur(n - 1) + recur(n - 2);
});
// 再比如实现阶乘的记忆函数
let factorial = memoizer([1, 1], function(recur, 0) {
    return n * recur(n -1)
})
```
