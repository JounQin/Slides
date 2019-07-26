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
