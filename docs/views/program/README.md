---
sidebar: auto
---

## 编程范式

> 聚焦于 javascript 实现的函数式编程范式.

### 函数式编程范式

> 谈及历史，世界上最古老的语言 Lisp 就是基于这一范式。FP 暗示了一种不同的编写程序的方法，这有时很难做到
> 学习。在大多数语言中，编程是以命令式的方式完成的:一个程序就是一个语句序列，以指定的方式执行，并获得期望的结果。通过创建对象并对其进行操作，这通常会修改对象他们自己。FP 的基础是通过计算表达式来产生预期的结果。函数组合在一起。在 FP 中，通常将函数作为参数传递给其他函数，或作为某些计算的结果返回)，不使用循环(选择 for 并跳过副作用(如修改对象或全局变量)。
>
> > 换句话说，《外交政策》关注的是应该做什么，而不是怎么做。您不必担心循环或数组，而是在更高的层次上工作，考虑您需要做的。在习惯了这种风格之后，您会发现您的代码变得更简单，更短，更优雅，并且可以很容易地测试和调试。

### 关于函数式

- 函数式范式并非学术象牙塔，而是有实际的理论支撑，著名的(lambda calculus)以证明理论计算机科学的一个重要结果, 同时作为函数式的理论支撑。
- FP 不是面向对象编程(OOP)的对立面:同样，它也不是选择声明式或命令式编程方式的一种情况。可以通其他编程方式组合.
- FP 并不复杂，不同复杂情况，只是使用的语言不同。同样，我们也可以在 js 中，来表述 FP 特性。

**相关**

值得一提的是，一些现代框架，如 React+Redux 的组合，包括 FP 的想法。例如，在 React 中，据说视图(无论用户在给定时刻看到什么)都是当前状态的函数。即使用函数去计算状态，然后作用于视图，及时反馈给用户。

类似地，在 Redux 中，您可以获得由 reducer 处理的操作的概念（类似 vuex 的 action）。一种行为提供一些数据，reducer 是一个函数，它为应用程序以功能方式脱离当前状态和提供的数据。

### 通用范式特点:

> 不管是函数式编程还是其他编程范式，都应该遵守的规则。

- 模块化: 程序的功能应该分成独立的模块，每个模块都包含执行某个方面所需的内容程序功能。模块或功能的更改不应影响其余部分代码
- 可读性高: 程序的读者应该能够辨别它的组件，它们的功能，并理解它们之间的关系.这与可维护性高度相关.
- 方便测试: 单元测试尝试程序小部分代码测试，以验证与其他代码的独立性. 函数式编程应简化编写单元测试代码的工作量。
- 可扩展: 程序有一天需要维护，可能会添加新功能。这些变化的影响应该很小，不会影响原始代码的结构和数据流。小的改变不应该意味着对代码进行大规模、严肃的重构。
- 可重用：代码重用的目标是节省资源、时间、金钱和减少冗余，利用以前编写的代码。有一些有助于实现这一目标的特性，例如模块化，加上高内聚（模块中的所有部分都属于一起），低耦合（模块相互独立），关注点分离（部分应尽可能少地在功能上重叠）和信息隐藏（模块中的内部更改不应影响系统的其余部分）。

思考： 函数式范式，是否能够提供上述特点。

### 函数式特性：

- 在 FP 中，目标是编写单独的独立函数，将它们连接起来，共同产生最终结果。（模块化）
- 以函数式风格编写的程序通常更简洁、更短、更简洁。更容易理解（可读性）。
- 函数可以自行测试，而 FP 代码在这方面具有优势。（可测试）
- 可以在其他程序中重用函数，因为它们独立存在，而不是取决于系统的其余部分。最实用的程序（可扩展）
- 函数式代码没有副作用，这意味着您可以理解通过研究一个函数的目标，而不必考虑其余的程序。（可复用）

::: tip
习惯了 FP 方式，代码就会变得更容易理解和更容易延长。所以，这五个特性似乎都可以用 FP 来保证！
:::

### 函数式缺陷

- 但是，让我们争取一点平衡。使用 FP 不是灵丹妙药自动使您的代码更好。一些 FP 解决方案实际上很棘手——而且有开发人员在编写代码时表现出极大的喜悦，然后询问这有什么作用？如果你不小心，你的代码可能会变成只写的，几乎不可能维护......可以理解为，无可扩展和无可重用！

- 另一个缺点：您可能会发现很难找到精通 FP 的开发人员。 （快的问题：你见过多少函数式程序员求职招聘广告？）今天的大部分 JS 代码都是以命令式的、非函数式的方式编写的，并且大多数编码人员
  习惯了这种工作方式。对于某些人来说，不得不换用不同编程范式，可能会被证明是一个无法逾越的障碍。

最后，如果完全尝试 FP，可能会发现与 JS 不一致，而且很简单任务可能变得难以完成。正如我们一开始所说，我们宁愿选择 Sorta FP，所以我们不会彻底拒绝任何不是 100% FP 的 JS 功能。我们想使用 FP 来简化我们的编码，而不是让它变得更复杂！FP 编程的确能够带来通用编程方式优点，特性。但是在一些情况完全函数式风格，会使程序无法往下进行。解决方案就是，包容其他编程方式特点，组合各自特点来实现。

### javascript 函数式

> 通常讨论函数式语言时，不包括 js。然而，一些古老语言，像 Haskell，同样是没有 FP 语言的精确定义或此类语言应该具备的一组精确特性。总的来说，认定一种语言是否是函数式，应该看这种语言是否支持 FP 相关的常见编程风格。
>
> > JS 可以
> > 被认为是功能性的，因为有几个特征，例如一等的 Fucntion，
> > 匿名函数、递归和闭包。在另一
> > 一方面，JS 有很多非 FP 方面，例如副作用、可变对象（动态对象）和
> > 递归的实际限制。因此，当以函数式方式编程时，我们将采用
> > 利用所有相关的 JS 语言特性.

### js 命名历史

> Mocha--> LiveScript--> Javascript

### js 用于函数式的一些特性

- 函数作为一等对象(Function as first-class object)
- 递归: 递归对算法设计有很大帮助。通过使用递归，可以做到没有任何 while 或 for 循环
- 闭包: 闭包是实现数据隐藏的一种方式（使用私有变量），这导致模块和其他不错的功能。关键概念是当你定义一个函数时，它可以不仅引用它自己的局部变量，而且引用上下文之外的所有东西
  功能：
- 展开运算符

递归一点:

> 这是开发算法的最有效工具，也是解决大类问题的有力助手
> 的问题。这个想法是一个函数可以在某个时刻调用自己，并且当那个调用是
> 完成，继续处理它收到的任何结果。这通常很有帮助
> 对于某些类别的问题或定义。最常引用的例子是阶乘

设计方法,实现阶乘: 关键点

- 非负正数
- n = 0, n! = 1;
- n > 0, n! = n \* (n - 1)!

```js
// 设计: 计算n!阶乘
function fact(n) {
  if (n === 0) {
    return 1;
  }
  return n * fact(n - 1);
}
```

闭包一点: 闭包是实现数据隐藏的一种方式（使用私有变量），这导致模块和其他不错的功能。关键概念是当你定义一个函数时，它可以不仅引用它自己的局部变量，而且引用上下文之外的所有东西

例子:

```js
// 基于这个例子，可以理解。闭包算是对函数作用域的延续继承。
function newCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let nc = newCounter();

nc(); // 1
nc(); // 2
nc(); // 3
```

::: tip
闭包算是 js 函数式一范式中，不好的特性点。因为它违背了函数式无副作用特点.
:::

遗留任务点:

- 爬升阶乘：我们的阶乘实现开始乘以 n，然后乘以
  n-1，然后是 n-2，依此类推，我们可以称之为向下的方式。你能写一个新的
  阶乘函数的版本，会向上循环吗？

- 类作为第一对象，为什么, 思考如下一段代码

```js
const makeSaluteClass = (term) =>
  class {
    constructor(x) {
      this.x = x;
    }
    salute(y) {
      console.log(`this${this.x} says ${term} to ${y}`);
    }
  };

const Spanish = makeSaluteClass("HOLA");
new Spanish("ALFA").salute("BETA"); // HOLA says ALFA to BETA

new (makeSaluteClass("HELLO"))("GAMMA").salute("DELTA"); // HELLO says GAMMA to DELTA;

const fullSaltute = (c, x, y) => new c(x).salute(y);
const French = makeSaluteClass("BON JOUR");
fullSalute(French, "EPSILON", "ZETA"); // EPSILON says  BON JOUR to ZETA
```

## 思考函数式

> 从一个 web 业务开始，引发对函数式的应用思考。现在是对一个电商网站的商品进行支付的按钮实现，在此之前，还必须避免用户重复点击按钮，而导致再次扣费。

**解决方案一**：

（求佛方式，玩笑说法）此方案就是在支付按钮出，提醒用户不要重复进行支付。这种方案治标不治本。没有实际意义，不可避免用户就重复点击支付了。

**解决方案二**:

设置全局标量（flag）。在当前这次脚本进程。结束之前，使用一个全局变量表示用户当前这次支付状态。阻止用户在当前进程点击按钮，重复触发支付逻辑。可以解决问题

缺陷:

- 不便于测试，测试数据维护在全局
- 用户再次支付时，还必须重新重置全局量
- 全局变量冲突，导致值被修改的可能性。

**解决方案三**:

每次触发支付后，移除支付按钮上的事件处理器。可以解决问题，这种方案等效全局开关。

缺陷:

- 不便于测试，内部维护外边 DOM
- 每次执行还需要重置按钮上的事件处理器
- 代码和按钮高度耦合，不便于复用。

**解决方案四**:

类似方案三，给按钮元素重新派发一个新的事件处理器，而不是方案三直接移除事件处理器。能够解决问题

缺陷和方案三一样。

**解决方案五**:

直接在按钮事件触发后，禁用按钮。避免再次开启。等同于方案三和四。事件处理器内部代码和按钮高度耦合。

**解决方案六**:

在支付事件发起时，重置按钮的事件处理器。将按钮上的当前事件处理器函数，重置为一个新的函数。能够解决问题，并且解耦和按钮。

缺陷：

- 不便于测试
- 需要保存函数原有的事件处理器。

**解决方案七**:

使用本地的标志变量`flag`, 而不是像方案二那样使用全局标志变量。使用 IIFE,声明按钮的事件处理器（内部返回事件处理器函数），并且在立即执行函数中传入标志变量。使用闭包维护。

```js
// 伪代码
let billTheUser = ((clicked) => {
  return (some, sales, data) => {
    if (!clicked) {
      clicked = true;
      window.alert("Billing the user...");
      // actually bill the user
    }
  };
})(false);
```

解决问题:

- 便于测试
- 解耦按钮

缺陷：

每次都需要重新设置事件处理器函数

### 函数式解决方案:

#### 基本原则

- 单一责任原则（the S in S.O.L.I.D)
- 原始基本函数不可变
- 使用一个新函数调用原始函数
- 使用一般化解决方案，解决任何数量级原始函数。

#### 高阶函数，实现原始函数的不可变。

```js
/*
 * @Author: wangshan
 * @Date: 2021-12-11 23:20:12
 * @LastEditors: wangshan
 * @LastEditTime: 2021-12-11 23:31:33
 * @Description:  高阶函数-once
 */
let once = (fn) => {
  let done = false; //  本地标量，控制原始函数执行
  let count = 0; // 原始函数执行次数.
  let res = "";
  return function (...args) {
    if (done) return { count, res };
    count++;
    res = fn(...args);
    done = true;
    return {
      res,
    };
  };
};

// 测试，计算两个数字的和
function sum(a, b) {
  return a + b;
}

let initialize = once(sum);

let sumbtn = document.querySelector("button");

sumbtn.addEventListener("click", () => {
  console.log(initialize(4, 4));
});
```

结果:
<img src="./../../public/img/func.png" align="center">

### 更好解决方案:

> 定义的高阶函数，在发起第二次调用时，将忽略。现在优化，为 once 的每次调用，做点反馈。而不是直接忽略调用。

```js
// 优化once，提供第二个参数
function onceAndAfter(fn, g) {
  //   debugger;
  let done = false;

  return (...args) => {
    if (!done) {
      done = true;
      return fn(...args);
    } else {
      return g(...args);
    }
  };
}

// 测试
let print = (tips) => tips;
initialize = onceAndAfter(sum, print);

console.log(initialize(4, 4)); // 8
console.log(initialize("no output")); // no output
console.log(initialize("no output")); // no output
console.log(initialize()); // undeinfed
```

### 结尾

- 不实用标志变量(done)实现 once

  > 可以不使用标志变量，但是必须利用闭包区维护原始函数执行状态。

- 交替函数(Alternating functions)

```js
// 类似
let sayA = () => console.log("A");
let sayB = () => console.log("B");
let alt = alternator(sayA, sayB);
alt(); // A
alt(); // B
alt(); // A
alt(); // B
alt(); // A
alt(); // B

// 实现细节
//实现这个函数，仍然使用标志变量（flag）
function alternating(foo, fun) {
  let foocalled = false;
  return () => {
    if (!foocalled) {
      foocalled = true;
      foo();
    } else {
      foocalled = false;
      fun();
    }
  };
}
// 测试
let sayA = () => console.log("A");
let sayB = () => console.log("B");

initialize = alternating(sayA, sayB);

initialize(); // A
initialize(); // B
initialize(); // A
initialize(); // B
initialize(); // A
initialize(); // B
initialize(); // A
```

- 实现函数执行次数，类似 once. 只是原始函数执行次数扩大了。

```js
/**
* @param {function} fn  原始函数
* @param {number} n    执行次数
*
*/
let thisManyTimes = (fn, n) = > {
  let start = 0;

  return function(...args) {
      if(start <= n) {
          start++
          fn(...args)
      } else {
          return 'excuted complete'
      }
  }
}

// 测试

function message(msg) {
return msg;
}

let manyTime = thisManyTimes(message, 5);
// 设置函数执行5
console.log(manyTime("hello")); // hello
console.log(manyTime("hello")); // hello
console.log(manyTime("hello")); // hello
console.log(manyTime("hello")); // hello
console.log(manyTime("hello")); // hello

console.log(manyTime("hello")); // excuted complete
```

## 函数式技术

**函数式技术点(部分)**

- 注入(injection)
- callback 和 promise, 延续调用风格
- plolyfilling 和 stubbing
- 立即调用计划(immediate invocation schemes)

### lambda 演算-函数定义

> 函数 lambda 微积分中, 函数可以表示成 `λx.2*x`, λ 后的变量 x 是传递给函数的参数(parameter,形参). 表达式后的 点是替换作为参数传递任何值(argument，实参)的地方.
> 关于`λx.2*x`lambda 表达式理解, 以表达式中点作为分界点。前半部分`λx`是函数的参数表示方法，也就是函数有哪些参数的表示;后半部分是整个函数的逻辑部分。用于参数传递，计算函数值。

**函数定义的几种方式**

- function 关键字
- 匿名函数表达式

**匿名函数表达式函数声明相关**:

> 单独领出来谈这个，是因为匿名函数表达式在 js 中，就是作为变量值的方式声明的。在 js 中就存在变量提升（hoisting）。函数和变量都是变量声明，都会有变量提升。而且函数会优先于变量提升。也就是函数在代码中，更靠前（抽象形式）。注意，赋值不会发生变量提升。提升的是变量声明部分。如果声明和赋值在一块，那么变量和函数的访问，就只能在赋值过后访问。

```js
// foo();   // refrenceError: 不能初始化之前访问 'foo'

let foo = function () {
  console.log(foo.name);
};

foo(); // foo.name === 'foo'
// 这里的错误是一个引用错误，而不是一个变量未定义错误。也就说明变量是提升了。
```

- 具名函数表达式

```js
let third = function foo() {
  console.log(third.name);
}; // foo
```

::: tip 提示
匿名函数更多在回调调用中使用。如果需要递归调用或者，错误追溯。使用具名函数更容易识别。
:::

- 立即调用函数表达式(IIFE)
  > 此函数表示方式，更多结合函数闭包来使用。如下

```js
let myCounter = (function (initialValue = 0) {
  let count = initialValue;
  return function () {
    count++;
    return count;
  };
})(77);

myCounter(); // 78
myCounter(); // 79
myCounter(); // 80
```

- Funcition,构造函数.动态创建函数，不推荐使用。

```js
let sum3 = new Function("x", "y", "z", "var t = x+y+z; return t;");
sum3(4, 6, 7); // 17
```

::: tip 注意
此方式创建的函数是在全局环境下执行的，也就是，函数作用于上承作用域是全局。即使作为闭包创建。Function 构造实列也只能访问，全局。
:::

- 箭头函数(arrow-func)

使用箭头函数几个注意点:

1. 箭头函数没有隐式的 this 绑定，以及 argument,和 new.target
2. 不能作为构造函数 constructor 使用
3. 不能作为生成器使用，因为再箭头函数内不允许 yeild

箭头函数特性:

1. lambda 中，函数只有一个返回值。相比，通常函数的做法，箭头函数允许省略 return. 注意如果返回值是一个对象，需要加上大括号.
2. 处理 this 问题，

this 绑定例子

```js
function ShowItself1(identity) {
  this.identity = identity;
  setTimeout(function () {
    console.log(this.identity);
  }, 1000);
}
let x = new ShowItself1("Functional");
// undefined
/**
 * showItself1函数内定时器，由于定时器调用时，所在的环境为全局。
 * 而callback参数，是在定时器内部调用，此方式调用时，回调函数不会继承定时器的this，而是将this绑定到全局this。
 *
 *
 */
```

**解决方案**
es5 解决:

1. 利用闭包，将 this 绑定到外部函数变量。
2. 使用 bind
3. 使用箭头函数

```js
function ShowItself2(identity) {
  this.identity = identity;
  let that = this; // 闭包

  setTimeout(function () {
    console.log(that.identity);
  }, 1000);

  setTimeout(
    function () {
      console.log(this.identity);
    }.bind(this), // bind
    2000
  );
  setTimeout(() => {
    // arrow func
    console.log(this.identity);
  }, 3000);
}
/**
 * 三种方式说明:
 * 1. 第一中利用闭包，将构造的this绑定到变量，内部函数通过作用域的方式访问。定时器的回调函数this，这里不再使用。忽略它。应为它再调用时，被绑定到了全局window.
 * 2. 第二种方式使用bind，将函数的this绑定到了构造的this
 * 3. 第三种使用匿名函数，因为匿名函数没有隐式的this参数，而是通过继承上级作用域的this.
 *
 */
```

3. 箭头函数 - arguments

> 箭头函数没有自己的 arguments 对象. 下面的例子我们通过`spread`运算符来搜集箭头实际参数。而替换调了无法使用 argument 的尴尬处境。

```js
const once = (func) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      func(...args);
    }
  };
};

// 接收任何数量级参数的处理方法
// 1. arguments
// 2. spread
function somethingElse() {
  // get arguments and do something
}
function listArguments() {
  console.log(arguments);
  var myArray = Array.prototype.slice.call(arguments);
  console.log(myArray);
  somethingElse.apply(null, myArray);
}
```

**arguments 转数据方法**

1. Array.prototype.slice.call(arguments)
2. Array.from(arguments)
3. let arr = [...arguments]

### 柯里化(Currying)

> 此方式考虑将函数的参数进行拆分.在 lambda caculus 中，函数就无需多个参数.

currying 例子引发函数式思考

```js
let sum1 = (x, y, z) => x + y + z;

// ||

let sum = (x) => (y) => (y) => x + y + z;
```

上面的求和函数，由三个参数，一步一步往下拆分为返回接收一个参数的函数. 此方式是 curry 应用的体现。一种单一的数据流向。总的来说是函数式的特点。

### function as first-class object

> 函数作为一级对象使用。

**React + Redux + reducer**

> 在 redux 中，对于全局状态的访问，修改等操作。都是通过 action 去匹配。不过修改全局状态，再此之前，设计了一个调度表。而这个调度表就是利用了函数一级对象特点构建.

形式如下:

```js
function doAction(state = initialState, action) {
  const dispatchTable = {
    CREATE: (state, action) => {
      // update state, generating newState,
      // depending on the action data
      // to create a new item
      return newState;
    },
    DELETE: (state, action) => {
      // update state, generating newState,
      // after deleting an item
      return newState;
    },
    UPDATE: (state, action) => {
      // update an item,
      // and generate an updated state
      return newState;
    },
  };

  return dispatchTable[action.type]
    ? dispatchTable[action.type](state, action)
    : state;
}
```

### lambda 演算-Beta 规则(规约)

```js
// 以一个lambda算子为例子
lambada x.2*x // 通过规约法则, 此lambda等价于

f(x) // 不在需要return
```

::: tip 提示
在 lambda 规约法则中，如果两个 lambda 算子输入输出一样，则他们外延相等。在 js 中，在使用函数时，如果函数的返回参数数据做额外计算操作，此时无需额外在函数内部使用闭包。直接将额外计算的部分函数声明，作为参数传给回调部分。即 lambda 规约, x => fn(x) ==> x 替换 为 fn(x)
:::

### 函数的隐式风格

> 在使用函数的时候，对于回调的隐式参数调用，不需要为回调函数显示指定参数

```js
// 比如这样
function someFunction(someData) {
  return someOtherFunction(someData);
}
// 而是直接把处理函数作为参数使用
// 改进使用
[someFunction(someOtherFunction(someData))];
```

## 以 FP 使用函数

### injection

> 注入方式，为函数提供更多功能.以 js 数据排序 sort 来说。直接调用 sort, 默认以字符串 ASCLL 规则来比较排序。如果需要额外排序规则，则可以为 sort 传入比较函数.
>
> > 这种方式在 FP 中，被称之为策略设计模式. 使用函数作为参数,为原功能 api 注入新的功能

数据排序方法`sort`

```js
// 原地排序算法。原数组已被修改
let nums = [20, 10, 40, 30, 100, 50, 70, 50];

nums.sort();
// Array.prototype.sort.call(nums);
// Array.prototype.sort.bind(nums)();
console.log(nums); //  [10, 100, 20, 30, 40, 50, 50, 70]

// 提供比较函数
nums = [20, 10, 40, 30, 100, 50, 70, 50];
console.log(nums);
// 通过注入比较函数，来实现自定义比较.
nums.sort((a, b) => {
  console.log(a, b);
  //   if (a - b > 0) {
  //     // return 1;
  //   } else if (a - b < 0) {
  //     return -1;
  //   } else {
  //     return 0;
  //   }
  return b - a;
});
console.log(nums);
```

#### 更多 callback,函数作为参数

- promise
- 异步编程(回调方式)
- Continunation Passing Style(延续传递风格)
  > 禁用 return 语句进行编程设计. 函数式编程的延续调用风格。（异步 I/O）过程已准备好返回给调用者，它将调用而不是实际返回
  > 通过回调。在这些术语中，回调为被调用的函数提供了方法继续这个过程，因此命名为 Continuation

**深入延续调用 CPS**

异步任务处理。常见的 ajax 请求，使用回调处理器(CPS)，实现对 I/O 返回和异常返回的接收，而不是直接在调用方返回结果.

```js
function doSomething(a, b, c, normalContinuation, errorContinuation) {
  let r = 0;
  // 计算。。。。
  // 存储计算结果到r
  // 产生错误,调用错误处理函数
  // errorContinuation("description of the error")
  // 将 r 结果传递给正产callback
  // normalContinuation(r)
}
```

### Polyfill,动态分配函数

> 将函数分配到不同的变量.有效定义 polyfill

#### 检测 Ajax 的支持情况

> 不同浏览器对 ajax 的构建对象 api 支持情况不一样，下面对不同浏览器进行检测.

```js
// 初始版本
// 缺点是，每次调用都需要从新从头进入流程控制if-else
function getAjax() {
  let ajax = null;
  if (window.XMLHttpRequest) {
    // modern browser? use XMLHttpRequest
    ajax = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // otherwise, use ActiveX for IE5 and IE6
    ajax = new ActiveXObject("Microsoft.XMLHTTP");
  } else {
    throw new Error("No Ajax support!");
  }
  return ajax;
}
// 改进版本,因为检测结果是明确的，无需多次检测
// 使用函数的firt-calss object特性，定义两个不同函数，来接收不同检测结果。
// 动态函数分配的应用
(function initializeGetAjax() {
  let myAjax = null;
  if (window.XMLHttpRequest) {
    // modern browsers? use XMLHttpRequest
    myAjax = function () {
      return new XMLHttpRequest();
    };
  } else if (window.ActiveXObject) {
    // it's ActiveX for IE5 and IE6
    myAjax = function () {
      new ActiveXObject("Microsoft.XMLHTTP");
    };
  } else {
    myAjax = function () {
      throw new Error("No Ajax support!");
    };
  }
  window.getAjax = myAjax;
})();
/**
 * 
 * 这段代码展示了两个重要的概念。首先，我们可以动态地分配

函数:当此代码运行时，窗口。getAjax(即全局getAjax变量)将

根据当前浏览器获取三个可能值中的一个。当稍后调用时

代码中的getAjax()将执行正确的函数，而不需要做任何进一步的操作

浏览器检测测试。
 * 
 * 
*/
```

为当前浏览器环境添加字符串 includs 方法

```js
(() => {
  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      "use strict";
      if (typeof start !== "number") {
        start = 0;
      }
      if (start + search.length > this.length) {
        return false;
      } else {
        return this.indexOf(search, start) !== -1;
      }
    };
  }
})();
```

### Stubbing

> 让一个函数做不同的工作

取决于环境。这个想法是做存根，一个来自测试的想法

意思是用另一个函数替换一个更简单的函数，而不是实际的函数

工作。

### Immediate invocation

> 通常在流行的库和

框架，它可以让你在 JS(甚至是更老的版本!)中引入一些模块化

其他语言的优势

类似于

```js
(function () {
  // do something...
})();
```

### 总结

1. 简化的 action 调度表

```js
const doAction3 = (state = initialState, action) =>
  (dispatchTable[action.type] && dispatchTable[action.type](state, action)) ||
  state;
/**
 * 程序经典的地方在于，使用逻辑运算符来实现三元运算符一样的结果。
 *
 *
 */
```

## 纯函数

### 关键点:

1. 纯函数思想
2. 引用透明
3. 副作用
4. 纯函数特点
5. 非纯函数的情况
6. 非纯函数解决方法
7. 测试纯函数与非纯函数方法

### 纯函数条件:

- 输入输出一致

  > 给定相同的参数，函数总是计算和返回相同的结果。无论函数被调用多少次，和在什么情况下调用。这个结果值不能依赖于任何外部信息或状态，这些信息或状态可能在程序执行期间更改，并导致它返一个不同的值。函数的结果也不能依赖于 I/O 结果、随机数或其他其他外部变量，非直接可控值。

- 输出无耦合
  > 当使用函数计算结果时，该函数运行期间不会导致任何明显的副作用。这写副作用有，输出到 I/O 设备，突变对象(mutaion of object), 改变函数以外的状态等。

**幂等和幂等函数**

### 幂等：

> 编程中一个幂等操作的特点是其任意多次执行所产生的影响均与一次执行的影响相同。幂等函数，或幂等方法，是指可以使用相同参数重复执行，并能获得相同结果的函数。这些函数不会影响系统状态，也不用担心重复执行会对系统造成改变

幂等函数的副作用:

> 幂等操作，能够保存任意多次操作，其结果与一次执行的结果保持一致。但幂等函数仍然还是能够产生副作用。

幂等函数和存函数的区别：

> 两者都能够保证，多次执行的结果与一次执行结果一致。但是幂等函数的副作用能确够更新外部状态。这就与纯函数的的特点相悖。

**FP 编程 function**

1. 单一职责： 函数除当前所处理的任务，并且当前作用域所依赖的状态外，别无其他，并且也不会处理其他不相关事情。
2. 引用透明(Refrential Transparency): 在数学里，引用透明是一个允许使用自身值替换表达式的特性，并且不会改变其他结果。

引用透明反面，即引用不透明（Refrential Opacity）,引用不透明度不能保证每次执行结果一致，即使参数相同。

实例:

> js 编译器(compiler)进行常量(constant)折叠优化. 利用数学表达式和函数引用透明(Refrential transparency)特性。

```js
const x = 1 + 2 * 3

// 优化（optimizing）等价写法
const x = 1 + 6

// 更好的优化
const = 7
```

例子说明: 对于上面的常量赋值表达式的优化，都是在 js 编译期间进行的。 而不是到运行期环境下，还要做表达式计算求职，然后在对表达式结果存储。

::: tip 提示
在 lambda caculus 中，可以进行规约（redution）运算。使用一个值替换一个 lambda 表达式，并且表达式中包含函数计算，此操作也称为 beta 规约。进行规约运算的目的在于替换 lambda 表示中冗余的抽象函数. 注意进行替换的时候确保引用透明。
:::

**引用透明的例子**

> 所有算术表达式(包括数学运算符和函数)都是引用透明, 比如`22 * 9` 总是可以被 `198` 替换。包含 I/O 的表达式是不透明，因为它们的结果在执行之前是不可知的。同样的道理，涉及日期和时间相关函数或随机数的表达式，也不透明。
>
> > js 函数可以实现确保引用透明特性的函数，但函数不一定需要返回值。函数也可以没有返回值，js 中函数默认返回`undefined`。

::: tip 提示
一些语言区分函数, 函数预期返回值或者返回不包括任何值得过程。并且这些语言还提供确保引用透明的方法.
:::

### js 函数分类

- 纯函数: 返回一个值，该值仅仅依赖其输入的参数.
- 副作用函数: 不返回任何值，产生副作用(js 的有些函数返回 undefined, 和这里的副作用不相关。因为返回 undefined 也可以是引用透明的)
- 使用的副作用函数: 此类函数有返回值，输出结果不只是依赖函数参数，也可能有外部参数.

### 副作用(side effect)

> 可以认为外部状态的变化.在编程中，一些计算和操作的执行过程与外部元素发生相互作用。这写外部元素包括用户，web 服务等

**常见副作用:**

1. 修改全局变量
2. 改变作为参数接收的对象。
3. 执行 I/O 操作，常见的如`alert`或`console.log`
4. 使用和更改文件系统
5. 更新数据库
6. 调用 web 服务(接口使用)
7. DOM 查询和修改
8. 触发外部进程
9. 纯函数对非纯函数的调用，产生的关联影响，即不纯。

分析上述副作用例子:

- 修改全局变量
  > 最常见的原因是非局部变量的使用，与程序的其他部分共享全局状态。由于纯函数，根据定义，如果函数引用相同的输入参数，总是返回相同的输出值。任何在其内部状态之外的东西，都会自动变得不纯。此外,这使调试的变得困难，要理解一个函数做了什么, 必须了解当前状态是如何得到当前得状态值的。

```js
let limitYear = 1999;
const isOldEnough = (birthYear) => birthYear <= limitYear;

console.log(isOldEnough(1960)); // true
console.log(isOldEnough(2001)); // false

/**
 * 该方法用于测试一个人是否满足满足18岁。但是此变量依赖外部变量limitYear.而且该变量仅使用用于2021往前计算的截止时间。也就是2003。如果外部变量被意外变更，将会导致此函数功能不明确。
 * 这就是使用外部变量所带来的副作用。
 *
 *
 */
```

反面例子:

```js
// 设计计算圆面积函数circleArea
const PI = Math.PI;

const circleArea = (r) => PI * Math(r, 2);

/**
 * 该方法确认为无副作用，保证引用透明
 * 方法确实依赖一个外部变量PI,但是外部变量是作为一个常量被声明。与上面的例子不同。该常量不能被意外变更。对于给定的圆半径，函数输出结果一致。
 *
 *
 */
```

- 内部变量(inner state):
  > 内部状态的副作用的，通常是使用闭包的方式维护一个局部的固定的状态。内部的函数根据局部的状态，每次输入相同的参数，会返回不同的结果。

```js
const roundFix = (() => {
    let accum = 0;

    return (n) => {
        let noRounded = accum => 0 ? Math.ceil(n) : Math.floor(n)
        console.log('accum', accum.toFixed(5), 'result', noRounded)
        accum += n - noRounded
        return noRounded
    }
}())
```
