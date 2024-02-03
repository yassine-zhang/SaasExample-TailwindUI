<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
</script>
<template>
  <header
    class="relative z-20"
    style="box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"
  >
    <div class="container flex justify-between py-2">
      <div class="flex gap-2">
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/favicon.ico" width="24" />
          <span>Nuxt</span>
        </NuxtLink>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NuxtLink to="/dashboard" :class="navigationMenuTriggerStyle()">
                面板中心
              </NuxtLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" :class="navigationMenuTriggerStyle()"
                >文档</NavigationMenuLink
              >
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a target="_blank" href="#" :class="navigationMenuTriggerStyle()"
                >集成</a
              >
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a target="_blank" href="#" :class="navigationMenuTriggerStyle()"
                >资源</a
              >
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a target="_blank" href="#" :class="navigationMenuTriggerStyle()"
                >展示</a
              >
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a target="_blank" href="#" :class="navigationMenuTriggerStyle()"
                >企业</a
              >
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a target="_blank" href="#" :class="navigationMenuTriggerStyle()"
                >博客</a
              >
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div class="flex items-center gap-3">
        <div>Change Theme</div>
        <NuxtLink to="/dashboard" class="flex items-center">
          <Avatar>
            <AvatarImage
              src="https://github.com/radix-vue.png"
              alt="@radix-vue"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </NuxtLink>
      </div>
    </div>
  </header>
  <!--  <Separator />-->
</template>
