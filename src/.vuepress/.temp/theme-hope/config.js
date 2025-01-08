import { Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.67_markdown-it@14.1.0_sass-embedded@1.83.0_vuepress@2.0.0-rc.19/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.69_vuepress@2.0.0-rc.19/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, SocialMedias, Timeline, setupBlog } from "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.67_markdown-it@14.1.0_sass-embedded@1.83.0_vuepress@2.0.0-rc.19/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.67_markdown-it@14.1.0_sass-embedded@1.83.0_vuepress@2.0.0-rc.19/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";

import "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.69_vuepress@2.0.0-rc.19/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.69_vuepress@2.0.0-rc.19/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.69_vuepress@2.0.0-rc.19/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.67_markdown-it@14.1.0_sass-embedded@1.83.0_vuepress@2.0.0-rc.19/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
};
