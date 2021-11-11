---
sidebar: auto
---

# css

> 记录 css 开发中，一些边缘特性

### 关于 `id `选择器在多个不同元素出现时的，渲染规则表现

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
