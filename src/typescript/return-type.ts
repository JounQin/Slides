export function test(): string | number {
  const num = Math.random()
  return num > 0.5 ? num : num.toString()
}

export type ReturnTypeOfTest = ReturnType<typeof test> // string | number
