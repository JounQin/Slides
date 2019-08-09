import { EnumType } from './typeof'

export interface It {
  a: string
  b: string
}

export type Key = keyof It // 'a' | 'b'

export type KeyAny = keyof any // string | number | symbol

export type KeyUnknown = keyof unknown // never

export type KeyString = keyof string

export type KeyArray = keyof unknown[] // number and properties of Array.prototype

// eslint-disable-next-line @typescript-eslint/ban-types
export type KeyObject = keyof Object // properties of Object.prototype

export type KeyEmptyObj = keyof ({} | object) // never

export type KeyObj = keyof { a: number } // 'a'

export type KeyRecord = keyof Record<KeyString, KeyObject> // KeyString

export type KeyEnum = keyof EnumType // 'X' | 'Y' | 'Z'
