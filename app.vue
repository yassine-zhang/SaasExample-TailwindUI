<template>
  <NuxtPage></NuxtPage>
</template>
<script setup lang="ts">
import { getRootPath } from "@/lib/utils";

useHead({
  link() {
    return [
      { rel: "icon", type: "image/png", href: `${getRootPath()}favicon.ico` },
    ];
  },
  title() {
    return "网站宣传主页";
  },
});
</script>
