<template>
  <teleport :to="target" :disabled="!target || disabled">
    <slot></slot>
  </teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const target = ref<Element>();

const props = withDefaults(defineProps<{ to?: string; disabled?: boolean }>(), {
  to: "",
  disabled: false,
});

onMounted(() => {
  const el = document.querySelector(props.to);
  if (el) {
    target.value = el;
  }
});
</script>
