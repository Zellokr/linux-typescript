<script setup lang="ts">
import TerminalLinux from "@/components/terminal/TerminalLinux.vue";
import FolderLinux from "@/components/FolderLinux.vue";
import SlimReader from "@/components/SlimReader.vue";
</script>

<template>
  <div class="w-full relative">
    <div
      id="windowManager"
      class="flex justify-center items-center gap-5 absolute top-0 bottom-0 right-0 left-0"
    />
    <div
      class="flex flex-col cursor-pointer lg:ml-14 lg:mt-10 ml-8 mt-8 gap-4 relative z-10"
    >
      <terminal-linux></terminal-linux>
      <folder-linux></folder-linux>
      <slim-reader></slim-reader>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url("/ubuntu-background.jpg");
}
</style>
