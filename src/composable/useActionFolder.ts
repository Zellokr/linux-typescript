import type { Action } from "../model/Folder";
import { reactive } from 'vue';

export function useActionPath(name: string) {

  const statePath = reactive<Action>({
    current: name,
    back: name,
    name: name,
  })

  const goTo = (path: string) => {
    statePath.back = statePath.current;
    statePath.current = statePath.current + '/' + path
  }

  const setToBackwards = () => {
    statePath.current = statePath.back
  }

  return {
    goTo,
    statePath,
    setToBackwards
  }
}
