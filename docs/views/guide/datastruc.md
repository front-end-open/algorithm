---
sidebar: auto
---

## 栈(stack)

### 栈的定义

> 定义，限定在表尾进行删除和插入操作的线性表.
>
> > 栈顶： 把允许删除和插入数据的一端
>
> > 栈底：相对于栈顶的另一端
>
> > 进出栈原则： 后进先出（LIFO）

::: tip
栈内元素的线性关系，栈也被描述为线性表.

> 栈的插入操作被称为，入栈
>
> 栈的删除操作被称为，出栈

:::

### 进出栈的变化形式

> 在不是所有元素都进出栈的情况，栈内元素进出栈的顺序是可以变化的，只要保证栈顶元素出栈即可.

```md
// 比如使用 123，三个元素，依次进栈，来描述不同的进出栈情况
// 顺序全部进栈

1. 1,2,3, 则，出栈的次序为， 1，2，3
2. 3，2，1，则，出栈的次序为，3，2，1

// 部分元素先完成进出栈的情况

3. 1, 进，出； 则，2， 3 依次进栈，最终出栈次序为，1，3，2
4. 1，进，出， 2，进，出，则，最终出栈次序为，2，1，3
5. 1，进，出，2，进，3，进。则，最终出战次序为，2，3，1
```

### 栈抽线数据类型

```md
ADT 栈(stack)

Data
同线性表。元素具有相同的类型，相邻元素具有前驱和后继关系

Operation
init: 初始化操作，简历一个空栈 S
destroyStack: 销毁栈
ClearStack: 清空栈
stackEmpty: 栈是否是空栈
getTop: 获取栈顶元素
Push: 插入元素
Pop: 删除栈顶元素
stackLength: 返回栈内元素个数
```

### 栈存存储结构

> 链式存储结构和顺序存储结构

#### 栈顺序存储结构

实现方式:

1. 数组： 为什么选择数组，那是因为数组天然就是线性表，适合用来表示栈这种数组结构。
2. 对象：选择对象，选择对象的原因是，对象的 key-map 形式，完全也可以作为栈的线性描述。

### 两栈的共享空间

> 当两个栈的内存空间，各自存在增加和压缩的相反趋势的增长情况时，就可以使用一个数组来共享两个栈的存储空间

使用时机:

1. 两个栈的数据元素的类型一致
2. 两个栈的存储空间存在相反增长趋势，即一个栈在增加元素，相反另一栈的内存空间就会被压缩。

设计要点:

:::tip

切入点： 两栈仍然使用 Stack 类的数据结构设计，在数组中，共享栈空间时，使用额外变量表示两栈在数组中的栈底表示。

:::

- 用一个数组来存储两个栈的存储空间，预先需要声明两个栈，如何确定两个栈的栈底在数组的位置？
- 除此之外，还需要考虑两个栈空间的大小，在数组中？
- 数组空间大小与两栈的关系?

### 栈的链式存储空间

> 使用单链表来实现，栈数据结构。而且这种结构不需要考虑栈空间的大小。
> 注意：栈是通过栈顶来插入和删除元素，所有的后续操作都是通过栈顶来继续。

**基本操作**

1. （push）入栈
   原理：每次入栈都是通过将新元素复制给栈顶指针，而后再将栈顶指针的引用复制给头指针。每次将新元素复制给栈顶指针`top`这一步的目的是，因为入栈操作是通过栈顶指针来继续的，所以每次栈顶指针`top`,都应该是记录的最新元素。

2. pop 出栈
   原理：找到栈顶的元素的前一位元素；保存栈顶元素的引用到临时变量`p`, 将栈顶的`p`示范。并将栈顶前一位元素，作为新的栈顶元素复制给，栈顶指针`top`。

**顺序栈特点**

1. 时间复杂度 O(1)
2. 空间复杂度开销大，因为需要预先预留内存空间，会造成内存浪费。
3. 但由于在存储定位时，是非常方便的。

**链栈特点**

1. 时间复杂度 O(1)
2. 无需声明预留内存空间
3. 存储定位比较复杂，因为每个数据元素，都存在指针的引用，这也就增加了内存开销。

**两种数据结构的选择**

> 如果在使用过程中，元素的变化不可预料则选择，链栈；反之，如果元素变化范围消，可预先确定，则选择顺序栈。

**栈的应用**

1. 阶乘
2. 递归求解斐波拉契数列

## 队列(Queue)

> 一种只允许在一端进行插入操作，在另一端进行删除操作的线性表. 遵循规则: FIFO(First In First Out), 即“先进先出”.
>
> > 队头: 删除数据的一端
>
> > 队尾: 插入数据的一端

::: tip 提示
关于队头和队尾的判定，可以参考生活中排队的例子. 根据先进先出的原则，对应排队就是，先来后到的原则，排在队伍头部的人，理所应当就应该先办理业务，排在后面的人，那就只能候着，等前面的人处理完业务。f
:::

队列抽象数据结构

```
ADT 队列(Queue)

Operation 操作
    InitQueue: 初始化队列
    DestoryQueue: 如队列存在，销毁队列
    ClearQueue: 将队列清空
    GetHead: 若队列存在且非空，用 e返回的队列期的头部元素
    EndQueue: 如队列Q存在，插入新元素e到队列Q的队尾.
    DeQueue: 删除队列Q中的头元素，并用e返回其值.
    QueueLength: 返回队列Q元素的个数.
```

### 队列的存储结构分类:

#### 顺序存储结构

1. 普通队列
2. 循环队列

构建过程:使用数组存储

1. 首先需要指定长度的数组, 来存放队列元素
2. 队列队首记录在数组下标为零的地方.
3. 其次遵循先进先出的原则，来出队操作.

采用此操作方式：复杂度分析

- 根据队首记录在，数组下表 0 处，导致复杂度为 O(n), 每次出队操作都需要移动 n 个元素，来保证元素顺序。
- 入队操作 复杂度 O(1), 由于不需要移动元素位置.

思考: 优化出队操作的性能，不需要再每次出队时，移动元素位置

一. 存放队首元素不一定需要定位在，数组下标 0 处，存放在其他位置也可以, 只要满足 FIFO 即可。

思考: 设定一个数组队列 a(n)，出队在队首，此处指针在 a[0]; 出队在队尾，此处指针在数组 a(N)(N < n), 即数组末尾处得下一个位置. 假设，入队时，元素只有一个多余，空间，那么此时，末尾处得指针指向何处？

**提示**: 此时，队列头部还有空余空间.

引发的问题: 队列超出数组空间.(假溢出).

**假溢出解决:**

> 假如队列队列尾部满了，则头部可以插入元素。这样头尾循环，首尾相接实现的线性存储结构，为循环队列.

普通队列相比较于循环队列，缺陷整理

1. 假溢出(普通队列)
2. 循环队列（首尾相等，队列不为空）

循环队列为空的判定:

> 队头位置和队尾位置相等，则此队列为空。（存在缺陷）, 解决方法:

- 设置标志变量`flag`, 如果，队头指针`head`， 队尾指针`tail` 相等，且`flag == 0`, 此时队列判定为空；当 `head === tail`, 且 `falg === 0`时队列满, 非空
- 预留一个空余空间，此时不在引用`head`, `fail`对等判读，而是以队列是否预留一个空余空间，作为判定队列是否为空的条件.

关于第二个解决方案得推理结论总结:

> 使用队列一个空闲位置，作为判定队列是否为满的条件; 判定是否为空仍然使用队列`head == teil`

结论如下:

:::tip 条件:

1. 队头 `head`
2. 队尾 `tail`
3. 队列最大长度 `QueueSize`

:::

- 队列满的条件: `{(tail + 1) % QueueSize === head`
- 队列实际长度: `{(tail - head) + QueueSize} % Queue`

算法设计:

```javascript
/*
 * @Author: wangshan
 * @Date: 2021-11-17 23:25:55
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-20 20:39:18
 * @Description: 循环队列
 */
import { ResStatus as Status } from "../../utils/index";
interface QueueElement<T> {
  [idx: number]: T;
}

export class CircleQueue<T> {
  private size: number; // 记录栈的长度
  private head: number; // 记录指向队列队首的指针
  private tail: number; // 记录指向队列尾部的指针
  private data: QueueElement<T>;

  constructor(k: number) {
    this.size = k;
    this.head = 0;
    this.tail = 0;
    this.data = {};
  }
  /**
   * Insert an element into the circular queue. Return true if the operation is successful.
   * @param {number} value
   * @return {boolean}
   */
  endQueue(value: T) {
    debugger;
    if (this.isFull()) {
      return Status.ERROR;
    }
    this.data[this.tail] = value;
    this.tail = (this.tail + 1) % this.size;
    return true;
  }
  /**
   * init new Queue
   * @param {number} k
   * @returns Circle
   */
  createNew(k: number) {
    return new CircleQueue(k);
  }

  /**
   * Delete an element from the circular queue. Return true if the operation is successful.
   * @return {boolean}
   */

  deQueue() {
    if (!this.isEmpty()) {
      if (this.tail === this.head) {
        this.tail = -1;
        this.head = -1;
        this.data = {};
      } else {
        delete this.data[this.head];
        this.head = (this.head + 1) % this.size;
      }
      return Status.OK;
    }
    return Status.ERROR;
  }
  /**
   * 获取队列长度
   * @return {number}
   */
  QueueLength() {
    return (this.tail - this.head + this.size) % this.size;
  }
  /**
   * Get the last item from the queue.
   * @return {number}
   */
  Rear() {
    return this.tail === -1 ? Status.ERROR : this.data[this.tail];
  }
  /**
   * Get the front item from the queue.
   * @return {number}
   */
  peek() {
    return this.head === -1 ? Status.ERROR : this.data[this.head];
  }

  isEmpty() {
    return this.tail === this.head;
  }
  /**
   * Checks whether the circular queue is full or not.
   * @return {boolean}
   */
  isFull() {
    return (this.tail + 1) % this.size === this.head;
  }
}



```

::: tip 提示
队列满时，队列需要空余一个位置。通过此方式，来区分通过 head === rear,来判断队列是否为空时，所造成的误解.
:::

#### 链式存储结构

> 由于单线表，和单线表的循环队列，分别存在位置移动的性能消耗，以及数组溢出。而选用指针的方式来实现队列，完全不需要考虑上面的问题。链表就是为了解决位置索引问题。链队列需要指针来维护元素的值，所以这是用空间性能来换取时间性能。
