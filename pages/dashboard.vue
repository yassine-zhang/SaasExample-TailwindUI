<template>
  <div>
    <div
      ref="dragLayer"
      class="absolute top-0 left-0 w-screen h-screen cursor-col-resize -z-50"
    ></div>
    <div>
      <TransitionRoot as="template" :show="sidebarOpen">
        <Dialog
          as="div"
          class="relative z-10 lg:hidden"
          @close="sidebarOpen = false"
        >
          <TransitionChild
            as="template"
            enter="transition-opacity ease-linear duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-gray-900/80" />
          </TransitionChild>

          <div class="fixed inset-0 flex">
            <TransitionChild
              as="template"
              enter="transition ease-in-out duration-300 transform"
              enter-from="-translate-x-full"
              enter-to="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leave-from="translate-x-0"
              leave-to="-translate-x-full"
            >
              <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
                <TransitionChild
                  as="template"
                  enter="ease-in-out duration-300"
                  enter-from="opacity-0"
                  enter-to="opacity-100"
                  leave="ease-in-out duration-300"
                  leave-from="opacity-100"
                  leave-to="opacity-0"
                >
                  <div
                    class="absolute left-full top-0 flex w-16 justify-center pt-5"
                  >
                    <button
                      type="button"
                      class="-m-2.5 p-2.5"
                      @click="sidebarOpen = false"
                    >
                      <span class="sr-only">Close sidebar</span>
                      <XMarkIcon
                        class="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </TransitionChild>
                <!-- Sidebar component, swap this element with another sidebar if you like -->
                <div
                  class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-100 pb-4 ring-1 ring-white/10"
                >
                  <div
                    class="flex h-16 shrink-0 items-center bg-gray-50 px-6 border-b"
                  >
                    <div class="flex gap-2 items-center">
                      <NuxtLink to="/">
                        <img
                          class="h-8 w-auto"
                          src="/favicon.svg"
                          alt="Your Company"
                        />
                      </NuxtLink>
                      <h1 class="font-medium">Logo</h1>
                    </div>
                    <div
                      class="ml-auto rounded-full p-1 border cursor-pointer hover:bg-gray-100 transition-colors group"
                    >
                      <Cog6ToothIcon
                        class="w-5 text-gray-500 group-hover:text-indigo-600 transition-colors"
                      />
                    </div>
                  </div>
                  <nav class="flex flex-1 flex-col px-7">
                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" class="-mx-2 space-y-1">
                          <li
                            @click="selectTab(item.name)"
                            v-for="item in navigation"
                            :key="item.name"
                          >
                            <NuxtLink
                              :to="item.href"
                              :class="[
                                isSelect(item.name)
                                  ? 'bg-gray-300/30'
                                  : 'hover:bg-gray-300/30',
                                'group flex gap-x-3 p-2 text-sm leading-6 rounded-sm transition-all duration-100',
                              ]"
                            >
                              <component
                                :is="item.icon"
                                :class="[
                                  isSelect(item.name)
                                    ? 'text-indigo-600'
                                    : 'text-gray-500 group-hover:text-indigo-600',
                                  'h-6 w-6 shrink-0 transition-colors duration-100',
                                ]"
                                aria-hidden="true"
                              />
                              {{ item.name }}
                            </NuxtLink>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

      <!-- Static sidebar for desktop -->
      <div
        ref="leftPanel"
        :class="[
          isCollapse() ? 'duration-300' : 'duration-0',
          'hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-64 lg:flex-col transition-all',
        ]"
      >
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div
          class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-gray-100 pb-4"
        >
          <div
            class="flex w-auto h-16 shrink-0 items-center bg-gray-50 px-6 border-b transition-all"
          >
            <div class="flex gap-2 items-center">
              <NuxtLink to="/">
                <img class="h-8 w-auto" src="/favicon.svg" alt="Your Company" />
              </NuxtLink>
              <h1 v-show="!collapse" class="font-medium">Logo</h1>
            </div>
            <div
              v-show="!collapse"
              class="ml-auto rounded-full p-1 border cursor-pointer hover:bg-gray-100 transition-colors group"
            >
              <Cog6ToothIcon
                class="w-5 text-gray-500 group-hover:text-indigo-600 transition-colors"
              />
            </div>
          </div>
          <nav
            :class="[isCollapse() ? 'px-5' : 'px-7', 'flex flex-1 flex-col']"
          >
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" class="-mx-2 space-y-1">
                  <li
                    @click="selectTab(item.name)"
                    v-for="item in navigation"
                    :key="item.name"
                  >
                    <n-tooltip
                      placement="right"
                      trigger="hover"
                      :disabled="!isCollapse()"
                    >
                      <template #trigger>
                        <NuxtLink
                          :to="item.href"
                          :class="[
                            isSelect(item.name)
                              ? 'bg-gray-300/30'
                              : 'hover:bg-gray-300/30',
                            isCollapse() ? 'justify-center' : 'justify-normal',
                            'group flex gap-x-3 p-2 text-sm leading-6 rounded-sm transition-all',
                          ]"
                        >
                          <component
                            :is="item.icon"
                            :class="[
                              isSelect(item.name)
                                ? 'text-indigo-600'
                                : 'text-gray-500 group-hover:text-indigo-600',
                              'h-6 w-6 shrink-0 transition-colors',
                            ]"
                            aria-hidden="true"
                          />
                          <span v-show="!collapse">{{ item.name }}</span>
                        </NuxtLink>
                      </template>
                      <span> {{ item.name }} </span>
                    </n-tooltip>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div ref="rightPanel" class="lg:pl-64">
        <div
          class="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-8"
        >
          <button
            type="button"
            class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            @click="sidebarOpen = true"
          >
            <span class="sr-only">Open sidebar</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
          <div
            ref="dragButton"
            @mousedown="startDrag"
            class="hidden lg:block absolute shadow-md hover:shadow-none -left-4 top-4 ml-auto rounded-full p-1 border cursor-col-resize bg-white hover:bg-gray-100 transition-all group"
          >
            <ChevronsLeftRight
              strokeWidth="1.75"
              class="w-5 h-5 text-gray-500 group-hover:text-indigo-600 transition-colors"
            />
          </div>

          <!-- Separator -->
          <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

          <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div class="relative flex items-center flex-1 my-3.5">
              <div
                @click="
                  () => {
                    commandPalettes = true;
                  }
                "
                class="flex relative items-center cursor-pointer border rounded-md w-full h-full max-w-md md:pr-56 hover:bg-gray-100 transition-colors"
              >
                <span class="sr-only">Search</span>
                <MagnifyingGlassIcon
                  class="pointer-events-none absolute inset-y-0 left-2 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span class="pl-10 text-gray-400 sm:text-sm"> Search </span>
                <span
                  :class="[
                    'ml-3 flex-none text-xs font-semibold',
                    'text-gray-400',
                    'absolute right-1 rounded-md p-0.5 sm:p-1 bg-gray-50 border',
                  ]"
                >
                  <kbd class="font-sans">⌘</kbd>
                  <kbd class="font-sans">{{ commandPalettesShortcut }}</kbd>
                </span>
              </div>
            </div>
            <div class="flex items-center gap-x-4 lg:gap-x-6">
              <button
                type="button"
                class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Separator -->
              <div
                class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                aria-hidden="true"
              />

              <!-- Profile dropdown -->
              <Menu as="div" class="relative">
                <ClientOnly>
                  <MenuButton class="-m-1.5 flex items-center p-1.5">
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full bg-gray-50"
                      src="/user/avatar.avif"
                      alt=""
                    />
                    <span class="hidden lg:flex lg:items-center">
                      <span
                        class="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true"
                        >Yassine Zhang</span
                      >
                      <ChevronDownIcon
                        class="ml-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </MenuButton>
                </ClientOnly>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                  >
                    <MenuItem
                      v-for="item in userNavigation"
                      :key="item.name"
                      v-slot="{ active }"
                    >
                      <a
                        :href="item.href"
                        :class="[
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900',
                        ]"
                        >{{ item.name }}</a
                      >
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>

        <main class="py-10">
          <div class="px-4 sm:px-6 lg:px-8 overflow-x-hidden">
            <!-- Your content -->
            <NuxtPage />
          </div>
        </main>
      </div>
    </div>
    <DashboardCommandPalettes v-model:open="commandPalettes" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  Cog6ToothIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import { ChevronsLeftRight } from "lucide-vue-next";
import type { PageMeta } from "nuxt/app";

definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
  middleware(to, from) {
    if (to.meta.id && from.meta.id) {
      (to.meta.pageTransition as PageMeta).name =
        to.meta.id > from.meta.id ? "slide-left" : "slide-right";
    }
  },
});

const route = useRoute();
const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: true },
  { name: "Team", href: "/dashboard/team", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

const sidebarOpen = ref(false);
const commandPalettes = ref(false);

const commandPalettesShortcut = ref("K");

const selectedTab = ref(
  navigation.filter((val) => val.href === route.fullPath)[0].name,
);
const isSelect = (k: string) => selectedTab.value === k;
const selectTab = (k: string) => {
  selectedTab.value = k;
  sidebarOpen.value = false;
};

const dragButton = ref<HTMLElement>();
const dragLayer = ref<HTMLElement>();
const leftPanel = ref<HTMLElement>();
const rightPanel = ref<HTMLElement>();

const collapse = ref(false);
let isDragging = false;
let startX = 0;
let startWidth = 0;
let maxWidth = 360;
let collapseThreshold = 180; // 80

const isCollapse = () => collapse.value;

const startDrag = (e: any) => {
  e.preventDefault();

  if (e.touches) {
    startX = e.touches[0].clientX;
  } else {
    startX = e.clientX;
  }

  startWidth = parseFloat(getComputedStyle(leftPanel.value!).width);
  isDragging = true;

  dragLayer.value?.classList.replace("-z-50", "z-50");
  dragLayer.value?.addEventListener("mousemove", doDrag);
};

const doDrag = (e: any) => {
  if (!isDragging) return;

  let currentX = 0;

  if (e.touches) {
    currentX = e.touches[0].clientX;
  } else {
    currentX = e.clientX;
  }

  let deltaX = currentX - startX;
  let newWidth = startWidth + deltaX;

  newWidth = Math.min(maxWidth, newWidth);
  newWidth = Math.max(collapseThreshold, newWidth);
  if (newWidth === collapseThreshold) {
    newWidth = 80;

    collapse.value = true;
  } else if (newWidth > collapseThreshold) {
    collapse.value = false;
  }

  leftPanel.value!.style.width = newWidth + "px";
  rightPanel.value!.style.paddingLeft = newWidth + "px";
};

const stopDrag = () => {
  isDragging = false;

  dragLayer.value?.classList.replace("z-50", "-z-50");
  dragLayer.value?.removeEventListener("mousemove", doDrag);
};

onMounted(() => {
  // 设置快捷键监听事件
  // 监听键盘按下事件
  window.addEventListener("keydown", function (event) {
    // 根据操作系统和按键判断
    if (
      (event.metaKey || event.ctrlKey) && // 检测 Command 键或 Ctrl 键
      event.key === commandPalettesShortcut.value.toLowerCase() // 检测 K 键
    ) {
      // 在控制台输出按下 Command+K
      // console.log("Command+K pressed");
      commandPalettes.value = !commandPalettes.value;
    }
  });
  // 检测选择的标签是否为空，空的话直接导向到第一个
  selectedTab.value =
    selectedTab.value === "" ? "Dashboard" : selectedTab.value;

  // 鼠标抬起时自动做停止拖拽动作
  leftPanel.value?.addEventListener("mouseup", stopDrag);
  rightPanel.value?.addEventListener("mouseup", stopDrag);
  document.body.addEventListener("mouseup", stopDrag);

  // 当屏幕宽度小于lg 1024px时清理掉rightPanel的内边距以及leftPanel的宽度
  let once = true;
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1024 && once) {
      once = false;
      collapse.value = false;
      rightPanel.value?.style.removeProperty("padding-left");
      leftPanel.value?.style.removeProperty("width");
    } else if (window.innerWidth >= 1024) once = true;
  });
});
</script>
<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>
