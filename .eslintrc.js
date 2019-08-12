const { all } = require('eslint-config-1stg/overrides')
const { register } = require('ts-node')

register({
  transpileOnly: true,
})

const components = require('./src/components')

module.exports = {
  root: true,
  extends: '1stg',
  overrides: [
    ...all,
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
      files: '*.ts',
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-type-alias': 0,
      },
    },
  ],
}
