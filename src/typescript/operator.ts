// Optional
export interface X {
  a: number
  b: string
}

export type Optional<T> = {
  [key in keyof T]?: T[key] // + in implicit here
}

export type Y = Optional<X>

export type Required<T> = {
  [key in keyof T]-?: T[key]
}

export type Z = Required<Y>

export type Readonly<T> = {
  readonly [key in keyof T]: T[key]
}

export type M = Readonly<Z>

export type Writable<T> = {
  -readonly [key in keyof T]: T[key]
}

export type N = Writable<M>

export type R<T> = readonly T[]

export type W = Writable<R<number>> // number[]

export type J<T> = T extends true ? string : number

export type P = J<never> // never, why it's not number?

export type J1<T> = T extends never ? number : T extends true ? string : number

export type P1 = J1<never> // still never

export type J2<T> = [T] extends [never]
  ? number
  : T extends true
  ? string
  : number

export type P2 = J2<never> // finally works

// magic
export type IfEqual<A, B = A, If = A, Else = B> = ((p: A) => B) extends (
  p: B,
) => A
  ? If
  : Else

export type Q1 = IfEqual<string, string, number, string>
export type Q2 = IfEqual<string, number, number, string>
export type Q3 = IfEqual<never, number, number, string>
export type Q4 = IfEqual<never, never, number, string>

export type J3<T> = IfEqual<T, true, string, number>
export type P3 = J3<never> // works!
