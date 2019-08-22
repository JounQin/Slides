export function test(this: number) {
  return this.toFixed()
}

// @ts-ignore
test() // error

// @ts-ignore
test.call('1') // error

test.call(2) // works

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
test.bind(3) // similar
