export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"IDEA 插件":{"path":"/category/idea-%E6%8F%92%E4%BB%B6/","indexes":[0]}}}},"tag":{"/":{"path":"/tag/","map":{"IDEA 插件":{"path":"/tag/idea-%E6%8F%92%E4%BB%B6/","indexes":[0]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

