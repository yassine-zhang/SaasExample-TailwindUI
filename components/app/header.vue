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
  <header>
    <div class="flex justify-between items-center mx-5">
      <div class="flex gap-2">
        <NuxtLink to="/" class="p-2 m-2 border border-gray-500"
          >Logo Area</NuxtLink
        >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NuxtLink to="/dashboard" :class="navigationMenuTriggerStyle()">
                面板中心
              </NuxtLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" :class="navigationMenuTriggerStyle()"
                >Home</NavigationMenuLink
              >
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a target="_blank" href="#" :class="navigationMenuTriggerStyle()"
                >Link</a
              >
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a target="_blank" href="#" :class="navigationMenuTriggerStyle()"
                >Link</a
              >
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div class="flex items-center gap-3">
        <div>Search Outline</div>
        <Avatar>
          <AvatarImage
            src="https://github.com/radix-vue.png"
            alt="@radix-vue"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  </header>
  <Separator />
</template>
