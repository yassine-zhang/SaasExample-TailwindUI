<script setup lang="ts">
const isOpen = ref<boolean>(true);
</script>
<template>
  <div
    v-show="isOpen"
    style="box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px"
    class="z-50 fixed inset-x-0 bottom-0 flex flex-col justify-between gap-x-8 gap-y-4 bg-white border-t border-gray-900/10 p-6 md:flex-row md:items-center lg:px-8"
  >
    <p class="max-w-4xl text-sm leading-6 text-gray-900">
      This website uses cookies to supplement a balanced diet and provide a much
      deserved reward to the senses after consuming bland but nutritious meals.
      Accepting our cookies is optional but recommended, as they are delicious.
      See our
      <a href="#" class="font-semibold text-indigo-600">cookie policy</a>.
    </p>
    <div class="flex flex-none items-center gap-x-5">
      <button
        @click="
          () => {
            isOpen = false;
          }
        "
        type="button"
        class="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
      >
        Accept all
      </button>
      <button
        type="button"
        class="text-sm font-semibold leading-6 text-gray-900"
      >
        Reject all
      </button>
    </div>
  </div>
</template>
