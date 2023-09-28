<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from '@/components/SideBar.vue'
import Desktop from '@/components/Desktop.vue';


</script>

<template>
    <div class=" flex relative bg-cover bg-no-repeat bg-center bg-cover background">
      <side-bar />
      <desktop></desktop>
    </div>
</template>


<style scoped>

.background{
  background-image: url('/ubuntu-background.jpg')
}

@media only screen and (max-width: 600px) {
  .background{overflow: hidden;}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .background{overflow: hidden;}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .background{overflow: auto;}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .background{overflow: auto;}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
.background{overflow: auto;}
}
</style>
