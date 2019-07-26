import { EnumType } from './typeof'

export interface It {
  a: string
  b: string
}

export type Key = keyof It // 'a' | 'b'

export type KeyAny = keyof any // string | number | symbol

export type KeyString = keyof string

// eslint-disable-next-line @typescript-eslint/ban-types
export type KeyObject = keyof Object

export type KeyRecord = keyof Record<KeyString, KeyObject> // KeyString

export type KeyEnum = keyof EnumType // 'X' | 'Y' | 'Z'
