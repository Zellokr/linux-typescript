export type Program = {
  name: string
  id: number
}

export type ProcessState = {
  open: boolean
  minimize: boolean
  maximize: boolean
}

export type Process = {
  state: ProcessState
} & Program


/*

export interface Process extends Program {
  minimize: boolean
  maximize: boolean
}

*/
