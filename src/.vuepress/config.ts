import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/develop-blog/",

  lang: "zh-CN",
  title: "开发者博客",
  description: "开发者博客，一个增长知识的静态博客平台",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
