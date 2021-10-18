/*
 * @Author: wangshan
 * @Date: 2021-10-18 01:13:37
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-19 00:38:32
 * @Description: 应用配置
 */
module.exports = {
  base: "/algorithm/",
  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",

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
    sidebarDepth: 2,
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
        link: "/views/leecode/",
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
        },
      ],
    },

    markdown: {
      anchor: {
        level: [1, 2, 3, 4, 5, 6],
      },
      extractHeaders: {
        level: [1, 2, 3, 4, 5, 6],
      },
    },
  },
};
