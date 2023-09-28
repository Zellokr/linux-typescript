<template>
  <span
      ref="terminalInput"
      :contenteditable="triggerContentEditable"
      class="contentInput"
      @blur="alwaysFocus "
      @keydown.enter.prevent="insertCommand"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { emitter } from '@/services/emitter'
import { useTerminal } from "@/composable/useTerminal"; // Importa el composable

const { insertCommand, alwaysFocus } = useTerminal()

const terminalInput = ref<HTMLElement>();
const triggerContentEditable = ref(true);

setTimeout(function () {
  if(terminalInput.value)
    terminalInput.value.focus();
}, 10);

emitter.on('updateContentEditable', (state: boolean) => triggerContentEditable.value = state)

</script>

<style scoped>
.contentInput{
  padding-left: 5px;
  min-height: 17px;
  min-width: 1px;
  outline: 0;
  word-break: break-all;
}
</style>
