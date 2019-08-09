import { EnumType } from './typeof'

export type ValueOf<T> = T[keyof T]

export interface It {
  a: string
  b: number
}

export type ItValue = ValueOf<It> // string | number

export type EnumValue = ValueOf<EnumType> // Enum

// maybe emit unexpected type for array, do you know why?
// And how to fix it? Wait for `infer`!
export type ArrayValue = ValueOf<number[]> // number and property types of Array.prototype
