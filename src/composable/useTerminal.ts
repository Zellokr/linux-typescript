import { reactive } from "vue";
import { emitter } from '@/services/emitter'

export function useTerminal() {

  const stateTer = reactive<{
    terminalInput: HTMLElement | null,
    triggerContentEditable: boolean,
    lines: number,
    route: string,
    lastRoute: string | null,
    response: boolean
  }>({
        terminalInput: null,
        triggerContentEditable: true,
        lines: 1,
        route: "~",
        lastRoute: "~",
        response: false,
    })


  const insertCommand = (event: any) => {
    if (event.code === 'Enter'){
      stateTer.triggerContentEditable = false
      emitter.emit('enterCommand', [event.target.textContent, stateTer.terminalInput, stateTer.triggerContentEditable])
    }
    setTimeout(function () {
      if(stateTer.terminalInput)
        stateTer.terminalInput.focus();
    }, 10);
  }

  const manageCommand = () => {
    emitter.on("enterCommand", (array: [string, HTMLElement, boolean]) => {
      console.log(array)
      switch (array[0]) {
        case "clear":
          stateTer.lines = 0;
          setTimeout(() => {
            if (array[1]) array[1].focus();
          }, 100);
          array[2] = true;
          emitter.emit("updateContentEditable", array[2]);
          break;
        case "cd proyects":
          stateTer.route = "/home/kristian/proyects";
          emitter.emit("command", stateTer.route);
          break;
        case "cd gameboycss":
          stateTer.route = "/home/kristian/proyects/gameboycss";
          emitter.emit("command", stateTer.route);
          break;
        case "cd cv":
          stateTer.route = "/home/kristian/proyects/cv";
          emitter.emit("command", stateTer.route);
          break;
        case "npm run dev":
          if(stateTer.route.includes('gameboycss'))
            window.open("https://gameboycsskr.netlify.app", "_blank");
          else if(stateTer.route.includes('cv'))
            window.open("https://zellokrcv.netlify.app", "_blank");
          break;
        case "cd ..":
          stateTer.route = "~";
          emitter.emit("command", stateTer.route);
          break;
        case "ls":
          stateTer.response = true;
          emitter.emit("ls", stateTer.response);
          break;
        default:
          // Manejar cualquier otro caso si es necesario
          break;
      }

      setTimeout(() => (stateTer.lines += 1), 100);
      return { stateTer };
    });

    emitter.on('close', () => {
      return true;
    });
  };

  // const emitter.on('updateContentEditable', (stateTer: boolean) => triggerContentEditable = stateTer)

  const alwaysFocus = () => {
    setTimeout(() => {
        if(stateTer.terminalInput)
            stateTer.terminalInput.focus();
    },
    100)
  }

  return {
    insertCommand,
    manageCommand,
    alwaysFocus,
    stateTer
  }
}
