<script lang="ts" setup>
defineProps<{
  variant: "primary" | "secondary";
}>();

const classes = "";
</script>
<template>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    v-if="variant === 'primary'"
  >
    <slot />
  </button>
  <button
    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    v-else
  >
    <slot />
  </button>
</template>
