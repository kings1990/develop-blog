import comp from "/Users/kings/develop/idea/develop-blog/src/.vuepress/.temp/pages/java/index.html.vue"
const data = JSON.parse("{\"path\":\"/java/\",\"title\":\"Java 相关知识\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Java 相关知识\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"Java\"],\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/java/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"开发者博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Java 相关知识\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Java 相关知识\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Kings\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"java/README.md\",\"excerpt\":\"\"}")
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
