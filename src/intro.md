---
icon: circle-info
cover: /assets/images/intro/cover.jpg
sticky: true
order: 1
---

# 简介

这是一个所有开发者都可以提交代码的博客论坛，欢迎大家分析自己的经验，帮助更多的开发者，同时你也可以把它当做自己的项目，从中学到很多技术。博客不需要注册登录、无任何广告。

## 为何要做这个博客
1. 网上有太多的博客平台，分类特别多，但是感兴趣的分页很少，文章还会包含广告，查阅可能需要注册登录限制。
2. 审核机制不行，文章质量不高，很多文章都是抄袭的。
3. 源文件在自己手上，想展示成怎样支持自定义非常灵活。

## 为何是开放的
这样一来可以让更多的人参与进来，大家一起完善这个博客，分享自己的经验。你可以当做这个是自己博客，github 支持 fork 功能。同时大家可以评选哪个是好文章，并放入[星标博客](/star/)。

## 文章提交
我们可以在 src 目录下制定不同的分类，在不同的目录下放置不同的文章即可。图片放在 assets 目录下，也可以使用链接。

## 博客框架
博客框架：[vuepress-theme-hope](https://theme-hope.vuejs.press/zh/)

文章 Frontmatter 属性配置技巧：[https://theme-hope.vuejs.press/zh/config/frontmatter/](https://theme-hope.vuejs.press/zh/config/frontmatter/)

图标：[https://fontawesome.com/search](https://fontawesome.com/search) ，使用尾缀即可，也可以放入 `/assets/icon` 目录下并使用 `/assets/icon/xxx.svg` 使用.

参考文章：[利用 Bean Assistant 快速注入 Bean](/idea/ideaPlugin/beanAssistant.md)

## 本地运行

::: tip 先决条件
环境安装：[https://theme-hope.vuejs.press/zh/get-started/env.html](https://theme-hope.vuejs.press/zh/get-started/env.html),

建议 node 安装最新版本。
:::

```
cd path/to/develop-blog
pnpm docs:dev
```