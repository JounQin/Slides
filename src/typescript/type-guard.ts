// typeof
export function test1(param: string | number) {
  if (typeof param === 'string') {
    // must be string
    return param.substr(1)
  }

  // must be a number
  return param.toFixed()
}

// instanceof
class Clazz {
  constructor(public prop: string) {}
}

export function test2(param: object) {
  if (param instanceof Clazz) {
    // must an instance of Clazz
    return param.prop
  }

  // @ts-ignore
  return param.prop // error
}

// in
export interface I1 {
  a: string
}

export interface I2 {
  b: number
}

export function test3(param: I1 | I2) {
  if ('a' in param) {
    // must have prop 'a'
    return param.a
  }

  if ('c' in param) {
    // @ts-ignore
    return param.c // error, should never happen, but many people want it will work in the future
  }

  // must have prop 'a'
  return param.b
}

// literal
export function test4(param: 'x' | 'y') {
  if (param === 'x') {
    return param.toLowerCase()
  }

  return param.toUpperCase()
}

// custom guard function
export function isPromise<T>(source: any): source is Promise<T> {
  return (
    source &&
    typeof source === 'object' &&
    'then' in source &&
    typeof source.then === 'function'
  )
}

export function test5(param: unknown) {
  if (isPromise<number>(param)) {
    // must be an instance of promise
    return param.then(num => num * num)
  }
}
