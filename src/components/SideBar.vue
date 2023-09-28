<script setup lang="ts">
import type { Process } from "../model/Program";

import { ref } from 'vue';
import { emitter } from '@/services/emitter'
import { ProgramEvents } from "@/constants/events";

const taskList = ref<Process[]>([])

emitter.on(ProgramEvents.OPEN, (program: Process) => {
  const app = taskList.value.find(item => program.id === item.id)
  if (!app) {
    taskList.value.push(program)
    return
  }

  if (app.state.minimize)
    app.state.minimize = false;
})

emitter.on(ProgramEvents.CLOSE, (id: number) => {
  const index = taskList.value.findIndex(item => id === item.id)
  if (index !== -1) {
    taskList.value.splice(index, 1);
  }
})

const toggleProgram = (id: number) => {
  const app = taskList.value.find(item => id === item.id)
  if (!app) return

  app.state.minimize = !app.state.minimize
}

</script>

<template>
  <div class="w-24 h-screen style-panel"
  >
    <transition-group
      name="bounce"
      tag="div"
    >
      <div
        v-for="(task,key) in taskList"
        :key="key"
        class="flex flex-column justify-center items-center mt-4 py-2"

      >
        <img
          width="60"
          height="65"
          :src="`./${task.name}.png`" alt="" class="cursor-pointer"
          @click="toggleProgram(task.id)"
        >
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.style-panel{
  /* box-shadow: 10px 10px 10px #00000080; */
  background: rgb(7, 5, 7)
}

.bounce-enter-active {
  animation: bounce-in .2s ease-out both;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

</style>
