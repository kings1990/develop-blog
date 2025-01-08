import comp from "/Users/kings/develop/idea/develop-blog/src/.vuepress/.temp/pages/idea/ideaPlugin/index.html.vue"
const data = JSON.parse("{\"path\":\"/idea/ideaPlugin/\",\"title\":\"Idea Plugin\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Idea Plugin\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/idea/ideaPlugin/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"开发者博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Idea Plugin\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Idea Plugin\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
