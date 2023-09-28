<template>
  <ProgramShortcut name="Terminal" src="./terminal.png" @click="open" />
  <TeleportWrapper to="#windowManager">
    <transition name="fade" mode="out-in">
      <div
        v-if="state.open"
        v-show="!state.minimize"
        class="terminal"
        :class="{ 'action-maximize': state.maximize }"
      >
        <div class="top-side-terminal">
          <div class="container-buttons">
            <div class="close" @click="close">
              <span>&#10005;</span>
            </div>
            <div class="minimize" @click="minimize">
              <span>&#9472;</span>
            </div>
            <div class="maximize" @click="maximize">
              <span>&#9723;</span>
            </div>
          </div>
          <span id="header-terminal-text" class="ubuntu-font-headline"
            >kristian@DESKTOP-3QHDLFU:~</span
          >
        </div>
        <div class="body-terminal">
          <CommandLine v-for="line in stateTer.lines" :key="line"  />
        </div>
      </div>
    </transition>
  </TeleportWrapper>
</template>

<script setup lang="ts">
import type { Program } from "@/model/Program";

import CommandLine from "./CommandLine.vue";

import { useProgram } from "@/composable/useProgram";
import ProgramShortcut from "@/components/ProgramShortcut.vue";
import TeleportWrapper from "@/components/TeleportWrapper.vue";
import { useTerminal } from "@/composable/useTerminal"; // Importa el composable

const { manageCommand, stateTer } = useTerminal()

manageCommand();

const program: Program = { name: "terminal", id: 1 };
const { open, close, minimize, maximize, state } = useProgram(program);
</script>

<style scoped>
.terminal {
  @apply z-20 relative w-[600px] h-[600px] bg-[#300924] rounded-[5px];
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}
.top-side-terminal {
  width: 100%;
  height: 35px;
  background: linear-gradient(#504b45 0%, #3c3b37 100%);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  position: relative;
  align-items: center;
}
.ubuntu-font-headline {
  font-size: 15px;
  font-style: normal;
  font-variant: normal;
  font-weight: 600;
  color: #d5d0ce;
  transform: translateX(6px);
}
.container-buttons {
  display: flex;
  gap: 5px;
  margin-left: 10px;
}
.response {
  margin-left: 5px;
}
.close {
  width: 20px;
  height: 20px;
  background: linear-gradient(#f37458 0%, #de4c12 100%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 1px 0px #41403a, 0px 1px 1px 0px #474642;
}
.minimize {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: linear-gradient(#7d7871 0%, #595953 100%);
  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 1px 0px #41403a, 0px 1px 1px 0px #474642;
  border-radius: 50%;
}
.maximize {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: linear-gradient(#7d7871 0%, #595953 100%);
  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 1px 0px #41403a, 0px 1px 1px 0px #474642;
  border-radius: 50%;
}
.maximize span,
.minimize span,
.close span {
  color: #4a3d31;
  font-family: "Ubuntu", sans-serif;
}
.action-maximize {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.body-terminal {
  /* width: 100%; */
  /* height: 92%; */
  color: white;
  letter-spacing: 0px;
  position: absolute;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  padding-top: 3px;
  overflow-y: auto;
}
#header-terminal-text {
  margin-left: 15px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
