<script setup lang="ts">
import { getRootPath } from "@/lib/utils";

useHead({
  link() {
    return [
      { rel: "icon", type: "image/png", href: `${getRootPath()}favicon.ico` },
    ];
  },
  title() {
    return "Saas产品模版";
  },
});
</script>
<template>
  <NuxtPage></NuxtPage>
</template>
<style>
html {
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC",
    "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei",
    sans-serif;
}
</style>
