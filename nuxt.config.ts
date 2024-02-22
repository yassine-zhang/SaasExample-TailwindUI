// https://nuxt.com/docs/api/configuration/nuxt-config
// import { getRootPath } from "./lib/utils";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-headlessui", "@bg-dev/nuxt-naiveui"],
  /** 设定基础URL，当处于生成环境也就是在github-pages中能够正常访问 */
  // app: {
  //   baseURL: getRootPath(),
  //   buildAssetsDir: "/static/",
  // },
  // Optionally change the default prefix.
  headlessui: {
    prefix: "", //Headless
  },
});
