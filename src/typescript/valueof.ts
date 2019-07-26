import { EnumType } from './typeof'
export type ValueOf<T> = T[keyof T]

export interface It {
  a: string
  b: number
}

export type ItValue = ValueOf<It> // string | number

export type EnumValue = ValueOf<EnumType> // Enum
