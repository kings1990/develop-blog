import { hasGlobalComponent } from "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.69_vuepress@2.0.0-rc.19/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/@vueuse+core@12.3.0/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0-rc.69_vuepress@2.0.0-rc.19/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "unknown",
            prefix: "fa-brands fa-",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/all.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
}
