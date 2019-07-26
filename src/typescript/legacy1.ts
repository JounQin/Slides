export type K = keyof any // string | number | symbol
export type T = { [key in K]: string }
// {
// [x: string]: string;
// [x: number]: string;
// }

export type KT = keyof T // string | number | symbol

const t: T = {
  [Symbol('t')]: 't', // works
}

console.log(t)
