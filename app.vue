<template>
  <AppHeader />
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
});
</script>
