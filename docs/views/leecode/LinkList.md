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
