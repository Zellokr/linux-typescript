import { ProgramEvents } from "@/constants/events";
import type { ProcessState, Program } from "../model/Program";
import { emitter } from '@/services/emitter'
import { reactive } from 'vue';

export function useProgram(program: Program) {

  const state = reactive<ProcessState>({
    open: false,
    minimize: false,
    maximize: false,
  })

  const open = () => {
    state.open = true;
    emitter.emit(ProgramEvents.OPEN, {...program, state})
  }

  const close = () =>  {
    state.open = false;
    emitter.emit(ProgramEvents.CLOSE, program.id)
  }

  const maximize = () => {
    state.maximize = !state.maximize;
  }
  const minimize = () => {
    state.minimize = !state.minimize
  }

  return {
    open,
    close,
    maximize,
    minimize,
    state
  }
}
