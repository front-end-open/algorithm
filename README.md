## wepack + ts 纯开发环境构建

### Feature

1. 开发环境构建

   - 开发环境热更新加载，及时编译
   - typescript 类型系统

2. 生产环境

   - es6/es7^转

3. 构建优化

### 准备

#### 安装

1. Webpack, Webpack-cli

   > webpack 模块，核心编译模块
   >
   > webpack-cli 提供打包，和开发服务。web pack-dev-server 官方两种方式提供本地开发服务，一个是 web pack-dev-server;另外一种情况是 webpack 开启服务

   @打包构建部分

   clean-webpack-plugin: 清除打包目录

   Html-webpack-plugin: 构建开发模板

   @文件模块部分

   - css: 样式文件打包 loader,包括预处理器语言的处理
   - Css: 样式文件拆分
   - Css: 兼容性打包构建: posts-loader, autoprefixer
   - 媒体文件处理: file-loader, url-loader

   @脚本文件兼容打包,babel

   babel-loader,

   @babel/core

   @babel/preset-env

   @babel/polyfill

   @开发环境工具：

   1. 热更新， webpack-dev-server

   @开发环境区分

   开发环境：

   > 完整得 source map, live-reloading(实时重新加载), hot module replacement(热模块替换)的本地 local server

   - 热更新

   - 无需压缩代码

   - 完整 sourcemap

   生产环境任务:

   - 代码压缩
   - 样式文件提取
   - 合理 sourceMap
   - 分割代码

   生产环境所用工具:

   Webpack-merge: 配置合并

   Copy-webpack-plugin: 拷贝静态资源[将已存在的单个文件或整个目录(public, index, assets/**/*)复制到生成目录 dist。]

   > 兼容性： copy-webpack-plugin@8.x --> webpack@4.x > Copy-webpack-plugin@9.x --> webpack@5.x

   Optimize-css-assets-webpack-plugin 压缩样式文件

   Uglifyjs-webpack-plugin: 压缩 js

   @ 优化

   方向：从配置入手，落实优化概念。主要优化点：包大小，打包效率

   具体：

   - 优化打包速度

     > 构建速度包括两方面，开发期间每次修改文件时，热更新速度；以及发布前 build 速度

     解决方案

     1. 合理的设置 mode 参数：webpack 内指定两种模式，dev,prod。prod 模式下会进行 tree shaking 去除无用代码以及 js 脚本混淆，压缩.

     2. 缩小文件搜索范围：

        - 别名配置：用于导入模块是，webpack 查找方式。默认情况下，webpack 会采用向上递归的方式去 node_modules 目录下去找。缩小搜索范围，加快构建速度。

        - include, exclude 选项配置，较少 webpack, 各种 loader 搜索转换时间。
        - extensions: 自定义后缀文件查找文件，评率较高的写在前面. 并且导入模块时，可以不指定后缀。

     3. 开启多进程 loader 转换

        使用 HappyPack 开启多进程 loader 转换。

        > 在 webpack 构建过程中，实际上耗费时间大多数用在 loader 解析转换以及代码的压缩中。日常开发中我们需要使用 Loader 对 js，css，图片，字体等文件做转换操作，并且转换的文件数据量也是非常大。由于 js 单线程的特性使得这些转换操作不能并发处理文件，而是需要一个个文件进行处理。HappyPack 的基本原理是将这部分任务分解到多个子进程中去并行处理，子进程处理完成后把结果发送到主进程中，从而减少总的构建时间

     4. 增强代码压缩

        > 工具：webpack-parallel-uglify-plugin

     5. 抽离第三方模块

        > 对于开发项目中不经常会变更的静态依赖文件。类似于我们的`elementUi、vue`全家桶等等。因为很少会变更，所以我们不希望这些依赖要被集成到每一次的构建逻辑中去。 这样做的好处是每次更改我本地代码的文件的时候，`webpack`只需要打包我项目本身的文件代码，而不会再去编译第三方库。以后只要我们不升级第三方包的时候，那么`webpack`就不会对这些库去打包，这样可以快速的提高打包的速度。

        > webpack 内置插件: DllPlugin DllReferencePlugin

     6. 配置缓存，通常情况下 webpack 构建时，每次都会从新构建。为了提高构建速度可以将较大文件使用缓存。一些 loader 内置缓存设置。默认情况下，缓存写入到了 node_modules/cache 目录下。

        > 工具: cache-loader

   - 优化打包文件体积

     > 打包速度进行了优化，还需要对打包文件体积优化。较大打包文件，会造成页面加载速度慢，浪费流量等。

     1. 分析打包后文件体积

        > Webpack-bundle-analyer:`webpack-bundle-analyzer`将打包后的内容束展示为方便交互的直观树状图，让我们知道我们所构建包中真正引入的内容

     2. externals

        > 按照官方文档的解释，如果我们想引用一个库，但是又不想让`webpack`打包，并且又不影响我们在程序中以`CMD、AMD`或者`window/global`全局等方式进行使用，那就可以通过配置`Externals`。这个功能主要是用在创建一个库的时候用的，但是也可以在我们项目开发中充分使用
        > `Externals`的方式，**将不需要打包的静态资源从构建逻辑中剔除出去，而使用 `CDN`
        > 的方式，去引用它们。**
        >
        > 有时我们希望我们通过`script`引入的库，如用 CDN 的方式引入的`jquery`，我们在使用时，依旧用`require`的方式来使用，但是却不希望`webpack`将它又编译进文件中。这里官网案例已经足够清晰明了，大家有兴趣可以点击了解

     3. Tree-shaking

        > 这里单独提一下`tree-shaking`,是因为这里有个坑。`tree-shaking`的主要作用是用来清除代码中无用的部分。**目前在`webpack4` 我们设置`mode`为`production`的时候已经自动开启了`tree-shaking`。但是要想使其生效，生成的代码必须是 ES6 模块。不能使用其它类型的模块如`CommonJS`之流**。如果使用`Babel`的话，这里有一个小问题，因为`Babel`的预案（preset）默认会将任何模块类型都转译成`CommonJS`类型。修正这个问题也很简单，在`.babelrc`文件或在`webpack.config.js`文件中设置`modules： false`就好了

     TODO: 完成自定义 loader, plugin 开发.

   > NOTE; 生产配置文件设置 mode 时，默认会对脚本文件进行压缩，但是启用对静态文件的压缩时，会破坏 js 压缩。因此需要另外开启压缩工具 ···Uglifyjs-webpack-plugin···。

   懒加载 chunk: 通过指定配置文件出口 output 字段属性：chunkFilename

   > 兼容性：
   >
   > webpack4.x --> html-webpack-plugin 4.x
   >
   > webpack5.x --> ts-loader8.x
   >
   > Webpack-cli[latest] --> webpack5.x
   >
   > Webpack-dev-server --> webpack4.x

2. 语法语法检查

   - Typescript

   - ts-loader,

   - eslint
   - Typescript-eslint

   > 本地安装 typescirpt-cli 工具，初始化配置文件 tsc --int
   >
   > Tslint:作为 typescript lint 工具。自 2019 起已经被弃用。进而扩展到 eslint 中，用于扩展对 typescript 语法检查。

   Eslint-配合 ts 实行 code 检查。

   @typescript-eslint-parser:

   - 让 eslint 理解 ts 语法
   - 必须，否则 eslint 在解析 ts 语法时，会想解析常规 js 语法一样而抛出错误.

   [`@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin):

   - 扩展 eslint 规则，检查 ts 格式。
   - Extend:recommented eslint 内置推荐规则集
   - @typescript-eslint/recommended： @typescript-eslint/recommented 包官方推荐规则集.

   .eslintignore 文件： 配置 eslint 忽略的检查文件。

3. Babel, babel-loader(仅完成对 es2015+语法转换，不包括新 api)，@babel/core, @babel/preset-env, @babel/polyfill(作为开发依赖安装 -S) 。完成对 es2015+ 语法转换，包括 api

### 使用

```bash
$ npm i
```

#### 运行

```bash
npm run dev
```

bundle 分析

```bash
npm run analyz
```

> Tips: 此特性需要进入 config, 注入插件。

### 交流

[@pachverb](1506262681@qq.com)
