import comp from "/Users/kings/develop/idea/develop-blog/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"开发者博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"开发者博客\",\"heroImage\":\"/logo.svg\",\"heroText\":\"开发者博客\",\"heroFullScreen\":true,\"tagline\":\"分享知识，启迪未来\",\"bgImage\":\"https://file.mo7.cc/api/public/bz\",\"projects\":[{\"icon\":\"/assets/icon/idea.svg\",\"name\":\"IDEA 技巧\",\"desc\":\"IDEA 中的骚操作技巧\",\"link\":\"/idea/\"},{\"icon\":\"/assets/icon/java.svg\",\"name\":\"Java\",\"desc\":\"Java 相关知识\",\"link\":\"/java/\"}],\"footer\":\"Just write it down\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://kings1990.github.io/develop-blog/develop-blog/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"开发者博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"开发者博客\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"开发者博客\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.23,\"words\":69},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
