<template>
  <div class="row">
      <span style="color: #84e338; margin-left: 5px;">
          Kristian@DESKTOP-3QHDLFU:<span style="color: #7592d2;">{{ route }}</span><span style="color: white;">$</span>
        </span>
      <CommandInput />
  </div>
  <div class="response">
      <CommandResponse :response="response" />
  </div>
</template>

<script setup lang="ts">
import CommandInput from './CommandInput.vue';
import CommandResponse from './CommandResponse.vue';
import {emitter} from '@/services/emitter'
import { ref, onMounted } from 'vue'
import {useRouterStore} from '@/stores/route'

const route = ref('');
const response = ref(false);
const routeStore = useRouterStore();

emitter.on('command', (rut: string) => {
  route.value = rut
  routeStore.setRoute(rut);
})

emitter.on('ls', (resp: boolean) => {
  response.value = resp;
})

onMounted(() => {
  route.value = routeStore.$state.route;
})

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
