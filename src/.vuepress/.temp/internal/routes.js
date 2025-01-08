export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/kings/develop/idea/develop-blog/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"开发者博客","i":"home"} }],
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"/Users/kings/develop/idea/develop-blog/src/.vuepress/.temp/pages/intro.html.js"), meta: {"u":true,"v":"/assets/images/intro/cover.jpg","e":"\n<p>这是一个所有开发者都可以提交代码的博客论坛，欢迎大家分析自己的经验，帮助更多的开发者，同时你也可以把它当做自己的项目，从中学到很多技术。博客不需要注册登录、无任何广告。</p>\n<h2>为何要做这个博客</h2>\n<ol>\n<li>网上有太多的博客平台，分类特别多，但是感兴趣的分页很少，文章还会包含广告，查阅可能需要注册登录限制。</li>\n<li>审核机制不行，文章质量不高，很多文章都是抄袭的。</li>\n<li>源文件在自己手上，想展示成怎样支持自定义非常灵活。</li>\n</ol>\n<h2>为何是开放的</h2>\n<p>这样一来可以让更多的人参与进来，大家一起完善这个博客，分享自己的经验。你可以当做这个是自己博客，github 支持 fork 功能。同时大家可以评选哪个是好文章，并放入<a href=\"/star/\" target=\"_blank\">星标博客</a>。</p>","r":{"minutes":1.41,"words":424},"t":"简介","i":"circle-info","O":1,"y":"a"} }],
  ["/idea/ideaPlugin/beanAssistant.html", { loader: () => import(/* webpackChunkName: "idea_ideaPlugin_beanAssistant.html" */"/Users/kings/develop/idea/develop-blog/src/.vuepress/.temp/pages/idea/ideaPlugin/beanAssistant.html.js"), meta: {"a":{"name":"Kings","url":"https://github.com/kings1990"},"d":1704672000000,"l":"2024年1月8日","c":["IDEA 插件"],"g":["IDEA 插件"],"e":"<p>免费的IDEA生产力插件 <code>Bean Assistant</code>，显示 Spring 项目 Bean 的方法直接写调用插件帮忙 Bean 注入代码的编写</p>\n<figure><img src=\"/assets/images/beanAssistant/beanAssistant1.png\" alt=\"\" tabindex=\"0\" loading=\"lazy\"><figcaption></figcaption></figure>\n<p>前言<br>\n不知道你们在平时的工作场景中是否经常遇到以下的情况。在一个方法中，需要调用某个实例接口的方法。我们经常会先在该类里面先注入这个接口的实例 Bean,然后再调用起方法，如果这个类很长，我们需要翻到该类的很前面，先把注入方法写好，然后又返回方法体写调用。这种形式非常繁琐。</p>","r":{"minutes":1.37,"words":410},"t":"利用 Bean Assistant 快速注入 Bean","i":"object-group","y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/kings/develop/idea/develop-blog/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/idea/ideaPlugin/", { loader: () => import(/* webpackChunkName: "idea_ideaPlugin_index.html" */"/Users/kings/develop/idea/develop-blog/src/.vuepress/.temp/pages/idea/ideaPlugin/index.html.js"), meta: {"t":"Idea Plugin"} }],
  ["/idea/", { loader: () => import(/* webpackChunkName: "idea_index.html" */"/Users/kings/develop/idea/develop-blog/src/.vuepress/.temp/pages/idea/index.html.js"), meta: {"t":"Idea"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"/Users/kings/develop/idea/develop-blog/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/category/idea-%E6%8F%92%E4%BB%B6/", { loader: () => import(/* webpackChunkName: "category_idea-插件_index.html" */"/Users/kings/develop/idea/develop-blog/src/.vuepress/.temp/pages/category/idea-插件/index.html.js"), meta: {"t":"IDEA 插件 分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"/Users/kings/develop/idea/develop-blog/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/tag/idea-%E6%8F%92%E4%BB%B6/", { loader: () => import(/* webpackChunkName: "tag_idea-插件_index.html" */"/Users/kings/develop/idea/develop-blog/src/.vuepress/.temp/pages/tag/idea-插件/index.html.js"), meta: {"t":"标签: IDEA 插件","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"/Users/kings/develop/idea/develop-blog/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"/Users/kings/develop/idea/develop-blog/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"/Users/kings/develop/idea/develop-blog/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
