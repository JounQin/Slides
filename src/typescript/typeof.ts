export const x = 'x'

export type X = typeof x // 'x'

export function test() {
  return Promise.resolve()
}

export type Test = typeof test // () => Promise<void>

export enum Enum {
  X,
  Y,
  Z,
}

export type EnumType = typeof Enum
