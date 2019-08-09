import { Observable, Subject } from 'rxjs'

export type ReturnType<T extends Function> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never

export type ObservableType<T extends Observable<any>> = T extends Observable<
  infer R
>
  ? R
  : never

export const subject = new Subject<string | number>()

export type SubjectType = ObservableType<typeof subject> // string | number

export type LooseValueOf<T> = T[keyof T]

export type ValueOf<T> = T extends {
  [key in string | number | symbol]: infer M
}
  ? M
  : T extends {
      [key: number]: infer N
    }
  ? N
  : never

const arr1 = [1, '3', null, new Date()] as const
const arr2 = [1, '3', null, new Date()]

export type ArrayValues1 = ValueOf<typeof arr1>
export type ArrayValues2 = LooseValueOf<typeof arr1>

export type ArrayValues3 = ValueOf<typeof arr2>
export type ArrayValues4 = LooseValueOf<typeof arr2>

export type ArrayValues5 = ValueOf<number[]>
export type ArrayValues6 = LooseValueOf<number[]>

const x = {
  x: {
    a: 1,
    b: '',
  },
  y: {
    a: 2,
  },
}

const y: Record<
  string,
  {
    a: number
    b?: string
  }
> = x

export type X1 = ValueOf<typeof x>
export type X2 = LooseValueOf<typeof x>
export type Y1 = ValueOf<typeof y>
export type Y2 = LooseValueOf<typeof y>
