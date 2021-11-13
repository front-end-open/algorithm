---
sidebar: auto
---

# 基本特性

> 基本 css 概念，以及相关属性规则

## 关于 `id `选择器在多个不同元素出现时的，渲染规则表现

`解释： id 选择器，是 css 中，元素唯一标识符，但是这是一个约定，如果在开发中，将多个不同元素应用在同一元素，则会雨露均沾，每个元素都会渲染一定的相同规则.`

**实际测试**:

1. 使用`id`选择器

<img src="../../public/img/id-selector.png">

2. 使用`class`

<img src="..//../public/img/class-selecotr.png">

在线实例:

<iframe height="300" style="width: 100%;" scrolling="no" title="id #selector in multitype element" src="https://codepen.io/pachverb/embed/bGrjXbB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/pachverb/pen/bGrjXbB">
  id #selector in multitype element</a> by new/bird (<a href="https://codepen.io/pachverb">@pachverb</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 布局

### 快捷居中

> flex 格式化上下文中，任何设置了`margin:auto`的元素，最终都会呈线水平垂直居中。w3c 解释，就是在在该格式化上下文中，空闲的空间都会自动分配到元素自动 margin 中去。

适用性：

> 个人觉着，对于不定高元素来说，是一个比较好的方案；水平垂直居中最一般的方式就是通过，为元素设置固定宽高的尺寸，然后设置 margin:auto。但是开发中，实际很少设置元素的固定高度的，一般都是自适应内容的。所以这种快捷方案，对于不设置固定高度的元素，也能实现居中，是一种比较可靠的方案。

在线体验：

<iframe height="300" style="width: 100%;" scrolling="no" title="flex+margin-auto-to-center" src="https://codepen.io/pachverb/embed/YzxOmmq?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/pachverb/pen/YzxOmmq">
  flex+margin-auto-to-center</a> by new/bird (<a href="https://codepen.io/pachverb">@pachverb</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 双飞翼布局

关键点:

1. 通过 margin-left 确定左右两列位置，在通过 middle 容器中的子容器的 paddin 和 margin 来空出左右两列宽度
2. 双飞翼布局不需要设置外层容器元素的内外边距
3. 双飞翼布局的关键点 margin-left 取值为百分比时，是以其父元素的宽度为基准的

线上体验：

<iframe height="300" style="width: 100%;" scrolling="no" title="双飞翼" src="https://codepen.io/pachverb/embed/LYjgPdb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/pachverb/pen/LYjgPdb">
  双飞翼</a> by new/bird (<a href="https://codepen.io/pachverb">@pachverb</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 圣杯布局

> 对比双飞翼布局两种方式，两种布局体现形式别无二致，只是一个元素排布的问题，导致后期处理的创景比较多。

对于圣杯布局实现方式：

1. 浮动，这种同双飞翼布局一致
2. flex
3. grid 布局

具体实现：

- 在 container 中的三列设为浮动和相对定位(后面会用到)，center 要放在最前面，footer 清除浮动。
- 三列的左右两列分别定宽 200px 和 150px，中间部分 center 设置 100%撑满
- 这样因为浮动的关系，center 会占据整个 container，左右两块区域被挤下去了
- 接下来设置 left 的 margin-left: -100%;，让 left 回到上一行最左侧
- 但这会把 center 给遮住了，所以这时给外层的 container 设置 padding-left: 200px;padding-right: 150px;，给 left 和 right 空出位置
- 这时 left 并没有在最左侧，因为之前已经设置过相对定位，所以通过 left: -200px; 把 left 拉回最左侧
- 同样的，对于 right 区域，设置 margin-left: -150px; 把 right 拉回第一行
- 这时右侧空出了 150px 的空间，所以最后设置 right: -150px;把 right 区域拉到最右侧就行了

1. 浮动实现
在线 demo:
<iframe height="300" style="width: 100%;" scrolling="no" title="圣杯布局" src="https://codepen.io/pachverb/embed/zYdmrKa?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/pachverb/pen/zYdmrKa">
  圣杯布局</a> by new/bird (<a href="https://codepen.io/pachverb">@pachverb</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

2. 容器 flex 实现

- 顺序设置元素 left, center, right
- 给容器元素 container 设置 `display:flex`, 并且元素缩放控制 `flex： 1`
- 最后控制左右两列固定宽度设置即可.

在线体验:

<iframe height="300" style="width: 100%;" scrolling="no" title="圣杯布局-flex" src="https://codepen.io/pachverb/embed/qBXJZZd?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/pachverb/pen/qBXJZZd">
  圣杯布局-flex</a> by new/bird (<a href="https://codepen.io/pachverb">@pachverb</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

3. grid 实现

- 给 body 元素添加 display: grid;属性变成一个 grid(网格)
- 给 header 元素设置 grid-row: 1; 和 grid-column: 1/5; 意思是占据第一行网格的从第一条列网格线开始到第五条列网格线结束
- 给 footer 元素设置 grid-row: 1; 和 grid-column: 1/5; 意思是占据第三行网格的从第一条列网格线开始到第五条列网格线结束
- 给 left 元素设置 grid-row: 2; 和 grid-column: 1/2; 意思是占据第二行网格的从第一条列网格线开始到第二条列网格线结束
- 给 center 元素设置 grid-row: 2; 和 grid-column: 2/4; 意思是占据第二行网格的从第二条列网格线开始到第四条列网格线结束
- 给 right 元素设置 grid-row: 2; 和 grid-column: 4/5; 意思是占据第二行网格的从第四条列网格线开始到第五条列网格线结束-

在线 demo:

<iframe height="300" style="width: 100%;" scrolling="no" title="圣杯布局-grid" src="https://codepen.io/pachverb/embed/ExvdKXx?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/pachverb/pen/ExvdKXx">
  圣杯布局-grid</a> by new/bird (<a href="https://codepen.io/pachverb">@pachverb</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
