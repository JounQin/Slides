export type K = keyof any
export type T = { [key in K]: string }

export type KT = keyof T

const t: T = {
  [Symbol('t')]: 't',
}

console.log(t)

export function test(params: { [key: string]: string }) {
  console.log(params)
}

interface PI {
  a: string
  b: string
}

// eslint-disable-next-line @typescript-eslint/prefer-interface
type PT = {
  a: string
  b: string
}

const m: PI = {
  a: '1',
  b: '2',
}

const n: PT = {
  a: '1',
  b: '2',
}

test(m)
test(n)
