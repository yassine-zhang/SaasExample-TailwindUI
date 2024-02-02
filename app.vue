<template>
  <AppHeader />
  <NuxtPage></NuxtPage>
</template>
<script setup lang="ts">
useHead({
  link() {
    return [{ rel: "icon", type: "image/png", href: "/favicon.ico" }];
  },
});
</script>
