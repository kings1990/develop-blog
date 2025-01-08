import CodeDemo from "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.67_markdown-it@14.1.0_sass-embedded@1.83.0_vuepress@2.0.0-rc.19/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.67_markdown-it@14.1.0_sass-embedded@1.83.0_vuepress@2.0.0-rc.19/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};