<template>
  <button class="flex flex-col items-center max-w-max">
    <img width="60" height="60" :src="src" :alt="name" />
    <div
      class="text-white style-desc"
      :class="{ 'mt-2': name.includes('slim') }"
    >
      {{ name }}
    </div>
  </button>
</template>

<script setup lang="ts">
defineProps<{ name: string; src: string }>();
</script>
