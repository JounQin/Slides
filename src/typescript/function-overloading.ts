export function test(x: string): string
export function test(x: number): number
export function test(x: number | object): object

// The implement signature will not affect the type
export function test(params: string | number | object | symbol) {
  return params
}

export type Test = typeof test

// the topper signature is the winner: number
test(1)

// @ts-ignore
test(Symbol('not allowed')) // error, although the implementation can handler it
