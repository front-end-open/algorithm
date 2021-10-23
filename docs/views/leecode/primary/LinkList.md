# 链表

## 初级

> 链表数据元数基本操作

### 1. 删除链表中的节点

_删除链表中的节点_

现有一个链表 -- head = [4,5,1,9]，它可以表示为:

<img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/01/19/237_example.png">

实列 1:

```javascript
输入：head = [4,5,1,9], node = 5
输出：[4,1,9]
解释：给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
```

示例 2：

```javascript
输入：head = [4,5,1,9], node = 1
输出：[4,5,9]
解释：给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.

```

::: tip
提示：
:::

- 链表至少包含两个节点。
- 链表中所有节点的值都是唯一的。
- 给定的节点为非末尾节点并且一定是链表中的一个有效节点。
- 不要从你的函数中返回任何结果。

解答：

```javascript
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
```

### 2.删除链表的倒数第 N 个节点

> 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
> 进阶：你能尝试使用一趟扫描实现吗？

示例 1:

<img src="https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg">

```javascript
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

示例 2：

```javascript
输入：head = [1], n = 1
输出：[]
```

示列 3:

```javascript
输入：head = [1,2], n = 1
输出：[1]
```

::: tip
提示：
:::

链表中结点的数目为 sz

- 1 <= sz <= 30
- 0 <= Node.val <= 100
- 1 <= n <= sz

解答:

```javascript
var removeNthFromEnd = function (head, n) {
  let current = head;
  let count = getLength(head);
  let pre = count - n;
  if (pre === 0) {
    return head.next;
  }
  for (let i = 0; i < pre - 1; i++) {
    current = current.next;
  }

  current.next = current.next.next;

  return head;
};

function getLength(head) {
  let current = head;
  let count = 0;
  while (current != null) {
    current = current.next;
    count++;
  }

  return count;
}
```

3. 反转链表
   > 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

示范 1:

<img src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg">

```js
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

示范 2:

<img src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg">

```js
输入：head = [1,2]
输出：[2,1]

```

示范 3:

```js
输入：head = []
输出：[]
```

提示:

- 链表中节点的数目范围是 [0, 5000]
- -5000 <= Node.val <= 5000

进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

考察点: _递归_，_链表_

解答:

```js

..

```

4. 合并两个有序链表
   > 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

示范 1:
<img src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg">

```js
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

示范 2:

```js
输入：l1 = [], l2 = []
输出：[]
```

示范 3:

```js
输入：l1 = [], l2 = [0]
输出：[0]
```

提示：

- 两个链表的节点数目范围是 [0, 50]
- -100 <= Node.val <= 100
- l1 和 l2 均按 非递减顺序 排列

考察点: _递归_, _链表_

解答:

分析:

1...

2...

```js
....
```

5.  回文链表
    > 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

示范 1:

<img src="https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg">

```js
输入：head = [1,2,2,1]
输出：true
```

示范 2:

<img src="https://assets.leetcode.com/uploads/2021/03/03/pal2linked-list.jpg">

```js
输入：head = [1,2]
输出：false
```

提示:

- 链表中节点数目在范围[1, 105] 内
- 0 <= Node.val <= 9

考察点： _栈_， _递归_，_链表_，_双指针_

解答:

分析:

1...

2...

```js
....
```

1. 环形链表

> 给定一个链表，判断链表中是否有环。
> 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
> 如果链表中存在环，则返回 true 。 否则，返回 false

进阶：你能用 O(1)（即，常量）内存解决此问题吗？

示范 1:

<img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png">

```js
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

示范 2:

<img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png">

```js
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点

```

示范 3:
<img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png">

```js
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。

```

提示：

- 链表中节点的数目范围是 [0, 104]
- -105 <= Node.val <= 105
- pos 为 -1 或者链表中的一个 有效索引

考察点: _哈希表_, _链表_, _双指针_

解答:

分析:

1...

2...

```js
....
```
