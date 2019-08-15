const { overrides } = require('eslint-config-1stg/overrides')
const { register } = require('ts-node')

register({
  transpileOnly: true,
  compilerOptions: {
    module: 'commonjs',
  },
})

const components = require('./src/components')

module.exports = {
  root: true,
  extends: '1stg',
  overrides: [
    ...overrides,
    {
      files: '*.mdx',
      globals: Object.keys(components).reduce(
        (globals, component) =>
          Object.assign(globals, {
            [component]: false,
          }),
        {},
      ),
      rules: {
        'no-path-concat': 0,
      },
    },
    {
      files: '*.{ts,tsx}',
      rules: {
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-type-alias': 0,
      },
    },
  ],
}
