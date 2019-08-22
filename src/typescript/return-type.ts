export function test(): string | number {
  const num = Math.random()
  return num > 1 / 2 ? num : num.toString()
}

export type ReturnTypeOfTest = ReturnType<typeof test> // string | number
