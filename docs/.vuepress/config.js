/*
 * @Author: wangshan
 * @Date: 2021-10-18 01:13:37
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-26 21:37:02
 * @Description: 应用配置
 */
module.exports = {
  base: "/algorithm/",
  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css",
      },
    ],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "数据结构与算法",
      description: "Vue 驱动的静态网站生成器",
    },
    "/zh/": {
      lang: "en-US",
      title: "VuePress",
      description: "Vue-powered Static Site Generator",
    },
  },

  themeConfig: {
    sidebarDepth: 6,
    lastUpdated: true,
    lastUpdatedText: "最近更新于",
    logo: "https://avatars.githubusercontent.com/u/43908467?v=4",
    locales: {
      "/zh/": {
        // navbar
        selectLanguageName: "English",
        selectLanguageText: "language",
        selectLanguageAriaLabel: "选择语言",
      },

      /**
       * Chinese locale config
       */
      "/": {
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",
      },
    },
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "文档",
        link: "/views/guide/",
      },
      {
        text: "leetcode",
        children: [
          {
            text: "初级",
            link: "/views/leecode/",
            activeMatch: "/views/leecode/primary/",
          },
          {
            text: "中级",
            link: "/views/leecode/intermediate/",
            activeMatch: "/views/leecode/intermediate/",
          },
        ],
        link: "/views/leecode/",
      },
      {
        text: "threeJs",
        children: [
          {
            text: "基本",
            link: "/views/theev/base.md",
            activeMatch: "/views/theev/base.md",
          },
          {
            text: "实践",
            link: "/views/theev/practice.md",
            activeMatch: "/views/theev/practice.md",
          },
        ],
      },
      {
        text: "css",
        children: [
          {
            text: "概念",
            link: "/views/css/index.md",
            activeMatch: "/views/css/index.md",
          },
          {
            text: "效果",
            link: "/views/css/practice.md",
            activeMatch: "/views/css/practice.md",
          },
        ],
      },
      {
        text: "编程",
        link: "/views/program/",
      },
      //   {
      //     text: "选择语言",
      //     children: [
      //       {
      //         text: "中文",
      //         link: "/",
      //         activeMatch: "/s",
      //       },
      //       {
      //         text: "English",
      //         link: "/zh/",
      //         activeMatch: "/zh/",
      //       },
      //     ],
      //   },

      {
        text: "GitHub",
        link: "https://github.com/front-end-open/algorithm",
      },
    ],
    sidebar: {
      "/views/guide/": [
        {
          text: "开始",
          children: [
            {
              text: "介绍",
              link: "/views/guide/",
            },
            {
              text: "数据结构",
              link: "/views/guide/datastruc.md",
            },
            {
              text: "算法",
              link: "/views/guide/Algorithm.md",
            },
          ],
        },
      ],
      "/views/leecode/": [
        {
          text: "leetcode",
          children: [
            {
              text: "链表",
              link: "/views/leecode/primary/LinkList.md",
            },
            {
              text: "数组",
              link: "/views/leecode/primary/Array.md",
            },
          ],
        },
      ],
    },
  },
  markdown: {
    extendMarkdown: (md) => {
      md.set({ breaks: true });
      md.use(require("markdown-it-katex"));
    },
    anchor: {
      level: [1, 2, 3, 4, 5, 6],
    },
    extractHeaders: {
      level: [2, 3, 4, 5, 6],
    },
  },
};
