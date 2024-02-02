// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  /** 设定基础URL，当处于生成环境也就是在github-pages中能够正常访问 */
  app: {
    baseURL:
      process.env.NODE_ENV === "production" ? "/background-template/" : "/",
    buildAssetsDir: "/static/",
  },
});
