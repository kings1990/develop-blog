import { CodeTabs } from "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.69_markdown-it@14.1.0_vuepress@2.0.0-rc.19/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.69_markdown-it@14.1.0_vuepress@2.0.0-rc.19/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.69_markdown-it@14.1.0_vuepress@2.0.0-rc.19/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
