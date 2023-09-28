<template>
  <div v-if="!response" class="row">
      <span  style="color: #7592d2; margin-left: 5px;">
      </span>
  </div>
  <div v-else>
    <template v-for="(proyect, index) in proyects"
         :key="index"
    >
      <span class="font-bold" style="color: #4c5ed7;">
        {{ proyect.name + ' ' }}
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import {proyects} from '@/constants/proyects'

withDefaults(defineProps<{ response: boolean }>(), {response: false})
</script>

<style scoped>
.row{
  display: flex;
  flex-direction: flex-col;
}
.contentInput{
  padding-left: 5px;
  min-height: 17px;
  min-width: 1px;
  outline: 0;
  word-break: break-all;
}
</style>
