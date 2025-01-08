<template><div><h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h1>
<p>这是一个所有开发者都可以提交代码的博客论坛，欢迎大家分析自己的经验，帮助更多的开发者，同时你也可以把它当做自己的项目，从中学到很多技术。博客不需要注册登录、无任何广告。</p>
<h2 id="为何要做这个博客" tabindex="-1"><a class="header-anchor" href="#为何要做这个博客"><span>为何要做这个博客</span></a></h2>
<ol>
<li>网上有太多的博客平台，分类特别多，但是感兴趣的分页很少，文章还会包含广告，查阅可能需要注册登录限制。</li>
<li>审核机制不行，文章质量不高，很多文章都是抄袭的。</li>
<li>源文件在自己手上，想展示成怎样支持自定义非常灵活。</li>
</ol>
<h2 id="为何是开放的" tabindex="-1"><a class="header-anchor" href="#为何是开放的"><span>为何是开放的</span></a></h2>
<p>这样一来可以让更多的人参与进来，大家一起完善这个博客，分享自己的经验。你可以当做这个是自己博客，github 支持 fork 功能。同时大家可以评选哪个是好文章，并放入<RouteLink to="/star/">星标博客</RouteLink>。</p>
<h2 id="文章提交" tabindex="-1"><a class="header-anchor" href="#文章提交"><span>文章提交</span></a></h2>
<p>我们可以在 src 目录下制定不同的分类，在不同的目录下放置不同的文章即可。图片放在 assets 目录下，也可以使用链接。</p>
<h2 id="博客框架" tabindex="-1"><a class="header-anchor" href="#博客框架"><span>博客框架</span></a></h2>
<p>博客框架：<a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">vuepress-theme-hope</a></p>
<p>文章 Frontmatter 属性配置技巧：<a href="https://theme-hope.vuejs.press/zh/config/frontmatter/" target="_blank" rel="noopener noreferrer">https://theme-hope.vuejs.press/zh/config/frontmatter/</a></p>
<p>图标：<a href="https://fontawesome.com/search" target="_blank" rel="noopener noreferrer">https://fontawesome.com/search</a> ，使用尾缀即可，也可以放入 <code v-pre>/assets/icon</code> 目录下并使用 <code v-pre>/assets/icon/xxx.svg</code> 使用.</p>
<p>参考文章：<RouteLink to="/idea/ideaPlugin/beanAssistant.html">利用 Bean Assistant 快速注入 Bean</RouteLink></p>
<h2 id="本地运行" tabindex="-1"><a class="header-anchor" href="#本地运行"><span>本地运行</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">先决条件</p>
<p>环境安装：<a href="https://theme-hope.vuejs.press/zh/get-started/env.html" target="_blank" rel="noopener noreferrer">https://theme-hope.vuejs.press/zh/get-started/env.html</a>,</p>
<p>建议 node 安装最新版本。</p>
</div>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cd path/to/develop-blog</span></span>
<span class="line"><span>pnpm docs:dev</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


