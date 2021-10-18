/*
 * @Author: wangshan
 * @Date: 2021-10-18 01:13:37
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-18 01:18:35
 * @Description: 应用配置
 */
module.exports = {
  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",

  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    navbar: [
      // NavbarItem
      {
        text: "Foo",
        link: "/foo/",
      },
      // NavbarGroup
      {
        text: "Group",
        children: ["/group/foo.md", "/group/bar.md"],
      },
      // 字符串 - 页面文件路径
      "/bar/README.md",
    ],
  },
};
