import { hasGlobalComponent } from "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.69_vuepress@2.0.0-rc.19/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.67_sass-embedded@1.83.0_vuepress@2.0.0-rc.19/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.67_sass-embedded@1.83.0_vuepress@2.0.0-rc.19/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "/Users/kings/develop/idea/develop-blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.69_vuepress@2.0.0-rc.19/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
