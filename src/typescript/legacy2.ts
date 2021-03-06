export function test(params: { [key: string]: string }) {
  console.log(params)
}

export interface PI {
  a: string
  b: string
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type PT = {
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

// @ts-ignore
test(m)
test(n)

export interface PI2 extends PT {
  c: number
}

const p: PI2 = {
  a: '1',
  b: '2',
  c: 3,
}

type PT2 = PT & {
  c: number
}

const q: PT2 = {
  a: '1',
  b: '2',
  c: 3,
}

// @ts-ignore
test(p)
test(q)
