<template><div><p>免费的IDEA生产力插件 <code v-pre>Bean Assistant</code>，显示 Spring 项目 Bean 的方法直接写调用插件帮忙 Bean 注入代码的编写</p>
<figure><img src="/assets/images/beanAssistant/beanAssistant1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>前言<br>
不知道你们在平时的工作场景中是否经常遇到以下的情况。在一个方法中，需要调用某个实例接口的方法。我们经常会先在该类里面先注入这个接口的实例 Bean,然后再调用起方法，如果这个类很长，我们需要翻到该类的很前面，先把注入方法写好，然后又返回方法体写调用。这种形式非常繁琐。</p>
<p>那么今天我们使用 Bean Assitant 就可以很好得解决这个问题，实现Bean 的快速注入，并且可以直接在光标所在行，直接写bean 的方法调用。</p>
<p>功能<br>
如下示例，接下来我们在 someMethod 中,调用 用了Spring的@Service 注解标记的BookService接口的updateName方法，我们选择带了插件光标的BookService并回车，然后插件就帮我们做好 Bean 的注入代码了，我们就可以直接在里面调用updateName并且输入对于的参数。</p>
<figure><img src="/assets/images/beanAssistant/beanAssistant2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>自定义<br>
当然了插件并不只支持用Spring系列注解标注的 Bean,我们还可以前往菜单栏 tools 下的Bean Assistant选项，自定义其他框架标注的注解并且需要注入的，例如 Mybatis 的 Mapper 接口，Dubbo 的 DubboService 等接口以及lombok构造器注入。</p>
</div></template>


