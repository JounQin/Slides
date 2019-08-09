export interface I1 {
  a: string
  b: string
}

export interface I2 {
  m: string
  n: string
}

export type KeyIn = {
  [key in keyof I1 | keyof I2 | keyof []]: key
}
