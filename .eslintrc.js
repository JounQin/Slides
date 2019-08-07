const { all } = require('eslint-config-1stg/overrides')

module.exports = {
  root: true,
  extends: '1stg',
  overrides: [
    ...all,
    {
      files: '*.mdx',
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
